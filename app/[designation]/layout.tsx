export async function generateMetadata({
  params,
}: {
  params: Promise<{ designation: string }>;
}) {
  const { designation } = await params;

  let title, description;

  switch (designation) {
    case "CXOs":
      title = "Hire CXOs - Virtual CFO, CMO, CTO and more | HYI.AI";
      description =
        "Hire CXOs with HYI.AI - including Chief Marketing Officers, Virtual CFO Services India, freelance CTOs, CFOs, and more. Scalable executive hiring made easy.";
      break;
    case "Business-Analyst":
      title = "Hire Business Analysts - Freelance & Remote | HYI.AI";
      description =
        "Hire a skilled business analyst for your team. Explore freelance business analyst jobs and connect with top remote talent through HYI.AI's global network.";
      break;
    case "Research-Analyst":
      title = "Hire Freelance Research Analysts at HYI.AI";
      description =
        "Find expert freelance research analysts or explore top research analyst jobs. HYI.AI connects companies with data-driven analysts for flexible remote roles.";
      break;
    case "Mentor":
      title = "Hire Virtual Mentors for Startups & Teams | HYI.AI";
      description =
        "Hire a mentor for your startup, team, or career growth. HYI.AI offers access to top virtual mentors across domains for guidance, strategy, and scaling success.";
      break;
    case "Developer":
      title = "Hire Developers - Remote & Freelance Talent | HYI.AI";
      description =
        "Hire top developers for your projects. HYI.AI connects you with expert freelance developers and remote development teams to scale your tech efficiently.";
      break;
    case "Project-Manager":
      title = "Hire Project Managers - Remote, Freelance & Virtual | HYI.AI";
      description =
        "Hire experienced project managers for remote, freelance, or virtual roles. HYI.AI connects you with top talent to lead and deliver your projects globally.";
      break;
    case "Software-Architect":
      title = "Hire Software Architects - Freelance & Remote | HYI.AI";
      description =
        "Hire expert software architects to design scalable systems. HYI.AI connects you with top freelance software architects for remote and project-based roles.";
      break;
    case "Team-Lead":
      title = "Find Virtual Team Leaders for Remote Jobs | HYI.AI";
      description =
        "Looking to hire a team leader? HYI.AI offers access to top virtual and freelance team leaders ready to manage remote teams and deliver strong outcomes.";
      break;
    default:
      title = `Hire ${designation} for Remote Jobs | HYI.AI`;
      description = `Explore ${designation}'s team on HYI.AI.`;
  }

  return {
    title,
    description,
  };
}

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
