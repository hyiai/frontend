// app/case-studies/[slug]/page.tsx
import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";
import BackButton from "@/components/shared/backButton";
import { notFound } from "next/navigation";
import React from "react";
import RelatedCaseStudies from "@/components/talent/related-case-studies";
import Technologies from "@/components/section/general/technologies";
import Link from "next/link";
import { CaseStudyAPI } from "@/lib/services/api";

/* ---------- Types ---------- */

interface Section {
  id: string;
  title: string;
  paragraphs: string[];
  _id: string;
}

interface CaseStudy {
  _id: string;
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  sections: Section[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let caseStudy: CaseStudy | null = null;

  try {
    caseStudy = await CaseStudyAPI.getCaseStudyBySlug(slug);
  } catch (error: unknown) {
    if (error && typeof error === "object" && "status" in error) {
      const err = error as { status?: number };
      if (err.status === 404) {
        return notFound();
      }
    }
    return notFound();
  }
  if (!caseStudy) {
    return notFound();
  }

  const toc = caseStudy.sections.map((s) => ({ id: s.id, title: s.title }));

  return (
    <section className="relative z-10 flex w-full flex-col items-center justify-center px-4 sm:px-6 md:px-6">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_40%_top,rgba(217,70,239,0.6)_0%,rgba(217,70,239,0.25)_35%,transparent_70%)] bg-no-repeat" />
      </div>
      <Header />
      <div className="w-full max-w-[1280px] flex flex-col relative isolate px-0 sm:px-4 md:px-0 py-6 md:py-8">
        <BackButton
          className="mb-3"
          fallbackHref="/case-studies"
          label="Go to Case Studies"
        />
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-snug">
          {caseStudy.title}
        </h1>

        <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-24">
              <h3 className="text-white/90 font-semibold">Table of contents</h3>
              <ul className="mt-4 space-y-2">
                {toc.map((t, i) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className="block rounded-xl px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {i + 1}. {t.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-white/90 font-medium">
                  Know more about HYI.AI?
                </p>
                <Link
                  href="/talk-to-our-expert"
                  className="mt-4 inline-flex items-center justify-center rounded-full px-5 py-2 bg-brand-600 text-white font-medium"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-8 order-1 lg:order-2">
            {caseStudy.sections.map((sec, i) => (
              <section key={sec.id} id={sec.id} className="scroll-mt-28">
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
                  {sec.title}
                </h2>
                <div className="mt-3 space-y-4 leading-7">
                  {sec.paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className={`${
                        (i === 1 || i === 2) &&
                        idx !== 0 &&
                        idx !== sec.paragraphs.length - 1 &&
                        !p.startsWith("•")
                          ? "text-lg text-dark_mode-25 font-medium"
                          : "text-dark_mode-300"
                      }`}
                    >
                      {p}
                    </p>
                  ))}
                </div>
                <div className="my-8 h-px w-full bg-white/10" />
              </section>
            ))}
          </article>
        </div>

        <div className="mt-4 sm:mt-6">
          <RelatedCaseStudies currentSlug={slug} />
        </div>
      </div>

      <Technologies />
      <Footer />
    </section>
  );
}
