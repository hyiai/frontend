// import connect_01 from "@/assets/landingPage/images/Card-img-01.png";
// import connect_02 from "@/assets/landingPage/images/Card-img-02.png";
import connectJSON_01 from "@/lotties/connectTalent-01.json";
import connectJSON_02 from "@/lotties/connectTalent-02.json";
import connectJSON_03 from "@/lotties/connectTalent-03.json";
// import connect_03 from "@/assets/landingPage/images/Card-img-03.png";

import FeatureImage from "@/assets/landingPage/images/Feature-Image.png";
import lightning from "@/assets/landingPage/icons/feature-lightning.svg";

import resumeBuilderImage from "@/assets/landingPage/images/Resume-Builder.png";

import CaseStudy_01 from "@/assets/landingPage/images/CaseStudy-01.png";
import CaseStudy_02 from "@/assets/landingPage/images/CaseStudy-02.png";
import CaseStudy_03 from "@/assets/landingPage/images/CaseStudy-03.png";

import testimonials_01 from "@/assets/landingPage/images/testimonials-01.png";
import testimonials_02 from "@/assets/landingPage/images/testimonials-02.png";
import testimonials_03 from "@/assets/landingPage/images/testimonials-03.png";
import testimonials_04 from "@/assets/landingPage/images/testimonials-04.png";
import testimonials_05 from "@/assets/landingPage/images/testimonials-05.png";
import testimonials_06 from "@/assets/landingPage/images/testimonials-06.png";

import python from "@/assets/landingPage/softwares/python.svg";
import bitbucket from "@/assets/landingPage/softwares/bitbucket.svg";
import jQuery from "@/assets/landingPage/softwares/jQuery.svg";
import kayako from "@/assets/landingPage/softwares/kayako.svg";
import atlassian from "@/assets/landingPage/softwares/atlassian.svg";
import asana from "@/assets/landingPage/softwares/asana.svg";
import ticket from "@/assets/landingPage/softwares/ticket.svg";
import github from "@/assets/landingPage/softwares/github.svg";
import adobe from "@/assets/landingPage/softwares/adobe.svg";
import framer from "@/assets/landingPage/softwares/framer.svg";
import autodesk from "@/assets/landingPage/softwares/autodesk.svg";
import vs_code from "@/assets/landingPage/softwares/vs_code.svg";
import lightroom from "@/assets/landingPage/softwares/lightroom.svg";
import css3 from "@/assets/landingPage/softwares/css3.svg";

import html5 from "@/assets/landingPage/softwares/html5.svg";
import jira_serviceDesk from "@/assets/landingPage/softwares/jira_serviceDesk.svg";
import losant from "@/assets/landingPage/softwares/losant.svg";
import mailchimp from "@/assets/landingPage/softwares/mailchimp.svg";
import microsoft from "@/assets/landingPage/softwares/microsoft.svg";
import octoface from "@/assets/landingPage/softwares/octoface.svg";
import one_drive from "@/assets/landingPage/softwares/one_drive.svg";
import confluence from "@/assets/landingPage/softwares/confluence.svg";
import photoshop from "@/assets/landingPage/softwares/photoshop.svg";
import figma from "@/assets/landingPage/softwares/figma.svg";
import sketch from "@/assets/landingPage/softwares/sketch.svg";
import illustrator from "@/assets/landingPage/softwares/illustrator.svg";
import javaScript from "@/assets/landingPage/softwares/javaScript.svg";
import linux from "@/assets/landingPage/softwares/linux.svg";

