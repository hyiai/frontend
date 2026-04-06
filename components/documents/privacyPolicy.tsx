import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="w-full flex flex-col gap-7 md:w-11/12 lg:w-4/5">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-brand-700 md:text-xl lg:text-2xl">
          Hire Yoo Infotech Private Limited
        </p>
        <p className="text-base text-dark_mode-200 lg:text-lg">
          <span className="font-semibold">Effective Date:</span> Upon Account
          Creation
        </p>
      </div>
      {/** */}
      <div className="flex flex-col gap-1.5">
        <h2 className="document-h2">1. Introduction</h2>
        <p className="document-p">
          Welcome to Hire Yoo Infotech Private Limited (&quot;Hire Yoo,&quot;
          &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) also known as
          HYI.AI (Virtual Assistance). This Privacy Policy explains how we
          collect, use, disclose, and protect your information when you access
          or use our website, mobile applications, and related services
          (collectively, the
          <span className="font-semibold">&quot;Platform&quot;</span>). This
          Policy applies to all users of the Platform, including job seekers or
          freelancers (<span className="font-semibold">&quot;Users&quot;</span>{" "}
          or <span className="font-semibold">&quot;Talents&quot;</span>) and
          employers or recruiters (
          <span className="font-semibold">&quot;Clients&quot;</span>).
        </p>
        <p className="document-p">
          By using the Platform, you consent to the practices described in this
          Privacy Policy.
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <h2 className="document-h2">2. Information We Collect</h2>
        <p className="document-p">
          We collect different types of personal and business information
          depending on your interaction with our Platform.
        </p>
        <h3 className="document-h3 pt-2">
          A. Information Collected from Users (Talents):
        </h3>
        <ul className="document-ul space-y-1">
          <li>
            <span className="font-semibold">
              Personally Identifiable Information (PII):
            </span>{" "}
            Name, email address, phone number, physical address, resume details.
          </li>
          <li>
            <span className="font-semibold">Professional Information:</span>{" "}
            Employment history, educational background, skills, certifications,
            hourly salary expectations.
          </li>
          <li>
            <span className="font-semibold">Account Details: </span> Username,
            password, account preferences.
          </li>
          <li>
            <span className="font-semibold">Communication Data: </span> Messages
            and interactions through the Platform.
          </li>
          <li>
            <span className="font-semibold">Technical and Usage Data: </span> IP
            address, browser type, device identifiers, access dates and times,
            and pages visited.
          </li>
        </ul>
        <h3 className="document-h3 pt-3">
          B. Information Collected from Clients (Companies/Employers):
        </h3>
        <ul className="document-ul space-y-1">
          <li>
            <span className="font-semibold">Company Information:</span> Business
            name, registered address, corporate identification/registration
            number, industry type.
          </li>
          <li>
            <span className="font-semibold">Contact Information:</span> Names,
            phone numbers, and email addresses of account representatives.
          </li>
          <li>
            <span className="font-semibold">Job Postings:</span> Job
            descriptions, qualifications, compensation details (including hourly
            rates), and related metadata.
          </li>
          <li>
            <span className="font-semibold">Payment Information:</span> Billing
            details and transaction data (collected and processed securely by
            third-party payment providers).
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="document-h2">3. How We Use Your Information </h2>
        <p className="document-p">We use your information to:</p>
        <ul className="document-ul">
          <li>
            Deliver, maintain, and improve the functionality of our Platform.
          </li>
          <li>
            Facilitate connections and communication between Users and Clients.
          </li>
          <li>Match Talents with suitable job opportunities.</li>
          <li>Verify identities and maintain a secure environment.</li>
          <li>
            Customize the user experience based on preferences and behavior.
          </li>
          <li>
            Send account notifications, updates, and (with consent) promotional
            content.
          </li>
          <li>Fulfill legal and regulatory requirements.</li>
        </ul>
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="document-h2">4. Legal Basis for Processing </h2>
        <ul className="document-ul">
          <li>
            We process your personal data under one or more of the following
            lawful bases:
          </li>
          <li>
            Consent: Where you have explicitly given consent, e.g., for
            marketing communications.
          </li>
          <li>
            Contractual necessity: When data is required to provide services or
            fulfill a contract.
          </li>
          <li>
            Legal obligation: For compliance with applicable laws or legal
            processes.
          </li>
          <li>
            Legitimate interests: Where processing is necessary for our
            legitimate business interests and does not override your rights and
            freedoms.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="document-h2">5. Sharing Your Information </h2>
        <p className="document-p">
          Your personal data may be shared only in the following circumstances:
        </p>
        <ul className="document-ul">
          <li>
            With your consent or as necessary to fulfill service requests.
          </li>
          <li>
            Between Users and Clients for the purpose of recruitment, hiring, or
            project collaborations.
          </li>
          <li>
            With service providers (e.g., hosting, analytics, customer support,
            payment processors) under binding confidentiality agreements.
          </li>
          <li>
            As part of a business transaction, such as a merger, acquisition, or
            asset sale.
          </li>
          <li>
            To comply with legal obligations or respond to lawful requests from
            public authorities.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="document-h2">6. International Data Transfers </h2>
        <p className="document-p">
          We may transfer your personal data across borders, including to
          countries that may not offer the same level of data protection as your
          jurisdiction. Where required by law, such transfers are safeguarded
          using appropriate legal mechanisms, such as Standard Contractual
          Clauses (SCCs) or other approved frameworks.
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="document-h2">7. Data Retention </h2>
        <p className="document-p">
          We retain your personal data only for as long as necessary to fulfill
          the purposes outlined in this Policy, unless a longer retention period
          is required or permitted by law. You may request data deletion at any
          time, subject to our legal and contractual obligations.
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="document-h2">8. Your Rights </h2>
        <p className="document-p">
          Subject to your location and applicable laws (e.g., GDPR, CCPA), you
          may have the right to:
        </p>
        <ul className="document-ul">
          <li>Request access to your personal data.</li>
          <li>Request correction or deletion of your data.</li>
          <li>Object to or restrict the processing of your data.</li>
          <li>Withdraw previously given consent at any time.</li>
          <li>Request data portability.</li>
          <li>File a complaint with a data protection authority.</li>
        </ul>
        <p className="document-p">
          To exercise any of these rights, please contact us at{" "}
          <a
            href="mailto:support@hyi.ai"
            className="text-brand-600 hover:underline"
          >
            support@hyi.ai
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="document-h2">9. Security Measures </h2>
        <p className="document-p">
          We implement appropriate technical and organizational measures to
          protect your data from unauthorized access, disclosure, loss, or
          alteration. These include encryption, secure servers, access controls,
          and routine security audits.
        </p>
        <p className="document-p">
          However, no system is completely secure, and we cannot guarantee the
          absolute security of your information.
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="document-h2">10. Compliance with Laws & Regulations </h2>
        <p className="document-p">
          This Privacy Policy is governed by and interpreted in accordance with
          the laws of <span className="font-semibold">India</span>. We comply
          with applicable data protection regulations, including but not limited
          to the{" "}
          <span className="font-semibold">
            General Data Protection Regulation (GDPR), California Consumer
            Privacy Act (CCPA),
          </span>{" "}
          and other relevant international and local privacy laws.
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="document-h2">11. Cookies and Tracking Technologies </h2>
        <p className="document-p">
          We use cookies and similar technologies to:
        </p>
        <ul className="document-ul">
          <li>Understand and improve Platform performance.</li>
          <li>Deliver personalized content.</li>
          <li>Remember user preferences.</li>
          <li>Analyze Platform traffic and trends.</li>
        </ul>
        <p className="document-p">
          You can control cookie preferences through your browser settings.
          Blocking certain cookies may affect your user experience.
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="document-h2">12. Children&apos;s Privacy </h2>
        <p className="document-p">
          Our Platform is not directed toward individuals under the age of 16,
          and we do not knowingly collect personal data from minors. If we
          discover that personal data has been collected from a child without
          verifiable parental consent, we will take steps to delete such
          information promptly.
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="document-h2">13. Changes to This Privacy Policy </h2>
        <p className="document-p">
          We may revise this Privacy Policy from time to time to reflect changes
          in legal requirements, technology, or our business practices. When
          changes are significant, we will notify you via the Platform or email.
        </p>
        <p className="document-p">
          We encourage you to review this Privacy Policy periodically to stay
          informed about how we protect your information.
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="document-h2">
          For any questions about this Privacy Policy, please contact us at:{" "}
        </h2>
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
  );
}
