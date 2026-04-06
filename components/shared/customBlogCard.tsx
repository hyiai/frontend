// React Imports
import React from "react";

// Next Imports
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// Image/Icon Import

// lib Import
import { cn } from "@/lib/utils";
import { formattedDate } from "../util/formatter";

// Type/Interface declaration
interface CustomBlogCardProps {
  blogItem: {
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
  };
  width?: number;
  height?: number;
  hideParagraph?: boolean;
}

export default function CustomBlogCard({
  blogItem,
  width = 405,
  height = 228,
  hideParagraph = false,
}: CustomBlogCardProps) {
  return (
    <Link
      href={`/blogs/${blogItem.slug}`}
      className={`group w-fit flex flex-col bg-background rounded-xl gap-6 hover:cursor-pointer ${
        hideParagraph ? "glass-gradient" : ""
      }`}
    >
      <div className="w-full">
        <Image
          src={blogItem.featuredImage}
          alt="Card image"
          width={width}
          height={height}
          className={`w-full  object-cover ${
            hideParagraph ? "rounded-tr-xl rounded-tl-xl" : "rounded-xl"
          }`}
        />
      </div>
      <div
        className={`w-full h-full flex flex-col justify-between gap-5 ${
          hideParagraph ? "px-5 pb-4" : ""
        }`}
      >
        <div className="w-full flex flex-col gap-2">
          <span className="text-sm text-dark_mode-300">
            {formattedDate(blogItem.createdAt)}
          </span>
          <h3 className="hyi-h4 cursor-pointer">{blogItem.title}</h3>
          <p
            className={cn(
              "text-base text-dark_mode-300 line-clamp-3",
              hideParagraph && "hidden"
            )}
          >
            {blogItem.description}
          </p>
        </div>
        <div
          className={cn(
            "w-fit flex items-center gap-2",
            hideParagraph && "hidden"
          )}
        >
          {blogItem?.tags?.map((tag, index) => (
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
