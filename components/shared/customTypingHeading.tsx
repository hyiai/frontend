"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypingHeadlinesProps {
  items: string[];
}

export default function CustomTypingHeadings({ items }: TypingHeadlinesProps) {
  const [current, setCurrent] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentText = items[current];

    const baseSpeed = isDeleting ? 40 : 80;
    const typingSpeed = baseSpeed + Math.random() * 30;

    if (!isDeleting && displayedText.length < currentText.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      timer = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      }, typingSpeed / 2.0);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrent((prev) => (prev + 1) % items.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, current, items]);

  return (
    <div className="flex items-center justify-center text-center space-x-1 lg:justify-start lg:text-left">
      <AnimatePresence mode="wait">
        <motion.span
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-semibold lg:text-3xl"
        >
          {displayedText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-2xl text-white font-bold lg:text-3xl"
      >
        |
      </motion.span>
    </div>
  );
}
