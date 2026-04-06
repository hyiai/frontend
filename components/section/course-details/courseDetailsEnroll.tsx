"use client";

import { Course } from "@/app/agi/[levelId]/page";
import { ShimmerButton } from "@/components/shared/customShimmerButton";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

import { CourseContent } from "@/components/util/interface";
import { useEffect, useRef, useState } from "react";
import CustomButton from "@/components/shared/customButton";
import { Asterisk } from "lucide-react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { createCustomPhoneInput } from "@/components/shared/customPhoneInput";
import { countryCodes } from "@/components/util/countryCodes";
import PhoneInput, { Country } from "react-phone-number-input";
import { getCountryCallingCode } from "libphonenumber-js";
import "react-phone-number-input/style.css";
import {
  AGITrainingAPI,
  registerUserForAgiCourseType,
} from "@/lib/services/api";
import { Checkbox } from "@/components/ui/checkbox";
import CreditInvoicePreview from "@/components/shared/invoice/creditInvoicePreview";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";

interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayOptions {
  key?: string;
  order_id: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  handler: (response: RazorpayPaymentResponse) => void | Promise<void>;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
  modal?: {
    ondismiss?: () => void;
  };
}

interface RazorpayInstance {
  open(): void;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface submitProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}
interface razorPayDetails {
  orderId: string;
  amount: number;
  currency: string;
  creditPaymentId: string;
}

