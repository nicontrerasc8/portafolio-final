"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={
        shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
      }
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "-10%" }}
    >
      {children}
    </motion.div>
  );
}
