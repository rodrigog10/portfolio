"use client";
import { motion } from "framer-motion";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // controla quando a animação ativa
    >
      {children}
    </motion.div>
  );
}
