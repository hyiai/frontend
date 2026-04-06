// app/article/[slug]/page.tsx
import React from "react";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
import ArticleContent from "@/components/talent/articleContent";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <section className="w-full h-screen flex flex-col items-center">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-[300px] bg-[radial-gradient(ellipse_at_40%_top,rgba(217,70,239,0.6)_0%,rgba(217,70,239,0.25)_35%,transparent_70%)] bg-no-repeat" />
      </div>
      <Header />
      <ArticleContent slug={slug} />
      <Footer />
    </section>
  );
}
