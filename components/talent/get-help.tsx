"use client";
import React from "react";
// import Link from "next/link";
import SupportCard from "./support-card";

export default function GetHelpSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="relative max-w-[1280px] mx-auto flex justify-between">
          <div
            className="
        w-[300px] h-[800px]
        bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.35)_0%,rgba(217,70,239,0.15)_35%,transparent_70%)]
        opacity-70 blur-xl
      "
          />

          <div
            className="
        w-[300px] h-[800px]
        bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.35)_0%,rgba(139,92,246,0.15)_35%,transparent_70%)]
        opacity-70 blur-xl
      "
          />

          <div
            className="
        w-[300px] h-[800px]
        bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.35)_0%,rgba(217,70,239,0.15)_35%,transparent_70%)]
        opacity-70 blur-xl
      "
          />
        </div>
      </div>

      <div className="max-w-full mx-auto px-4">
        <h2 className="text-center text-white font-semibold hyi-h2 pb-4">
          Get Help with HYI.AI
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <SupportCard
            title="Talent Support"
            items={[
              <>
                For talent assistance and resources, reach out to us at{" "}
                <a
                  className="text-white hover:underline"
                  href="mailto:talent@hyi.ai"
                >
                  talent@hyi.ai
                </a>
              </>,
              <>
                Access our developer resources or connect with the team for
                technical queries.
              </>,
            ]}
          />
          <SupportCard
            title="Careers at HYI.AI"
            items={[
              <>
                Are you interested in joining our remote team? Contact us at{" "}
                <a
                  className="text-white hover:underline"
                  href="mailto:remote@hyi.ai"
                >
                  remote@hyi.ai
                </a>
              </>,
              <>
                We welcome talented individuals who are passionate about
                innovation.
              </>,
            ]}
          />
          {/* <SupportCard
            title="Sales Enquiries"
            items={[
              <>
                For sales inquiries or to connect with our sales team, email us
                at{" "}
                <a
                  className="text-white hover:underline"
                  href="mailto:business@hyi.ai"
                >
                  business@hyi.ai
                </a>
              </>,
              <>Share your requirements, and we&apos;ll get in touch.</>,
            ]}
          /> */}
          <SupportCard
            title="Payout support"
            items={[
              <>
                For account-related questions or to create a billing support
                ticket, email us at{" "}
                <a
                  className="text-white hover:underline"
                  href="mailto:billing@hyi.ai"
                >
                  billing@hyi.ai
                </a>
              </>,
              <>Share your concerns, and we&apos;ll assist you promptly.</>,
            ]}
          />
          {/* <SupportCard
            title="HYI.AI Office"
            items={[
              <>2nd Floor, Second Cross, 80 Feet Rd, K.R garden, Koramangala,<br/>Bengaluru, Karnataka 560034.</>,
            ]}
            footer={
              <Link
                href="https://maps.google.com/?q=K.R%20Garden%2C%20Koramangala%2C%20Bengaluru%20560034"
                target="_blank"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <span>Google Maps</span>
                <span aria-hidden>→</span>
              </Link>
            }
          /> */}
          <SupportCard
            title="Grievance Reporting"
            items={[
              <>
                For compliance or legal issues, contact{" "}
                <a
                  className="text-white hover:underline"
                  href="mailto:grievance@hyi.ai"
                >
                  grievance@hyi.ai
                </a>
              </>,
            ]}
          />
        </div>
      </div>
    </section>
  );
}
