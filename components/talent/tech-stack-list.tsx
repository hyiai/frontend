// components/TechStackList.tsx
"use client";
import React, { useEffect, useState } from "react";
import TechRowCard from "./tech-row-card";
import { ShimmerButton } from "@/components/shared/customShimmerButton";

type Skill = {
  _id: string;
  skillName: string;
  skillDescription: string;
  skillLogo: string;
};

export default function TechStackList() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(6);

  const LOAD_MORE_COUNT = 8;

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/get-all-talent-resources`
        );
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setSkills(json.data);
        }
      } catch (err) {
        console.error("Error fetching skills:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  const handleLoadMore = () => {
    setDisplayCount(prevCount => prevCount + LOAD_MORE_COUNT);
  };

  const displayedSkills = skills.slice(0, displayCount);
  const hasMoreSkills = displayCount < skills.length;

  return (
    <section className="w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      {loading ? (
        <p className="text-center text-gray-400">Loading skills...</p>
      ) : (
        <div className="space-y-3">
          {displayedSkills.map((skill) => (
            <TechRowCard
              key={skill._id}
              icon={skill.skillLogo}
              title={skill.skillName}
              desc={skill.skillDescription}
              href={`/article/${encodeURIComponent(skill.skillName)}`}
            />
          ))}
        </div>
      )}
      
      {!loading && hasMoreSkills && (
        <div className="flex justify-center mt-8">
          <ShimmerButton onClick={handleLoadMore}>
            Load More
          </ShimmerButton>
        </div>
      )}
    </section>
  );
}