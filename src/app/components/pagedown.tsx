"use client";
import { motion } from "framer-motion";

export default function PageDown({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150 }} // começa acima
      whileInView={{ opacity: 1, y: 0 }} // desce até a posição original
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
