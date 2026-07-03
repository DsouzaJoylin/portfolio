import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { navLinks } from '../../data/navigation';

export function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 mt-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <button onClick={scrollTop} className="flex items-center gap-2 font-display font-bold text-lg mb-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30">
                <Code2 size={18} />
              </span>
              Joylin<span className="text-primary-500">.</span>
            </button>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold mb-3 text-sm">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-display font-semibold mb-3 text-sm">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            © {new Date().getFullYear()} {personalInfo.name}. Built with
            <Heart size={14} className="text-primary-500 fill-primary-500" /> & React.
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <ArrowUp size={16} /> Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
