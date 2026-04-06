import { GccHero } from "@/components/util/interface";
// SVG imports
import layers from "@/assets/gcc/icons/layers.svg";
import asyncPerson from "@/assets/gcc/icons/a-sync.svg";
import chartBar from "@/assets/gcc/icons/chart-bar-33.svg";
import pieChart from "@/assets/gcc/icons/pie-chart.svg";
import keypad from "@/assets/gcc/icons/keypad.svg";
import trendingUp from "@/assets/gcc/icons/trending-up.svg";
import threeStackLayers from "@/assets/gcc/icons/three-stack-layers.svg";
import trendingUpPurple from "@/assets/gcc/icons/trending-up-purple-shade.svg";
import building from "@/assets/gcc/icons/buildings-purple-shade.svg";
import quaterClock from "@/assets/gcc/icons/quater-clock.svg";
import chatBubble from "@/assets/gcc/icons/chat-buble.svg";
import diamondStack from "@/assets/gcc/icons/diamond-stack.svg";
import person from "@/assets/gcc/icons/person.svg";
import whiteCode from "@/assets/gcc/icons/whiteCode.svg";
import whiteLock from "@/assets/gcc/icons/whiteLock.svg";
import whiteIso from "@/assets/gcc/icons/whiteIso.svg";
import whiteKubernatics from "@/assets/gcc/icons/whiteKubernatics.svg";
import whiteCloud from "@/assets/gcc/icons/whiteCloud.svg";
import whiteSheild from "@/assets/gcc/icons/whiteSheild.svg";
import redirectArrow from "@/assets/gcc/icons/redirectArrow.svg";
import database from "@/assets/gcc/icons/database.svg";
import middleware from "@/assets/gcc/icons/middleware.svg";
import testingSheild from "@/assets/gcc/icons/testing-shield.svg";
import squareChart from "@/assets/gcc/icons/square-chart.svg";
import tabletSmartphone from "@/assets/gcc/icons/tablet-smartphone.svg";
import gridCheck from "@/assets/gcc/icons/grid-2x2-check.svg";
import fileLock from "@/assets/gcc/icons/file-lock.svg";
import networkMesh from "@/assets/gcc/icons/network-mesh.svg";
import fileVideo from "@/assets/gcc/icons/file-video.svg";
import codeSandbox from "@/assets/gcc/icons/codesandbox.svg";
import gitPullRequest from "@/assets/gcc/icons/git-pull-request.svg";
import cloudCog from "@/assets/gcc/icons/cloud-cog.svg";
//Image
import onBoardingExp from "@/assets/gcc/images/on-boarding-exp.webp";
import gccService from "@/assets/gcc/images/gcc-service.webp";
import entitySetupCentreImage from "@/assets/gcc/images/entity-setup-compliace.webp";
import creditBalanceCard from "@/assets/gcc/images/credit-balance-card.webp";
import trafficGrowthCard from "@/assets/gcc/images/traffic-growth-card.webp";
import summaryCard from "@/assets/gcc/images/summary-card.webp";
import CustomSoftwareDevCard from "@/assets/gcc/images/custom-software-developement-card.webp";
import AiAutomationCard from "@/assets/gcc/images/ai-automation-insights-card.webp";
import servicesGCCAdvisory from "@/assets/gcc/images/service-gcc-advisory.webp";
import accessControl from "@/assets/gcc/images/access-control.webp";
import centralizedWorkspace from "@/assets/gcc/images/centralized-workspace.webp";
import infrastructureRate from "@/assets/gcc/images/infrastructre-rate.webp";
import maintenanceUtility from "@/assets/gcc/images/maintenance-utility.webp";
import globe from "@/assets/gcc/images/globe.webp";
import planetsHero from "@/assets/gcc/images/planets-hero.webp";

export const gccSubHeroSectionData = {
  title: "Talent Solution for Your GCC",
  subtitle:
    "Access certified global talent to power your capability center. Scale fast with agile teams tailored to your business goals.",
  cards: [
    {
      _id: "card-01",
      title: "Al-powered recruitment (2M+)",
      text: "AI-powered recruitment engine matching 2M+ candidates with precision.",
      icon: layers,
    },
    {
      _id: "card-02",
      title: "Automated skill evaluations",
      text: "Instantly assess talent with smart, automated skill tests.",
      icon: asyncPerson,
    },

    {
      _id: "card-03",
      title: "On-demand interview management",
      text: "Schedule, manage, and conduct interviews anytime, anywhere.",
      icon: chartBar,
    },
  ],
};

