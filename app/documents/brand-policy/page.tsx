// Component Imports (Section Imports)
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

export default function BrandPolicyPage() {
  return (
    <section className="w-full h-screen flex flex-col items-center">
      <div className="w-full double-gradient-tobottom">
        <Header />
        <section className="w-full flex justify-center px-4 pb-6 md:px-6 md:pb-6 lg:items-center lg:pb-8">
          <div className="w-full max-w-[1280px]">
            <div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-12">
              <div className="w-full flex flex-col items-center text-center gap-5 md:w-4/5">
                <h1 className="hyi-h1">Brand Policy</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
      <main className="w-full flex justify-center  px-4 py-6 md:p-6 md:py-8">
        <div className="w-full max-w-[1280px] flex flex-col items-center">
          <div className="w-full flex flex-col gap-6 md:w-11/12 lg:w-4/5">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold text-brand-700 md:text-xl lg:text-2xl">
                Hire Yoo Infotech Private Limited
              </p>
              <p className="text-base text-dark_mode-200 lg:text-lg">
                <span className="font-semibold">Effective Date:</span> 5/27/2025
                (Applicable from the date of user registration or account
                creation)
              </p>
              <p className="text-base text-dark_mode-200 lg:text-lg">
                <span className="font-semibold">Last Updated:</span> 5/27/2025
              </p>
            </div>
            {/** */}
            <div className="flex flex-col gap-1.5">
              <p className="document-p">
                {
                  "Welcome to our Brand Policy. This document outlines the permitted and restricted uses of our company’s brand assets, including our name, logo, slogans, designs, and other elements that represent our identity (collectively, the “Brand Assets”). This policy applies to all users of our platform, including Talents, Clients, partners, collaborators, media, and the general public."
                }
              </p>
              <p className="document-p">
                {
                  "We’ve created this policy to ensure consistent, respectful, and legal use of our brand across all channels and contexts. By using our Brand Assets, you agree to comply with this Brand Policy, as well as with any applicable laws and our Terms of Use."
                }
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">1. Ownership of Brand Assets</h2>
              <p className="document-p">
                All Brand Assets, including our logo, name, designs, icons,
                trademarks, service marks, trade names, taglines, and any
                associated visual or textual identifiers, are the exclusive
                property of{" "}
                <span className="font-semibold">
                  Hire Yoo Infotech Private Limited
                </span>{" "}
                (&quot;Hire Yoo&quot;, &quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) also known as HYI.AI (Virtual Assistance) and
                are protected by international copyright, trademark, and
                intellectual property laws.
              </p>
              <p className="document-p">
                Use of our Brand Assets does not grant you ownership or any
                right, title, or interest in or to them.
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">2. Acceptable Use of Brand Assets</h2>
              <p className="document-p">
                You may use our Brand Assets only with our prior written consent
                or as expressly permitted under specific circumstances (e.g.,
                press mentions, partnership acknowledgments, job promotion, or
                authorized marketing campaigns). Acceptable uses may include:
              </p>
              <ul className="document-ul">
                <li>
                  Citing our platform in editorial or academic content, provided
                  you are not implying endorsement.
                </li>
                <li>
                  Using the logo in partnership materials, where a formal
                  collaboration agreement exists.
                </li>
                <li>
                  Displaying our name or logo in job posts or project listings,
                  if you are referencing our platform as a service provider.
                </li>
              </ul>
              <p className="document-p">In all cases:</p>
              <ul className="document-ul">
                <li>
                  You must use the most up-to-date version of our logo or brand
                  assets.
                </li>
                <li>
                  You must maintain the integrity, proportion, and quality of
                  our brand.
                </li>
                <li>
                  You must maintain the integrity, proportion, and quality of
                  our brand.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">3. Restricted and Prohibited Uses</h2>
              <p className="document-p">
                You may not do any of the following without explicit, prior,
                written authorization from us:
              </p>
              <ul className="document-ul">
                <li>Modify our logos, designs, or other brand elements.</li>
                <li>
                  Use our Brand Assets as part of your own company or product
                  name, logo, domain name, or marketing slogan.
                </li>
                <li>
                  Imply any false association or endorsement, especially in
                  commercial or promotional materials.
                </li>
                <li>
                  Use our Brand Assets in a way that could be considered:
                  <ul className="document-ul">
                    <li>Offensive, obscene, defamatory, or misleading </li>
                    <li>Confusing to users about the source of services </li>
                    <li>
                      In violation of applicable laws or third-party rights
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">4. Logo and Style Guidelines</h2>
              <p className="document-p">
                We maintain a Brand Guidelines document that includes
                specifications on colors, spacing, font usage, and positioning.
                You must adhere strictly to these visual guidelines if
                you&apos;re authorized to use our Brand Assets.
              </p>
              <p className="document-p">
                To request a copy of our Brand Guidelines, or to get specific
                usage permissions, please contact:{" "}
                <span className="text-brand-600">support@hyi.ai. </span>
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">5. Reporting Misuse</h2>
              <p className="document-p">
                We take brand misuse seriously. If you find any unauthorized or
                improper use of our Brand Assets, or if someone is falsely
                representing themselves as affiliated with{" "}
                <span className="font-semibold">HYI.AI</span>, please report it
                to: <span className="text-brand-600">grievance@hyi.ai </span>
              </p>
              <p className="document-p">
                We reserve the right to take legal action, including issuing
                cease and desist notices, removing infringing content, or
                pursuing claims for damages in case of unauthorized or harmful
                brand usage.
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">6. Updates to This Policy</h2>
              <p className="document-p">
                We may update this Brand Policy from time to time to reflect
                changes in our branding, legal obligations, or operational
                needs. Updated versions will be posted on our website with the
                “Last Updated” date; however, it is your responsibility to
                review these Terms periodically for updates and continued use of
                our Brand Assets will signify your acceptance of any
                modifications.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">Contact Us</h2>
              <p className="document-p">
                If you have questions about this policy or want to request brand
                usage permission, reach out to us at:
              </p>
              <p className="document-p">
                Email us at:{" "}
                <a
                  href="mailto:support@hyi.ai"
                  className="text-brand-600 hover:underline"
                >
                  support@hyi.ai
                </a>
              </p>
              <p className="document-p">
                Visit us at: :{" "}
                <a
                  href="https://hyi.ai/"
                  className="text-brand-600 hover:underline"
                >
                  https://hyi.ai/
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}
