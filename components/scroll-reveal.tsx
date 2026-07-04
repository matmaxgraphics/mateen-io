"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  scale?: number;
  staggerChildren?: number;
  viewportOnce?: boolean;
  viewportMargin?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 24,
  xOffset = 0,
  scale = 1,
  staggerChildren = 0,
  viewportOnce = true,
  viewportMargin = "-10% 0px -10% 0px",
  ...props
}: ScrollRevealProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      x: xOffset,
      scale: scale,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo for sleek premium motion
      },
    },
  };

  // If staggering children, the parent container acts as the scroll trigger
  if (staggerChildren > 0) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: viewportOnce, margin: viewportMargin }}
        variants={containerVariants}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  // Otherwise, animate the single item
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, margin: viewportMargin }}
      variants={childVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Reusable child component for staggered entrance
export function ScrollRevealItem({
  children,
  duration = 0.8,
  yOffset = 24,
  xOffset = 0,
  scale = 1,
  ...props
}: HTMLMotionProps<"div"> & {
  children: ReactNode;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  scale?: number;
}) {
  const childVariants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      x: xOffset,
      scale: scale,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div variants={childVariants} {...props}>
      {children}
    </motion.div>
  );
}
