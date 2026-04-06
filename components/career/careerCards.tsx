"use client";

import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CarrerPageInfo } from "@/components/data/careerPageInfo";
import CustomButton from "@/components/shared/customButton";
import {
  AlertCircle,
  Asterisk,
  CheckCircle,
  Clock,
  Layers2,
  X,
} from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ShimmerButton } from "@/components/shared/customShimmerButton";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormAPI } from "@/lib/services/api";
import PhoneInput, { Country } from "react-phone-number-input";
import { getCountryCallingCode } from "libphonenumber-js";
import "react-phone-number-input/style.css";
import { countryCodes } from "@/components/util/countryCodes";
import { createCustomPhoneInput } from "@/components/shared/customPhoneInput";
import React from "react";

interface submitProps {
  email: string;
  designation?: string;
  name: string;
  phone: string;
  cv: File;
  userMessage: string;
}

const CareerCards = () => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryCode, setCountryCode] = useState("IN");
  const [countryCodeNumber, setCountryCodeNumber] = useState("+91");
  const [regex, setRegex] = useState<RegExp>(
    /^[+]{1}[1-9]{1}[0-9]{1}[0-9]{12}$/
  );
  const schema: Yup.ObjectSchema<submitProps> = Yup.object({
    name: Yup.string().trim().required("Full name is required"),
    designation: Yup.string(),
    email: Yup.string()
      .trim()
      .email("Invalid email")
      .required("Email is required"),
    phone: Yup.string()
      .trim()
      .required("Phone number is required")
      .matches(regex, "Enter a valid phone number"),
    userMessage: Yup.string().trim().required("Message is required"),
    cv: Yup.mixed<File>()
      .required("CV is required")
      .test(
        "fileType",
        "Only PDF, DOC, and DOCX files are allowed",
        function (value) {
          const file = value as File;
          if (!file) return false;
          const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ];
          return allowedTypes.includes(file.type);
        }
      )
      .test("fileSize", "File size must be less than 5MB", function (value) {
        const file = value as File;
        if (!file) return false;
        return file.size <= 5 * 1024 * 1024;
      }),
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

  useEffect(() => {
    const select = document.querySelector(
      ".PhoneInputCountrySelect"
    ) as HTMLElement;

    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };
    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    if (select) {
      select.addEventListener("focus", disableScroll);
      select.addEventListener("blur", enableScroll);
    }

    return () => {
      if (select) {
        select.removeEventListener("focus", disableScroll);
        select.removeEventListener("blur", enableScroll);
      }
      document.body.style.overflow = "auto";
    };
  }, []);

  const [message, setMessage] = useState({
    success: false,
    title: "",
    text: "",
  });

  const handleCloseDialog = () => {
    // Reset form when dialog closes
    reset();
    setShowMessage(false);
    setIsSubmitting(false);
    setMessage({
      success: false,
      title: "",
      text: "",
    });
    closeRef.current?.click();
  };

  const onSubmit = async (formData: submitProps) => {
    if (isSubmitting || showMessage) return;
    try {
      const newData = {
        name: formData.name,
        designation: formData?.designation,
        email: formData.email,
        phoneNumber: formData.phone,
        cv: formData.cv,
        message: formData.userMessage,
      };
      const response = await FormAPI.jobApply(newData);
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      if (response.success) {
        setShowMessage(true);
        setMessage({
          success: true,
          title: "Application Submitted Successfully!",
          text: "Thank you for applying. Our recruitment team will review your application and get in touch with you.",
        });
        setTimeout(() => {
          setShowMessage(false);
          handleCloseDialog();
        }, 5000);
      }
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      setTimeout(() => {
        setShowMessage(true);
        setMessage({
          success: false,
          title: "Submission Failed",
          text: "Sorry, we couldn't send your application right now. Please try again shortly or contact our support if the issue persists.",
        });
        setTimeout(() => {
          setShowMessage(false);
          setIsSubmitting(false);
        }, 5000);
      }, 2000);
    }
  };

  const maxDigitLength =
    countryCodes.find((country) => country.flagCode === countryCode)
      ?.phoneNumberLengthByCountry_phLengthMax ?? 15;

  const CustomPhoneComponent = React.useMemo(
    () => createCustomPhoneInput(maxDigitLength),
    [maxDigitLength]
  );

  const { email, userMessage, name, phone, cv } = watch();

  return (
    <>
      <div className="w-full max-w-[1216px] flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-12">
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {CarrerPageInfo.jobs.map((job) => {
            return (
              <div
                key={job.id}
                className="flex flex-col items-center rounded-2xl border border-white/10 p-6"
              >
                <div className="w-full flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-dark_mode-100 text-lg font-semibold leading-4">
                      {job.title}
                    </h3>
                  </div>
                  <p className="text-base text-dark_mode-400 leading-normal line-clamp-2">
                    {job.description}
                  </p>
                  <div className="w-full flex items-center pb-1 gap-5">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-text-500" />
                      <div className="text-dark_mode-400 text-base font-medium leading-normal">
                        {job?.duration}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers2 className="w-4 h-4 text-text-500" />
                      <div className="text-dark_mode-400 text-base font-medium leading-normal">
                        {job?.category}
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-center pb-1 gap-5">
                    <Dialog>
                      <DialogTrigger asChild>
                        <ShimmerButton>Job Description</ShimmerButton>
                      </DialogTrigger>
                      <DialogOverlay className="fixed inset-0 bg-black/80" />
                      <DialogContent
                        showCloseButton={false}
                        className="w-full max-h-[85%] overflow-auto bg-transparent backdrop-blur-md border-white/20"
                        style={{ maxWidth: "min(90%, 1150px)" }}
                      >
                        <DialogHeader className="text-left">
                          <DialogTitle className="text-2xl text-white">
                            Job Description
                          </DialogTitle>
                          <DialogClose asChild>
                            <button className="absolute top-4.5 right-4 z-10 p-2 transition-colors">
                              <X className="w-5 h-5 text-dark_mode-400/70" />
                            </button>
                          </DialogClose>
                          <DialogDescription className="text-dark_mode-300 text-base">
                            Review the detailed job description below, including
                            responsibilities, requirements, and company
                            overview.
                          </DialogDescription>
                        </DialogHeader>
                        <section className="w-full flex flex-col gap-4 md:w-[95%] text-dark_mode-300 text-sm md:text-base">
                          <div className="flex flex-col space-y-2">
                            <p>
                              <strong>Job Title: </strong>
                              {job?.designation}
                            </p>
                            <p>
                              <strong>Location: </strong>
                              {job?.Location}
                            </p>
                            <p>
                              <strong>Employment Type: </strong>
                              {job?.Employment_Type}
                            </p>
                            {job?.Reports_To && (
                              <p>
                                <strong>Reports To: </strong>
                                {job?.Reports_To}
                              </p>
                            )}
                            {job?.Industry_Type && (
                              <p>
                                <strong>Industry: </strong>
                                {job?.Industry_Type}
                              </p>
                            )}
                            {job?.Experience_Level && (
                              <p>
                                <strong>Experience Level: </strong>
                                {job?.Experience_Level}
                              </p>
                            )}
                          </div>
                          {job?.About_us && (
                            <div className="flex flex-col gap-2">
                              <h2 className="text-base font-semibold md:text-lg">
                                About us:
                              </h2>
                              <div className="flex flex-col space-y-2">
                                {job.About_us.map((para, index) => (
                                  <p
                                    key={index}
                                    className="text-sm md:text-base"
                                  >
                                    {para}
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}
                          {job?.Company_Overview && (
                            <div>
                              <h2 className="text-base font-semibold md:text-lg mb-2">
                                Company Overview:{" "}
                              </h2>
                              <p className="text-sm md:text-base">
                                {job.Company_Overview}
                              </p>
                            </div>
                          )}
                          {job?.Position_Overview && (
                            <div>
                              <h2 className="text-base font-semibold md:text-lg mb-2">
                                Position Overview:
                              </h2>
                              <p className="text-sm md:text-base">
                                {job.Position_Overview}
                              </p>
                            </div>
                          )}
                          {job?.Job_Summary && (
                            <div>
                              <h2 className="text-base font-semibold md:text-lg mb-2">
                                Job Overview:
                              </h2>
                              <p className="text-sm md:text-base">
                                {job.Job_Summary}
                              </p>
                            </div>
                          )}
                          {job?.Key_Responsibilities && (
                            <div>
                              <h2 className="text-base font-semibold md:text-lg mb-2">
                                Key Responsibilities:
                              </h2>
                              <ul className="list-disc pl-6 mb-2">
                                {job?.Key_Responsibilities.map((res, index) => (
                                  <li key={index}>{res}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {job?.Job_Responsibility && (
                            <div>
                              <h2 className="text-base font-semibold md:text-lg mb-2">
                                Job Responsibility
                              </h2>
                              <div className="flex flex-col gap-2">
                                {job?.Job_Responsibility.headingArray.map(
                                  (heading, index) => (
                                    <div key={index}>
                                      <h3 className="text-base font-semibold">
                                        {heading}
                                      </h3>
                                      <ul
                                        className={cn(
                                          job?.Job_Responsibility[
                                            heading as keyof typeof job.Job_Responsibility
                                          ].length > 1
                                            ? "list-disc pl-6"
                                            : ""
                                        )}
                                      >
                                        {job?.Job_Responsibility[
                                          heading as keyof typeof job.Job_Responsibility
                                        ].map((item, index) => (
                                          <li key={index}>{item}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          )}
                          {job?.key_Responsibility && (
                            <div>
                              <h2 className="text-base font-semibold md:text-lg mb-2">
                                Key Responsibilities
                              </h2>
                              <div className="flex flex-col gap-2">
                                {job?.key_Responsibility.headingArray.map(
                                  (heading, index) => (
                                    <div key={index}>
                                      <h3 className="text-base font-semibold">
                                        {heading}
                                      </h3>
                                      <ul
                                        className={cn(
                                          job?.key_Responsibility[
                                            heading as keyof typeof job.key_Responsibility
                                          ].length > 1
                                            ? "list-disc pl-6"
                                            : ""
                                        )}
                                      >
                                        {job?.key_Responsibility[
                                          heading as keyof typeof job.key_Responsibility
                                        ].map((item, index) => (
                                          <li key={index}>{item}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          )}
                          {job?.job_Responsibilities && (
                            <div>
                              <h2 className="text-base font-semibold md:text-lg">
                                Key Responsibilities:
                              </h2>
                              <div className="flex flex-col gap-2">
                                {job?.job_Responsibilities.headingArray.map(
                                  (heading, index) => (
                                    <div key={index}>
                                      <h3 className="text-base font-semibold">
                                        {heading}
                                      </h3>
                                      <ul
                                        className={cn(
                                          job?.job_Responsibilities[
                                            heading as keyof typeof job.job_Responsibilities
                                          ].length > 1
                                            ? "list-disc pl-6"
                                            : ""
                                        )}
                                      >
                                        {job?.job_Responsibilities[
                                          heading as keyof typeof job.job_Responsibilities
                                        ].map((item, index) => (
                                          <li key={index}>{item}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          )}
                          {job?.Responsibility && (
                            <div>
                              <h2 className="text-base font-semibold md:text-lg">
                                Key Responsibilities
                              </h2>
                              <div className="flex flex-col gap-2">
                                {job?.Responsibility.headingArray.map(
                                  (heading, index) => (
                                    <div key={index}>
                                      <h3 className="text-base font-semibold">
                                        {heading}
                                      </h3>
                                      <ul
                                        className={cn(
                                          job?.Responsibility[
                                            heading as keyof typeof job.Responsibility
                                          ].length > 1
                                            ? "list-disc pl-6"
                                            : ""
                                        )}
                                      >
                                        {job?.Responsibility[
                                          heading as keyof typeof job.Responsibility
                                        ].map((item, index) => (
                                          <li key={index}>{item}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          )}
                          {job?.Requirements && (
                            <div>
                              <h2 className="text-base font-semibold md:text-lg">
                                Requirements:
                              </h2>
                              <ul className="list-disc pl-6">
                                {job?.Requirements.map((req, index) => (
                                  <li key={index}>{req}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {job?.Qualifications && (
                            <div>
                              <h2 className="text-base font-semibold md:text-lg">
                                Qualifications:
                              </h2>
                              <ul className="list-disc pl-6">
                                {job?.Qualifications.map((req, index) => (
                                  <li key={index}>{req}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {job?.Preferred_Skills && (
                            <div>
                              <h2 className="text-base font-semibold md:text-lg">
                                Preferred Skills:
                              </h2>
                              <ul className="list-disc pl-6">
                                {job?.Preferred_Skills.map((skill, index) => (
                                  <li key={index}>{skill}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {job?.Qualifications_and_Skill && (
                            <div>
                              <h2 className="text-base font-semibold md:text-lg">
                                Qualifications and Skill:
                              </h2>
                              <div className="flex flex-col gap-2">
                                {job?.Qualifications_and_Skill.headingArray.map(
                                  (heading, index) => (
                                    <div key={index}>
                                      <h3 className="text-base font-semibold">
                                        {heading}
                                      </h3>
                                      <ul
                                        className={cn(
                                          job.Qualifications_and_Skill[
                                            heading as keyof typeof job.Qualifications_and_Skill
                                          ].length > 1
                                            ? "list-disc pl-6"
                                            : ""
                                        )}
                                      >
                                        {job.Qualifications_and_Skill[
                                          heading as keyof typeof job.Qualifications_and_Skill
                                        ].map((item, index) => (
                                          <li key={index}>{item}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          )}
                          {job?.Skills_and_Competencies && (
                            <div>
                              <h2 className="text-base font-semibold md:text-lg">
                                Skills and Competencies:
                              </h2>
                              <ul className="list-disc pl-6">
                                {job?.Skills_and_Competencies.map(
                                  (skill, index) => (
                                    <li key={index}>{skill}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                          {job?.Educational_Background && (
                            <div>
                              <h2 className="text-base font-semibold md:text-lg">
                                Educational Background:
                              </h2>
                              <p className="text-sm md:text-base">
                                {job.Educational_Background}
                              </p>
                            </div>
                          )}
                          {job?.Education && (
                            <div>
                              <h2 className="text-base font-semibold md:text-lg">
                                Education:
                              </h2>
                              <ul className="list-disc pl-6">
                                {job?.Education.map((edu, index) => (
                                  <li key={index}>{edu}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {job?.Experience && (
                            <div>
                              <h2 className="text-base font-semibold md:text-lg">
                                Experience:
                              </h2>
                              <ul className="list-disc pl-6">
                                {job?.Experience.map((point, index) => (
                                  <li key={index}>{point}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {job?.Technical_Skills && (
                            <div>
                              <h2 className="text-base font-semibold md:text-lg">
                                Technical Skills:
                              </h2>
                              <ul className="list-disc pl-6">
                                {job?.Technical_Skills.map((point, index) => (
                                  <li key={index}>{point}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {job?.whyJoinUs && (
                            <div>
                              <h2 className="text-base font-semibold md:text-lg">
                                Why Join HYI.AI?
                              </h2>
                              <ul
                                className={cn(
                                  job?.whyJoinUs.length > 1 && "list-disc pl-6"
                                )}
                              >
                                {job?.whyJoinUs.map((point, index) => (
                                  <li key={index}>{point}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </section>
                      </DialogContent>
                    </Dialog>
                    <Dialog>
                      <DialogTrigger asChild>
                        <CustomButton>Apply Now</CustomButton>
                      </DialogTrigger>
                      <DialogOverlay className="fixed inset-0 bg-black/80" />
                      <DialogContent
                        showCloseButton={false}
                        className="w-full max-h-[85%] overflow-auto bg-transparent backdrop-blur-md border-white/20"
                        style={{ maxWidth: "min(90%, 560px)" }}
                      >
                        <DialogHeader className="text-left mb-2">
                          <DialogTitle className="text-2xl text-white">
                            Apply Now
                          </DialogTitle>
                          <DialogClose ref={closeRef} asChild>
                            <button className="absolute top-4.5 right-4 z-10 p-2 transition-colors">
                              <X className="w-5 h-5 text-dark_mode-400/70" />
                            </button>
                          </DialogClose>
                          <DialogDescription className="text-dark_mode-400 text-base">
                            Take a moment to explore the job details - including
                            what you&apos;ll do, what we&apos;re looking for,
                            and who we are - before you submit your application.
                          </DialogDescription>
                        </DialogHeader>
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className="flex flex-col gap-2"
                        >
                          <div className="flex flex-col">
                            <div className="flex-1">
                              <label className="flex items-start text-dark_mode-300 text-sm font-medium pb-1.5 gap-0.5">
                                Full Name{" "}
                                <Asterisk
                                  strokeWidth={1.75}
                                  className={`w-3.5 h-3.5 block -m-[1.5px]`}
                                />
                              </label>
                              <Input
                                type="text"
                                placeholder="Full Name"
                                {...register("name")}
                                className="text-white placeholder:text-gray-400 rounded-full border border-white/40"
                              />

                              <p className="min-h-5 text-sm text-error-500 pb-1">
                                {errors?.name?.message}
                              </p>
                            </div>
                            <div className="flex-1">
                              <label className="flex items-start text-dark_mode-300 text-sm font-medium pb-1.5 gap-0.5">
                                Email{" "}
                                <Asterisk
                                  strokeWidth={1.75}
                                  className={`w-3.5 h-3.5 block -m-[1.5px]`}
                                />
                              </label>
                              <Input
                                type="email"
                                placeholder="you@company.com"
                                {...register("email")}
                                className="text-white placeholder:text-gray-400 rounded-full border border-white/40"
                              />

                              <p className="min-h-5 text-sm text-error-500 pb-1">
                                {errors?.email?.message}
                              </p>
                            </div>
                            <div className="flex-1">
                              <label className="flex items-start text-dark_mode-300 text-sm font-medium pb-1.5 gap-0.5">
                                Phone Number{" "}
                                <Asterisk
                                  strokeWidth={1.75}
                                  className={`w-3.5 h-3.5 block -m-[1.5px]`}
                                />
                              </label>
                              <Controller
                                name="phone"
                                control={control}
                                defaultValue=""
                                render={({ field }) => {
                                  return (
                                    <PhoneInput
                                      {...field}
                                      className="custom-phone-input border text-dark_mode-300 border-white/40 p-1.5 rounded-full focus:outline-1 focus:outline-brand-600"
                                      inputComponent={CustomPhoneComponent}
                                      placeholder="Enter Phone Number"
                                      defaultCountry={countryCode as Country}
                                      value={field.value}
                                      onChange={(val) =>
                                        field.onChange(val ?? "")
                                      }
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
                              <p className="min-h-5 text-sm text-error-500 pb-1">
                                {errors?.phone?.message}
                              </p>
                            </div>
                            <div className="flex-1">
                              <label className="flex items-start text-dark_mode-300 text-sm font-medium pb-1.5 gap-0.5">
                                Upload CV{" "}
                                <Asterisk
                                  strokeWidth={1.75}
                                  className="w-3.5 h-3.5 block -m-[1.5px]"
                                />
                              </label>
                              <Input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file)
                                    setValue("cv", file, {
                                      shouldValidate: true,
                                    });
                                }}
                                className="w-full text-white border border-white/40 rounded-full file:right-0 file:text-brand-600 focus:outline-1 focus:outline-brand-600"
                              />
                              <p className="min-h-5 text-sm text-error-500 pb-1">
                                {errors?.cv?.message}
                              </p>
                            </div>

                            <div className="flex-1">
                              <label className="flex items-start text-dark_mode-300 text-sm font-medium pb-1.5 gap-0.5">
                                Message{" "}
                                <Asterisk
                                  strokeWidth={1.75}
                                  className={`w-3.5 h-3.5 block -m-[1.5px]`}
                                />
                              </label>
                              <Textarea
                                placeholder="Leave us a message..."
                                {...register("userMessage")}
                                className="text-white placeholder:text-gray-400 border border-white/40 h-30"
                              />

                              <p className="min-h-5 text-sm text-error-500 pb-1">
                                {errors?.userMessage?.message}
                              </p>
                            </div>
                          </div>
                          {showMessage && (
                            <>
                              {message.success ? (
                                <div className="mb-2 p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                  <div>
                                    <h3 className="text-green-500 text-sm font-semibold">
                                      {message.title}
                                    </h3>
                                    <p className="text-green-500 text-sm">
                                      {message.text}
                                    </p>
                                  </div>
                                </div>
                              ) : (
                                <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3">
                                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                  <div>
                                    <h3 className="text-red-500 text-sm font-semibold">
                                      {message.title}
                                    </h3>
                                    <p className="text-red-500 text-sm">
                                      {message.text}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </>
                          )}
                          <DialogFooter>
                            <CustomButton
                              type="submit"
                              isDisabled={
                                !email ||
                                email === "" ||
                                !userMessage ||
                                userMessage === "" ||
                                !name ||
                                name === "" ||
                                !cv ||
                                !phone ||
                                phone === "" ||
                                showMessage
                              }
                            >
                              Submit Details
                            </CustomButton>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CareerCards;
