
import heroImage from "@/assets/application-solutions/images/apps-hero.webp";
import exportProductAi from "@/assets/application-solutions/images/export-product-ai.webp";
import { StaticImageData } from "next/image";

export interface TechnologyPageData {
    sectionOneData: SectionOneType;
    sectionTwoData: SectionTwoDataType;
    sectionThreeData: SectionThreeDataType;
    sectionFourData: SectionFourDataType;
}



export interface AccordianDataType {
    id: string,
    title: string,
    items: AccordianItemType[],
    result: string

}

export interface AccordianItemType {
    label: string,
    description: string
}

export interface PartnerWithUs {
    title: string,
    description: string,
    items: {
        label: string,
    }[]
}

export interface SectionOneType {
    title: string;
    description: string;
    coverImage: StaticImageData | string;
    alt: string;
}

export interface SectionTwoDataType {
    title: string,
    subTitle: string,
    smallerCards: { value: string; description: string }[]
}

export interface SectionThreeDataType {
    title: string,
    para: string[],
    image: StaticImageData | string,
    imgAlt: string

}

export interface SectionFourDataType {
    title1: string,
    title2: string,
    description: string
    accordianData: AccordianDataType[]
}


export const accordionData: AccordianDataType[] = [
    {
        id: "0",
        title: "Application Development - Built for the World",
        items: [
            {
                label: "Custom Application Development:",
                description: "Tailored for unique business needs in any industry"
            },
            {
                label: "Enterprise Applications:",
                description: "Scalable, multi-location solutions for global operations"
            },
            {
                label: "Mobile App Development:",
                description: "Native, hybrid, and cross-platform apps for worldwide audiences"
            },
            {
                label: "Web Application Development:",
                description: "High-performance, multilingual, and globally accessible solutions"
            },
            {
                label: "Cloud-Native Applications:",
                description: "Leveraging AWS, Azure, and Google Cloud for worldwide scalability"
            }
        ],
        result: "Applications that perform flawlessly, whether your users are in New York, Tokyo, or Dubai."
    },
    {
        id: "1",
        title: "Cybersecurity – Global Threat Defense",
        items: [
            {
                label: "Cyber threats don't respect borders:",
                description: "neither do our defenses."
            },
            {
                label: "Global Threat Monitoring & Response:",
                description: "24/7 protection across time zone"
            },
            {
                label: "Application Security:",
                description: "Secure code development, penetration testing, and compliance with global regulations (GDPR, HIPAA, ISO 27001)"
            },
            {
                label: "Data Privacy & Encryption:",
                description: "Protect sensitive data across borders"
            },
            {
                label: "Disaster Recovery & Business Continuity:",
                description: "Ensure uptime and trust, anywhere in the world"
            }
        ],
        result: "Security that travels with your business, wherever it grows"
    },
    {
        id: "2",
        title: "Application Modernization – From Legacy to Global Leader",
        items: [
            {
                label: "",
                description: "We modernize outdated systems so your business can lead in today's competitive, borderless market."
            },
            {
                label: "Legacy System Transformation:",
                description: "Upgrade tech stacks for global integration"
            },
            {
                label: "UI/UX Redesign:",
                description: "Create culturally adaptive interfaces for international users"
            },
            {
                label: "API & System Integrations:",
                description: "Connect operations across continents seamlessly"
            }
        ],
        result: "Modern, high-speed applications that keep pace with global innovation."
    },
    {
        id: "3",
        title: "Managed Application Services – Always-On, Anywhere",
        items: [
            {
                label: "",
                description: "We manage your applications so your teams can focus on innovation, not maintenance."
            },
            {
                label: "24/7 Global Monitoring & Support:",
                description: "Follow-the-sun support model"
            },
            {
                label: "Performance Optimization:",
                description: "Consistent speed and reliability worldwide"
            },
            {
                label: "Proactive Maintenance & Updates:",
                description: "Keep your apps future-proof"
            }
        ],
        result: "Always-available, high-performance applications with zero downtime risk"
    }
];




export const sectionOneData: SectionOneType = {
    title: "Application Solutions",
    description: "HYI.AI delivers end-to-end application solutions designed for modern Global Capability Centers (GCCs), startups, and enterprises. From seamless hiring to efficient workforce operations, our AI-powered platform integrates tools that drive productivity, visibility, and collaboration.",
    coverImage: heroImage,
    alt: "group of apps icons"
}

export const sectionTwoData: SectionTwoDataType = {
    title: "Application Solutions Now",
    subTitle: "Our AI-powered platform now integrates tools that drive productivity, visibility, and collaboration.",
    smallerCards: [
        {
            value: "72%",
            description:
                "of businesses report improved efficiency after implementing tailored application solutions.",
        },
        {
            value: "45%",
            description:
                "reduction in operational costs when leveraging automation-driven applications.",
        },
        {
            value: "3–4x",
            description:
                "faster go-to-market for companies adopting agile application development and deployment.",
        },
        {
            value: "$8B+",
            description:
                "annual global spending on custom enterprise application solutions.",
        },
    ]


}

export const sectionThreeData: SectionThreeDataType = {
    title: "Global Innovation. Secure Performance. Future‑Ready Technology",
    para: [
        "In the digital economy, your applications are more than tools—they&apos;re the heartbeat of your business.At HYI.AI, we deliver world‑class Application Solutions that empower organizations across the globe to innovate faster, operate securely, and scale effortlessly.",
        "From custom application development to cybersecurity, our solutions are built to meet the demands of diverse industries, geographies, and user expectations.Whether you & apos; re a startup launching your first product or a multinational enterprise modernizing legacy systems, we are your trusted technology partner."
    ],
    image: exportProductAi,
    imgAlt: "applications illustration"

}

export const sectionFourData: SectionFourDataType = {
    title1: "Our Worldwide",
    title2: "Services Portfolio",
    description: "In today&apos;s fast-paced digital landscape, your applications must do more than just work  they must deliver seamless experiences, protect your data, and adapt to changing demands. Our Application Solutions empower businesses to innovate, operate securely, and scale without limits.",
    accordianData: accordionData,
}


export const partnerWithUsGloballyData = {
    title: "Why Partner With Us Globally?",
    description: "In today's fast-paced digital landscape, businesses must do more than just keep up they must innovate and reinvent to stay ahead. Our application solutions empower you to transform your operations, enhance customer engagement, and unlock new revenue streams through technology-driven innovation.",
    items: [
        {
            label: "Worldwide Delivery Capability – Serving clients in multiple continents and industries",
        },
        {
            label: "Security-First Philosophy – Compliance with global cybersecurity standards",
        }, {
            label: "Cross-Cultural Design Expertise – Applications that resonate with diverse audiences",
        },
        {
            label: "Proven Track Record – Trusted by global enterprises and startups alike",
        }
    ]
}