export const connectWithDeveloperData = {
  heading: "Connect With Top Remote Developers Instantly",
  paragraph:
    "HYI.AI connects you with pre-vetted remote developers skilled across top languages, frameworks, and technologies. Browse our most in-demand specializations below.",

  cards: [
    {
      _id: "card-01",
      title: "Project Creation, Task Management and Communication",
      text: "HYI.AI has seamless project management features. The user can monitor, organize, and schedule projects with ease using in-built messaging features to facilitate easy interaction among team members. This feature puts all the users on one platform and the same page in real time.",
      img: connectJSON_01,
    },
    {
      _id: "card-02",
      title: "Make work happen fast",
      text: "HYI.AI is focused on efficient onboarding and deployment. With its approach of connecting clients with specialists, the platform enables work to commence without the delay resulting from traditional hiring procedures. Real-time proof of concept is enabled and outcomes are achieved earlier.",
      img: connectJSON_02,
    },
    {
      _id: "card-03",
      title: "Dedicated relationship manager",
      text: "All the clients share one-point of contact, who provides customized services during the project. The asset scheduling, project management, and monitoring by the relationship manager ensure the client needs are fulfilled at any point of time and hence convenient and customized.",
      img: connectJSON_03,
    },
  ],
};

export const mvpData = {
  heading: "What separates us from others.",
  paragraph:
    "At HYI.AI, we go beyond the ordinary by delivering innovative solutions, personalized experiences, and unparalleled support, ensuring your business achieves lasting success in a competitive landscape.",

  firstFeatures: [
    {
      id: 1,
      image: () => import("@/lotties/mvp-01.json"),
      label: "Project Management",
      heading: "Effortless Project Management with HYI.AI",
      paragraph:
        "Plan, track, and manage your projects seamlessly with HYI.AI’s built-in project management tools. Boost team productivity and keep your workflow organized from start to finish.",
    },
    {
      id: 2,
      image: () => import("@/lotties/mvp-03.json"),
      label: "Mock Interview",
      heading: "Boost Your Confidence with Mock Interviews",
      paragraph:
        "Practice real-world interview scenarios to build confidence and reduce anxiety. Refine your communication skills to clearly express your thoughts and achievements. Walk into your next interview fully prepared.",
    },
  ],

  SecondFeatures: [
    {
      id: 3,
      image: () => import("@/lotties/mvp-02.json"),
      label: "Communication",
      heading: "Stay Connected with Built-in Messaging",
      paragraph:
        "Communicate effortlessly with your team using HYI.AI’s integrated messaging platform. Send direct messages or group updates to keep everyone aligned and informed in real-time.",
    },
    {
      id: 4,
      image: () => import("@/lotties/mvp-04.json"),
      label: "Mock Test",
      heading: "Master Your Craft with Mock Tests",
      paragraph:
        "Sharpen your coding and design skills with a wide range of mock tests designed to simulate real-world challenges. Track your progress over time, close knowledge gaps, and grow effectively in your tech journey.",
    },
  ],
};

export const featureData = {
  label: "Why choose HYI.AI?",
  labelIcon: lightning,
  heading: "Amazing Features For To Make Your Work Easier.",
  text: "We empower startups, scale-ups, and established companies by integrating Automation and AI into their workflows. Our solutions streamline operations, enhance efficiency, and drive smarter decision-making, enabling businesses to innovate and grow faster in a competitive landscape.",
  heroImage: FeatureImage,
  featureBlock: [
    {
      _id: "block-01",
      features: [
        {
          _id: "feature-01",
          title: "Access verified Talents",
          text: "Connect with thoroughly vetted professionals, verified for their domain expertise, communication skills, and reliability.",
        },
        {
          _id: "feature-02",
          title: "Flexible Hiring Options",
          text: "Choose full-time, part-time, or project-based hiring without long-term commitments, while accessing top-tier talent.",
        },
        {
          _id: "feature-03",
          title: "Relationship Manager",
          text: "Get one-on-one support with a dedicated expert who will work alongside you throughout the process.",
        },
        {
          _id: "feature-04",
          title: "Mentorship",
          text: "Gain insights from experienced mentors who guide you through key decisions, business growth, and strategic scaling.",
        },
      ],
    },
    {
      _id: "block-02",
      features: [
        {
          _id: "feature-01",
          title: "Scalability & Efficiency",
          text: "Quickly adapt to changing business needs with a flexible talent pool-perfect for startups scaling at speed.",
        },
        {
          _id: "feature-02",
          title: "Flexible Engagements",
          text: "Hire for specific roles or timelines with no binding contracts-ideal for agile teams and fast-moving projects.",
        },
        {
          _id: "feature-04",
          title: "Cost-Efficiency",
          text: "Only pay for what you need. No overheads, hidden fees, or unnecessary long-term hiring or recruitment costs.",
        },
        {
          _id: "feature-03",
          title: "Accountability",
          text: "We take full ownership of outcomes, maintaining transparency and dependability on every project.",
        },
      ],
    },
  ],
};

