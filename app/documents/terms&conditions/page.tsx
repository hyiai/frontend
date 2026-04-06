import React from "react";

// Component Imports
import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";

// Data Imports
import { agreementData } from "@/components/data/agreementPage";

export default function TermsAndConditionsPage() {
  return (
    <section className="w-full h-screen flex flex-col items-center">
      <div className="w-full double-gradient-tobottom">
        <Header />
        <section className="w-full flex justify-center px-4 pb-6 md:px-6 md:pb-6 lg:items-center lg:pb-8">
          <div className="w-full max-w-[1280px]">
            <div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-12">
              <div className="w-full flex flex-col items-center text-center gap-5 md:w-4/5">
                <h1 className="hyi-h1">{agreementData.heading}</h1>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full flex justify-center  px-4 py-6 md:p-6 md:py-8">
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
              <h2 className="document-h2">1. Introduction</h2>
              <p className="document-p">
                These Terms and Conditions (&#34;Terms&#34;) govern your access
                and use of the website, mobile applications, and services
                (collectively, the &#34;Platform&#34;) provided by Hire Yoo
                Infotech Private Limited (&#34;Hire Yoo,&#34; &#34;we,&#34;
                &#34;our,&#34; or &#34;us&#34;) also known as HYI.AI (Virtual
                Assistance). These Terms constitute a legally binding agreement
                between you and the Company.
              </p>
              <p className="document-p">
                By accessing, browsing, registering for, or otherwise using the
                Platform, you acknowledge that you have read, understood, and
                agree to be bound by these Terms, along with our Privacy Policy,
                Cookie Policy, and any other legal documents or guidelines that
                may be incorporated by reference. If you do not agree to these
                Terms, you must not use the Platform.
              </p>
              <p className="document-p">
                We reserve the right to modify or update these Terms at any
                time, and such changes shall be effective upon posting. It is
                your responsibility to review the Terms periodically to stay
                informed of any updates.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">2. Eligibility </h2>
              <p className="document-p">
                To access or use the Platform, you must meet the following
                eligibility criteria:
              </p>
              <ul className="document-ul">
                <li>
                  <b>Age Requirement:</b> You must be at least 18 years of age
                  (or the age of legal majority in your jurisdiction, if
                  higher).
                </li>
                <li>
                  <b>Legal Capacity:</b> You must have the legal capacity to
                  enter into a binding agreement under applicable laws.
                </li>
                <li>
                  <b>Authorized Use:</b> If you are accessing or using the
                  Platform on behalf of a company, organization, or other legal
                  entity, you represent and warrant that you are authorized to
                  bind such entity to these Terms.
                </li>
              </ul>
              <p className="document-p">
                By using the Platform, you represent and warrant that you meet
                all of the above eligibility requirements. If you do not, or if
                you are prohibited by applicable laws from using the Platform,
                you must not access or use it.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">3. User Accounts</h2>
              <p className="document-p">
                To access certain features, you may be required to register for
                an account:
              </p>
              <ul className="document-ul">
                <li>
                  <b>Talent</b>must provide accurate personal and professional
                  information.
                </li>
                <li>
                  <b>Companies/Employers</b> must provide valid business and
                  contact information. You are responsible for maintaining the
                  confidentiality of your account credentials and for all
                  activity under your account.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">4. Services Provided </h2>
              <p className="document-p">
                HYI.AI offers a digital platform facilitating the connection
                between job talents and employers. Services include job posting,
                resume submission, messaging tools, and job-matching algorithms.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">5. Acceptable Use</h2>
              <p className="document-p">You agree to:</p>
              <ul className="document-ul">
                <li>Use the Platform only for lawful purposes.</li>
                <li>Provide accurate and up-to-date information.</li>
                <li>Respect the privacy and rights of other users.</li>
              </ul>
              <p className="document-p">You agree not to:</p>
              <ul className="document-ul">
                <li>Post false or misleading information.</li>
                <li>Impersonate another individual or entity.</li>
                <li>Interfere with or disrupt the Platform.</li>
                <li>Upload malware or harmful content.</li>
                <li>Violate any applicable laws or regulations.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">6. User Content</h2>
              <p className="document-p">
                You retain full ownership of any content you submit or upload to
                the Platform, including but not limited to resumes, job
                postings, profile details, communications, and other materials
                (&#34;User Content&#34;).
              </p>
              <p className="document-p">
                By submitting or uploading User Content, you grant HYI.AI a
                non-exclusive, worldwide, royalty-free, sublicensable, and
                transferable license to use, store, reproduce, modify, adapt,
                publish, translate, distribute, display, and perform such
                content solely for the purpose of operating, promoting, and
                improving the Platform and related services.
              </p>
              <p className="document-p">
                You represent and warrant that you have the necessary rights to
                grant the above license and that your User Content does not
                infringe upon the rights of any third party.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">7. Fees and Payments</h2>
              <p className="document-p">
                Certain features or services on the Platform may require
                payment. Any applicable fees will be clearly communicated at the
                point of purchase or subscription. All payments must be made
                using the approved payment methods as specified by the Platform.
              </p>
              <p className="document-p">
                You agree to provide accurate billing and payment information
                and authorize us to charge your selected payment method for the
                relevant fees. HYI.AI is not responsible for errors,
                interruptions, or delays caused by third-party payment
                processors.
              </p>
              <p className="document-p">
                We reserve the right to update pricing and billing terms at any
                time, subject to prior notice where required by law.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">8. Intellectual Property</h2>
              <p className="document-p">
                Except for User Content, all content and materials available on
                the Platform-including but not limited to text, software, code,
                design elements, graphics, logos, audio files, and
                trademarks-are the exclusive property of HYI.AI or its licensors
                and are protected by intellectual property laws.
              </p>
              <p className="document-p">
                You may not reproduce, modify, distribute, transmit, publicly
                display, or otherwise use any part of the Platform content
                without our prior written consent. Any unauthorized use may
                result in civil or criminal liability.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">9. Termination</h2>
              <p className="document-p">
                We reserve the right to suspend, restrict, or terminate your
                access to the Platform or any part of it, at our sole discretion
                and without prior notice, if we believe you have violated these
                Terms, applicable laws, or our internal policies.
              </p>
              <p className="document-p">
                You may terminate your account at any time by following the
                account deactivation procedures on the Platform. Upon
                termination, your right to access and use the Platform will
                immediately cease, though certain obligations (such as payment
                of fees or indemnity) may survive termination.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">10. Disclaimer of Warranties</h2>
              <p className="document-p">
                The Platform and all related services are provided on an &#34;as
                is&#34; and &#34;as available&#34; basis, without warranties of
                any kind, express or implied. We do not warrant that the
                Platform will be error-free, secure, uninterrupted, or that any
                information provided will be accurate or reliable. To the
                fullest extent permitted by law, we disclaim all warranties,
                including but not limited to implied warranties of
                merchantability, fitness for a particular purpose, and
                non-infringement. Your use is at your own risk.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">11. Limitation of Liability</h2>
              <p className="document-p">
                To the maximum extent permitted by applicable law, HYI.AI and
                its affiliates shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including but not
                limited to loss of profits, data, business opportunities, or
                goodwill, arising out of or in connection with your use of, or
                inability to use, the Platform.
              </p>
              <p className="document-p">
                Our total liability to you for any claims under these Terms
                shall not exceed the amount you paid us, if any, for use of the
                Platform during the six (6) months preceding the claim.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">
                12. Third-Party Services Disclaimer
              </h2>
              <p className="document-p">
                The Platform may contain links to or integrations with
                third-party websites, applications, services, or tools that are
                not owned or controlled by the Company (&#34;Third-Party
                Services&#34;). These are provided solely for your convenience
                and do not constitute an endorsement, sponsorship, or
                recommendation by the Company.
              </p>
              <p className="document-p">
                We do not control, monitor, or assume any responsibility for the
                content, terms, privacy practices, or operations of any
                Third-Party Services. Your use of such services is at your own
                risk and subject to the terms and conditions and privacy
                policies of the respective third parties. We encourage you to
                review those policies before engaging with such services.
              </p>
              <p className="document-p">
                The Company shall not be liable for any loss or damage arising
                from your use of, or reliance on, any Third-Party Services.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">13. Indemnification Clause</h2>
              <p className="document-p">
                You agree to indemnify, defend, and hold harmless the Company,
                its affiliates, directors, officers, employees, agents,
                licensors, and partners from and against any and all claims,
                demands, actions, liabilities, damages, losses, costs, and
                expenses (including reasonable attorneys&#34; fees) arising out
                of or related to:
              </p>
              <ul className="document-ul">
                <li>Your use of or access to the Platform;</li>
                <li>Any content submitted, posted, or transmitted by you;</li>
                <li>
                  Your violation of these Terms or any applicable law or
                  regulation;
                </li>
                <li>
                  Any infringement or misappropriation of any intellectual
                  property or other rights of a third party;
                </li>
                <li>Any dispute or issue between you and another user.</li>
                <li>
                  This indemnification obligation will survive the termination
                  or expiration of your relationship with the Platform and your
                  use of the services.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">14. Accessibility Statement</h2>
              <p className="document-p">
                We are committed to making our Platform accessible to all users,
                including individuals with disabilities. We strive to ensure
                that our website and mobile applications comply with applicable
                accessibility standards such as the Web Content Accessibility
                Guidelines (WCAG) and any relevant local legislation (e.g.,
                Rights of Persons with Disabilities Act, 2016 in India, or the
                Americans with Disabilities Act in the U.S.).
              </p>
              <p className="document-p">
                If you encounter any accessibility barriers or require
                assistance in using our services, please contact us at{" "}
                <a
                  href="mailto:support@hyi.ai"
                  className="text-brand-600 hover:underline"
                >
                  support@hyi.ai
                </a>{" "}
                and we will make reasonable efforts to accommodate your needs
                and improve your experience.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">
                15. Children’s Data Handling Policy
              </h2>
              <p className="document-p">
                Our Platform is not intended for use by individuals under the
                age of 18 (&#34;Minors&#34;). We do not knowingly collect,
                store, or process personal data from Minors without verifiable
                parental consent, as required under applicable data protection
                laws such as the Digital Personal Data Protection Act, 2023
                (India), the Children’s Online Privacy Protection Act (COPPA -
                U.S.), or other relevant global regulations.
              </p>
              <p className="document-p">
                If we become aware that personal information has been collected
                from a Minor without appropriate consent, we will take steps to
                delete such data promptly. Parents or legal guardians who
                believe that their child has provided us with personal
                information without consent may contact us at{" "}
                <a
                  href="mailto:support@hyi.ai"
                  className="text-brand-600 hover:underline"
                >
                  support@hyi.ai
                </a>{" "}
                to request deletion or review of such information.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">16. International Use</h2>
              <p className="document-p">
                The Platform is accessible globally and may be used by
                individuals and entities from various jurisdictions. However,
                access to and use of the Platform may not be legal or permitted
                in certain countries or by certain individuals, based on local
                laws and regulations.
              </p>
              <p className="document-p">
                Access to the Platform may not be legal by certain persons or in
                certain countries. By accessing or using the Platform from
                outside our principal jurisdiction, you do so on your own
                initiative and at your own risk. You are solely responsible for
                ensuring that your use of the Platform complies with all
                applicable local laws, rules, and regulations in your location.
              </p>
              <p className="document-p">
                We make no representations that the Platform, its content, or
                services are appropriate or available for use in all
                jurisdictions.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">17. Modifications to Terms</h2>
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
              <h2 className="document-h2">
                18. Governing Law and Dispute Resolution
              </h2>
              <p className="document-p">
                These Terms and any disputes arising out of or in connection
                with your use of the Platform shall be governed by and construed
                in accordance with the laws of India, without regard to its
                conflict of law principles.
              </p>
              <p className="document-p">
                You agree that any legal action or proceeding arising under or
                relating to these Terms shall be subject to the exclusive
                jurisdiction of the competent courts located in Bengaluru,
                Karnataka and you hereby irrevocably submit to the jurisdiction
                of such courts.
              </p>
              <p className="document-p">
                If you are accessing the Platform from a jurisdiction with laws
                that restrict or conflict with any part of these Terms, your
                continued use of the Platform is considered as your consent to
                proceed in accordance with the governing laws and jurisdiction
                stated herein.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">Contact Us </h2>
              <p className="document-p">
                For any questions about this Privacy Policy, please contact us
                at:{" "}
              </p>
              <p className="document-p">
                Hire Yoo Infotech Private Limited <br />
                2nd Floor, Second Cross, 80 Feet Rd, K.R Garden, <br />
                Koramangala, Bengaluru, Karnataka - 560034 <br />
                Email:{" "}
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
      </div>
      <Footer />
    </section>
  );
}
