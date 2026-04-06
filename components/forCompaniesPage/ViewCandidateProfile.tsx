import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Briefcase, Calendar, MapPin, X } from "lucide-react";
import { ForCompaniesPageAPI } from "@/lib/services/api";
import CustomButton from "@/components/shared/customButton";
import Verified from "@/assets/common/verified.png";
import Designation from "@/assets/common/DesignationBag.png";
import Link from "next/link";
import ViewProfileGradient from "@/assets/about/ViewProfileGradient.png";
import CandidateProfileIcon from "@/assets/shared/candidate-profile.svg";
import { calculateTotalExperience } from "@/components/util/calculateTotalExperience";

interface ViewProfileDialogProps {
  open: boolean;
  onClose: () => void;
  selectedCandidateId: string;
}

interface SalaryPreference {
  currency?: string;
  price?: string | number;
}

interface AvailableHours {
  from?: string;
  to?: string;
}

interface Preference {
  availableHours?: AvailableHours;
  timeZone?: string;
  employmentPreference?: string;
  hoursPerWeek?: string | number;
  desiredSalary?: SalaryPreference;
  desiredSalaryPerMonth?: SalaryPreference;
}

interface Language {
  language: string;
  proficiency: string;
}

interface TechnicalSkill {
  skill: string;
  experience: string | number;
  _id?: string;
}

interface Experience {
  companyName: string;
  workSince: string;
  workTill: string;
  designation: string;
  currentlyWorking: boolean;
  description: string;
  totalYearsOfExperience: number;
  _id: string;
}

interface CandidateProfile {
  fullName: string;
  user: string;
  profilePicture: string;
  phoneNumber: string;
  country: string;
  city: string;
  profileSummary: string;
  resume: string;
  technicalSkills: TechnicalSkill[] | string;
  experience: Experience[];
  latestDesignation: string;
  otherSkills: string[] | string;
  preference: Preference | string;
  languages: Language[] | string;
  isVerified?: boolean;
  overallExperience?: number;
}

function safeJsonParse<T>(data: unknown, fallback: T): T {
  if (typeof data === "object" && data !== null) {
    return data as T;
  }
  if (typeof data === "string") {
    try {
      return JSON.parse(data) as T;
    } catch {
      return fallback;
    }
  }
  return fallback;
}