export const resumeBuilderData = {
  heading: "Resume Builder With AI Enabled Content",
  text: "Create your resume easily with our free builder and professional templates.",
  subHeading: "3 Steps. 5 Minutes.",
  subText:
    "Getting that dream job can seem like an impossible task. We’re here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals. With professionally designed templates, AI-powered suggestions, and industry-specific tips, you can craft a resume that truly stands out.\n Whether you're just starting your career or aiming for your next big move, our platform helps you showcase your skills with clarity and confidence. No guesswork. No outdated formats. Just a smarter way to present your story and land interviews faster.",
  image: resumeBuilderImage,
};

export const caseStudyData = {
  heading: "Case Studies",
  text: "At HYI.AI, we go beyond the ordinary by delivering innovative solutions, personalized experiences, and unparalleled support, ensuring your business achieves lasting success in a competitive landscape.",
  cards: [
    {
      _id: "case-01",
      slug: "hyi-ai-marketplace-01",
      image: CaseStudy_01,
      heading: "HYI.AI: A Marketplace Connecting Talents and Businesses",
      text: "HYI.AI is an India-based marketplace that connects startups, entrepreneurs, and businesses with certified, pre-vetted virtual professionals worldwide. With access to over 5 million skilled talents, the platform enables companies to hire based on specific requirements, offering roles ranging from remote developers to technical co-founders and startup mentors.",
    },
    {
      _id: "case-02",
      slug: "hyi-ai-marketplace-02",
      image: CaseStudy_02,
      heading:
        "HYI.AI: Your Global Team, Ready from Day One - Through Our Global Capability Centre (GCC as a Service)",
      text: "HYI.AI also supports enterprises through expertly managed Global Capability Centres (GCCs), offering flexible, customized remote or on-site solutions to meet specific business needs.",
    },
    {
      _id: "case-03",
      slug: "hyi-ai-marketplace-03",
      image: CaseStudy_03,
      heading:
        "HYI.AI Virtual Assistance Platform: Competitor Analysis & Market Differentiation",
      text: "HYI.AI goes beyond matching talents to roles. Recognizing a key gap beyond onboarding and verification, they go further by providing personalized support and continuous engagement.",
    },
  ],
};

export const GCCData = {
  label: "Global Capability Centers",
  heading: "AI-enabled GCC: smart talent, scalable tech, seamless growth.",
  text: "Enabling startups, scale-ups, and companies with Automation & Al.",
  cards: [
    {
      _id: "card-02",
      title: "Workspace-as-a-Service",
      text: "We offer smart, flexible workspaces designed to adapt to your team's evolving needs-whether you're a growing startup, a scaling tech team, or an established enterprise. Our spaces are built to foster collaboration, boost productivity, and support hybrid or remote-first workflows with ease.",
    },
    {
      _id: "card-03",
      title: "Entity Setup & Compliance",
      text: "We provide comprehensive, end-to-end support that includes entity setup, payroll management, compliance handling, and IT infrastructure deployment. Our goal is to ensure a seamless operational foundation so you can focus on scaling your business with confidence.",
    },
    {
      _id: "card-04",
      title: "Technology Delivery",
      text: "Access a certified pool of global talent to power, scale, and future-proof your Global Capability Center with confidence. From specialized skills to agile teams, we provide the expertise needed to drive innovation, efficiency, and sustainable growth.",
    },
    {
      _id: "card-05",
      title: "Services GCC Advisory",
      text: "We build agile and scalable Global Capability Centers (GCCs) that serve as strategic hubs for innovation, operational excellence, and digital transformation. Our end-to-end solutions are designed to accelerate growth, enhance efficiency, and empower businesses to stay ahead in a rapidly evolving global market.",
    },
    {
      _id: "card-06",
      title: "Talent Solutions",
      text: "Hire smart, onboard fast, and train right with our comprehensive end-to-end talent solutions designed to streamline your hiring process, accelerate team readiness, and ensure long-term success through the right talent fit and continuous development.",
    },
  ],
};

