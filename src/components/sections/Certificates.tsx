import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { certificates } from '../../data/certificates';

export function Certificates() {
  return (
    <SectionWrapper
      id="certificates"
      title="Certifications"
      subtitle="Continuous learning and professional development through recognized certifications."
    >
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-indigo to-transparent md:-translate-x-1/2" />

        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex items-start gap-6 mb-8 ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Dot */}
            <div className="relative z-10 shrink-0 md:w-1/2 md:flex md:justify-end md:pr-8 group">
              <div
                className={`absolute left-4 md:left-auto md:right-0 top-2 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-primary-500/20 group-hover:ring-primary-500/40 transition-all duration-300 md:translate-x-1/2 ${
                  i % 2 === 0 ? 'md:right-0' : 'md:left-0 md:translate-x-[-100%]'
                }`}
              />
            </div>

            {/* Card */}
            <div className="flex-1 md:w-1/2 md:px-8">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card p-5 group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-indigo/20 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-display font-semibold text-base">{cert.title}</h3>
                      <span className="badge text-[10px] px-2 py-0.5 shrink-0">{cert.year}</span>
                    </div>
                    <p className="text-xs text-primary-600 dark:text-primary-400 font-medium mb-2 flex items-center gap-1">
                      <Award size={12} /> {cert.issuer}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
