import { useState, useEffect } from "react";
import { ForCompaniesPageAPI } from "../services/api";

interface Skill {
  _id: string;
  name: string;
}

export const useSkills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [skillSearchQuery, setSkillSearchQuery] = useState("");
  const [skillOpen, setSkillOpen] = useState(false);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const query = skillSearchQuery.length >= 2 ? skillSearchQuery : "";
        const data = await ForCompaniesPageAPI.getAllSkills(query);

        if (data?.success) {
          setSkills(data.data);
        } else {
          setSkills([]);
        }
      } catch (error) {
        console.error("Error fetching skills:", error);
        setSkills([]);
      }
    };

    fetchSkills();
  }, [skillSearchQuery]);

  return {
    skills,
    skillSearchQuery,
    setSkillSearchQuery,
    skillOpen,
    setSkillOpen,
  };
};
