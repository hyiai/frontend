// React Imports
import React from "react";

// Component Imports
import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";
import ShareButton from "@/components/sub-modules/blogs/shareButton";
import CustomBlogCard from "@/components/shared/customBlogCard";

// lib Import
import { companyTabAPI } from "@/lib/services/api";
import { StaticImageData } from "next/image";
import CustomSeparator from "@/components/shared/customSeparator";
import CustomBackButton from "@/components/shared/customBackButton";

export interface BlogProps {
  data: {
    _id: string;
    featuredImage: StaticImageData;
    title: string;
    description: string;
    featured: boolean;
    tags: string[];
    slug: string;
    createdAt: string;
    updatedAt: string;
    _v: number;
  }[];
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  const data = await companyTabAPI.getBlogData(blogId);
  const blog: BlogProps = await companyTabAPI.getFeaturedBlogsData();
  const filterdBlog = blog.data.filter((blog) => blog.slug !== blogId);
  return (
    <>
      <div className="w-full double-gradient-toleft">
        <Header />
      </div>

      <div className="w-full flex justify-center px-4 md:px-8">
        <div className="w-full max-w-[1280px] flex flex-col items-center">
          <div className="w-full flex gap-14">
            <div className="w-full flex flex-col lg:w-2/3">
              <div className="w-fit pt-12">
                <CustomBackButton />
              </div>

              <div
                key={data?._id}
                dangerouslySetInnerHTML={{ __html: data?.content }}
                className="hyi-blog max-w-[1280px]"
              />
              <CustomSeparator margin_Y="my-2" />
              <div className="w-full flex items-center justify-between py-4 md:py-6">
                <span className="text-base font-semibold text-dark_mode-300">
                  Share this post
                </span>
                <ShareButton />
              </div>
            </div>
            <div className="hidden lg:w-1/3 lg:flex lg:flex-col lg:pt-20 lg:gap-4 lg:pb-8">
              <h2 className="hyi-h3 font-semibold">Related Resources</h2>
              {filterdBlog.slice(0, 5).map((blog) => (
                <CustomBlogCard key={blog._id} blogItem={blog} hideParagraph />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
