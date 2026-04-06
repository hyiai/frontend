import { DynamicRoutes } from "@/lib/services/api";

// Type/Interface declaration
interface LinkItem {
  label: string;
  href: string;
  text?: string;
}

interface headerDataProps {
  nav: {
    value: string;
    title: string;
    heading?: string;
    paragraph?: string;
    outerPadding?: string;
    links?: LinkItem[];
    linkTo?: string;
  }[];
}

export const getTechnologiesSubMenuItems = (dynamicLinks: DynamicRoutes[]) => {
  return {
    heading: "Technologies",
    paragraph:
      "Quickly find the right professionals to grow your team anytime, anywhere.",
    gridCol: "grid-cols-2",
    links: dynamicLinks.map((item: { mainTitle: string; slug: string }) => ({
      label: item.mainTitle,
      href: `/technologies/${item.slug}`,
      text: "",
    })),
  };
};

export const getIndustriesSubMenuItems = (dynamicLinks: DynamicRoutes[]) => {
  return {
    heading: "Industries",
    paragraph: "Focusing on the global industries we serve to accelerate progress and unlock opportunities.",
    gridCol: "grid-cols-2",
    links: dynamicLinks.map((item: { mainTitle: string; slug: string }) => ({
      label: item.mainTitle,
      href: `/industries/${item.slug}`,
      text: "",
    })),
  };
};

export const headerData: headerDataProps = {
  nav: [
    {
      value: "a",
      title: "For Companies",
      heading: "Hire Top Remote Talent",
      paragraph:
        "Access a global pool of highly skilled professionals tailored to your business needs. Leverage our streamlined hiring process to find, vet, and onboard talent quickly. Scale your team efficiently while reducing costs and maintaining top-quality output.",
      outerPadding: "large",
    },
    {
      value: "b",
      title: "For Talents",
      heading: "Work With Top Companies",
      paragraph:
        "Collaborate with leading global enterprises that value innovation and excellence. Gain exposure to industry best practices, cutting-edge technology, and high-impact projects. Build lasting professional relationships that open doors to limitless opportunities.",
      outerPadding: "large",
      links: [
        {
          label: "Job Opportunities",
          text: "Explore a wide range of roles across top companies.",
          href: "https://va.hyi.ai/talent-login",
        },
        {
          label: "How to get hired",
          text: "Learn strategies to land your next role with confidence.",
          href: "/get-hired",
        },
        {
          label: "Resume Builder",
          text: "Craft a standout resume tailored to your dream job.",
          href: "/resume-builder",
        },
        {
          label: "Mock Interview",
          text: "Simulate interviews and get feedback to improve.",
          href: "https://va.hyi.ai/talent-login",
        },
        {
          label: "Talent Support",
          text: "Get help from experts whenever you're stuck.",
          href: "/talent/support",
        },
        {
          label: "Talent Resource",
          text: "Access blogs, tools, and guides every developer needs.",
          href: "/talent/resource",
        },
        // {
        //   label: "Mock Test",
        //   text: "Practice with industry tests to sharpen your skills.",
        //   href: "https://va.hyi.ai/talent-login",
        // },
      ],
    },
    // {
    //   value: "c",
    //   title: "For Enterprises & Startups",
    //   linkTo: "/plan/enterprise-and-startup",
    // },
    {
      value: "d",
      title: "Integrate AI",
      heading: "AI Integration",
      paragraph:
        "Seamlessly embed artificial intelligence into your workflows to enhance efficiency, accuracy, and decision-making. Leverage data-driven insights and automation to transform business operations. Unlock new opportunities by aligning AI capabilities with your strategic goals.",
      outerPadding: "large",
      links: [
        {
          label: "KPI & KRA",
          text: "Automate performance mapping using AI to ensuring accurate goal alignment.",
          href: "/integrate-AI/KPI&KRA",
        },
        {
          label: "Price Tracking",
          text: "At HYI.AI, we leverage cutting-edge AI to simplify and optimize talent selection. ",
          href: "/integrate-AI/price-tracking",
        },
        {
          label: "Strategy & Planning",
          text: "Drive measurable value through strategic AI adoption .",
          href: "/integrate-AI/strategy&planning",
        },
        {
          label: "Project Tracking",
          text: "Tracking tool that delivers real-time updates across all stages of your project. ",
          href: "/integrate-AI/project-tracking",
        },
        {
          label: "Talent Matching",
          text: "Leverage ML to deliver tailored recommendations based on your hiring patterns.",
          href: "/integrate-AI/talent-matching",
        },
      ],
    },
    {
      value: "e",
      title: "Consulting &  Solutions",
      heading: "Consulting &  Solutions",
      paragraph:
        "We provide expert guidance and end-to-end solutions to help businesses harness the power of technology and AI. Our approach combines strategic consulting with innovative tools to address complex challenges and unlock growth opportunities. From planning to execution, we deliver tailored strategies that drive measurable results and long-term success.",
      outerPadding: "large",
      links: [],
    },
    {
      value: "f",
      title: "AGI Training & Certification",
      heading: "",
      linkTo: "/agi",
    }
    // {
    //   value: "e",
    //   title: "GCC",
    //   heading: "Global Capability Center",
    //   paragraph:
    //     "Build and scale a fully managed offshore team without the complexity, cost, or delays.",
    //   outerPadding: "medium",

    //   links: [
    //     {
    //       label: "GCC End To End Solution",
    //       text: "",
    //       href: "/gcc",
    //     },
    //     {
    //       label: "GCC Talent Pool",
    //       text: "",
    //       href: "/gcc/managed-talent-pool",
    //     },
    //     {
    //       label: "GCC Service",
    //       text: "",
    //       href: "/gcc/service",
    //     },
    //     {
    //       label: "BOT GCC Model",
    //       text: "",
    //       href: "/gcc/model",
    //     },
    //     {
    //       label: "Enterprise Plan",
    //       text: "",
    //       href: "/enterprise-plan",
    //     },
    //     {
    //       label: "Startup Plan",
    //       text: "",
    //       href: "/startup-plan",
    //     },
    //   ],
    // },
  ],
};
