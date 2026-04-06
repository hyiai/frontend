interface SalaryPreference {
  currency?: string;
  price?: string | number;
}

interface AvailableHours {
  from?: string;
  to?: string;
}

export interface Preference {
  availableHours?: AvailableHours;
  timeZone?: string;
  employmentPreference?: string;
  hoursPerWeek?: string | number;
  desiredSalary?: SalaryPreference;
  desiredSalaryPerMonth?: SalaryPreference;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface TechnicalSkill {
  skill: string;
  experience: string | number;
  _id?: string;
}

export interface Experience {
  companyName: string;
  workSince: string;
  workTill: string;
  designation: string;
  currentlyWorking: boolean;
  description: string;
  totalYearsOfExperience: number;
  _id: string;
}

export interface Project {
  projectTitle: string;
  year: string;
  projectLink: string;
  technicalSkillUsed: string[];
  projectDescription: string;
  _id: string;
}

interface Education {
  university: string;
  degree: string;
  specialization: string;
  passingOutYear: string;
  _id: string;
}

export interface Certification {
  title: string;
  issuedBy: string;
  issuedDate: string;
  website: string;
  uploadCertificate: string | null;
  _id: string;
}

export interface CandidateProfile {
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
  projects: Project[];
  education: Education[];
  certification: Certification[];
  latestDesignation: string;
  otherSkills: string[] | string;
  preference: Preference | string;
  languages: Language[] | string;
  isVerified?: boolean;
  overallExperience?: number;
}