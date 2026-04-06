import { StaticImageData } from "next/image";
import whyHyi from "@/assets/application-solutions/images/why-hyi.webp";

export interface AiExpertiseDataType {
  title: string;
  description: string;
}

export interface AdvanceUseCaseDataType {
  title: string;
  description: string;
}

export interface TargetIndustriesDataType {
  heroData: HeroDataType;
  targetIndustriesDetailsData: TargetIndustriesDetailsDataType;
}

export interface TargetIndustriesDetailsDataType {
  zeroToAi: {
    title: string;
    startupDescription: string;
    enterpriseDescription: string;
    image: StaticImageData | string;
  };
  aiExpertise: {
    title: string;
    subtitle: string;
    items: AiExpertiseDataType[];
    image?: StaticImageData;
  };
  advancedUseCases: {
    title: string;
    subtitle: string;
    items: AdvanceUseCaseDataType[];
    image?: StaticImageData;
  };
}

export interface HeroDataType {
  category: {
    tag: string;
  };
  heading: {
    main: string;
    gradient: string;
  };
  description: string;
  cta: {
    buttonText: string;
    link: string;
  };
  stats: {
    number: string;
    label: string;
  };
  leftSection: {
    title: string;
    subtitle: string;
  };
  rightSection: {
    textOne: string;
    textTwo: string;
  };
  middleSection: {
    topCard: {
      title: string;
    };
    bottomCard: {
      title: string;
      stats: string;
      statSubText: string;
    };
  };
}

export interface WhyHyiDataType {
  title: string;
  description: string;
  image: StaticImageData;
  items: { title: string; description: string }[];
}

export const staticHeroData = {
  category: {
    tag: "Startup & Enterprise",
  },
  cta: {
    buttonText: "Talk to our expert",
    link: "/talk-to-our-expert",
  },
  stats: {
    number: "725M +",
    label: "Industries Worldwide",
  },
  leftSection: {
    title: "Building Smart Solutions for Smarter Startups.",
    subtitle:
      "Step into the forefront of innovation with our AI Startup & Technology solutions.",
  },
  rightSection: {
    textOne: "AI Startup &",
    textTwo: "Technology solutions.",
  },
  middleSection: {
    topCard: {
      title: "Your Partner in Creating Scalable, Future-Proof AI Solutions.",
    },
    bottomCard: {
      title: "Future of Technology",
      stats: "725,4K+",
      statSubText: "Intelligent Technology.",
    },
  },
};

export const whyHyiData: WhyHyiDataType = {
  title: "Why HYI.AI??",
  description:
    "In today's fast-paced digital landscape, businesses must do more than just keep up they must innovate and reinvent to stay ahead. Our application solutions empower you to transform your operations, enhance customer engagement, and unlock new revenue streams through technology-driven innovation.",
  image: whyHyi,
  items: [
    {
      title: "Strategic Approach",
      description: "AI solutions built to align with your business goals.",
    },
    {
      title: "Scalable Architecture",
      description: "Ready for growth without technical debt.",
    },
    {
      title: "Seamless Integration:",
      description: "AI that works with not against your existing systems.",
    },
  ],
};
