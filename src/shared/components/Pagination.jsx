"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";
import React from "react";
import { getPaginationRange } from "@/utils/pagination";

/**
 * Pagination Component
 * - Reads current page from URL
 * - Handles navigation (next / previous / direct page jump)
 * - Displays smart pagination range with dots
 */
const Pagination = ({ totalPages }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  /**
   * Current active page from URL (?page=)
   */
  const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);

  /**
   * Navigate to a specific page (updates URL query param)
   */
  const goToPage = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page);
    router.push(`?${params.toString()}`);
  };

  /**
   * Pagination range (visible page numbers)
   */
  const visiblePages = getPaginationRange(currentPage, totalPages);

  /**
   * Navigation state (prev / next disabled)
   */
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  /**
   * Edge pages from visible range
   */
  const firstVisiblePage = visiblePages[0];
  const lastVisiblePage = visiblePages[visiblePages.length - 1];

  /**
   * Dot visibility logic
   */
  const shouldShowRightDots =
    lastVisiblePage < totalPages - 1 && currentPage < totalPages - 2;

  const shouldShowLeftDots =
    firstVisiblePage > 2 && currentPage > totalPages - 3;

  /**
   * Shared navigation button styles
   */
  const getNavButtonClass = (disabled) => `
    flex items-center justify-center
    w-10 h-10 rounded-xl border
    transition-all duration-200
    active:scale-95
    ${
      disabled
        ? "opacity-40 cursor-not-allowed border-slate-200 text-slate-400"
        : "border-slate-200 text-slate-600 hover:border-primary hover:text-primary hover:shadow-sm"
    }
  `;

  return (
    <nav
      className="flex items-center justify-center space-x-2 font-medium my-6"
      aria-label="Pagination"
    >
      {/* ================= PREVIOUS BUTTON ================= */}
      <Button
        disabled={isFirstPage}
        onClick={() => goToPage(currentPage - 1)}
        className={getNavButtonClass(isFirstPage)}
      >
        <ChevronLeft size={20} />
      </Button>

      {/* ================= LEFT SIDE DOTS (when needed) ================= */}
      {shouldShowLeftDots && (
        <>
          <Button
            onClick={() => goToPage(1)}
            className="flex items-center justify-center w-10 h-10 rounded-xl text-slate-600 hover:bg-slate-100"
          >
            1
          </Button>

          <span className="flex items-center justify-center w-10 h-10 text-slate-400">
            ...
          </span>
        </>
      )}

      {/* ================= PAGE NUMBERS ================= */}
      <div className="flex items-center gap-1">
        {visiblePages.map((page) => {
          const isActive = page === currentPage;

          return (
            <Button
              key={page}
              onClick={() => goToPage(page)}
              className={`
                flex items-center justify-center
                w-10 h-10 rounded-xl
                transition-all duration-200 active:scale-95
                ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-primary"
                }
              `}
            >
              {page}
            </Button>
          );
        })}

        {/* ================= RIGHT SIDE DOTS + LAST PAGE ================= */}
        {shouldShowRightDots && (
          <>
            <span className="flex items-center justify-center w-10 h-10 text-slate-400">
              ...
            </span>

            <Button
              onClick={() => goToPage(totalPages)}
              className="flex items-center justify-center w-10 h-10 transition-all duration-200 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-primary active:scale-95"
            >
              {totalPages}
            </Button>
          </>
        )}
      </div>

      {/* ================= NEXT BUTTON ================= */}
      <Button
        disabled={isLastPage}
        onClick={() => goToPage(currentPage + 1)}
        className={getNavButtonClass(isLastPage)}
      >
        <ChevronRight size={20} />
      </Button>
    </nav>
  );
};

export default Pagination;
