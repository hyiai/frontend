import { StaticImageData } from "next/image";

interface InfoCard {
  iconUrl: string;
  title: string;
  description: string;
  _id: string;
}

export interface TalentCard {
  talentImage: string;
  talentName: string;
  talentDesignation: string;
  talentDescription: string;
  _id: string;
}

interface HiringStep {
  stepTitle: string;
  stepDescription: string;
  _id: string;
}

export interface Technology {
  _id: string;
  name: string;
  logo: string;
  description: string;
  featured: boolean;
}

export interface DataProps {
  _id: string;
  slug: string;
  bannerHeading: string;
  title: string;
  subTitle: string;
  bannerImg: string;
  infoCardHeading: string;
  infoCards: InfoCard[];
  hireTalentHeading: string;
  hireTalentDescription: string;
  hireTalentCard: TalentCard[];
  secondaryTitle: string;
  secondarySubTitle: string;
  skills: string[];
  technology: Technology[];
  showTabs: boolean;
  stepsHeading: string;
  hiringSteps: HiringStep[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// Hero Data Interface for GCC pages
export interface GccHero {
  title: string;
  titleHighlighted: string;
  titleHighlighted2?: string;
  mergeTitle?: boolean;
  description?: string;
  mobileViewImage: {
    image: string | StaticImageData;
    alt: string;
  };
  mdViewAnimation: {
    image: string | StaticImageData;
    alt: string;
  };
}

// Course Content Interface for AGI Training
export interface CourseContent {
  slug: string;
  level: string;
  title: string;
  duration: string;
  description: string[];
  price: string;
  Deliverables: string[];
  goals: string[];
}

export interface AGITrainingDataType {
  courseContent: CourseContent[];
}
