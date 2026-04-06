"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TalentResourcesAPI } from "@/lib/services/api";
import BackButton from "@/components/shared/backButton";

type Article = {
  _id: string;
  blogTitle: string;
  blogDescription: string;
  blogPostTitle: string;
  blogPostDescription: string;
  blogImage: string;
  slug: string;
  articleDoc: string;
  createdAt: string;
  updatedAt: string;
};

export default function ArticleContent({ slug }: { slug: string }) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const formattedSlug = decodeURIComponent(slug)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await TalentResourcesAPI.getAllTalentResourceBlogBySlug(
          formattedSlug
        );
        if (Array.isArray(data) && data.length > 0) {
          setArticle(data[0]);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching article:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchArticle();
  }, [slug, formattedSlug]);

  const handleDownload = () => {
    if (article?.articleDoc) {
      const link = document.createElement("a");
      link.href = article.articleDoc;
      link.download = article.blogTitle || "article.docx";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="w-full max-w-7xl text-white relative px-6 sm:p-0">
      <BackButton fallbackHref="/talent/resource" className="mb-4 pt-8" />
      {loading ? (
        <p className="text-center text-gray-400">Loading article...</p>
      ) : error || !article ? (
        <div className="text-red-300 bg-red-900/20 border border-red-500/30 rounded-lg p-3">
          Article not found.
        </div>
      ) : (
        <>
          <h1 className="text-3xl text-white font-semibold">{`Article on ${article.blogTitle}`}</h1>
          {article.blogDescription && (
            <p className="text-white/70 mt-2">{article.blogDescription}</p>
          )}
          {/* Article Image + Description */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            <div
              className="card w-full h-full p-[1px] overflow-hidden cursor-pointer transition-transform duration-200"
              onClick={handleDownload}
            >
              <div className="card-content cursor-pointer relative w-full h-full flex flex-col rounded-xl border border-white/20">
                <div className="w-full h-fit relative">
                  {article.blogImage && (
                    <Image
                      src={article.blogImage}
                      alt={article.blogTitle}
                      width={412}
                      height={200}
                      className="w-full rounded-tl-xl rounded-tr-xl bg-cover"
                    />
                  )}
                </div>
                <div className="w-full h-full flex flex-col justify-between px-6 py-5 gap-2.5 relative z-10">
                  <h3 className="hyi-h4 cursor-pointer">
                    {
                      article.articleDoc
                        .split("/") // take only the last part after last /
                        .pop() // get file name: "1.+Angular+Detailed+Report.docx"
                        ?.replace(/^\d+\.\+/, "") // remove "1.+"
                        .replace(/\+/g, " ") // replace + with spaces
                        .replace(/\.[^/.]+$/, "") // remove extension (.docx, .pdf etc.)
                    }
                  </h3>
                </div>
                {/* Post Details */}
                {article.blogPostDescription && (
                  <div className="mt-6 text-white/80 leading-relaxed px-6 pb-5">
                    {article.blogPostDescription}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
