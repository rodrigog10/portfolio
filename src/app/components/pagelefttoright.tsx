"use client";
import { motion } from "framer-motion";

export default function PageLeftToRight({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -150 }} // começa à esquerda
      whileInView={{ opacity: 1, x: 0 }} // vai até a posição original
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
