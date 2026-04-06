"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import CustomButton from "../shared/customButton";
import { useSkills } from "@/lib/hooks/useSkills";
import { MultiSelectWithBadges } from "../ui/multi-select";

interface Form1Data {
  skills: string[];
  experience: string;
  talentRequired: string;
  workPreference: string;
  profileStatus: string;
}

interface Form1DataErrors {
  skills: string;
  experience: string;
  talentRequired: string;
  workPreference: string;
  profileStatus: string;
}

interface Form1PageProps {
  title: string;
  onNext: (data: Form1Data) => void;
  onCancel: () => void;
  initialData?: Form1Data;
}

const Form1page: React.FC<Form1PageProps> = ({
  title,
  onNext,
  onCancel,
  initialData,
}) => {
  const [formData, setFormData] = useState<Form1Data>(
    initialData || {
      // Use initialData if provided, otherwise use defaults
      skills: [],
      experience: "",
      talentRequired: "",
      workPreference: "",
      profileStatus: "",
    }
  );

  const [errors, setErrors] = useState<Partial<Form1DataErrors>>({});
  const [isLoading, setIsLoading] = useState(false);
  const { skills, skillSearchQuery, setSkillSearchQuery } = useSkills();

  const skillOptions = skills.map((skill) => ({
    id: skill._id,
    value: skill.name,
    label: skill.name,
  }));

  const validateForm = (): boolean => {
    const newErrors: Partial<Form1DataErrors> = {};
    if (formData.skills.length === 0) {
      newErrors.skills = "Please select at least one skill";
    }
    if (!formData.experience.trim()) {
      newErrors.experience = "Years of experience is required";
    }
    if (!formData.talentRequired.trim()) {
      newErrors.talentRequired = "Number of talent required is required";
    } else {
      const talentCount = parseInt(formData.talentRequired);
      if (isNaN(talentCount) || talentCount < 1) {
        newErrors.talentRequired = "Please enter a valid number (minimum 1)";
      }
    }
    if (!formData.workPreference.trim()) {
      newErrors.workPreference = "Work preference is required";
    }
    if (!formData.profileStatus.trim()) {
      newErrors.profileStatus = "Profile status is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSkillsChange = (selectedSkills: string[]) => {
    setFormData((prev) => ({
      ...prev,
      skills: selectedSkills,
    }));
    // Clear skills error when user selects skills
    if (errors.skills && selectedSkills.length > 0) {
      setErrors((prev) => ({ ...prev, skills: undefined }));
    }
  };

  const handleSelectChange = (field: keyof Form1Data, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user makes selection
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleInputChange = (field: keyof Form1Data, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
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
      console.error("Error in Form1:", error);
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
          1/3
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-200">
            Key Skills *
          </label>
          <MultiSelectWithBadges
            options={skillOptions}
            selected={formData.skills}
            onSelectionChange={handleSkillsChange}
            placeholder="Select Skills..."
            searchPlaceholder="Search skills..."
            emptyMessage="No skills found."
            searchQuery={skillSearchQuery}
            onSearchChange={setSkillSearchQuery}
            className="text-muted-foreground rounded-full"
          />
          {errors.skills && (
            <p className="text-red-400 text-xs mt-1">{errors.skills}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-200">
            Years of Experience *
          </label>
          <Select
            value={formData.experience}
            onValueChange={(value) => handleSelectChange("experience", value)}
          >
            <SelectTrigger className="w-full rounded-full border border-white/40">
              <SelectValue placeholder="Select Years" />
            </SelectTrigger>
            <SelectContent className="bg-transparent backdrop-blur-md border-gray-600">
              <SelectItem className="text-white" value="0-1 Years">
                0-1 Years
              </SelectItem>
              <SelectItem className="text-white" value="1-3 Years">
                1-3 Years
              </SelectItem>
              <SelectItem className="text-white" value="3-5 Years">
                3-5 Years
              </SelectItem>
              <SelectItem className="text-white" value="5-10 Years">
                5-10 Years
              </SelectItem>
              <SelectItem className="text-white" value="10+ Years">
                10+ Years
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.experience && (
            <p className="text-red-400 text-xs mt-1">{errors.experience}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-200">
            No Of Talent Required *
          </label>
          <Input
            value={formData.talentRequired}
            onChange={(e) => {
              const numericValue = e.target.value.replace(/[^0-9]/g, ""); // allow only digits
              handleInputChange("talentRequired", numericValue);
            }}
            placeholder="Enter Number of Talents"
            className="w-full rounded-full border border-white/40 bg-transparent text-white placeholder:text-gray-400"
          />
          {errors.talentRequired && (
            <p className="text-red-400 text-xs mt-1">{errors.talentRequired}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-200">
            Work Preference *
          </label>
          <Select
            value={formData.workPreference}
            onValueChange={(value) =>
              handleSelectChange("workPreference", value)
            }
          >
            <SelectTrigger className="w-full rounded-full border border-white/40">
              <SelectValue placeholder="Select Work Preference" />
            </SelectTrigger>
            <SelectContent className="bg-transparent backdrop-blur-md border-gray-600">
              <SelectItem className="text-white" value="full-time">
                Full Time
              </SelectItem>
              <SelectItem className="text-white" value="part-time">
                Part Time
              </SelectItem>
              <SelectItem className="text-white" value="both">
                Both
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.workPreference && (
            <p className="text-red-400 text-xs mt-1">{errors.workPreference}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-200">
            Profile Status *
          </label>
          <Select
            value={formData.profileStatus}
            onValueChange={(value) =>
              handleSelectChange("profileStatus", value)
            }
          >
            <SelectTrigger className="w-full rounded-full border border-white/40">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent className="bg-transparent backdrop-blur-md border-gray-600">
              <SelectItem className="text-white" value="verified">
                Verified
              </SelectItem>
              <SelectItem className="text-white" value="unVerified">
                Not Verified
              </SelectItem>
              <SelectItem className="text-white" value="both">
                Both
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.profileStatus && (
            <p className="text-red-400 text-xs mt-1">{errors.profileStatus}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between mt-12">
        <Button
          variant="ghost"
          onClick={onCancel}
          className="text-gray-400 hover:text-white hover:bg-gray-800/50"
          disabled={isLoading}
        >
          Cancel
        </Button>
        <CustomButton onClick={handleNext}>
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Saving...
            </>
          ) : (
            "Save & Next"
          )}
        </CustomButton>
      </div>
    </div>
  );
};

export default Form1page;
