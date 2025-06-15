// components/HoverGrow.tsx
'use client';
import { motion } from 'framer-motion';

export default function HoverGrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 150 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
