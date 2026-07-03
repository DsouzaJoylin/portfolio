import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, CheckCircle2 } from 'lucide-react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { projects, Project } from '../../data/projects';

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative glass-card overflow-hidden hover:shadow-2xl transition-all duration-500"
    >
      {/* Gradient header */}
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
            {project.emoji}
          </span>
        </div>
        <div className="absolute top-4 right-4 badge bg-white/20 backdrop-blur-md text-white border-white/30">
          <Star size={12} fill="currentColor" /> Featured
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="Live demo"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="font-display text-xl font-bold">{project.name}</h3>
            <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">{project.tagline}</p>
          </div>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-1.5 mb-4">
          {project.features.map((f) => (
            <div key={f} className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
              <CheckCircle2 size={13} className="text-primary-500 shrink-0" />
              {f}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="badge-tech">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <Github size={16} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-colors"
          >
            <ExternalLink size={16} /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group glass-card overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className={`relative h-32 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
            {project.emoji}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-lg mb-1">{project.name}</h3>
        <p className="text-xs text-primary-600 dark:text-primary-400 font-medium mb-2">{project.tagline}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="badge-tech text-[10px] px-2 py-0.5">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <Github size={14} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 transition-colors"
          >
            <ExternalLink size={14} /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="A selection of projects showcasing my skills across web, mobile, and machine learning."
    >
      {/* Featured projects */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {featured.map((p, i) => (
          <FeaturedCard key={p.id} project={p} index={i} />
        ))}
      </div>

      {/* Other projects */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">More Projects</span>
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {others.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
