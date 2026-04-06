"use client";

import React, { useState } from "react";
import HireInstantlyForm from "@/components/forCompaniesPage/HireInstantlyForm";
import Form1page from "@/components/forCompaniesPage/Form1page";
import Form2Page from "@/components/forCompaniesPage/Form2Page";
import CallMeBackForm from "@/components/forCompaniesPage/CallMeBackForm";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { ForCompaniesPageAPI } from "@/lib/services/api";
import { toast } from "sonner";

interface FormData {
  skills: {
    skills: string[];
    experience: string;
    talentRequired: string;
    workPreference: string;
    profileStatus: string;
  };
  personal: {
    gender: string;
    preferredCountries: string[];
    preferredTimeZone: string[];
    salaryMin: string;
    salaryMax: string;
  };
  contact: {
    fullName: string;
    mobile: string;
    email: string;
    company: string;
    country: string;
    callTime: string;
    timezone: string;
  };
}

interface HiringModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const HiringModal: React.FC<HiringModalProps> = ({
  isOpen,
  onClose,
  title,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    skills: {
      skills: [],
      experience: "",
      talentRequired: "",
      workPreference: "",
      profileStatus: "",
    },
    personal: {
      gender: "",
      preferredCountries: [],
      preferredTimeZone: [],
      salaryMin: "",
      salaryMax: "",
    },
    contact: {
      fullName: "",
      mobile: "",
      email: "",
      company: "",
      country: "",
      callTime: "",
      timezone: "",
    },
  });

  const handleSkillsNext = async (data: FormData["skills"]) => {
    try {
      const apiData = {
        keySkills: data.skills,
        experience: data.experience,
        numberOfTalentRequired: parseInt(data.talentRequired) || 0,
        workPreference: data.workPreference,
        profileStatus: data.profileStatus,
      };
      // Make API call for skills data
      await ForCompaniesPageAPI.createLeadForm(apiData);
      setFormData((prev) => ({ ...prev, skills: data }));
      setCurrentStep(2);
    } catch (error) {
      console.error("Error saving skills data:", error);
      toast.error("Error saving data. Please try again.");
    }
  };

  const handlePersonalNext = async (data: FormData["personal"]) => {
    try {
      const apiData = {
        gender: data.gender,
        preferredCountries: data.preferredCountries,
        preferredTimeZone: data.preferredTimeZone,
        salaryPerHourFrom: parseInt(data.salaryMin.replace("$", "")) || 0,
        salaryPerHourTo: parseInt(data.salaryMax.replace("$", "")) || 0,
        // Include previous skills data
        keySkills: formData.skills.skills,
        experience: formData.skills.experience,
        numberOfTalentRequired: parseInt(formData.skills.talentRequired) || 0,
        workPreference: formData.skills.workPreference,
        profileStatus: formData.skills.profileStatus,
      };
      // Make API call for personal data
      await ForCompaniesPageAPI.createLeadForm(apiData);
      setFormData((prev) => ({ ...prev, personal: data }));
      setCurrentStep(3);
    } catch (error) {
      console.error("Error saving personal data:", error);
      toast.error("Error saving data. Please try again.");
    }
  };

  const handleContactSubmit = async (data: FormData["contact"]) => {
    try {
      const completeApiData = {
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.mobile,
        companyName: data.company,
        country: data.country,
        timeZone: data.timezone,
        preferToCallTime: data.callTime,
        gender: formData.personal.gender,
        preferredCountries: formData.personal.preferredCountries,
        preferredTimeZone: formData.personal.preferredTimeZone,
        salaryPerHourFrom:
          parseInt(formData.personal.salaryMin.replace("$", "")) || 0,
        salaryPerHourTo:
          parseInt(formData.personal.salaryMax.replace("$", "")) || 0,
        keySkills: formData.skills.skills,
        experience: formData.skills.experience,
        numberOfTalentRequired: parseInt(formData.skills.talentRequired) || 0,
        workPreference: formData.skills.workPreference,
        profileStatus: formData.skills.profileStatus,
      };
      // Make final API call with complete data
      await ForCompaniesPageAPI.createLeadForm(completeApiData);
      console.log("Complete form submitted:", completeApiData);
      setFormData((prev) => ({ ...prev, contact: data }));
      // Remove the immediate resetForm() call - let the CallMeBackForm handle success message and auto-close
    } catch (error) {
      console.error("Error submitting form:", error);
      throw error;
    }
  };

  const handleHireInstantly = async (currentFormData: FormData["personal"]) => {
    try {
      // First save the current form data to state
      setFormData((prev) => ({ ...prev, personal: currentFormData }));

      const currentApiData = {
        gender: currentFormData.gender,
        preferredCountries: currentFormData.preferredCountries,
        preferredTimeZone: currentFormData.preferredTimeZone,
        salaryPerHourFrom:
          parseInt(currentFormData.salaryMin.replace("$", "")) || 0,
        salaryPerHourTo:
          parseInt(currentFormData.salaryMax.replace("$", "")) || 0,
        keySkills: formData.skills.skills,
        experience: formData.skills.experience,
        numberOfTalentRequired: parseInt(formData.skills.talentRequired) || 0,
        workPreference: formData.skills.workPreference,
        profileStatus: formData.skills.profileStatus,
      };
      await ForCompaniesPageAPI.createLeadForm(currentApiData);
      console.log("Data saved before hire instantly:", currentApiData);
      setCurrentStep(4);
    } catch (error) {
      console.error("Error saving data before hire instantly:", error);
      toast.error("Error saving data. Please try again.");
    }
  };

  const handleBackFromHireInstantly = () => {
    setCurrentStep(2);
  };

  const handleTalkToExpert = async () => {
    // Make API call with current data before redirecting
    try {
      let apiData = {};
      // Check which step we're on and include appropriate data
      if (currentStep === 3) {
        // From CallMeBackForm - include all data
        apiData = {
          gender: formData.personal.gender,
          preferredCountries: formData.personal.preferredCountries,
          preferredTimeZone: formData.personal.preferredTimeZone,
          salaryPerHourFrom:
            parseInt(formData.personal.salaryMin.replace("$", "")) || 0,
          salaryPerHourTo:
            parseInt(formData.personal.salaryMax.replace("$", "")) || 0,
          keySkills: formData.skills.skills,
          experience: formData.skills.experience,
          numberOfTalentRequired: parseInt(formData.skills.talentRequired) || 0,
          workPreference: formData.skills.workPreference,
          profileStatus: formData.skills.profileStatus,
        };
      } else if (currentStep === 4) {
        // From HireInstantlyForm - include all data
        apiData = {
          gender: formData.personal.gender,
          preferredCountries: formData.personal.preferredCountries,
          preferredTimeZone: formData.personal.preferredTimeZone,
          salaryPerHourFrom:
            parseInt(formData.personal.salaryMin.replace("$", "")) || 0,
          salaryPerHourTo:
            parseInt(formData.personal.salaryMax.replace("$", "")) || 0,
          keySkills: formData.skills.skills,
          experience: formData.skills.experience,
          numberOfTalentRequired: parseInt(formData.skills.talentRequired) || 0,
          workPreference: formData.skills.workPreference,
          profileStatus: formData.skills.profileStatus,
        };
      }
      if (Object.keys(apiData).length > 0) {
        await ForCompaniesPageAPI.createLeadForm(apiData);
        console.log("Data saved before expert consultation:", apiData);
      }
      window.open("/talk-to-our-expert", "_blank");
      onClose();
      resetForm();
    } catch (error) {
      console.error("Error saving data before expert consultation:", error);
      toast.error("Error saving data. Please try again.");
    }
  };

  const handleRegister = async () => {
    // Make API call with current data before redirecting to registration
    try {
      const apiData = {
        gender: formData.personal.gender,
        preferredCountries: formData.personal.preferredCountries,
        preferredTimeZone: formData.personal.preferredTimeZone,
        salaryPerHourFrom:
          parseInt(formData.personal.salaryMin.replace("$", "")) || 0,
        salaryPerHourTo:
          parseInt(formData.personal.salaryMax.replace("$", "")) || 0,
        keySkills: formData.skills.skills,
        experience: formData.skills.experience,
        numberOfTalentRequired: parseInt(formData.skills.talentRequired) || 0,
        workPreference: formData.skills.workPreference,
        profileStatus: formData.skills.profileStatus,
      };
      await ForCompaniesPageAPI.createLeadForm(apiData);
      window.open("https://va.hyi.ai/company-login", "_blank");
      onClose();
      resetForm();
    } catch (error) {
      console.error("Error saving data before registration:", error);
      toast.error("Error saving data. Please try again.");
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({
      skills: {
        skills: [],
        experience: "",
        talentRequired: "",
        workPreference: "",
        profileStatus: "",
      },
      personal: {
        gender: "",
        preferredCountries: [],
        preferredTimeZone: [],
        salaryMin: "",
        salaryMax: "",
      },
      contact: {
        fullName: "",
        mobile: "",
        email: "",
        company: "",
        country: "",
        callTime: "",
        timezone: "",
      },
    });
  };

  const handleCancel = () => {
    resetForm();
    onClose();
  };

  const renderCurrentForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <Form1page
            title={title}
            onNext={handleSkillsNext}
            onCancel={handleCancel}
            initialData={formData.skills}
          />
        );
      case 2:
        return (
          <Form2Page
            title={title}
            onNext={handlePersonalNext}
            onBack={() => setCurrentStep(1)}
            onHireInstantly={handleHireInstantly}
            initialData={formData.personal}
          />
        );
      case 3:
        return (
          <CallMeBackForm
            onSubmit={handleContactSubmit}
            onBack={() => setCurrentStep(2)}
            onTalkToExpert={handleTalkToExpert}
            onClose={onClose}
            resetForm={resetForm}
            initialData={formData.contact}
          />
        );
      case 4:
        return (
          <HireInstantlyForm
            onRegister={handleRegister}
            onTalkToExpert={handleTalkToExpert}
            onBack={handleBackFromHireInstantly}
          />
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/80" />
      <DialogContent
        showCloseButton={false}
        className="w-[95%] md:w-fit h-fit max-h-[90vh] overflow-y-auto rounded-2xl p-4 sm:p-6 backdrop-blur-2xl bg-white/5 border border-white/20"
      >
        <DialogTitle className="sr-only"></DialogTitle>
        <div className="relative z-10">{renderCurrentForm()}</div>
      </DialogContent>
    </Dialog>
  );
};

export default HiringModal;