export const onBoardingExperienceSectionData = {
  content: [
    {
      _id: "detail-01",
      heading: "Seamless Onboarding Experience",
      point: [
        "Al-integrated applicant tracking system",

        "Customized onboarding flows",
        "Offer and induction management",
        "HRMS integration",
      ],
    },
    {
      _id: "detail-02",
      heading: "Training",
      point: [
        "Continuous learning with LMS platform",

        "Real-time performance tracking",
        "Al-powered upskilling",
        "Competency Management",
      ],
    },
  ],

  image: onBoardingExp,
};

export const GccServicesSectionData = {
  title: "HYI’s GCC Services",
  subtitle:
    "HY I's GCC-as-a-Service streamlines the setup and management of your Global Capability Centre in India through a unified platform. Whether you're entering new global markets or transitioning from a captive model, our solution gets you up and running in weeks - not months, with complete control, agility, and transparency.",
  image: gccService,
};

export const entitySetupComplianceData = {
  title: "Entity Setup & Compliance Launch",
  subtitle:
    "Ensure smooth setup of your global entity with full legal and regulatory compliance. From incorporation to tax registration, we handle it all seamlessly.",
  image: entitySetupCentreImage,

  leftFeatures: [
    {
      _id: "left-01",
      icon: threeStackLayers,
      title: "Business Incorporation",
      subtitle:
        "Grow your company with the right structure, jurisdiction, and framework.",
    },
    {
      _id: "left-02",
      icon: pieChart,
      title: "Licensing & Permits",
      subtitle:
        "Secure the required approvals to operate seamlessly in your chosen market.",
    },
  ],
  rightFeatures: [
    {
      _id: "right-01",
      icon: keypad,
      title: "Regulatory Compliance",
      subtitle:
        "Ensure adherence to ISO/GDPR/SOC/SOC2 and other local & international laws from day one.",
    },
    {
      _id: "right-02",
      icon: trendingUp,
      title: "Tax & Financial Setup",
      subtitle:
        "Establish tax registrations, banking, and accounting systems for smooth operations.",
    },
  ],
};

export const growthAndWorkSpaceOperationData = {
  companyGrowth: {
    title: "Company Growth",

    points: [
      "We provide expert guidance for organizations transitioning to a fully owned Global Capability Center (GCC) model, ensuring a smooth and structured setup.",
      "From legal and regulatory compliance to operational blueprinting, our team helps you make the shift with confidence.",
      "Integrate cutting-edge IT systems, infrastructure, and enterprise platforms to create a secure and scalable tech backbone",
      "From cloud adoption to cybersecurity frameworks, we ensure your GCC is future-ready and globally integrated.",
    ],
    icon: trendingUpPurple,
    image: trafficGrowthCard,
  },

  operate: {
    title: "Operate",
    points: [
      "From salary processing and tax deductions to compliance with local and international tax regulations, we manage every aspect of payroll so you don’t have to.",
      "Our comprehensive HR policy frameworks ensure clarity, compliance, and consistency in your workplace operations across geographies.",
      "We manage health insurance, retirement plans, wellness programs, and more while ensuring your organization stays fully compliant with all statutory regulations and labor laws.",
    ],
    icon: building,
    image: creditBalanceCard,
  },
  workspaceAsAService: {
    title: "Workspace-As-A-Service",
    points: [
      "Branded, purpose-built office spaces",
      "Ready-to-use infrastructure with no capital expenditure",
      "Choose from top business hubs across India",
      "Scalable options from start-up-sized teams to enterprise setups",
      "Flexible office grades",
    ],
    image: summaryCard,
  },
};

export const completeOfficeExperience = {
  title: "Complete Office Experience Managed End-to-End",
  subTitle:
    "Accelerate innovation with expert global teams tailored to your needs. Streamline operations and scale effortlessly through our GCC model.",

  sections: [
    {
      icon: person,
      title: "Lease Premium Office Space in Prime Commercial Districts",
      subTitle:
        "Lease premium office space in prime commercial districts and elevate your business presence with world-class infrastructure, high-speed connectivity, and flexible lease terms.",
    },
    {
      icon: diamondStack,
      title: "Customized Design Layouts",
      subTitle:
        "Create stunning, on-brand designs tailored to your unique needs. Layouts are fully customizable from colors and fonts to structure and spacing so your visuals reflect your identity perfectly.",
    },
    {
      icon: chatBubble,
      title: "Buildout and Delivery in Just 60-90 Days",
      subTitle:
        "Accelerate your go-to-market strategy with rapid deployment of high-performing teams and infrastructure. From onboarding talent to full-scale execution, we ensure streamlined delivery without compromising on quality or scalability.",
    },
    {
      icon: quaterClock,
      title: "Fully Managed Day-to-Day Operations",
      subTitle:
        "Focus on core business while we handle the rest. From team coordination to task execution to performance tracking and reporting, we take care of all operational responsibilities.",
    },
  ],
};

