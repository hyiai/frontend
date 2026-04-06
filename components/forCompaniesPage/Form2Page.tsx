"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ShimmerButton } from "../shared/customShimmerButton";
import CustomButton from "@/components/shared/customButton";
import { MultiSelectWithBadges } from "../ui/multi-select";
import { useCountries } from "@/lib/hooks/useCountry";
import { useTimeZones } from "@/lib/hooks/useTimeZones";

interface Form2Data {
  gender: string;
  preferredCountries: string[];
  preferredTimeZone: string[];
  salaryMin: string;
  salaryMax: string;
}

interface Form2DataErrors {
  gender: string;
  preferredCountries: string;
  preferredTimeZone: string;
  salaryMin: string;
  salaryMax: string;
}

interface Form2PageProps {
  title: string;
  onNext: (data: Form2Data) => void;
  onBack: () => void;
  onHireInstantly: (data: Form2Data) => void;
  initialData?: Form2Data;
}

const Form2Page: React.FC<Form2PageProps> = ({
  title,
  onNext,
  onBack,
  onHireInstantly,
  initialData,
}) => {
  const [formData, setFormData] = useState<Form2Data>(
    () =>
      initialData || {
        gender: "",
        preferredCountries: [],
        preferredTimeZone: [],
        salaryMin: "",
        salaryMax: "",
      }
  );
  const [errors, setErrors] = useState<Partial<Form2DataErrors>>({});
  const [isLoading, setIsLoading] = useState(false);
  const { countries, countrySearchQuery, setCountrySearchQuery } =
    useCountries();
  const { timeZones, timeZoneSearchQuery, setTimeZoneSearchQuery } =
    useTimeZones();

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      setErrors({});
    }
  }, [initialData]);

  const countryOptions = countries.map((country) => ({
    id: country._id,
    value: country.name,
    label: country.name,
  }));

  const timeZoneOptions = timeZones.map((tz) => ({
    id: tz._id,
    value: tz.name, // make it unique
    label: tz.name,
  }));

  const validateForm = (): boolean => {
    const newErrors: Partial<Form2DataErrors> = {};
    if (!formData.gender.trim()) {
      newErrors.gender = "Gender selection is required";
    }
    if (formData.preferredCountries.length === 0) {
      newErrors.preferredCountries = "Please select at least one country";
    }
    if (formData.preferredTimeZone.length === 0) {
      newErrors.preferredTimeZone = "Please select at least one timezone";
    }
    if (!formData.salaryMin.trim()) {
      newErrors.salaryMin = "Minimum salary is required";
    } else {
      const minValue = parseFloat(formData.salaryMin);
      if (isNaN(minValue) || minValue < 0) {
        newErrors.salaryMin = "Please enter a valid minimum salary";
      }
    }
    if (!formData.salaryMax.trim()) {
      newErrors.salaryMax = "Maximum salary is required";
    } else {
      const maxValue = parseFloat(formData.salaryMax);
      if (isNaN(maxValue) || maxValue < 0) {
        newErrors.salaryMax = "Please enter a valid maximum salary";
      }
    }
    // Validate salary range logic
    if (formData.salaryMin && formData.salaryMax) {
      const minValue = parseFloat(formData.salaryMin);
      const maxValue = parseFloat(formData.salaryMax);

      if (!isNaN(minValue) && !isNaN(maxValue) && minValue > maxValue) {
        newErrors.salaryMax =
          "Maximum salary must be greater than minimum salary";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCountryChange = (selectedCountries: string[]) => {
    setFormData((prev) => ({
      ...prev,
      preferredCountries: selectedCountries,
    }));
    // Clear error when user selects countries
    if (errors.preferredCountries && selectedCountries.length > 0) {
      setErrors((prev) => ({ ...prev, preferredCountries: undefined }));
    }
  };

  const handleTimeZoneChange = (selectedTimeZones: string[]) => {
    setFormData((prev) => ({
      ...prev,
      preferredTimeZone: selectedTimeZones,
    }));
    // Clear error when user selects timezones
    if (errors.preferredTimeZone && selectedTimeZones.length > 0) {
      setErrors((prev) => ({ ...prev, preferredTimeZone: undefined }));
    }
  };

  const handleSelectChange = (field: keyof Form2Data, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user makes selection
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleInputChange = (field: keyof Form2Data, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    // Additional validation for salary range
    if (field === "salaryMin" && formData.salaryMax) {
      const minValue = parseFloat(value);
      const maxValue = parseFloat(formData.salaryMax);

      if (
        !isNaN(minValue) &&
        !isNaN(maxValue) &&
        minValue < maxValue &&
        errors.salaryMax?.includes("greater than")
      ) {
        setErrors((prev) => ({ ...prev, salaryMax: undefined }));
      }
    }
    if (field === "salaryMax" && formData.salaryMin) {
      const minValue = parseFloat(formData.salaryMin);
      const maxValue = parseFloat(value);

      if (
        !isNaN(minValue) &&
        !isNaN(maxValue) &&
        maxValue > minValue &&
        errors.salaryMax?.includes("greater than")
      ) {
        setErrors((prev) => ({ ...prev, salaryMax: undefined }));
      }
    }
  };

  const handleNext = async () => {
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    try {
      await onNext(formData);
    } catch (error) {
      console.error("Error in Form2:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleHireInstantly = async () => {
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    try {
      await onHireInstantly(formData);
    } catch (error) {
      console.error("Error in hire instantly:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-white rounded-lg w-full max-w-md mx-auto">
      <div className="flex justify-between mb-6 items-start">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Hire {title}</h2>
          <p className="text-gray-300 text-sm">
            Please use the below filters to select verified talent from our
            diverse talent pool
          </p>
        </div>
        <div className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-gray-300 text-sm font-medium">
          2/3
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-200">
            Gender *
          </label>
          <Select
            value={formData.gender}
            onValueChange={(value) => handleSelectChange("gender", value)}
          >
            <SelectTrigger className="w-full rounded-full border border-white/40">
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent className="bg-transparent backdrop-blur-md border-gray-600">
              <SelectItem className="text-white" value="male">
                Male
              </SelectItem>
              <SelectItem className="text-white" value="female">
                Female
              </SelectItem>
              <SelectItem className="text-white" value="all">
                All
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && (
            <p className="text-red-400 text-xs mt-1">{errors.gender}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-200">
            Preferred Countries *
          </label>
          <MultiSelectWithBadges
            options={countryOptions}
            selected={formData.preferredCountries}
            onSelectionChange={handleCountryChange}
            placeholder="Select Countries..."
            searchPlaceholder="Search Countries..."
            emptyMessage="No countries found."
            searchQuery={countrySearchQuery}
            onSearchChange={setCountrySearchQuery}
            className="text-muted-foreground rounded-full"
          />
          {errors.preferredCountries && (
            <p className="text-red-400 text-xs mt-1">
              {errors.preferredCountries}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-200">
            Preferred Timezones *
          </label>
          <MultiSelectWithBadges
            options={timeZoneOptions}
            selected={formData.preferredTimeZone}
            onSelectionChange={handleTimeZoneChange}
            placeholder="Select Timezones..."
            searchPlaceholder="Search Timezones..."
            emptyMessage="No timezones found."
            searchQuery={timeZoneSearchQuery}
            onSearchChange={setTimeZoneSearchQuery}
            className="text-muted-foreground rounded-full"
          />
          {errors.preferredTimeZone && (
            <p className="text-red-400 text-xs mt-1">
              {errors.preferredTimeZone}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-200">
            Salary Range Per Hour (USD) *
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Input
                value={formData.salaryMin}
                onChange={(e) => {
                  const numericValue = e.target.value.replace(/[^0-9]/g, "");
                  handleInputChange("salaryMin", numericValue);
                }}
                placeholder="Min Salary"
                className="w-full rounded-full border border-white/40 bg-transparent text-white placeholder:text-gray-400"
              />
              {errors.salaryMin && (
                <p className="text-red-400 text-xs mt-1">{errors.salaryMin}</p>
              )}
            </div>
            <div>
              <Input
                value={formData.salaryMax}
                onChange={(e) => {
                  const numericValue = e.target.value.replace(/[^0-9]/g, "");
                  handleInputChange("salaryMax", numericValue);
                }}
                placeholder="Max Salary"
                className="w-full rounded-full border border-white/40 bg-transparent text-white placeholder:text-gray-400"
              />
              {errors.salaryMax && (
                <p className="text-red-400 text-xs mt-1">{errors.salaryMax}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-12">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-gray-400 hover:text-white hover:bg-gray-800/50 flex items-center gap-1"
          disabled={isLoading}
        >
          <ChevronLeft className="w-4 h-4" />
          Go Back
        </Button>
        <div className="flex gap-2">
          <ShimmerButton onClick={handleHireInstantly} disabled={isLoading}>
            {isLoading ? "Processing..." : "Hire Instantly"}
          </ShimmerButton>
          <CustomButton onClick={handleNext} otherCSSProperty="h-10">
            {isLoading ? "Processing..." : "Call Me Back"}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Form2Page;
