import React from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface SplitTextProps {
  text: string;
  delay?: number;
  className?: string;
  wordClassName?: string;
  charClassName?: string;
  staggerChildren?: number;
  animationProps?: HTMLMotionProps<"span">;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  delay = 0,
  className = "",
  wordClassName = "",
  charClassName = "",
  staggerChildren = 0.03,
  animationProps,
}) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const defaultChildVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 120,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, wIdx) => (
        <span
          key={wIdx}
          className={`inline-block overflow-hidden whitespace-nowrap mr-[0.3em] ${wordClassName}`}
          style={{ display: "inline-block" }}
        >
          {word.split("").map((char, cIdx) => (
            <motion.span
              key={cIdx}
              className={`inline-block ${charClassName}`}
              variants={animationProps?.variants || defaultChildVariants}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};