export default function CourseDetailsEnroll({ course }: { course: Course }) {
  const [showEnrollmentDialog, setShowEnrollmentDialog] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const closeRef = useRef<HTMLButtonElement>(null);
  const [message, setMessage] = useState({
    success: false,
    title: "",
    text: "",
  });
  const [isAgree, setIsAgree] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryCode, setCountryCode] = useState("IN");
  const [countryCodeNumber, setCountryCodeNumber] = useState("+91");
  const [regex, setRegex] = useState<RegExp>(
    /^[+]{1}[1-9]{1}[0-9]{1}[0-9]{12}$/
  );
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const [invoice, setInvoice] = useState<any | null>(null);
  const [razorPayDetails, setRazorPayDetails] =
    useState<razorPayDetails | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const router = useRouter();

  const schema: Yup.ObjectSchema<submitProps> = Yup.object({
    firstName: Yup.string().trim().required("First name is required"),
    lastName: Yup.string().trim().required("Last name is required"),
    email: Yup.string()
      .trim()
      .email("Invalid email")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .trim()
      .required("Phone number is required")
      .matches(regex, "Enter a valid phone number"),
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<submitProps>({
    resolver: yupResolver(schema),
  });

  const loadRazorpayScript = () =>
    new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => reject("Razorpay SDK failed to load.");
      document.body.appendChild(script);
    });

  useEffect(() => {
    let regex;
    if (countryCode) {
      const country = countryCodes.find(
        (code) => code.flagCode === countryCode
      );
      const pattern = `^\\+[1-9][0-9]{${
        countryCodeNumber.length === 4
          ? 2
          : countryCodeNumber.length === 3
          ? 1
          : 0
      }}[0-9]{${country?.phoneNumberLengthByCountry_phLengthMin},${
        country?.phoneNumberLengthByCountry_phLengthMax
      }}$`;
      regex = new RegExp(pattern);
      setRegex(regex);
    }
  }, [countryCode, countryCodeNumber.length]);
  const maxDigitLength =
    countryCodes.find((country) => country.flagCode === countryCode)
      ?.phoneNumberLengthByCountry_phLengthMax ?? 15;

  const handleCoursePayment = async (razorPayDetails: razorPayDetails) => {
    if (!selectedCourse || !razorPayDetails) return;

    await loadRazorpayScript();

    try {
      const { orderId, amount, currency, creditPaymentId } = razorPayDetails;

      const rzp = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET,
        order_id: orderId,
        amount,
        currency,
        name: "Buy Course - HYI",
        description: `AGI Course Payment`,
        handler: async function (response: RazorpayPaymentResponse) {
          try {
            const verifyRes = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/va/agi/order/verify-payment`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  ...response,
                  agiOrderId: creditPaymentId,
                }),
              }
            );
            const verifyData = await verifyRes.json();
            if (!verifyData.success) throw new Error(verifyData.error);
            router.push(`/agi/course-purchase/${razorPayDetails.orderId}`);
          } catch (err) {
            console.error(
              "Error during payment verification or invoice upload:",
              err
            );
          } finally {
            setIsProcessing(false); // ✅ Ensure this runs only after Razorpay handler finishes
          }
        },
      });

      rzp.open();
    } catch (err) {
      console.error("Error in order creation or Razorpay flow:", err);
      setIsProcessing(false); // ✅ Catch block should also reset
    }
  };

  const onSubmitRegistrationForm = async (formData: submitProps) => {
    console.log(!selectedCourse);
    if (isSubmitting || !selectedCourse) return;

    try {
      const newData: registerUserForAgiCourseType = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        agiCourseSlug: selectedCourse.slug,
        email: formData.email,
        phone: formData.phoneNumber,
      };

      const response = await AGITrainingAPI.registerUserForAgiCourse(newData);

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      if (response.success) {
        const razorPayDetails: razorPayDetails = {
          orderId: response.razorpayOrderId,
          amount: response.originalAmount,
          currency: response.currency,
          creditPaymentId: response.agiOrderId,
        };

        setRazorPayDetails(razorPayDetails);

        setTimeout(() => {
          handleCloseDialog();
          handleCoursePayment(razorPayDetails);
        }, 800);
      }
    } catch (error) {
      console.error("Error in onSubmitRegistrationForm ", error);
      setIsSubmitting(false);
      setTimeout(() => {
        setMessage({
          success: false,
          title: "Submission Failed",
          text: "",
        });
        setTimeout(() => {
          setIsSubmitting(false);
        }, 2000);
      }, 2000);
    }
  };

  const agreeToPrivacyPolicy = () => {
    setIsAgree((prev) => !prev);
  };

  const onClickingEnrollNow = async (course: Course) => {
    console.log(course);
    setSelectedCourse(course);
    setShowEnrollmentDialog(true);
  };

  const handleCloseDialog = () => {
    reset();
    setIsSubmitting(false);
    setSelectedCourse(null);
    setShowEnrollmentDialog(false);
    setMessage({
      success: false,
      title: "",
      text: "",
    });
    closeRef.current?.click();
  };

  const CustomPhoneComponent = React.useMemo(
    () => createCustomPhoneInput(maxDigitLength),
    [maxDigitLength]
  );

  const { email, phoneNumber, firstName, lastName } = watch();
  return (
    <>
      <div className="flex flex-col bg-[url('/performance.png')] bg-no-repeat bg-[length:100%_100%] p-6 gap-5 md:px-8 md:py-10 rounded-3xl border border-white/20">
        <div className="flex flex-col gap-3">
          <h2 className="hyi-h2">{course.name} Course Details </h2>
          <p className="w-fit text-sm glass-gradient rounded-full uppercase px-2.5 py-1">
            <span className="gradient-text">{course.level} level</span>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
          <div className="flex flex-col gap-2.5">
            <h3 className="hyi-h5 gradient-text font-medium">Basic Details:</h3>
            <ul className="flex flex-col text-sm text-white gap-3.5">
              <li className="flex items-center gap-2">
                <Check size={16} className="text-success-400" />
                <span>Enroll Start Date : {course.enrollStart}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-success-400" />
                <span>Live Class Start Date: {course.liveClassStart}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-success-400" />
                <span>Format: {course.format}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-success-400" />
                <span>Duration: {course.duration}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-success-400" />
                <span> Commitment: {course.commitment}</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2.5">
              <h3 className="hyi-h5 gradient-text font-medium">
                Deliverables:
              </h3>
              <ul className="flex flex-col text-sm text-white gap-3.5">
                {course.deliverables.map((del, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check size={16} className="text-success-400" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full flex flex-col gap-2.5 md:w-2/3">
              <h3 className="hyi-h4 gradient-text font-medium">Note:</h3>
              <ul className="flex flex-col text-sm text-white gap-3.5">
                <li className="flex items-start gap-2">
                  <Check
                    size={14}
                    className="min-w-4 min-h-4 text-success-400"
                  />
                  <span>{course.notes}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1.5 w-full md:w-auto">
            <h3 className="hyi-h5 gradient-text font-medium">Pricing:</h3>
            <span className="text-lg flex flex-col text-white gap-3.5 lg:text-xl">
              {`$${course.price} USD (or $${course.monthlyPrice}/month)`}
            </span>
          </div>
          <div
            className="w-full md:w-auto flex justify-center"
            onClick={() => {
              setShowEnrollmentDialog(true);
              onClickingEnrollNow(course);
            }}
          >
            <ShimmerButton className="px-8 w-full md:w-auto">
              Enroll Now
            </ShimmerButton>
          </div>
        </div>
      </div>
      <Dialog
        open={showEnrollmentDialog}
        onOpenChange={() => setShowEnrollmentDialog(false)}
        modal
      >
        <DialogOverlay className="fixed inset-0 bg-black/80" />
        <DialogContent className="w-[95dvw] max-w-[600px] max-h-[90dvh] border border-white/20 bg-black/50 backdrop-blur-xl rounded-2xl flex flex-col items-center justify-center overflow-y-auto px-4 md:px-10 py-8 gap-0 md:py-15">
          <DialogHeader>
            <DialogTitle className="flex flex-col font-medium items-center justify-center gap-1 md:gap-3">
              <p className="hyi-h2 text-lg md:text-xl">
                Enroll for {selectedCourse?.name}
              </p>

              <p className="hyi-p md:text-base text-sm text-center w-full">
                To build a strong foundational understanding of the concepts,
                mathematics, and tools that underpin modern AI and the pursuit
                of AGI.
              </p>
              <p className="hyi-p md:text-base text-sm text-center">
                Duration: <b>{selectedCourse?.duration}</b>{" "}
                <span className="hidden md:inline">|</span>{" "}
                <br className="inline md:hidden " />
                Pricing: <b>{selectedCourse?.price}</b>
              </p>
            </DialogTitle>
          </DialogHeader>

          <form
            onSubmit={handleSubmit(onSubmitRegistrationForm)}
            className="flex flex-col gap-2 w-full mt-5"
          >
            <div className="flex flex-col">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="flex items-start  text-dark_mode-400 text-base font-medium pb-1 md:pb-1.5 gap-0.5"
                >
                  First Name{" "}
                  <Asterisk
                    strokeWidth={1.75}
                    className={`w-3.5 h-3.5 block -m-[1.5px]`}
                  />
                </label>
                <Input
                  type="text"
                  id="firstName"
                  placeholder="Enter First Name"
                  {...register("firstName")}
                  className="text-white placeholder:text-gray-400 rounded-full border text-base border-white/40"
                />

                <p className="min-h-5 text-sm text-error-500 pb-1">
                  {errors?.firstName?.message}
                </p>
              </div>
              <div className="flex-1">
                <label className="flex items-start text-dark_mode-400 text-sm font-medium pb-1 md:pb-1.5 gap-0.5">
                  Last Name{" "}
                  <Asterisk
                    strokeWidth={1.75}
                    className={`w-3.5 h-3.5 block -m-[1.5px]`}
                  />
                </label>
                <Input
                  type="text"
                  placeholder="Enter Last Name"
                  {...register("lastName")}
                  className="text-white placeholder:text-gray-400 rounded-full border border-white/40 text-base"
                />

                <p className="min-h-5 text-sm text-error-500 pb-1">
                  {errors?.lastName?.message}
                </p>
              </div>
              <div className="flex-1">
                <label className="flex items-start text-dark_mode-400 text-sm font-medium pb-1 md:pb-1.5 gap-0.5">
                  Email{" "}
                  <Asterisk
                    strokeWidth={1.75}
                    className={`w-3.5 h-3.5 block -m-[1.5px]`}
                  />
                </label>
                <Input
                  type="email"
                  placeholder="Enter Email Id"
                  {...register("email")}
                  className="text-white placeholder:text-gray-400 rounded-full border border-white/40 text-base"
                />

                <p className="min-h-5 text-sm text-error-500 pb-1">
                  {errors?.email?.message}
                </p>
              </div>
              <div className="flex-1">
                <label className="flex items-start text-dark_mode-400 text-sm font-medium pb-1 md:pb-1.5 gap-0.5">
                  Mobile Number{" "}
                  <Asterisk
                    strokeWidth={1.75}
                    className={`w-3.5 h-3.5 block -m-[1.5px]`}
                  />
                </label>
                <Controller
                  name="phoneNumber"
                  control={control}
                  defaultValue=""
                  render={({ field }) => {
                    return (
                      <PhoneInput
                        {...field}
                        className="custom-phone-input border text-dark_mode-400 border-white/40 p-1.5 rounded-full focus:outline-1 focus:outline-brand-600 text-base"
                        inputComponent={CustomPhoneComponent}
                        placeholder="Enter Mobile Number"
                        defaultCountry={countryCode as Country}
                        value={field.value}
                        onChange={(val) => field.onChange(val ?? "")}
                        onCountryChange={(newCountryCode) => {
                          const code = getCountryCallingCode(
                            newCountryCode || "IN"
                          );
                          setCountryCodeNumber(code);
                          setCountryCode(newCountryCode || "");
                        }}
                      />
                    );
                  }}
                />
                <p className="min-h-5 text-sm text-error-500 md:pb-1">
                  {errors?.phoneNumber?.message}
                </p>
              </div>
            </div>
            <DialogFooter>
              <div className="flex flex-col justify-center items-center w-full gap-3 md:gap-4">
                <p className="hyi-p text-sm">
                  {` The course requires an initial registration fee of $${selectedCourse?.price}, which must be paid no later than 10 days prior to the course start date. Additionally, an enrollment fee of ₹999 INR applies. All fees are non-refundable and subject to change without prior notice.`}
                </p>
                <div className="flex w-full gap-2 items-center">
                  <Checkbox
                    checked={isAgree}
                    onCheckedChange={agreeToPrivacyPolicy}
                  />
                  <p className="hyi-p md:text-base text-sm">
                    I agree to the HYI.AI{" "}
                    <Link
                      href={"/documents/privacy-policy"}
                      className="text-brand-600 cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      href={"/documents/terms&conditions"}
                      className="text-brand-600 cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms of Service
                    </Link>{" "}
                  </p>
                </div>
                <div className="flex justify-center items-center w-full mt-2">
                  <CustomButton
                    type="submit"
                    otherCSSProperty="w-fit py-2 md:w-[60%]"
                    isDisabled={
                      !email ||
                      email === "" ||
                      !phoneNumber ||
                      phoneNumber === "" ||
                      !firstName ||
                      firstName === "" ||
                      !lastName ||
                      lastName === "" ||
                      !isAgree
                    }
                  >
                    Pay Enrollment Fee - 999 INR/-
                  </CustomButton>
                </div>
              </div>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      {invoice && (
        <div
          id="invoice-wrapper"
          style={{
            position: "absolute",
            top: 0,
            left: "-9999px",
            width: "800px",
          }}
        >
          <div id="invoice-content">
            <CreditInvoicePreview invoice={invoice} />
          </div>
        </div>
      )}
    </>
  );
}
