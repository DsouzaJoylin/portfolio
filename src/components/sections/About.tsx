import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Lightbulb, Code2, Users, Sparkles } from 'lucide-react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { highlights, stats, personalInfo } from '../../data/personal';

const iconMap = [Brain, Zap, Lightbulb, Code2, Users, Sparkles];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useScrollReveal<HTMLSpanElement>(0.5);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = value / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="A passionate developer dedicated to crafting clean, scalable, and user-centric software solutions."
    >
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        {/* Left: intro text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 space-y-5"
        >
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I'm <span className="font-semibold text-primary-600 dark:text-primary-400">{personalInfo.name}</span>,
            a {personalInfo.role.toLowerCase()} with a passion for building products that are not only
            functional but delightful to use. I specialize in crafting responsive web applications
            with React and cross-platform mobile experiences with Flutter.
          </p>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            My journey spans across the full stack — from designing intuitive frontends and
            architecting robust backend APIs to integrating databases and deploying machine
            learning models. I believe great software is born at the intersection of clean code,
            thoughtful design, and genuine empathy for the end user.
          </p>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            When I'm not coding, you'll find me exploring new AI tools, contributing to open-source
            projects, or experimenting with design systems that push the boundaries of what's
            possible on the web.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-4 text-center"
              >
                <div className="font-display text-2xl md:text-3xl font-bold gradient-text">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: highlights grid */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => {
            const Icon = iconMap[i];
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-card p-5 group cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-500/10 flex items-center justify-center mb-3 group-hover:bg-primary-500/20 transition-colors">
                  <Icon size={20} className="text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{h.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{h.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
