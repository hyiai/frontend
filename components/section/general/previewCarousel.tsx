"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

type PreviewCarouselProps = {
  children: React.ReactNode;
  intervalTime?: number;
  pauseOnHover?: boolean;
  className?: string;
};

export default function PreviewCarousel({
  children,
  intervalTime = 3000,
  pauseOnHover = true,
  className,
}: PreviewCarouselProps) {
  const slides = useMemo(
    () => React.Children.toArray(children).filter(Boolean),
    [children]
  );

  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isScrollingRef = useRef(false);

  const isTouchDevice =
    typeof window !== "undefined" && "ontouchstart" in window;

  // Duplicate children 3 times for infinite loop
  const loopedSlides = useMemo(() => {
    if (slides.length === 0) return [];
    return [...slides, ...slides, ...slides];
  }, [slides]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const middleIndex = slides.length;
    const middleChild = el.children[middleIndex] as HTMLElement;
    el.scrollLeft =
      middleChild.offsetLeft - (el.clientWidth - middleChild.offsetWidth) / 2;
  }, [slides.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const middleIndex = slides.length;
    const middleChild = el.children[middleIndex] as HTMLElement;
    el.scrollLeft =
      middleChild.offsetLeft - (el.clientWidth - middleChild.offsetWidth) / 2;
  }, [slides.length]);

  useEffect(() => {
    if (!autoSlideEnabled) return;

    const interval = setInterval(() => {
      scrollToDirection(1);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [autoSlideEnabled]);

  // Resume auto-slide after touch swipe on mobile
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let scrollTimeout: NodeJS.Timeout | null = null;

    const teleportIfNeeded = () => {
      const children = Array.from(el.children) as HTMLElement[];
      const elCenter = el.scrollLeft + el.clientWidth / 2;

      let closestIndex = 0;
      let minDist = Infinity;
      children.forEach((child, idx) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(elCenter - childCenter);
        if (dist < minDist) {
          minDist = dist;
          closestIndex = idx;
        }
      });

      if (closestIndex < slides.length || closestIndex >= 2 * slides.length) {
        const newIndex =
          closestIndex < slides.length
            ? closestIndex + slides.length
            : closestIndex - slides.length;
        const target = children[newIndex];
        teleportInstant(
          target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2
        );
      }
    };

    const onScroll = () => {
      if (isScrollingRef.current) return;
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        teleportIfNeeded();
      }, 100);
    };

    el.addEventListener("scroll", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [slides.length]);

  const teleportInstant = (newLeft: number) => {
    const el = scrollRef.current;
    if (!el) return;

    // temporarily disable smooth behavior
    el.style.scrollBehavior = "auto";
    el.scrollLeft = newLeft;

    // restore smooth for normal scrolling
    requestAnimationFrame(() => {
      el.style.scrollBehavior = "smooth";
    });
  };

  const scrollToDirection = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const children = Array.from(el.children) as HTMLElement[];
    const elCenter = el.scrollLeft + el.clientWidth / 2;

    let closestIndex = 0;
    let minDist = Infinity;
    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(elCenter - childCenter);
      if (dist < minDist) {
        minDist = dist;
        closestIndex = idx;
      }
    });

    let targetIndex = closestIndex + dir;
    if (targetIndex < 0) targetIndex = children.length - 1;
    if (targetIndex >= children.length) targetIndex = 0;

    const target = children[targetIndex];
    if (!target) return;

    isScrollingRef.current = true;
    el.scrollTo({
      left: target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2,
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrollingRef.current = false;
      const elCenterAfter = el.scrollLeft + el.clientWidth / 2;
      const newClosestIndex = children.reduce((closest, child, idx) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(elCenterAfter - childCenter);
        return dist <
          Math.abs(
            elCenterAfter -
              (children[closest].offsetLeft + children[closest].offsetWidth / 2)
          )
          ? idx
          : closest;
      }, 0);

      if (
        newClosestIndex < slides.length ||
        newClosestIndex >= 2 * slides.length
      ) {
        const newIndex =
          newClosestIndex < slides.length
            ? newClosestIndex + slides.length
            : newClosestIndex - slides.length;
        const target = children[newIndex];
        teleportInstant(
          target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2
        );
      }
    }, 600);
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${className || ""}`}
      onMouseEnter={() =>
        !isTouchDevice && pauseOnHover && setAutoSlideEnabled(false)
      }
      onMouseLeave={() =>
        !isTouchDevice && pauseOnHover && setAutoSlideEnabled(true)
      }
    >
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-2 gap-5"
      >
        {loopedSlides.map((child, idx) => (
          // IMPORTANT: each slide has a max width so mobile doesn't overflow
          <div
            key={idx}
            className="flex-shrink-0 w-[80vw] max-w-[320px] snap-center"
            // optional: when user touches a slide we stop auto slide
            onTouchStart={() => setAutoSlideEnabled(false)}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
