"use client";

import React, { useEffect, useState, ReactNode, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingHeadlinesProps {
  children: ReactNode;
}

export default function CustomRotatingHeadings({
  children,
}: RotatingHeadlinesProps) {
  const childrenArray = useMemo(
    () => (Array.isArray(children) ? children : [children]),
    [children]
  );
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % childrenArray.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [childrenArray.length]);

  return (
    <div className="relative w-full min-h-[124px] min-w-[330px] transition-all duration-500 ease-in-out overflow-hidden min-[410px]:min-w-[400px] min-[768px]:min-h-[140px] md:min-w-[500px] min-[1024px]:min-h-[148px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 left-0 w-full will-change-transform"
        >
          {childrenArray[current]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
