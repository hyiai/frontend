export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  let title, description;

  switch (blogId) {
    case "Scaling-Smarter-with-Virtual-Assistants":
      title = "Virtual Assistants Revolutionize Startup Scaling with HYI.AI";
      description =
        "Find how HYI.AI Virtual Assistants enable startups with remote work, automation, and global expertise.";
      break;
    case "HYI.AI-Empowers-Startups-Smarter-and-Faster":
      title = "HYI.AI: Smarter Growth for Startups";
      description =
        "Discover how HYI.AI helps startups continue to grow faster with AI-powered solutions, remote teams, and custom deployments for sustainable growth.";
      break;
    case "Breaking-Barriers-Homemakers-Thrive-as-Virtual-Professionals-with-HYI":
      title = "Empowering Homemakers as Virtual Professionals | HYI.AI";
      description =
        "Discover how HYI.AI helps homemakers become virtual professionals by breaking barriers and enabling flexible remote work from home.";
      break;
    case "Future-of-Freelance-Research-Analyst-Jobs-After-a-Career-Break":
      title = "Comeback Support with HYI.AI for Freelance Researchers";
      description =
        "Discover how HYI.AI empowers freelance research analysts with talent portfolios, global opportunities and a strong professional network.";
      break;
    case "How-to-Get-Freelance-Developer-Projects-Across-the-Globe":
      title = "Global Freelance Developer Projects with HYI.AI";
      description =
        "Discover how freelance developers land global opportunities. Learn actionable strategies to attract international clients and grow your remote career.";
      break;
    case "How-to-Get-Freelance-Designer-Projects":
      title = "Get Global Freelance Design Projects with HYI.AI";
      description =
        "Discover how HYI.AI helps designers land global freelance design projects on their own terms.";
      break;
    default:
      title = `${blogId.replaceAll("-", " ")} | HYI.AI`;
      description = `Discover ${blogId.replaceAll(
        "-",
        " "
      )} helps for sustainable growth.`;
  }

  return {
    title,
    description,
  };
}

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
