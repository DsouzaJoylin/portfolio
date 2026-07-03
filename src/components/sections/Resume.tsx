import { motion } from 'framer-motion';
import { Download, User, Code2, FolderKanban, Award } from 'lucide-react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { personalInfo } from '../../data/personal';
import { skillCategories } from '../../data/skills';
import { projects } from '../../data/projects';
import { certificates } from '../../data/certificates';

export function Resume() {
  const allSkills = skillCategories.flatMap((c) => c.skills.map((s) => s.name));

  return (
    <SectionWrapper
      id="resume"
      title="Resume"
      subtitle="A snapshot of my professional journey, skills, and achievements."
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 md:p-10"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="font-display text-2xl font-bold">{personalInfo.name}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium">{personalInfo.role}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{personalInfo.location}</p>
            </div>
            <a href={personalInfo.resumeUrl} download className="btn-primary shrink-0">
              <Download size={18} /> Download Resume
            </a>
          </div>

          {/* Professional Summary */}
          <div className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                <User size={16} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="font-display font-semibold text-lg">Professional Summary</h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-10">
              Full Stack Developer with expertise in React, Flutter, Node.js, and machine learning.
              Passionate about building scalable web and mobile applications with clean architecture
              and intuitive user experiences. Proven track record of delivering projects across the
              full development lifecycle — from design and development to deployment and maintenance.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                <Code2 size={16} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="font-display font-semibold text-lg">Technical Skills</h4>
            </div>
            <div className="flex flex-wrap gap-2 pl-10">
              {allSkills.map((skill) => (
                <span key={skill} className="badge-tech">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                <FolderKanban size={16} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="font-display font-semibold text-lg">Projects</h4>
            </div>
            <div className="pl-10 space-y-3">
              {projects.map((p) => (
                <div key={p.id} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="font-medium text-sm">{p.name}</span>
                  <span className="hidden sm:inline text-slate-300 dark:text-slate-600">—</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{p.tagline}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                <Award size={16} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="font-display font-semibold text-lg">Certifications</h4>
            </div>
            <div className="pl-10 space-y-2">
              {certificates.map((c) => (
                <div key={c.id} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="font-medium text-sm">{c.title}</span>
                  <span className="hidden sm:inline text-slate-300 dark:text-slate-600">—</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {c.issuer} ({c.year})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
