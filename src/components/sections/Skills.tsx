import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { skillCategories } from '../../data/skills';

export function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const current = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <SectionWrapper
      id="skills"
      title="Skills & Expertise"
      subtitle="Technologies and tools I work with across the full development stack."
    >
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              activeTab === cat.id
                ? 'text-white'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {activeTab === cat.id && (
              <motion.span
                layoutId="skill-tab"
                className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {current.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass-card p-5 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: `${skill.color}15` }}
                >
                  <skill.icon size={26} style={{ color: skill.color }} />
                </div>
                <div>
                  <h3 className="font-display font-semibold">{skill.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{skill.level}% proficiency</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="relative h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.06, ease: 'easeOut' }}
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${skill.color}, ${skill.color}cc)`,
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
