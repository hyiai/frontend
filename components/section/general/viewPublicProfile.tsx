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
import { Clock, Briefcase, Calendar, MapPin, X, Unlink } from "lucide-react";
import { ForCompaniesPageAPI } from "@/lib/services/api";
import Verified from "@/assets/common/verified.png";
import Designation from "@/assets/common/DesignationBag.png";
import ViewProfileGradient from "@/assets/about/ViewProfileGradient.png";
import CandidateProfileIcon from "@/assets/shared/candidate-profile.svg";
import { calculateTotalExperience } from "@/components/util/calculateTotalExperience";
import {
  CandidateProfile,
  Certification,
  Experience,
  Language,
  Preference,
  Project,
  TechnicalSkill,
} from "@/lib/types/talent.types";
import Link from "next/link";
import CustomButton from "@/components/shared/customButton";

interface ViewProfileDialogProps {
  open: boolean;
  onClose: () => void;
  selectedCandidateId: string;
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

function formatDateRange(
  workSince: string,
  workTill: string,
  currentlyWorking: boolean
): string {
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    if (dateStr.includes("-") && dateStr.length <= 8) {
      return dateStr;
    }
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };
  const since = formatDate(workSince);
  const till = currentlyWorking ? "Present" : formatDate(workTill);
  return `${since} - ${till}`;
}

