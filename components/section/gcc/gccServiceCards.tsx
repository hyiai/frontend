const serviceCardsFirstRow = [
  {
    id: 1,
    title: "Role-Specific Hiring",
    description:
      "Every hire is customized to your specific needs. We shortlist and source talent based on your specific needs, so you hire those ready to deliver on day one.",
    classNames: "bg-[url('/Card-bg-11.png')]",
  },
  {
    id: 2,
    title: "Skill-Centric Sourcing",
    description:
      "Our specialist skill and talent-sourcing approach to recruitment means you recruit talent with expertise in technologies, data and analytics, design, customer service, etc., right away.",
    classNames: "bg-[url('/Card-bg-07.webp')]",
  },
  {
    id: 3,
    title: "Performance Management",
    description:
      "We drive KPIs, engagement, and quality of output with established performance systems. That&apos;s what it means for your GCC teams to always stay on their toes and in good standing, generating value over time.",
    classNames: "bg-[url('/Card-bg-08.webp')]",
  },
];

const serviceCardsSecRow = [
  {
    id: 4,
    title: "Learning & Upskilling",
    description:
      "Your work environment is continuously changing and our solution makes certain that your teams stay ahead. With focused solutions for learning, certifications, and cross-skills, we drive your talent a step beyond competition and into a future-proof capacity.",
    classNames: "bg-[url('/Card-bg-04.webp')]",
  },
  {
    id: 5,
    title: "Workforce Planning",
    description:
      "As your business evolves, so do your talent needs. HYI helps you forecast, plan, and realign talent in advance. We manage your team, so you can focus on strategy and growth keeping your GCC productive, agile, and future-ready.",
    classNames: "bg-[url('/Card-bg-05.webp')]",
  },
];

export default function GccServiceCards() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full max-w-[1280px] mb-16">
        <div className="flex flex-wrap flex-col gap-6">
          {/* First Row - 3 Cards */}
          <div className="flex flex-wrap gap-6">
            {serviceCardsFirstRow.map((card) => (
              <div
                key={card.id}
                className={`flex-1 min-w-[300px] min-h-[200px] p-6 rounded-3xl border border-white/10 backdrop-blur-sm bg-cover bg-center bg-no-repeat ${card.classNames}`}
              >
                <h4 className="hyi-h4 mb-3 text-white">
                  {card.title}
                </h4>
                <p className="hyi-p text-white">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Second Row - 2 Cards */}
          <div className="flex flex-wrap gap-6">
            {serviceCardsSecRow.map((card) => (
              <div
                key={card.id}
                className={`flex-1 min-w-[300px] min-h-[200px] p-6 rounded-3xl border border-white/10 backdrop-blur-sm bg-cover bg-center bg-no-repeat ${card.classNames}`}
              >
                <h4 className="hyi-h4 mb-3 text-white">
                  {card.title}
                </h4>
                <p className="hyi-p text-white">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
