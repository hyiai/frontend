"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  page: number;
  totalPages: number;
}

export function CustomPagination({ page, totalPages }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, page - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-between items-center gap-2 my-4">
      <div>
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="text-dark_mode-100 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft size={16} className="mr-2 text-dark_mode-300" />
          Previous
        </button>
      </div>

      <div className="flex gap-1">
        {getPageNumbers().map((num) => (
          <button
            key={num}
            className={cn(
              "text-xs font-medium flex rounded-md cursor-pointer py-2 px-3",
              page === num ? "glass-gradient text-white" : "text-gray-500"
            )}
            onClick={() => goToPage(num)}
          >
            {num}
          </button>
        ))}
      </div>

      <div>
        <button
          className="text-dark_mode-100 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
          <ArrowRight size={16} className="ml-2 text-dark_mode-300" />
        </button>
      </div>
    </div>
  );
}
