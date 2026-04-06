"use client";
import { CourseContent } from "@/components/util/interface";
import CourseCard from "./courseCard";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import CustomButton from "@/components/shared/customButton";
import { AlertCircle, Asterisk, CheckCircle } from "lucide-react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { createCustomPhoneInput } from "@/components/shared/customPhoneInput";
import { countryCodes } from "@/components/util/countryCodes";
import React from "react";
import PhoneInput, { Country } from "react-phone-number-input";
import { getCountryCallingCode } from "libphonenumber-js";
import "react-phone-number-input/style.css";
import {
  AGITrainingAPI,
  FormAPI,
  registerUserForAgiCourseType,
} from "@/lib/services/api";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

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

type AGICourseGridProps = {
  courses: CourseContent[];
};

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

export default function AGICourseseGrid({ courses }: AGICourseGridProps) {
  const [showEnrollmentDialog, setShowEnrollmentDialog] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const closeRef = useRef<HTMLButtonElement>(null);
  const [isAgree, setIsAgree] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryCode, setCountryCode] = useState("IN");
  const [countryCodeNumber, setCountryCodeNumber] = useState("+91");
  const [regex, setRegex] = useState<RegExp>(
    /^[+]{1}[1-9]{1}[0-9]{1}[0-9]{12}$/
  );
  const [selectedCourse, setSelectedCourse] = useState<CourseContent | null>(
    null
  );
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
            setIsProcessing(false);
          }
        },
      });

      rzp.open();
    } catch (err) {
      console.error("Error in order creation or Razorpay flow:", err);
      setIsProcessing(false);
    }
  };

  const onSubmitRegistrationForm = async (formData: submitProps) => {
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
        handleCloseDialog();
        setTimeout(() => {
          handleCoursePayment(razorPayDetails);
        }, 200);
      }
    } catch (error) {
      console.error("Error in onSubmitRegistrationForm ", error);
      setIsSubmitting(false);
    }
  };

  const agreeToPrivacyPolicy = () => {
    setIsAgree((prev) => !prev);
  };

  const onClickingEnrollNow = async (course: CourseContent) => {
    setSelectedCourse(course);
    setShowEnrollmentDialog(true);
  };

  const handleCloseDialog = () => {
    reset();
    setIsSubmitting(false);
    setSelectedCourse(null);
    setShowEnrollmentDialog(false);
    closeRef.current?.click();
  };

  const CustomPhoneComponent = React.useMemo(
    () => createCustomPhoneInput(maxDigitLength),
    [maxDigitLength]
  );

  const { email, phoneNumber, firstName, lastName } = watch();

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {/* Enrollement form dialog */}
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
                Enroll for {selectedCourse?.title}
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
                <label className="flex items-start  text-dark_mode-400 text-sm font-medium pb-1 md:pb-1.5 gap-0.5">
                  First Name{" "}
                  <Asterisk
                    strokeWidth={1.75}
                    className={`w-3.5 h-3.5 block -m-[1.5px]`}
                  />
                </label>
                <Input
                  type="text"
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
      {/* payment form dialog */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr z-10">
        {courses.map((course: CourseContent, index) => (
          <CourseCard
            key={index}
            course={course}
            onEnrollNow={onClickingEnrollNow}
            disable={isProcessing}
          />
        ))}
      </div>
    </div>
  );
}
