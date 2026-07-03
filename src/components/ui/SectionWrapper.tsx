import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, title, subtitle, children, className = '' }: SectionWrapperProps) {
  const { ref, inView } = useScrollReveal<HTMLDivElement>();

  return (
    <section id={id} className={`section-padding relative ${className}`}>
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-balance">
              {subtitle}
            </p>
          )}
          <div className="mt-6 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-indigo" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
