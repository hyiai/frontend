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
                  <h1 className="hyi-h1">Payout Settlement Policy</h1>
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
              <p className="document-p mt-4">
                This Payout Settlement Policy outlines the procedures and
                conditions governing payouts and settlements by Hire Yoo
                Infotech Private Limited (&#34;Hire Yoo,&#34; &#34;we,&#34;
                &#34;our,&#34; or &#34;us&#34;) also known as HYI.AI (Virtual
                Assistance). It applies to all users of our website and mobile
                applications (the &#34;Platform&#34;), including both job
                Talents (&#34;Users&#34;) and companies/employers
                (&#34;Clients&#34;) eligible for financial transactions.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">1. Overview</h2>
              <p className="document-p">
                The Payout Settlement Policy outlines the principles,
                procedures, and timelines governing the disbursement of earnings
                to Talents on the Platform. It is designed to ensure
                transparency, consistency, and compliance with applicable
                financial, tax, and regulatory standards.
              </p>
              <p className="document-p">
                The Policy applies to all Talents who perform tasks, services,
                or engagements through the Platform, and governs how and when
                payouts are calculated, credited, and transferred. It also
                details the applicable thresholds, timelines, and conditions
                under which settlement is processed, as well as the
                responsibilities of Talents in maintaining accurate and
                up-to-date payment information.
              </p>
              <p className="document-p">
                By using the Platform, Talents acknowledge and agree to be bound
                by its terms. This policy describes how and when financial
                payouts are processed, including payment timelines, applicable
                deductions, settlement methods, and related compliance
                requirements.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">2. Eligibility for Payouts</h2>
              <p className="document-p">Payouts are applicable to:</p>
              <ul className="document-ul">
                <li>
                  Talents who have earned fees, incentives, or referral bonuses
                  as part of platform-related programs.
                </li>
                <li>
                  Clients who are entitled to refunds, credits, or other
                  monetary settlements as per our Refund or Cancellation
                  Policies.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">3. Payout Methods</h2>
              <h3 className="document-h3 mt-1">A. Task-Based Compensation</h3>
              <p className="document-p mb-2">
                Each task assigned through the Platform is associated with a
                predefined compensation value, calculated on an hourly basis as
                per the applicable rate agreed in advance. Upon completion of a
                task and successful quality verification by the Platform or its
                authorized representatives, the corresponding amount is credited
                to the Talent’s account balance within the Platform.
              </p>

              <h3 className="document-h3 mt-1">
                B. Payout Threshold and Disbursement
              </h3>
              <p className="document-p mb-2">
                The Platform operates on a payout threshold mechanism. Once a
                Talent&#39;s account balance reaches a minimum threshold of
                ₹1,000.00 (Indian Rupees One Thousand Only), the payment process
                is automatically initiated by the system. The Platform is
                configured to disburse payments promptly upon threshold
                fulfillment, subject to any applicable deductions or statutory
                compliances.
              </p>

              <h3 className="document-h3 mt-1">
                C. Payout Cycle and Time-Limited Release
              </h3>
              <p className="document-p mb-2">
                Notwithstanding the above, a Talent is allotted a maximum of 30
                (thirty) calendar days to complete tasks under a given cycle. In
                cases where the Talent has not reached the payout threshold
                within this period, the system shall initiate a payment for the
                accumulated balance, irrespective of the amount, at the end of
                the 30-day period.
              </p>

              <h3 className="document-h3 mt-1">
                D. Payment Method and Timeline
              </h3>
              <p className="document-p mb-2">
                All payouts will be made via the Payment method provided and
                verified by the Talent, and in accordance with the Platform’s
                standard payment schedules. The Platform shall not be held
                liable for delays resulting from incorrect or unverified payment
                details provided by the Talent.
              </p>

              <h3 className="document-h3 mt-1">E. Taxes and Deductions</h3>
              <p className="document-p mb-2">
                Talents are responsible for ensuring compliance with applicable
                tax laws and regulations. The Platform reserves the right to
                withhold or deduct taxes where required under law.
              </p>

              <h3 className="document-h3 mt-1">
                F. Payouts are made using one or more of the following methods:
              </h3>
              <ul className="document-ul">
                <li>Bank Transfer (NEFT/RTGS/IMPS for Indian users)</li>
                <li>International Wire Transfer (for eligible global users)</li>
                <li>
                  UPI or payment gateways (for applicable amounts in India)
                </li>
                <li>Any other method specified at the time of transaction</li>
              </ul>
              <p className="document-p">
                Users are required to provide accurate and complete
                banking/payment details to facilitate timely settlement. HYI.AI
                is not responsible for delays or failed transactions due to
                incorrect or outdated information.
                <br />
                <span className="font-semibold">Note:</span> Any payment made to
                HYI.AI would be done via Razorpay.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">4. Payout Timeline</h2>
              <p className="document-p">
                Payouts are typically processed as follows:
              </p>
              <ul className="document-ul">
                <li>
                  Within 7 business days from the date the payout is approved.
                </li>
                <li>
                  Referral or incentive payouts are processed only after a
                  qualifying event (e.g., successful placement, completion of
                  probation period).
                </li>
                <li>
                  National holidays and banking delays may affect payout
                  timelines.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">5. Deductions and Charges</h2>
              <ul className="document-ul">
                <li>
                  Applicable taxes (e.g., TDS, GST) will be deducted as per
                  local laws.
                </li>
                <li>
                  Transaction or processing fees may be applied depending on the
                  payout method.
                </li>
                <li>
                  Any outstanding dues or charges owed to HYI.AI will be
                  deducted before settlement.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">6. Verification and Compliance</h2>
              <p className="document-p">All payouts are subject to:</p>
              <ul className="document-ul">
                <li>
                  Identity verification (e.g., PAN, Aadhar, business license, or
                  equivalent for international users)
                </li>
                <li>Compliance checks to prevent fraud or misuse</li>
                <li>Any other KYC/AML requirements as required by law</li>
              </ul>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">7. Disputes and Reversals</h2>
              <p className="document-p">
                If a dispute arises regarding a payout:
              </p>
              <ul className="document-ul">
                <li>
                  Contact our support team within 5 business days of receiving
                  the payout if a dispute arises.
                </li>
                <li>
                  We will investigate and respond within 10 business days.
                </li>
                <li>
                  In cases of overpayment or fraud, we reserve the right to
                  reverse or withhold future payments until the matter is
                  resolved.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">8. Termination and Forfeiture</h2>
              <p className="document-p">
                HYI.AI reserves the right to withhold or forfeit payouts if:
              </p>
              <ul className="document-ul">
                <li>Terms & Conditions are violated</li>
                <li>Fraudulent or deceptive activity is detected</li>
                <li>False or misleading information is provided</li>
              </ul>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">9. Modifications to This Policy</h2>
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
              <h2 className="document-h2">Contact Us</h2>
              <p className="text-dark_mode-200">
                For payout-related inquiries, please contact:
              </p>
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