export const insights = {
  customSoftwareDevelopment: {
    title: "Custom Software Development",
    points: [
      "Develop modular, API-first applications tailored for web, mobile, and cloud environments ensuring flexibility, scalability, and seamless integration.",
      "Utilize agile development methodologies to iterate faster, adapt to changing requirements, and deliver value continuously.",
      "Leverage secure DevOps practices for streamlined deployment, automated testing, and robust CI/CD pipelines.",
      "Ensure long-term success with proactive maintenance, performance monitoring, and comprehensive product support, keeping your solutions reliable and up-to-date.",
    ],
    image: CustomSoftwareDevCard,
  },

  aiAutomationInsights: {
    title: "AI, Automation & Insights",
    points: [
      "Transform raw data into actionable business intelligence with powerful dashboards and real-time insights.",
      "Build and deploy machine learning models that solve real-world problems and optimize decision-making.",
      "Automate repetitive, manual tasks using RPA and advanced AI tools to boost efficiency and accuracy.",
      "Leverage predictive analytics to forecast trends, reduce risks, and stay ahead of the competition.",
    ],
    image: AiAutomationCard,
  },
};

export const cybersecurityData = {
  title: "Cybersecurity & Compliance",
  description:
    "Protect your data and systems with enterprise-grade security tools, protocols, and monitoring. Ensure compliance with global standards like GDPR, ISO, SOC2, and more to build trust and reduce risk. Automated threat detection and identity access management keep your operations secure around the clock.",
  statistics: [
    {
      number: "110+",
      label: "Cybersecurity Website",
    },
    {
      number: "64",
      label: "Company Compliance",
    },
  ],
};

export const variousFeatures = {
  title: "Explore Various amount of features",

  features: [
    {
      icon: whiteLock,
      alt: "whiteLock icon",
      text: "Continuous threat detection and security operations",
    },
    {
      icon: whiteIso,
      alt: "whiteIso icon",
      text: "Ensure readiness for GDPR, ISO, SOC2, and more",
    },
    {
      icon: whiteCode,
      alt: "whiteCode icon",
      text: "Embed secure development practices",
    },
    {
      icon: whiteCloud,
      alt: "whiteCloud icon",
      text: "Secure cloud deployments on AWS, Azure, and GCP",
    },
    {
      icon: whiteKubernatics,
      alt: "whiteKubernatics icon",
      text: "Harden Kubernetes and Docker environments",
    },
    {
      icon: whiteSheild,
      alt: "whiteSheild icon",
      text: "Automate security checks in CI/CD pipelines",
    },
  ],
  redirectFeature: {
    icon: redirectArrow,
    text: "Talk to our expert",
  },
};

export const gccAdvisoryDetails = {
  title: "Services GCC Advisory",
  description:
    " We help organizations define and execute effective Global Capability Center (GCC) right from selecting optimal strategies - locations to building scalable, agile operating models. Our experts align global and local operations, establish robust governance, and drive innovation through digital and AI capabilities all while optimizing costs without compromising quality.",
  image: servicesGCCAdvisory,
  points: [
    "Define & execute GCC setup strategy.",
    "Choose the best location for talent and cost.",
    "Build agile, scalable operating models.",
    "Establish governance and performance metrics.",
    "Align global and local operations.",
    "Optimize costs without compromising quality.",
  ],
};

export const supporTechnologyLandscape = {
  title: "Supported Technology Landscapes",
  description:
    "Supported technology landscapes span across cloud computing, AI/ML, DevOps, cybersecurity, and enterprise software.",

  applicationServices: {
    title: "Application Development, Maintenance & Support Services",
    services: [
      {
        icon: tabletSmartphone,
        title: "Application Development",
        examples: "(Node JS, React JS etc.)",
      },
      {
        icon: database,
        title: "Database",
        examples: "(MongoDB, MS SQL etc.)",
      },
      {
        icon: squareChart,
        title: "App/Production Support",
        examples: "(Unix, Shell etc.)",
      },
      {
        icon: testingSheild,
        title: "Testing",
        examples: "(Selenium, LeadRunner etc.)",
      },
      {
        icon: middleware,
        title: "Middleware",
        examples: "(Oracle Fusion, Tibco etc.)",
      },
      {
        icon: squareChart,
        title: "BI, DW & Enterprise Packages",
        examples: "(BO, SAS, SAP etc.)",
      },
    ],
  },

  infrastructureServices: {
    title: "Infrastructure Managed Services",
    services: [
      {
        icon: gridCheck,
        title: "Data Centre Solution",
        examples: "(Compute, Storage, Database, Private Cloud etc.)",
      },
      {
        icon: fileLock,
        title: "Information Security",
        examples: "(Network, Data, Endpoint, Application)",
      },
      {
        icon: networkMesh,
        title: "Network",
        examples: "(LAN, WAN, Wireless Network Services etc.)",
      },
      {
        icon: fileVideo,
        title: "Collaboration and Video",
        examples: "(Contact Centre, Unified Communication Biz Video etc.)",
      },
    ],
  },
};

