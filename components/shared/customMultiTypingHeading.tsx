"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MultiLineTypingProps {
  textSets: string[][];
}

export default function CustomMultiTypingHeadings({
  textSets,
}: MultiLineTypingProps) {
  const [setIndex, setSetIndex] = useState(0); // current set
  const [lineIndex, setLineIndex] = useState(0); // current line in the set
  const [displayedText, setDisplayedText] = useState("");
  const [isDeletingAll, setIsDeletingAll] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let deleteTimer: NodeJS.Timeout;
    const currentLine = textSets[setIndex][lineIndex];
    const typingSpeed = 80;

    if (!isDeletingAll && displayedText.length < currentLine.length) {
      // Typing
      timer = setTimeout(() => {
        setDisplayedText(currentLine.slice(0, displayedText.length + 1));
      }, typingSpeed / (lineIndex === 2 ? 2.0 : 1.5));
    } else if (!isDeletingAll && displayedText.length === currentLine.length) {
      // Finished typing current line
      timer = setTimeout(() => {
        if (lineIndex < textSets[setIndex].length - 1) {
          setLineIndex((prev) => prev + 1);
          setDisplayedText("");
        } else {
          // All lines done → wait, then instantly delete all
          deleteTimer = setTimeout(() => {
            setIsDeletingAll(true);
          }, 300); // wait before disappearing
        }
      }, 400);
      return () => {
        clearTimeout(timer);
        clearTimeout(deleteTimer);
      };
    } else if (isDeletingAll) {
      // Instantly clear all lines and go to next set
      setDisplayedText("");
      setLineIndex(0);
      setIsDeletingAll(false);
      setSetIndex((prev) => (prev + 1) % textSets.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeletingAll, lineIndex, setIndex, textSets]);

  const getLineStyle = (i: number) => {
    if (i === 0)
      return "text-2xl font-semibold bg-gradient-to-t from-brand-600 to-brand-500 bg-clip-text text-transparent lg:text-3xl";
    if (i === 1)
      return "text-2xl font-semibold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent lg:text-3xl";
    return "text-sm text-dark_mode-300 md:text-base";
  };

  return (
    <div className="flex flex-col gap-2">
      {!isDeletingAll &&
        textSets[setIndex].slice(0, lineIndex + 1).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`capitalize cursor-default gap-2 ${getLineStyle(i)}`}
          >
            {i === lineIndex ? (
              <>
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-white"
                >
                  |
                </motion.span>
              </>
            ) : (
              line
            )}
          </motion.div>
        ))}
    </div>
  );
}
