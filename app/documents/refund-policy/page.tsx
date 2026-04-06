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
                  <h1 className="hyi-h1">Refund Policy</h1>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* </div> */}
      </section>
      <main className="w-full flex justify-center px-4 py-6 md:p-6 md:py-8">
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
                This Refund Policy applies to all paid services offered by Hire
                Yoo Infotech Private Limited (&#34;Hire Yoo,&#34; &#34;we,&#34;
                &#34;our,&#34; or &#34;us&#34;) also known as HYI.AI (Virtual
                Assistance) via our website and mobile applications
                (collectively, the &#34;Platform&#34;). It outlines the terms
                and conditions under which refunds may be granted to our users,
                including individual job seekers or freelancers
                (&#34;Talents&#34;) and business clients or employers
                (&#34;Clients&#34;).
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">1. General Principles</h2>
              <p className="document-p">
                We are committed to ensuring user satisfaction through a fair
                and transparent refund process. Refunds are assessed on a
                case-by-case basis and may be granted at the sole discretion of
                the Company, subject to the specific circumstances and in
                accordance with the provisions outlined in this Policy.
              </p>
              <p className="document-p">
                By purchasing or subscribing to any service on the Platform, you
                agree to the terms of this Refund Policy, including any
                applicable eligibility criteria, conditions, timelines, and
                exclusions that may apply.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">2. Refund Eligibility</h2>
              <p className="document-p">
                Refunds may be issued in the following circumstances:
              </p>
              <h3 className="document-h3">
                A. For Clients (Companies/Employers):
              </h3>

              <ul className="document-ul">
                <li>Duplicate payments due to technical errors.</li>
                <li>
                  Failure to deliver the purchased service due to an error on
                  our part.{" "}
                </li>
                <li>
                  If a subscription or paid listing is canceled within 24 hours
                  of purchase and has not been used (i.e., no jobs posted, no
                  Talents contacted).
                </li>
              </ul>

              <h3 className="document-h3">B. For Users (Talent):</h3>

              <ul className="document-ul">
                <li>
                  If the user has been mistakenly charged for a premium feature
                  not subscribed to.
                </li>
                <li>
                  If a technical issue prevents access to a paid feature and is
                  not resolved within 5 business days.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">3. Non-Refundable Cases</h2>

              <p className="document-p">
                Refunds will not be granted in the following cases:
              </p>

              <ul className="document-ul">
                <li>
                  Change of mind after the service has been accessed or used.{" "}
                </li>
                <li>Failure to secure employment or fill a vacancy.</li>
                <li>
                  Dissatisfaction with the service unless it is due to a proven
                  technical error.
                </li>
                <li>A clear description of the issue </li>
                <li>
                  Violations of our Terms & Conditions leading to account
                  suspension.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">4. Refund Process</h2>

              <p className="document-p">To request a refund, you must:</p>

              <ul className="document-ul">
                <li>
                  Contact our support team at{" "}
                  <a
                    href="mailto:support@hyi.ai"
                    className="text-brand-600 hover:underline"
                  >
                    support@hyi.ai
                  </a>{" "}
                  within 7 calendar days of the transaction.
                </li>
                <li>
                  Provide a clear explanation and supporting documentation
                  (e.g., screenshots, invoice numbers).
                </li>
                <li>
                  Allow up to 10 business days for investigation and processing
                  of your request.
                </li>
              </ul>

              <p className="document-p">
                Approved refunds will be processed using the original payment
                method. Depending on your financial institution, it may take
                additional time for the funds to reflect in your account.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">5. Chargebacks</h2>

              <p className="document-p">
                If you dispute a payment by initiating a chargeback with your
                bank or payment provider without first attempting to resolve the
                issue with us directly, we reserve the right to suspend or
                terminate your account pending investigation.
              </p>
              <p className="document-p">
                We retain the right to challenge and dispute any chargeback
                claims and may submit relevant evidence to the payment processor
                to support our case. Repeated or unjustified chargeback attempts
                may result in permanent account restrictions or legal action,
                where applicable.
              </p>
              <p className="document-p">
                To avoid disruptions, we strongly encourage users to contact our
                support team before initiating any chargeback process.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-xl font-semibold">
                <h2 className="document-h2">6. Modifications to This Policy</h2>
              </div>
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
                For any questions or to request a refund, please contact us at:
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
