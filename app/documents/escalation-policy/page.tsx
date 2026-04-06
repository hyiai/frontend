import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";

export default function page() {
  return (
    <>
      <section className="flex flex-col items-center">
        <div className="w-full double-gradient-tobottom">
          <Header />
          <section className="w-full flex justify-center px-4 pb-6 md:px-6 md:pb-6 lg:items-center lg:pb-8">
            <div className="w-full max-w-[1280px]">
              <div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-12">
                <div className="w-full flex flex-col items-center text-center gap-5 md:w-4/5">
                  <h1 className="hyi-h1">Escalation Policy</h1>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* </div> */}
      </section>
      <main className="w-full flex justify-center  px-4 py-6 md:p-6 md:py-8">
        <div className="max-w-[1280px] flex items-center justify-center">
          <div className="w-full flex flex-col gap-6 md:w-11/12 lg:w-4/5">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold text-brand-700 md:text-xl lg:text-2xl">
                Hire Yoo Infotech Private Limited
              </p>
              <p className="text-base text-dark_mode-200 lg:text-lg">
                <span className="font-semibold">Effective Date:</span> Upon
                Account Creation
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <p className="document-p">
                This Escalation Policy outlines the formal process for users of
                Hire Yoo Infotech Private Limited (&#34;Hire Yoo,&#34;
                &#34;we,&#34; &#34;our,&#34; or &#34;us&#34;) also known as
                HYI.AI (Virtual Assistance) to raise and resolve issues that
                remain unresolved through regular support channels. It applies
                to all users of our website and mobile applications (the
                &#34;Platform&#34;), including Talents and companies/employers.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">1. Objective</h2>
              <p className="document-p">
                The objective of this <b>Escalation Policy</b> is to establish a
                clear, structured, and time-bound mechanism for escalating
                unresolved issues, complaints, or concerns raised by users of
                the Platform, including both <b>Talents</b> and <b>Companies</b>
                . This Policy aims to ensure that all escalations are addressed
                at appropriate levels of authority with transparency,
                accountability, and efficiency, in alignment with legal
                requirements and best industry practices.
              </p>
              <p className="document-p">
                It seeks to promote prompt resolution, improve user
                satisfaction, and uphold the integrity and fairness of our
                services by enabling a tiered resolution process where concerns
                that are not resolved at the initial level may be referred to
                higher authorities within the organization.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">2. Scope of Escalation</h2>
              <p className="document-p">
                Issues that may be escalated include, but are not limited to:
              </p>
              <ul className="document-ul">
                <li>Unresolved support tickets</li>
                <li>Delays in payouts or settlements</li>
                <li>Platform malfunctions affecting usage</li>
                <li>Account suspensions or terminations </li>
                <li>
                  Disputes regarding services, subscriptions, or transactions{" "}
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">3. Escalation Levels</h2>

              <h3 className="document-h3">Level 1 – Customer Support Team</h3>
              <ul className="document-ul">
                <li>
                  Contact Method:{" "}
                  <a
                    href="mailto:support@hyi.ai"
                    className="text-brand-600 hover:underline"
                  >
                    support@hyi.ai
                  </a>
                </li>
                <li>Response Time: Within 24–48 business hours </li>
                <li>
                  This is the first point of contact. Most queries should be
                  resolved at this stage.
                </li>
              </ul>

              <h3 className="document-h3">Level 2 – Escalation Desk</h3>
              <ul className="document-ul">
                <li>
                  Contact Method:{" "}
                  <a
                    href="mailto:support@hyi.ai"
                    className="text-brand-600 hover:underline"
                  >
                    support@hyi.ai
                  </a>
                </li>
                <li>Response Time: Within 3–5 business days </li>
                <li>
                  If you are not satisfied with the response from Level 1, you
                  may escalate by referencing your previous ticket ID.
                </li>
              </ul>

              <h3 className="document-h3">Level 3 – Grievance Officer</h3>
              <ul className="document-ul">
                <li>Contact Person: Nagarjun K.</li>
                <li>
                  Email:{" "}
                  <a
                    href="grievance@hyi.ai"
                    className="text-brand-600 hover:underline"
                  >
                    grievance@hyi.ai
                  </a>
                </li>
                <li>
                  Mailing Address: Hire Yoo Infotech Private Limited at 2nd
                  Floor, Second Cross, 80 Feet Rd, K.R Garden, Koramangala,
                  Bengaluru, Karnataka – 560034
                </li>
                <li>Response Time: Within 7–10 business days </li>
                <li>
                  This is the final level of escalation for unresolved or
                  serious concerns.{" "}
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">
                4. Information Required for Escalation
              </h2>
              <p className="document-p">
                When escalating an issue, please include the following:
              </p>
              <ul className="document-ul">
                <li>Your full name and contact information </li>
                <li>Account ID or registered email address </li>
                <li>Ticket ID(s) from previous levels </li>
                <li>A clear description of the issue </li>
                <li>
                  Any relevant supporting documents (e.g., screenshots,
                  receipts){" "}
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">5. Resolution and Closure</h2>
              <p className="document-p">
                Once the issue is investigated, we will communicate the outcome
                and, where applicable, actions taken. If the issue is resolved
                to your satisfaction, it will be marked as closed. If you are
                still dissatisfied after Level 3, you may pursue legal remedies
                as outlined in our Terms & Conditions.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">6. Monitoring and Improvement</h2>
              <p className="document-p">
                We regularly monitor escalations to improve our services and
                reduce recurrence. Feedback from users is welcomed and used to
                refine our processes.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">7. Changes to This Policy</h2>
              <p className="document-p">
                We reserve the right to amend, modify, or update these Terms at
                any time, at our sole discretion. Any changes will become
                effective immediately upon being posted on the Platform, unless
                stated otherwise.
              </p>
              <p className="document-p">
                We may notify you of significant changes via email or through
                prominent notices on the Platform. However, it is your
                responsibility to review these Terms periodically for updates.
              </p>
              <p className="document-p">
                Your continued access to or use of the Platform following the
                posting of changes constitutes your acceptance of the revised
                Terms.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">Contact Us </h2>
              <p className="document-p">
                For additional support or information regarding this policy,
                please contact:
              </p>
              <p className="document-p">
                Hire Yoo Infotech Private Limited <br />
                2nd Floor, Second Cross, <br />
                80 Feet Rd, K.R Garden, <br />
                Koramangala, Bengaluru, <br />
                Karnataka - 560034 <br />
                <br />
                Email Address:{" "}
                <a
                  href="mailto:support@hyi.ai"
                  className="text-brand-600 hover:underline"
                >
                  support@hyi.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