export const smartInfrastructure = {
  title: "Smart Infrastructure",
  subTitle:
    "Accelerate innovation with expert global teams tailored to your needs. Streamline operations and scale effortlessly through our GCC model.",
  sections: [
    {
      title: "Centralized Workspace Monitoring and Control",
      subTitle:
        "Manage and oversee all workspace operations from a single, unified platform.",
      image: centralizedWorkspace,
      alt: "Project Monitoring Dashboard",
    },
    {
      title: "24/7 Access Control and Security Systems",
      subTitle:
        "Round-the-clock protection with smart entry, surveillance, and alert systems.",
      image: accessControl,
      alt: "Security Dashboard",
    },
    {
      title: "Maintenance, Utilities, and Repairs",
      subTitle:
        "Keep facilities running smoothly with proactive upkeep and quick fixes.",
      image: maintenanceUtility,
      alt: "Maintenance Dashboard",
    },
    {
      title: "Reliable IT Infrastructure",
      subTitle:
        "Ensure uninterrupted connectivity and performance with robust tech systems.",
      image: infrastructureRate,
      alt: "IT Infrastructure Dashboard",
    },
  ],
};

export const technologyDeliveryInfrastructureData = {
  title: "Technology Delivery and Its Infrastructure",
  subTitle:
    "Streamlined tech delivery backed by robust infrastructure. Ensuring performance, scalability, and seamless integration.",
  cards: [
    {
      _id: "tech-01",
      title: "Design and Migrate Data Centers to the Cloud",
      description: "Seamless data center design and cloud migration.",
      icon: cloudCog,
      alt: "cloudCog icon",
    },
    {
      _id: "tech-02",
      title: "Architect Secure, Scalable Networks",
      description:
        "Tailored experiences based on user behavior and preferences.",
      icon: networkMesh,
      alt: "networkMesh icon",
    },
    {
      _id: "tech-03",
      title: "Source and Deploy IT Assets",
      description:
        "Easily source and deploy IT assets across teams. Streamline setup and scale with efficiency.",
      icon: gitPullRequest,
      alt: "gitPullRequest icon",
    },
    {
      _id: "tech-04",
      title: "Implement Infrastructure as Code (IaC) and Automate with DevOps",
      description: "Implement IaC to streamline infrastructure setup.",
      icon: codeSandbox,
      alt: "codeSandbox icon",
    },
  ],
};

export const gccHeroData: GccHero = {
  title: "AI-Enabled GCC:",
  titleHighlighted: "Smart Talent, Scalable Tech,",
  titleHighlighted2: "Seamless Growth",
  description:
    "Enabling startups, scale-ups, and companies with Automation & AI.",
  mobileViewImage: {
    image: globe,
    alt: "World map with global talent markers",
  },
  mdViewAnimation: {
    image: planetsHero,
    alt: "World map with global talent markers",
  },
};

export const gccServiceData: GccHero = {
  title: "Building a",
  titleHighlighted: "Global Capability Center ",
  titleHighlighted2: "(GCC as a Service)",
  description:
    "HYI.AI helps enterprises scale smarter through expertly managed Global Capability Centers built for talent, innovation, and growth.",
  mobileViewImage: {
    image: globe,
    alt: "World map with global talent markers",
  },
  mdViewAnimation: {
    image: planetsHero,
    alt: "World map with global talent markers",
  },
};

export const gccModelData: GccHero = {
  title: "Build-Operate-Transfer",
  titleHighlighted: "(BOT) GCC Model",
  description:
    "HYI.AI helps enterprises scale smarter through expertly managed Global Capability Centers built for talent, innovation, and growth.",
  mobileViewImage: {
    image: globe,
    alt: "World map with global talent markers",
  },
  mdViewAnimation: {
    image: planetsHero,
    alt: "World map with global talent markers",
  },
};

export const gccManageTalentPoolData: GccHero = {
  title: "GCC Managed  ",
  titleHighlighted: "Talent Pool",
  mergeTitle: true,
  description:
    "HYI.AI helps enterprises scale smarter through expertly managed Global Capability Centers built for talent, innovation, and growth.",
  mobileViewImage: {
    image: globe,
    alt: "World map with global talent markers",
  },
  mdViewAnimation: {
    image: planetsHero,
    alt: "World map with global talent markers",
  },
};
