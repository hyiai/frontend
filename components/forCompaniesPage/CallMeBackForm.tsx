"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  User,
  Check,
  ChevronsUpDown,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import CustomButton from "@/components/shared/customButton";
import { ShimmerButton } from "@/components/shared/customShimmerButton";
import { useCountries } from "@/lib/hooks/useCountry";
import { useTimeZones } from "@/lib/hooks/useTimeZones";
import logo from "@/assets/shared/logo.svg";
// import { toast } from "sonner";

interface ContactData {
  fullName: string;
  mobile: string;
  email: string;
  company: string;
  country: string;
  callTime: string;
  timezone: string;
}

interface CallMeBackFormProps {
  onSubmit: (data: ContactData) => void;
  onBack: () => void;
  onTalkToExpert: () => void;
  onClose?: () => void;
  resetForm: () => void;
  initialData?: ContactData;
}

const CallMeBackForm: React.FC<CallMeBackFormProps> = ({
  onSubmit,
  onBack,
  onTalkToExpert,
  onClose,
  resetForm,
  initialData,
}) => {
  const [formData, setFormData] = useState<ContactData>(
    initialData || {
      fullName: "",
      mobile: "",
      email: "",
      company: "",
      country: "",
      callTime: "",
      timezone: "",
    }
  );

  const [errors, setErrors] = useState<Partial<ContactData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTalkingToExpert, setIsTalkingToExpert] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openCountry, setOpenCountry] = useState(false);
  const [openTimezone, setOpenTimezone] = useState(false);
  const { countries, countrySearchQuery, setCountrySearchQuery } =
    useCountries();
  const { timeZones, timeZoneSearchQuery, setTimeZoneSearchQuery } =
    useTimeZones();

  // Auto-close dialog after 5 seconds on successful submission
  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        setShowSuccessModal(false);
        if (onClose) onClose();
        resetForm();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessModal, onClose, resetForm]);

  const countryOptions = countries.map((country) => ({
    value: country.name,
    id: country._id,
    label: country.name,
  }));

  const timeZoneOptions = timeZones.map((tz) => ({
    value: tz.name,
    id: tz._id,
    label: tz.name,
  }));

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactData> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\+?[\d\s\-\(\)]{10,15}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid mobile number (max 15 digits)";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }
    if (!formData.callTime.trim()) {
      newErrors.callTime = "Preferred call time is required";
    }
    if (!formData.timezone.trim()) {
      newErrors.timezone = "Timezone is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof ContactData, value: string) => {
    if (field === "mobile") {
      // Allow only digits (and optional + at start)
      let cleanedValue = value.replace(/[^\d+]/g, "");
      // Ensure + is only at the start
      if (cleanedValue.includes("+")) {
        cleanedValue = "+" + cleanedValue.replace(/\+/g, "");
      }
      // Count only digits for length check
      const digitsOnly = cleanedValue.replace(/\D/g, "");
      // Limit to 15 digits max
      if (digitsOnly.length > 15) {
        return;
      }
      value = cleanedValue;
    }
    if (field === "fullName") {
      // Allow only letters (including accented) and spaces
      value = value.replace(/[^A-Za-zÀ-ÿ\s]/g, "");
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    // Hide error alerts when user starts typing again
    if (showErrorAlert) {
      setShowErrorAlert(false);
    }
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setIsSubmitting(true);
      setShowErrorAlert(false);
      try {
        await onSubmit(formData);
        setShowSuccessModal(true);
      } catch (error) {
        console.error("Error submitting contact form:", error);
        setErrorMessage("Failed to submit your details. Please try again.");
        setShowErrorAlert(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleTalkToExpert = async () => {
    // First validate the form
    if (!validateForm()) {
      // If validation fails, don't proceed
      return;
    }
    setIsTalkingToExpert(true);
    setShowErrorAlert(false);
    try {
      // First submit the form data via API
      await onSubmit(formData);
      // Then navigate to expert consultation
      await onTalkToExpert();
    } catch (error) {
      console.error("Error submitting form before expert consultation:", error);
      setErrorMessage("Failed to submit your details. Please try again.");
      setShowErrorAlert(true);
    } finally {
      setIsTalkingToExpert(false);
    }
  };

  const handleSuccessModalContinue = () => {
    setShowSuccessModal(false);
    if (onClose) onClose();
    resetForm();
  };

  return (
    <>
      <div className="text-white rounded-lg w-full max-w-md mx-auto h-fit flex flex-col min-h-0">
        <div className="flex justify-between mb-6 items-start flex-shrink-0">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Call me back</h2>
            <p className="text-gray-300 text-sm">
              Please fill in your details. We will call you back in 24 hours
            </p>
          </div>
          <div className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-gray-300 text-sm font-medium">
            3/3
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <Label
              htmlFor="fullName"
              className="text-sm font-medium text-gray-200"
            >
              Full Name *
            </Label>
            <Input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className="text-white placeholder:text-gray-400 rounded-full border border-white/40"
              placeholder="Enter Your Full Name"
              disabled={isSubmitting || isTalkingToExpert}
            />
            {errors.fullName && (
              <p className="text-red-400 text-xs">{errors.fullName}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label
              htmlFor="mobile"
              className="text-sm font-medium text-gray-200"
            >
              Mobile Number *
            </Label>
            <Input
              id="mobile"
              type="tel"
              value={formData.mobile}
              onChange={(e) => handleInputChange("mobile", e.target.value)}
              className="text-white placeholder:text-gray-400 rounded-full border border-white/40"
              placeholder="+91 XXXXXXXXXX"
              disabled={isSubmitting || isTalkingToExpert}
            />
            {errors.mobile && (
              <p className="text-red-400 text-xs">{errors.mobile}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-200"
            >
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="text-white placeholder:text-gray-400 rounded-full border border-white/40"
              placeholder="your@email.com"
              disabled={isSubmitting || isTalkingToExpert}
            />
            {errors.email && (
              <p className="text-red-400 text-xs">{errors.email}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label
              htmlFor="company"
              className="text-sm font-medium text-gray-200"
            >
              Company Name *
            </Label>
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              className="text-white placeholder:text-gray-400 rounded-full border border-white/40"
              placeholder="Your Company Name"
              disabled={isSubmitting || isTalkingToExpert}
            />
            {errors.company && (
              <p className="text-red-400 text-xs">{errors.company}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label className="text-sm font-medium text-gray-200">
              Country *
            </Label>
            <Popover open={openCountry} onOpenChange={setOpenCountry}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openCountry}
                  className="w-full justify-between rounded-full text-white placeholder:text-gray-400 bg-transparent hover:bg-transparent hover:text-dark_mode-300 border border-white/40"
                  disabled={isSubmitting || isTalkingToExpert}
                >
                  {formData.country
                    ? countryOptions.find(
                        (country) => country.value === formData.country
                      )?.label
                    : "Select country"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0 bg-transparent backdrop-blur-md border-gray-600 popover-content">
                <Command className="bg-transparent backdrop-blur-md">
                  <CommandInput
                    placeholder="Search Country..."
                    className="text-white placeholder:text-gray-400"
                    value={countrySearchQuery}
                    onValueChange={setCountrySearchQuery}
                  />
                  <CommandEmpty className="text-gray-400">
                    No country found.
                  </CommandEmpty>
                  <CommandGroup className="max-h-60 overflow-auto">
                    {countryOptions.map((country) => (
                      <CommandItem
                        key={`${country.value} {${country.id}}`}
                        value={country.value}
                        onSelect={(currentValue) => {
                          handleInputChange(
                            "country",
                            currentValue === formData.country
                              ? ""
                              : currentValue
                          );
                          setOpenCountry(false);
                          setCountrySearchQuery("");
                        }}
                        className="text-white hover:bg-gray-700"
                      >
                        <Check
                          className={`mr-2 h-4 w-4 ${
                            formData.country === country.value
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                        {country.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            {errors.country && (
              <p className="text-red-400 text-xs">{errors.country}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label className="text-sm font-medium text-gray-200">
              Time Zone *
            </Label>
            <Popover open={openTimezone} onOpenChange={setOpenTimezone}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openTimezone}
                  className="w-full justify-between rounded-full text-white placeholder:text-gray-400 bg-transparent hover:bg-transparent hover:text-dark_mode-300 border border-white/40"
                  disabled={isSubmitting || isTalkingToExpert}
                >
                  {formData.timezone && timeZoneOptions.length > 0
                    ? (() => {
                        const foundTimezone = timeZoneOptions.find(
                          (tz) => tz.value === formData.timezone
                        );
                        return foundTimezone
                          ? foundTimezone.label
                          : formData.timezone;
                      })()
                    : "Select timezone"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0 bg-transparent backdrop-blur-md border-gray-600 popover-content">
                <Command className="bg-transparent backdrop-blur-md">
                  <CommandInput
                    placeholder="Search Timezone..."
                    className="text-white placeholder:text-gray-400"
                    value={timeZoneSearchQuery}
                    onValueChange={setTimeZoneSearchQuery}
                  />
                  <CommandEmpty className="text-gray-400">
                    No timezone found.
                  </CommandEmpty>
                  <CommandGroup className="max-h-60 overflow-auto">
                    {timeZoneOptions?.map((timezone) => (
                      <CommandItem
                        key={`${timezone.value} ${timezone.id}`}
                        value={timezone.value}
                        onSelect={() => {
                          handleInputChange("timezone", timezone.value);
                          setOpenTimezone(false);
                          setTimeZoneSearchQuery("");
                        }}
                        className="text-white hover:bg-gray-700"
                      >
                        <Check
                          className={`mr-2 h-4 w-4 ${
                            formData.timezone === timezone.value
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                        {timezone.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            {errors.timezone && (
              <p className="text-red-400 text-xs">{errors.timezone}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label className="text-sm font-medium text-gray-200">
              Preferred Call Time *
            </Label>
            <Select
              value={formData.callTime}
              onValueChange={(value) => handleInputChange("callTime", value)}
              disabled={isSubmitting || isTalkingToExpert}
            >
              <SelectTrigger className="w-full rounded-full border border-white/40">
                <SelectValue placeholder="Select Time" />
              </SelectTrigger>
              <SelectContent className="bg-transparent backdrop-blur-md border-gray-600">
                <SelectItem
                  className="text-white"
                  value="Morning (9 AM - 12 PM)"
                >
                  Morning (9 AM - 12 PM)
                </SelectItem>
                <SelectItem
                  className="text-white"
                  value="Afternoon (12 PM - 5 PM)"
                >
                  Afternoon (12 PM - 5 PM)
                </SelectItem>
                <SelectItem
                  className="text-white"
                  value="Evening (5 PM - 8 PM)"
                >
                  Evening (5 PM - 8 PM)
                </SelectItem>
                <SelectItem className="text-white" value="Flexible">
                  Flexible
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.callTime && (
              <p className="text-red-400 text-xs">{errors.callTime}</p>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center mt-2 sm:mt-6 pt-4 flex-shrink-0">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-gray-400 hover:text-white hover:bg-gray-800/50 flex items-center gap-1"
            disabled={isSubmitting || isTalkingToExpert}
          >
            <ChevronLeft className="w-4 h-4" />
            Go Back
          </Button>
          <div className="flex gap-3">
            <ShimmerButton
              onClick={handleTalkToExpert}
              disabled={isSubmitting || isTalkingToExpert || showErrorAlert}
            >
              <User className="w-4 h-4" />
              {isTalkingToExpert ? "Processing..." : "Talk to Expert"}
            </ShimmerButton>
            <CustomButton
              otherCSSProperty="h-10"
              onClick={handleSubmit}
              isDisabled={isSubmitting || isTalkingToExpert || showErrorAlert}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </CustomButton>
          </div>
        </div>

        {/* Error Alert - Keep this below the form */}
        {showErrorAlert && (
          <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            <p className="text-red-400 text-sm font-medium">{errorMessage}</p>
          </div>
        )}
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={() => {}}>
        <DialogOverlay className="fixed inset-0 bg-black/80" />
        <DialogContent
          showCloseButton={false}
          className="w-[90%] max-w-sm h-fit rounded-2xl p-6 backdrop-blur-2xl bg-white/5 border border-white/20"
        >
          <DialogTitle className="sr-only">Success Message</DialogTitle>
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <Image src={logo} alt="Logo" />
            </div>
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto rounded-full border border-white/20 flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-green-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              We will get back to you shortly
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Thanks for reaching us. Our experts will get back to you as soon
              as possible.
            </p>
            <CustomButton
              onClick={handleSuccessModalContinue}
              otherCSSProperty="w-full h-10"
            >
              Continue
            </CustomButton>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CallMeBackForm;
