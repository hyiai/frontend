export const footerSections = {
  ForTalents: {
    heading: "For Talent's",
    links: [
      ["Resume Builder", "/resume-builder"],
      ["Job Opportunity", "https://va.hyi.ai/talent-login"],
      ["How To Get Hired", "/get-hired"],
      ["Mock Test", "https://va.hyi.ai/talent-login"],
      ["Mock Interview", "https://va.hyi.ai/talent-login"],
      ["Talent Resources", "/talent/resource"],
      ["Certified Developer", "/developer"],
      ["How to Get Certified", "https://va.hyi.ai/talent-login"],
      ["Talent Support", "/talent/support"],
    ],
  },
  IntegrateAI: {
    heading: "Integrate AI",
    links: [
      ["KPI & KRA", "/integrate-AI/KPI&KRA"],
      ["Project Tracking", "/integrate-AI/project-tracking"],
      ["Price Tracking", "/integrate-AI/price-tracking"],
      ["Talent Matching", "/integrate-AI/talent-matching"],
      ["Strategy & Planning", "/integrate-AI/strategy&planning"],
    ],
  },
  ConsultingAndSolutions: {
    heading: "Consulting &  Solutions",
    links: [],
  },
  Resources: {
    heading: "Resources",
    links: [
      ["About HYI", "/about"],
      // ["Enterprise Plan", "/enterprise-plan"],
      // ["Startup Plan", "/startup-plan"],
      ["Case Study", "/case-studies"],
      ["Career", "/career"],
      ["Help", "/help"],
      ["Blogs", "/blogs"],
      ["Media", "/media"],
      ["Investor", "/investor"],
    ],
  },
  Compliance: {
    heading: "Compliance",
    links: [
      ["Terms and Conditions", "/documents/terms&conditions"],
      ["Privacy Policy", "/documents/privacy-policy"],
      ["Brand Policy", "/documents/brand-policy"],
      ["Cookies Policy", "/documents/cookies-policy"],
      ["IPR Policy", "/documents/ipr-policy"],
      ["Payout Settlement Policy", "/documents/payment-policy"],
      ["Cancellation Policy", "/documents/cancellation-policy"],
      ["Refund Policy", "/documents/refund-policy"],
      ["Escalation Policy", "/documents/escalation-policy"],
    ],
  },
};

export const footer = {
  dynamicLinks: Object.keys(footerSections),
};