export default function ViewPublicProfile({
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
        <DialogOverlay className="fixed inset-0 bg-black/80 backdrop-blur-3xl" />
        <DialogContent className="fixed top-1/2 left-1/2 backdrop-blur-3xl transform -translate-x-1/2 -translate-y-1/2 w-[95vw] sm:w-11/12 max-w-[1350px] max-h-[95vh] sm:max-h-[85vh] overflow-y-auto p-0 z-50">
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
        <DialogOverlay className="fixed inset-0 bg-black/80 backdrop-blur-3xl" />
        <DialogContent className="fixed top-1/2 left-1/2 backdrop-blur-3xl transform -translate-x-1/2 -translate-y-1/2 w-[95vw] sm:w-11/12 max-w-[1350px] max-h-[95vh] sm:max-h-[85vh] overflow-y-auto p-0 z-50">
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
  const hasCertifications =
    Array.isArray(candidateData?.certification) &&
    candidateData.certification.some(
      (cert) =>
        cert.title?.trim() ||
        cert.issuedBy?.trim() ||
        cert.issuedDate ||
        cert.website?.trim() ||
        cert.uploadCertificate
    );

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/80 backdrop-blur-3xl" />
      <DialogContent
        showCloseButton={false}
        className="fixed top-1/2 left-1/2 border border-white/10 backdrop-blur-3xl transform -translate-x-1/2 -translate-y-1/2 w-[95vw] sm:w-11/12 max-w-[1350px] max-h-[95vh] sm:max-h-[82vh] overflow-y-auto p-0 z-50 gap-0"
      >
        <div className="flex items-center justify-between pl-4 pr-4 pt-4 mb-4">
          <DialogTitle className="text-xl font-semibold bg-gradient-to-b from-dark_mode-300 to-dark_mode-400 bg-clip-text text-transparent">
            Public Profile
          </DialogTitle>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-dark_mode-400/70" />
          </button>
        </div>
        {/* Header Card */}
        <Card className="bg-transparent backdrop-blur-3xl border border-white/10 ml-2 mr-2 sm:ml-4 sm:mr-4 mb-4 shadow-lg py-0 sm:py-4">
          <div className="p-3 sm:pl-4 sm:pr-4 sm:p-0">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4 border-b border-white/10 pb-3">
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
                    <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-b from-dark_mode-300 to-dark_mode-400 bg-clip-text text-transparent truncate capitalize">
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
                      <span className="text-dark_mode-400 truncate capitalize">
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
                    <CustomButton otherCSSProperty="px-4">Hire Now</CustomButton>
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
                      : "N/A"}
                    {preference?.timeZone && `${" "} (${preference.timeZone})`}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-dark_mode-500 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="text-xs text-dark_mode-500 mb-1">
                    Employment Preference
                  </div>
                  <div className="font-medium text-dark_mode-400 text-sm truncate capitalize">
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
                  <div className="font-medium text-dark_mode-400 text-sm capitalize">
                    {candidateData?.experience
                      ? calculateTotalExperience(candidateData.experience)
                      : "N/A"}
                  </div>
                </div>
              </div>
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
        {/* Main Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-4 mx-2 sm:mx-4 mb-2 sm:mb-4">
          {/* Left Column - Languages */}
          <div className="lg:w-1/3 xl:w-1/4">
            {languages && languages.length > 0 && (
              <Card className="bg-transparent backdrop-blur-3xl border border-white/10 p-3 sm:p-4 shadow-lg gap-0 h-fit">
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
          </div>
          {/* Right Column - All other content */}
          <div className="lg:w-2/3 xl:w-3/4 space-y-3 sm:space-y-4">
            {/* Summary */}
            <Card className="bg-transparent backdrop-blur-3xl border border-white/10 p-3 sm:p-4 shadow-lg gap-0">
              <h3 className="font-semibold text-dark_mode-400 border-b border-white/10 pb-1 text-sm sm:text-base">
                Summary
              </h3>
              <p className="text-dark_mode-400 leading-relaxed mt-3 text-sm sm:text-base break-words break-all whitespace-normal first-letter:uppercase">
                {candidateData?.profileSummary || "No summary available"}
              </p>
            </Card>
            {/* Skills */}
            <Card className="bg-transparent backdrop-blur-3xl border border-white/10 p-3 sm:p-4 shadow-lg gap-0">
              <h3 className="font-semibold text-dark_mode-400 border-b border-gray-600/50 pb-1 text-sm sm:text-base">
                Skills
              </h3>
              <div className="mt-4">
                <h4 className="text-dark_mode-500 font-medium mb-2 text-sm sm:text-base">
                  Technical Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills && technicalSkills.length > 0 ? (
                    technicalSkills.map(
                      (skill: TechnicalSkill, index: number) => {
                        const years = parseFloat(
                          String(skill.experience || "0")
                        );
                        const formattedExperience =
                          years === 1 ? "1 yr" : `${years} yrs`;
                        return (
                          <Badge
                            key={skill._id || index}
                            variant="secondary"
                            className="capitalize bg-gray-700/50 backdrop-blur-3xl text-dark_mode-400 border border-gray-600/50 px-2 py-1 text-xs sm:text-sm font-medium rounded-full min-w-16"
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
                  <h4 className="text-dark_mode-500 font-medium mb-2 text-sm sm:text-base">
                    Soft Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {otherSkills.map((skill: string, index: number) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="capitalize bg-gray-700/30 backdrop-blur-3xl text-dark_mode-400 border border-gray-500/50 px-2 sm:px-2 py-1 text-xs sm:text-sm font-medium rounded-full min-w-16"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </Card>
            {/* Work Experience */}
            {candidateData?.experience &&
              candidateData.experience.length > 0 && (
                <Card className="bg-transparent backdrop-blur-3xl border border-white/10 p-3 sm:p-4 shadow-lg gap-0">
                  <h3 className="font-semibold text-dark_mode-400 border-b border-gray-600/50 pb-1 text-sm sm:text-base">
                    Work Experience
                  </h3>
                  <div className="space-y-4 mt-4">
                    {candidateData.experience.map((exp: Experience) => (
                      <div key={exp._id} className="space-y-2">
                        <div>
                          <h4 className="text-dark_mode-300 font-semibold text-sm sm:text-base capitalize">
                            {exp.designation}
                          </h4>
                          <p className="text-dark_mode-400 text-sm capitalize">
                            {exp.companyName} |{" "}
                            {formatDateRange(
                              exp.workSince,
                              exp.workTill,
                              exp.currentlyWorking
                            )}
                          </p>
                        </div>
                        {exp.description && (
                          <p className="text-dark_mode-400 text-sm leading-relaxed first-letter:uppercase">
                            {exp.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            {/* Projects */}
            {candidateData?.projects && candidateData.projects.length > 0 && (
              <Card className="bg-transparent backdrop-blur-3xl border border-white/10 p-3 sm:p-4 shadow-lg gap-0">
                <h3 className="font-semibold text-dark_mode-400 border-b border-gray-600/50 pb-1 text-sm sm:text-base">
                  Projects
                </h3>
                <div className="space-y-4 mt-4">
                  {candidateData.projects.map((project: Project) => (
                    <div key={project._id} className="space-y-2">
                      <div>
                        <h4 className="text-dark_mode-300 font-semibold text-sm sm:text-base">
                          {project.year}
                        </h4>
                        <h5 className="text-dark_mode-400 font-medium text-sm capitalize">
                          {project.projectTitle}
                        </h5>
                      </div>
                      {project.projectDescription && (
                        <p className="text-dark_mode-400 text-sm leading-relaxed first-letter:uppercase">
                          {project.projectDescription}
                        </p>
                      )}
                      {project.technicalSkillUsed &&
                        project.technicalSkillUsed.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.technicalSkillUsed.map(
                              (skill: string, index: number) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="capitalize bg-gray-700/50 backdrop-blur-3xl text-dark_mode-400 border border-gray-600/50 px-2 py-1 text-xs font-medium rounded-full"
                                >
                                  {skill}
                                </Badge>
                              )
                            )}
                          </div>
                        )}
                      {project.projectLink && (
                        <div className="flex items-center gap-1 mt-2">
                          <Unlink className="w-3 h-3 text-dark_mode-500" />
                          <a
                            href={project.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 text-xs underline"
                          >
                            Project Link
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            )}
            {/* Certifications */}
            {hasCertifications && candidateData.certification.length > 0 && (
              <Card className="bg-transparent backdrop-blur-3xl border border-white/10 p-3 sm:p-4 shadow-lg gap-0">
                <h3 className="font-semibold text-dark_mode-400 border-b border-gray-600/50 pb-1 text-sm sm:text-base">
                  Certifications
                </h3>
                <div className="space-y-4 mt-4">
                  {candidateData.certification.map((cert: Certification) => (
                    <div key={cert._id} className="space-y-2">
                      <div>
                        <h4 className="text-dark_mode-300 font-semibold text-sm sm:text-base capitalize">
                          {cert.title}
                        </h4>
                        <p className="text-dark_mode-400 text-sm capitalize">
                          {cert.issuedBy} |{" "}
                          {new Date(cert.issuedDate).toLocaleDateString(
                            "en-US",
                            { month: "short", year: "numeric" }
                          )}
                        </p>
                      </div>
                      {cert.website && (
                        <div className="flex items-center gap-1">
                          <Unlink className="w-3 h-3 text-dark_mode-500" />
                          <a
                            href={cert.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 text-xs underline"
                          >
                            Certification Website Link
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
