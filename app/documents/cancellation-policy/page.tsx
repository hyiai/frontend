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
                  <h1 className="hyi-h1">Cancellation Policy</h1>
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
                This Cancellation Policy outlines the terms and procedures for
                cancelling services or subscriptions on the platform operated by
                Hire Yoo Infotech Private Limited (&#34;Hire Yoo,&#34;
                &#34;we,&#34; &#34;our,&#34; or &#34;us&#34;) also known as
                HYI.AI (Virtual Assistance). This Policy applies to all users of
                our website and mobile applications (collectively, the
                &#34;Platform&#34;), including individual job seekers or
                freelancers (&#34;Talents&#34;) and business clients or
                employers (&#34;Clients&#34;). It is intended to provide
                transparency and ensure a consistent approach to cancellations
                across all user interactions.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">1. General Terms</h2>
              <p className="document-p">
                By subscribing to, purchasing, or engaging with services offered
                through the Platform, you acknowledge and agree to be bound by
                this Cancellation Policy. These terms are designed to promote
                clarity, fairness, and accountability, while preserving the
                quality and reliability of our services for all users.
              </p>
              <p className="document-p">
                Users are advised to review this Policy carefully before
                initiating any service engagement, as cancellations may be
                subject to specific timelines, conditions, and applicable fees
                as further detailed in this document.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">
                2. Cancellation by Clients (Companies/Employers)
              </h2>
              <ul className="document-ul">
                <li>
                  Clients may cancel any active job posting, premium service, or
                  subscription via their account dashboard.
                </li>
                <li>
                  Monthly or recurring subscriptions can be cancelled at any
                  time prior to the next billing cycle. Access will continue
                  until the end of the paid period, after which the service will
                  not be renewed.
                </li>
                <li>
                  Annual or long-term subscriptions may be cancelled with a
                  request sent to our support team; however, no partial refunds
                  will be issued unless otherwise specified in a custom
                  agreement.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">
                3. Cancellation by Users (Talents)
              </h2>
              <ul className="document-ul">
                <li>
                  Users may cancel their premium features or account at any time
                  from their account settings.
                </li>
                <li>
                  Cancellations will take effect immediately, and access to
                  premium services will be revoked at the time of cancellation
                  unless otherwise specified.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">4. Important Notes</h2>
              <ul className="document-ul">
                <li>
                  Cancelling a service does not entitle the user to a refund
                  unless it meets the conditions set out in our Refund Policy.
                </li>
                <li>
                  We recommend users cancel at least 48 hours before the next
                  billing date to avoid automatic charges.
                </li>
                <li>
                  Deleting your account does not automatically cancel any active
                  subscriptions. Subscriptions must be cancelled separately.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">5. Cancellation by HYI.AI</h2>
              <p className="document-p">
                We reserve the right to cancel or suspend your access to the
                Platform or any services:
              </p>
              <ul className="document-ul">
                <li>
                  If you violate our Terms & Conditions or other policies.
                </li>
                <li>For any fraudulent or abusive activity.</li>
                <li>If required by law or legal process.</li>
              </ul>
              <p className="document-p">
                In such cases, no refund will be issued unless otherwise
                required by applicable law.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">6. How to Cancel</h2>
              <ul className="document-ul">
                <li>
                  <span className="font-semibold">Self-Service:</span> Log in to
                  your account and navigate to your subscription or service
                  settings to cancel directly.
                </li>
                <li>
                  <span className="font-semibold">Support Request:</span>{" "}
                  Contact our support team at{" "}
                  <a
                    href="mailto:support@hyi.ai"
                    className="text-brand-600 hover:underline"
                  >
                    support@hyi.ai
                  </a>{" "}
                  with your account and transaction details for assistance.
                </li>
              </ul>
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
                <br />
                Your continued access to or use of the Platform following the
                posting of changes constitutes your acceptance of the revised
                Terms.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">Contact Us</h2>
              <p className="document-p">
                <span className="font-semibold">
                  Hire Yoo Infotech Private Limited
                </span>
                <br />
                2nd Floor, Second Cross,
                <br />
                80 Feet Rd, K.R Garden,
                <br />
                Koramangala, Bengaluru,
                <br />
                Karnataka - 560034
              </p>
              <p className="document-p">
                <span className="font-semibold">Email Address:</span>{" "}
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