export default function ViewShortlistedCandidateProfile({
  open,
  onClose,
  selectedCandidateId,
}: ViewProfileDialogProps) {
  const [candidateData, setCandidateData] = useState<CandidateProfile | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCandidateProfile = async () => {
      if (!selectedCandidateId) return;
      setLoading(true);
      try {
        const response = await ForCompaniesPageAPI.getPublicTalent(
          selectedCandidateId
        );
        setCandidateData(response);
      } catch (error) {
        console.error("Error fetching candidate profile:", error);
      }
      setLoading(false);
    };
    fetchCandidateProfile();
  }, [selectedCandidateId]);

  if (loading) {
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogOverlay className="fixed inset-0 bg-black/90 z-50" />
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95vw] sm:w-11/12 max-w-7xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto p-0 z-50">
          <DialogTitle></DialogTitle>
          <Image
            src={ViewProfileGradient}
            alt="Background"
            fill
            className="object-cover -z-10"
            priority
          />
          <div className="flex flex-col items-center justify-center w-full h-[60vh] relative">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-600 border-solid"></div>
            <p className="mt-4 text-gray-300 text-sm sm:text-base">
              Loading candidate profile...
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (!candidateData) {
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogOverlay className="fixed inset-0 bg-black/90 z-50" />
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95vw] sm:w-11/12 max-w-7xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto p-0 z-50">
          <DialogTitle></DialogTitle>
          <Image
            src={ViewProfileGradient}
            alt="Background"
            fill
            className="object-cover -z-10"
            priority
          />
          <div className="p-4 sm:p-8 text-center relative">
            <p className="text-gray-300 text-sm sm:text-base">
              No candidate data available
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  const preference: Preference = safeJsonParse(candidateData.preference, {});
  const languages: Language[] = safeJsonParse(candidateData.languages, []);
  const technicalSkills: TechnicalSkill[] = safeJsonParse(
    candidateData.technicalSkills,
    []
  );
  const otherSkills: string[] = safeJsonParse(candidateData.otherSkills, []);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/80 z-50" />
      <DialogContent
        showCloseButton={false}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95vw] sm:w-11/12 max-w-7xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto p-0 z-50 border border-white/30 gap-4 md:gap-0"
      >
        <DialogTitle className="pl-4 pt-4 text-lg sm:text-xl font-semibold bg-gradient-to-b from-dark_mode-300 to-dark_mode-400 bg-clip-text text-transparent truncate">
          Public Profile
        </DialogTitle>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:right-4 z-10 p-2 transition-colors"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-dark_mode-400/70" />
        </button>
        <Card className="bg-transparent backdrop-blur-md border border-white/20 m-2 sm:m-4 mb-0 shadow-lg py-0 sm:py-4">
          <div className="p-3 sm:pl-4 sm:pr-4 sm:p-0">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4 border-b border-gray-600/50 pb-3">
              <div className="flex gap-3 sm:gap-4 w-full">
                <div className="relative flex-shrink-0">
                  <Image
                    src={candidateData?.profilePicture || CandidateProfileIcon}
                    alt={candidateData?.fullName || "Profile"}
                    width={68}
                    height={68}
                    className="w-16 h-16 sm:w-18 sm:h-18 rounded-full object-cover border-2 border-gray-500/50"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                    <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-b from-dark_mode-300 to-dark_mode-400 bg-clip-text text-transparent truncate">
                      {candidateData?.fullName}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-2 text-dark_mode-400 text-sm sm:text-base sm:flex-row sm:items-center">
                    <div className="flex items-center gap-2">
                      <Image
                        src={Verified}
                        alt="verified"
                        className="w-3 h-3 sm:w-4 sm:h-4"
                      />
                      <span className="font-medium">Verified Talent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src={Designation}
                        alt="Designation"
                        className="w-3 h-3 sm:w-4 sm:h-4"
                      />
                      <span className="text-dark_mode-400 truncate">
                        {candidateData?.latestDesignation || "Developer"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Link
                    href="https://va.hyi.ai/company-login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CustomButton otherCSSProperty="px-8">Hire Me</CustomButton>
                  </Link>
                </div>
              </div>
            </div>
            {/* Stats Row - Responsive Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 mt-2">
              <div className="flex items-start gap-2 text-gray-300">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-dark_mode-500 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="text-xs text-dark_mode-500 mb-1 capitalize">
                    Available to work
                  </div>
                  <div className="font-medium text-dark_mode-400 text-sm truncate">
                    {preference?.availableHours?.from &&
                    preference?.availableHours?.to
                      ? `${preference.availableHours.from} - ${preference.availableHours.to}`
                      : "N/A"}{" "}
                    {preference?.timeZone && `(${preference.timeZone})`}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-dark_mode-500 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="text-xs text-dark_mode-500 mb-1 capitalize">
                    Employment Preference
                  </div>
                  <div className="font-medium text-dark_mode-400 text-sm truncate">
                    {preference?.employmentPreference || "N/A"}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 text-gray-300">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-dark_mode-500 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="text-xs text-dark_mode-500 mb-1 capitalize">
                    Years of Experience
                  </div>
                  <div className="font-medium text-dark_mode-400 text-sm">
                    {candidateData?.experience
                      ? calculateTotalExperience(candidateData.experience)
                      : "N/A"}
                  </div>
                </div>
              </div>
              {/* {(preference?.employmentPreference ===
                "Part-Time (hourly basis)" ||
                preference?.employmentPreference === "Both") && (
                <div className="flex items-start gap-2 text-gray-300">
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-dark_mode-500 flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="text-xs text-dark_mode-500 mb-1">
                      Desired Salary / Hour
                    </div>
                    <div className="font-medium text-dark_mode-400 text-sm truncate">
                      {preference?.desiredSalary?.price
                        ? `$ ${preference?.desiredSalary?.price}`
                        : "-"}
                    </div>
                  </div>
                </div>
              )}
              {(preference?.employmentPreference === "Full-Time" ||
                preference?.employmentPreference === "Both") && (
                <div className="flex items-start gap-2 text-gray-300">
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-dark_mode-500 flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="text-xs text-dark_mode-500 mb-1">
                      Desired Salary / Month
                    </div>
                    <div className="font-medium text-dark_mode-400 text-sm truncate">
                      {preference?.desiredSalaryPerMonth?.price
                        ? `$ ${preference?.desiredSalaryPerMonth?.price}`
                        : "-"}
                    </div>
                  </div>
                </div>
              )} */}
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-dark_mode-500 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="text-xs text-dark_mode-500 mb-1">
                    Location
                  </div>
                  <div className="font-medium text-dark_mode-400 text-sm truncate">
                    {candidateData?.country || "N/A"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Content - Vertical Layout */}
        <div className="mx-2 sm:mx-4 mb-2 sm:mb-4 space-y-3 sm:space-y-4">
          {/* Summary */}
          <Card className="bg-transparent backdrop-blur-md border border-white/20 p-3 sm:p-4 shadow-lg gap-0">
            <h3 className="font-semibold text-dark_mode-400 border-b border-white/20 pb-1 text-sm sm:text-base">
              Summary
            </h3>
            <p className="text-dark_mode-400 leading-relaxed mt-3 text-sm sm:text-base break-words break-all whitespace-normal">
              {candidateData?.profileSummary || "No summary available"}
            </p>
          </Card>

          {/* Skills */}
          <Card className="bg-transparent backdrop-blur-md border border-white/20 p-3 sm:p-4 shadow-lg gap-0">
            <h3 className="font-semibold text-dark_mode-400 border-b border-gray-600/50 pb-1 text-sm sm:text-base">
              Skills
            </h3>

            <div className="mt-4">
              <h4 className="text-dark_mode-500 font-medium mb-1 text-sm sm:text-base">
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills && technicalSkills.length > 0 ? (
                  technicalSkills.map(
                    (skill: TechnicalSkill, index: number) => {
                      const years = parseFloat(String(skill.experience || "0"));
                      const formattedExperience =
                        years === 1 ? "1 yr" : `${years} yrs`;
                      return (
                        <Badge
                          key={skill._id || index}
                          variant="secondary"
                          className="capitalize bg-gray-700/50 backdrop-blur-sm text-dark_mode-400 border border-gray-600/50 px-2 py-1 text-xs sm:text-sm font-medium rounded-full min-w-16"
                        >
                          {skill.skill} | {formattedExperience}
                        </Badge>
                      );
                    }
                  )
                ) : (
                  <p className="text-dark_mode-500 text-sm">
                    No technical skills specified
                  </p>
                )}
              </div>
            </div>

            {otherSkills && otherSkills.length > 0 && (
              <div className="mt-4">
                <h4 className="text-dark_mode-500 font-medium mb-1 text-sm sm:text-base">
                  Other Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {otherSkills.map((skill: string, index: number) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="capitalize bg-gray-700/30 backdrop-blur-sm text-dark_mode-400 border border-gray-500/50 px-2 sm:px-2 py-1 text-xs sm:text-sm font-medium rounded-full min-w-16"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </Card>

          {/* Languages - Now at the bottom */}
          {languages && languages.length > 0 && (
            <Card className="bg-transparent backdrop-blur-md border border-white/20 p-3 sm:p-4 shadow-lg gap-0">
              <h3 className="font-semibold text-dark_mode-400 border-b border-gray-600/50 pb-1 text-sm sm:text-base">
                Languages
              </h3>
              <div className="space-y-3 mt-3">
                {["Beginner", "Intermediate", "Advanced", "Proficient"].map(
                  (proficiency) => {
                    const filteredLanguages = languages.filter(
                      (lang: Language) => lang.proficiency === proficiency
                    );
                    return filteredLanguages.length > 0 ? (
                      <div key={proficiency}>
                        <h4 className="text-xs sm:text-sm text-dark_mode-500 font-semibold">
                          {proficiency}
                        </h4>
                        <div className="space-y-1">
                          {filteredLanguages.map(
                            (lang: Language, index: number) => (
                              <div
                                key={index}
                                className="text-dark_mode-400 font-medium text-sm"
                              >
                                {lang.language}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    ) : null;
                  }
                )}
              </div>
            </Card>
          )}
          {/* View Full Profile Button */}
          <div className="text-center pt-2 sm:pt-4">
            <Link
              href="https://va.hyi.ai/company-login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomButton>View Full Profile</CustomButton>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
