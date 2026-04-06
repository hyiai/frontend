// Next Imports
import Image, { StaticImageData } from "next/image";

// Component Imports (Section Imports)
import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";
import CustomBlogCard from "@/components/shared/customBlogCard";
import CustomWrapper from "@/components/shared/customWrapper";

// API Imports
import { companyTabAPI } from "@/lib/services/api";
import { CustomPagination } from "@/components/shared/customPagination";
import { formattedDate } from "@/components/util/formatter";
import HeroSection from "@/components/section/blogs/heroSection";
import CustomSeparator from "@/components/shared/customSeparator";
import Link from "next/link";

interface BlogsResponse {
  pagination: {
    data: {
      _id: string;
      featuredImage: StaticImageData;
      author: string;
      date: string;
      title: string;
      description: string;
      featured: boolean;
      slug: string;
      tags: string[];
      createdAt: string;
      updatedAt: string;
      _v: number;
    }[];
    limit: number;
    page: number;
    total: number;
    totalPages: number;
  };
}
interface FeaturedBlogsResponse {
  data: {
    _id: string;
    featuredImage: StaticImageData;
    title: string;
    description: string;
    featured: boolean;
    slug: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
    _v: number;
  }[];
}

type BlogDetail = {
  _id: string;
  featuredImage: string | StaticImageData;
  title: string;
  description: string;
  featured: boolean;
  slug: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

type Blog = {
  blog: BlogDetail;
  dirCol?: boolean;
};

function Blog({ blog, dirCol = true }: Blog) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className={`w-fit flex cursor-pointer gap-6 ${
        dirCol ? "flex-col md:flex-row xl:flex-col" : "flex-col md:flex-row"
      }`}
    >
      <div className={`w-fit rounded-xl ${dirCol ? "pb-0 lg:pb-2" : ""}`}>
        <Image
          src={blog.featuredImage}
          alt="Blog image"
          width={dirCol ? 530 : 320}
          height={dirCol ? 230 : 200}
          className={`rounded-xl ${
            dirCol
              ? "w-[530px] h-[230px] object-cover md:max-w-[320px] xl:max-w-[530px]"
              : "w-[530px] object-cover lg:max-w-[320px] lg:h-[200px]"
          }`}
        />
      </div>
      <div className="w-fit flex flex-col gap-6">
        <div
          className={`w-full flex flex-col ${
            dirCol ? "gap-3 xl:w-4/5" : "gap-2"
          }`}
        >
          <p className={`text-sm text-dark_mode-300 ${dirCol ? "" : "pb-1"}`}>
            {formattedDate(blog.createdAt)}
          </p>
          <h3
            className={`font-semibold text-dark_mode-100 ${
              dirCol ? "hyi-h3" : "text-base md:text-lg"
            }`}
          >
            {blog.title}
          </h3>
          <p className={`w-full text-base text-dark_mode-300 line-clamp-3 `}>
            {blog.description}
          </p>
        </div>
        <div className="w-fit flex flex-wrap gap-2">
          {blog?.tags?.map((tag, index) => (
            <span
              key={index}
              className="text-sm font-medium text-dark_mode-300 glass-gradient rounded-full px-2.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams.page) || 1;

  const { pagination }: BlogsResponse = await companyTabAPI.getLatestBlogsData(
    currentPage
  );

  const { data: featuredResponse }: FeaturedBlogsResponse =
    await companyTabAPI.getFeaturedBlogsData();

  return (
    <section className="w-full flex flex-col items-center">
      <Header />
      <div className="w-full flex justify-center px-4 pb-6 md:px-6 md:pb-6 lg:items-center lg:pb-8">
        <div className="w-full max-w-[1280px]">
          <HeroSection />
          {/* <div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-12">
              <div className="w-full flex flex-col items-center text-center gap-5 md:w-4/5">
                <h1 className="hyi-h1">
                  <span className="text-brand-800">
                    Latest Insights & Articles
                  </span>
                </h1>
                <p className="para-1 text-text-700">
                  Explore our collection of blog posts for expert tips, industry
                  trends, and valuable insights to help you stay informed and
                  inspired.
                </p>
              </div>
            </div> */}
        </div>
      </div>

      <CustomWrapper divStyle="gap-6 md:gap-12">
        <div className="w-full grid grid-cols-1 items-center gap-4 xl:grid-cols-9 xl:grid-rows-3 lg:items-start">
          <div className="row-span-3 xl:col-span-4">
            {featuredResponse.map(
              (blog, index) =>
                index === 0 && <Blog key={blog._id} blog={blog} />
            )}
          </div>
          <div className="w-full grid grid-cols-1 row-span-3 gap-8 xl:col-span-5">
            {featuredResponse.map(
              (blog, index) =>
                index > 0 &&
                index < 3 && <Blog key={blog._id} blog={blog} dirCol={false} />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="hyi-h2">All blog posts</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {pagination.data.map((blog) => (
              <CustomBlogCard key={blog._id} blogItem={blog} />
            ))}
          </div>
          {pagination.page > 1 && (
            <div>
              <CustomSeparator />

              <CustomPagination
                page={pagination.page}
                totalPages={pagination.totalPages}
              />
            </div>
          )}
        </div>
      </CustomWrapper>
      <Footer />
    </section>
  );
}