export const testimonialsData = {
  heading: "Talent Testimonials",
  text: "At HYI.AI, we go beyond the ordinary by delivering innovative solutions, personalized experiences, and unparalleled support, ensuring your business achieves lasting success in a competitive landscape.",
  cards: [
    {
      _id: "user-01",
      image: testimonials_01,
      name: "Adithya M",
      designation: "Lead Developer",
      text: "“HYI.AI provided me with the level of freedom whether to have part time projects by the hour or pursue a full time job. The flexible contracts and the secured payments made the freelance journey stress free.”",
    },
    {
      _id: "user-02",
      image: testimonials_02,
      name: "Kowshik",
      designation: "Full Stack Developer",
      text: "“I have been able to be connected to HIGH-IMPACT global projects as a certified developer with HYI.AI. I learned a very beneficial experience and my portfolio grew fast because of challenges I took in the real world.”",
    },
    {
      _id: "user-03",
      image: testimonials_03,
      name: "Navya",
      designation: "Software Developer",
      text: "“The onboarding and verification process was quick and I was allocated to a marketable project shortly after certification- time was not wasted in trying to apply or waiting several months in the waiting list.”",
    },
    {
      _id: "user-04",
      image: testimonials_04,
      name: "Rahul",
      designation: "Front End Developer",
      text: "“The Mock tests and the interviews with experts at HYI.AI compelled me to improve my coding and designing capabilities. The feedback was very constructive and this made me have confidence to build even more.”",
    },
    {
      _id: "user-05",
      image: testimonials_05,
      name: "Tonmoyee",
      designation: "Research Analyst",
      text: "“Cooperation with U.S. clients on the basis of HYI.AI introduced me to a different range of challenges and the newest technologies. Their expansiveness internationally changes the game of career advancement.”",
    },
    {
      _id: "user-06",
      image: testimonials_06,
      name: "Shashidhara",
      designation: "Lead Developer",
      text: "“A relationship manager of their own really stood HYI.AI out. They continue to guide and give personal support that helps me direct my capabilities to projects that will be of interest and competence to me.”",
    },
  ],
};

export const techSwiperOne = [
  {
    _id: "tech-01",
    software: python,
  },
  {
    _id: "tech-02",
    software: bitbucket,
  },
  {
    _id: "tech-03",
    software: jQuery,
  },
  {
    _id: "tech-04",
    software: kayako,
  },
  {
    _id: "tech-05",
    software: atlassian,
  },
  {
    _id: "tech-06",
    software: asana,
  },
  {
    _id: "tech-07",
    software: ticket,
  },
  {
    _id: "tech-08",
    software: github,
  },
  {
    _id: "tech-09",
    software: adobe,
  },
  {
    _id: "tech-10",
    software: framer,
  },
  {
    _id: "tech-11",
    software: autodesk,
  },
  {
    _id: "tech-12",
    software: vs_code,
  },
  {
    _id: "tech-13",
    software: lightroom,
  },
  {
    _id: "tech-14",
    software: css3,
  },
];

export const techSwiperTwo = [
  {
    _id: "tech-01",
    software: html5,
  },
  {
    _id: "tech-02",
    software: jira_serviceDesk,
  },
  {
    _id: "tech-03",
    software: losant,
  },
  {
    _id: "tech-04",
    software: mailchimp,
  },
  {
    _id: "tech-05",
    software: microsoft,
  },
  {
    _id: "tech-06",
    software: octoface,
  },
  {
    _id: "tech-07",
    software: one_drive,
  },
  {
    _id: "tech-08",
    software: confluence,
  },
  {
    _id: "tech-09",
    software: photoshop,
  },
  {
    _id: "tech-10",
    software: figma,
  },
  {
    _id: "tech-11",
    software: sketch,
  },
  {
    _id: "tech-12",
    software: illustrator,
  },
  {
    _id: "tech-13",
    software: javaScript,
  },
  {
    _id: "tech-14",
    software: linux,
  },
];
