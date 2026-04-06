"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CustomButton from "@/components/shared/customButton";
import Verified from "@/assets/common/verified.png";
import Designation from "@/assets/common/DesignationBag.png";
import { ShimmerButton } from "@/components/shared/customShimmerButton";
import Card6Background from "@/assets/about/backgroundCards/card6.png";
import { ForCompaniesPageAPI } from "@/lib/services/api";
import ViewCandidateProfile from "@/components/forCompaniesPage/ViewCandidateProfile";

// Define the talent interface based on API response
interface Talent {
  id: string;
  user: string;
  name: string;
  profilePicture: string | null;
  summary: string;
  designation: string;
}

interface SkillProps {
  skillTags: string[];
  showTabs: boolean;
  designation?: string;
  secondaryTitle: string;
  secondarySubTitle: string;
}

const TALENTS_PER_PAGE = 8;

export default function SkillsSection({
  skillTags,
  showTabs,
  designation,
  secondaryTitle,
  secondarySubTitle,
}: SkillProps) {
  const [activeTab, setActiveTab] = useState(skillTags[0] || "");
  const [allTalents, setAllTalents] = useState<Record<string, Talent[]>>({});
  const [displayedTalents, setDisplayedTalents] = useState<
    Record<string, number>
  >({});
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [initialLoad, setInitialLoad] = useState(true);
  const [selectedCandidateId, setSelectedCandidateId] = useState<string>("");
  const [openViewProfileDialog, setOpenViewProfileDialog] = useState(false);

  const getDesignation = (inputDesignation: string): string => {
    const designationMap: Record<string, string> = {
      CXOS: "Chief Technology Officer (CTO)",
      "Cyber Security": "Cybersecurity Analyst",
      "Tech Lead": "Technical Lead",
      "Project Managers": "Technical Project Manager",
      "Research Analyst": "Research Analyst",
      "Dev Ops": "DevOps Engineer",
      "Quality Analyst": "Quality Analyst",
      "AI/ML Engineer": "AI Engineer",
      Mentors: "mentor",
    };

    return designationMap[inputDesignation] || inputDesignation;
  };

  // Function to fetch talents based on skill or designation
  const fetchTalents = async (key: string, isSkill: boolean = true) => {
    setError(null);
    try {
      const params = isSkill ? { skill: key } : { designation: key };
      const response =
        await ForCompaniesPageAPI.VerifiedTalentsBySkillOrDesignation(params);
      if (response?.data) {
        setAllTalents((prev) => ({ ...prev, [key]: response.data }));
        setDisplayedTalents((prev) => ({
          ...prev,
          [key]: Math.min(TALENTS_PER_PAGE, response.data.length),
        }));
      } else {
        setAllTalents((prev) => ({ ...prev, [key]: [] }));
        setDisplayedTalents((prev) => ({ ...prev, [key]: 0 }));
      }
    } catch (err) {
      setError("Failed to fetch talents");
      setAllTalents((prev) => ({ ...prev, [key]: [] }));
      setDisplayedTalents((prev) => ({ ...prev, [key]: 0 }));
      console.error("Error fetching talents:", err);
    }
  };

  // Load data when component mounts
  useEffect(() => {
    const loadData = async () => {
      setInitialLoad(true);
      if (showTabs) {
        // Load all skills in parallel for tabs
        const promises = skillTags.map((skill) => fetchTalents(skill, true));
        await Promise.all(promises);
      } else if (designation) {
        // Load only the specific designation for non-tabs view
        await fetchTalents(getDesignation(designation), false);
      }
      setInitialLoad(false);
    };

    loadData();
  }, [skillTags, showTabs, designation]);

  // Handle tab change (only used when showTabs is true)
  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
  };

  // Handle load more
  const handleLoadMore = async (key: string) => {
    const currentDisplayed = displayedTalents[key] || 0;
    const totalTalents = allTalents[key]?.length || 0;
    if (currentDisplayed < totalTalents) {
      setLoadingMore(true);
      setTimeout(() => {
        setDisplayedTalents((prev) => ({
          ...prev,
          [key]: Math.min(currentDisplayed + TALENTS_PER_PAGE, totalTalents),
        }));
        setLoadingMore(false);
      }, 500);
    }
  };

  const handleViewProfile = (candidateId?: string) => {
    if (!candidateId) return;
    setSelectedCandidateId(candidateId);
    setOpenViewProfileDialog(true);
  };

  const getCurrentTalents = (key: string) => {
    const talents = allTalents[key] || [];
    const displayCount = displayedTalents[key] || 0;
    return talents.slice(0, displayCount);
  };

  const canLoadMore = (key: string) => {
    const totalTalents = allTalents[key]?.length || 0;
    const displayed = displayedTalents[key] || 0;
    return displayed < totalTalents;
  };

  // Check if there's any data to display
  const hasDataToShow = () => {
    // Don't show anything during initial loading
    if (initialLoad) return false;
    if (showTabs) {
      // For tabs, check if any skill has talents
      return skillTags.some((skill) => {
        const talents = allTalents[skill];
        return talents && talents.length > 0;
      });
    } else if (designation) {
      // For designation view, check if the designation has talents
      const key = getDesignation(designation);
      const talents = allTalents[key];
      return talents && talents.length > 0;
    }
    return false;
  };

  // Don't render anything if there's no data to show
  if (!hasDataToShow()) {
    return null;
  }

  // Render talent card
  const renderTalentCard = (talent: Talent) => (
    <div
      key={talent.id}
      className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between relative overflow-hidden rounded-2xl p-4 gap-4"
    >
      {/* Background Image */}
      <Image
        src={Card6Background}
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      {/* Main Content */}
      <div className="flex items-start sm:items-center gap-4 w-full relative z-10">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-gray-600 flex-shrink-0 overflow-hidden">
          {talent.profilePicture ? (
            <Image
              src={talent.profilePicture}
              alt={talent.name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-600 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                {talent.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
        {/* Info */}
        <div className="flex flex-col w-full min-w-0">
          <h3 className="text-white font-semibold text-base mb-1 truncate capitalize">
            {talent.name}
          </h3>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="inline-flex items-center gap-1 text-sm text-gray-300">
              <Image src={Verified} alt="verified" className="w-4 h-4" />
              Verified Talent
            </span>
            <span className="inline-flex items-center gap-1 text-sm text-gray-300 capitalize">
              <Image src={Designation} alt="Designation" className="w-4 h-4" />
              {talent.designation}
            </span>
          </div>
          <p className="text-gray-400 text-sm max-w-4xl truncate capitalize">
            {talent.summary}
          </p>
        </div>
      </div>
      <div className="ml-6 flex-shrink-0 self-center z-0">
        <CustomButton onClick={() => handleViewProfile(talent.user)}>
          View Profile
        </CustomButton>
      </div>
    </div>
  );

  // Render content for a specific key (skill or designation)
  const renderContent = (key: string) => (
    <div className="space-y-4">
      {/* Show global loading only on initial page load */}
      {initialLoad && (
        <div className="flex justify-center items-center py-4">
          <div className="text-gray-400">Loading talents...</div>
        </div>
      )}
      {error && !initialLoad && (
        <div className="flex justify-center items-center py-4">
          <div className="text-red-400">{error}</div>
        </div>
      )}
      {!initialLoad &&
        !error &&
        getCurrentTalents(key).length === 0 &&
        allTalents[key] !== undefined && (
          <div className="flex justify-center items-center py-4">
            <div className="text-gray-400">No talents found for {key}</div>
          </div>
        )}
      {!initialLoad && !error && getCurrentTalents(key).map(renderTalentCard)}
      {/* Load More Button */}
      {!initialLoad && !error && canLoadMore(key) && (
        <div className="flex justify-center mt-8">
          <ShimmerButton
            onClick={() => handleLoadMore(key)}
            disabled={loadingMore}
          >
            {loadingMore ? "Loading..." : "Load More"}
          </ShimmerButton>
        </div>
      )}
    </div>
  );

  // Get the correct key to use for rendering when not using tabs
  const getDesignationKey = () => {
    return designation ? getDesignation(designation) : "";
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-4 md:py-4 lg:py-6">
      <div className="flex flex-col items-center mb-8 md:mb-12">
        <div className="text-white font-semibold text-base md:text-lg lg:text-xl text-center">
          {secondaryTitle}
        </div>
        <div className="text-[#D2D0DD] text-sm xs:text-base md:text-lg lg:text-lg text-center max-w-3xl px-4 mt-4">
          {secondarySubTitle}
        </div>
      </div>
      {showTabs ? (
        /* Tab Navigation */
        <div className="w-full mb-8">
          <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            className="w-full p-4"
          >
            <div className="block sm:hidden">
              <Select value={activeTab} onValueChange={handleTabChange}>
                <SelectTrigger className="w-full bg-background border border-gray-600 rounded-lg px-4 py-2 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background border border-gray-600 text-white rounded-lg">
                  {skillTags.map((tab) => (
                    <SelectItem
                      key={tab}
                      value={tab}
                      className="hover:bg-gray-700 data-[state=checked]:bg-brand-600 data-[state=checked]:text-white"
                    >
                      {tab}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <TabsList className="hidden sm:flex w-full bg-transparent border-b border-gray-700 rounded-none h-auto p-0 space-x-0 justify-start overflow-x-auto scrollbar-hide">
              {skillTags.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="hover:cursor-pointer tabs-trigger px-6 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-brand-600 data-[state=active]:text-brand-600 text-gray-400 hover:text-gray-300 bg-transparent data-[state=active]:bg-transparent"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
            {/* Tab Content */}
            {skillTags.map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-8">
                {renderContent(tab)}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      ) : (
        /* No Tabs - Direct Content Display */
        designation && (
          <div className="w-full mb-8 p-2">
            {renderContent(getDesignationKey())}
          </div>
        )
      )}

      {openViewProfileDialog && selectedCandidateId && (
        <ViewCandidateProfile
          open={openViewProfileDialog}
          onClose={() => setOpenViewProfileDialog(false)}
          selectedCandidateId={selectedCandidateId}
        />
      )}
    </section>
  );
}
