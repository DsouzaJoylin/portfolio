import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MousePointer2 } from 'lucide-react';
import {
  SiReact, SiFlutter, SiNodedotjs, SiPython, SiMongodb, SiFirebase, SiGit, SiDocker,
} from 'react-icons/si';
import { personalInfo } from '../../data/personal';

const techIcons = [
  { Icon: SiReact, color: '#61DAFB', name: 'React' },
  { Icon: SiFlutter, color: '#02569B', name: 'Flutter' },
  { Icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
  { Icon: SiPython, color: '#3776AB', name: 'Python' },
  { Icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
  { Icon: SiFirebase, color: '#FFCA28', name: 'Firebase' },
  { Icon: SiGit, color: '#F05032', name: 'Git' },
  { Icon: SiDocker, color: '#2496ED', name: 'Docker' },
];

function useTypingEffect(words: string[], typeSpeed = 100, deleteSpeed = 50, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      }, deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypingEffect(personalInfo.roles);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Mouse glow */}
      <div
        className="pointer-events-none absolute w-96 h-96 rounded-full bg-primary-500/10 dark:bg-primary-500/15 blur-[100px] transition-transform duration-300 ease-out"
        style={{ left: mouse.x - 192, top: mouse.y - 192 }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: text */}
        <div className="text-center lg:text-left z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="badge mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </motion.span>

          <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{
    opacity: 1,
    y: 0,
    scale: [1, 1.06, 1], // Zoom In -> Zoom Out
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight"
>
  Hi, I'm{" "}
  <motion.span
    animate={{
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      opacity: [1, 0.8, 1],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    }}
    className="inline-block bg-gradient-to-r from-pink-500 via-orange-400 via-yellow-400 to-pink-500 bg-[length:300%_300%] bg-clip-text text-transparent"
  >
    {personalInfo.name}
  </motion.span>
</motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-slate-500 dark:text-slate-400"
          >
            {personalInfo.role}
          </motion.p>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 h-9 flex items-center justify-center lg:justify-start"
          >
            <span className="font-display text-xl md:text-2xl font-semibold text-primary-600 dark:text-primary-400">
              {typed}
              <span className="inline-block w-0.5 h-6 ml-1 bg-primary-500 animate-pulse" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-slate-500 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 text-balance"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              View Projects <ArrowRight size={18} />
            </button>
            <a
  href={personalInfo.resumeUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary"
>
  Download Resume
</a>
            <button onClick={() => scrollTo('contact')} className="btn-ghost">
              <Mail size={18} /> Hire Me
            </button>
          </motion.div>
        </div>

        {/* Right: floating tech orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:flex items-center justify-center h-[480px]"
        >
          {/* Center card */}
          <div className="relative z-10 w-56 h-56 rounded-full glass-card flex flex-col items-center justify-center shadow-2xl">

  {/* Profile Image */}
 <div className="relative z-10 w-64 h-64 lg:w-72 lg:h-72 rounded-full glass-card flex flex-col items-center justify-center shadow-2xl">

  <div className="relative w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden border-[5px] border-primary-500 shadow-2xl shadow-primary-500/40">
    <img
      src="/images/profile.jpeg"
      alt={personalInfo.name}
      className="w-full h-full object-cover object-top"
    />
  </div>

  <h3 className="mt-4 text-xl font-bold">
    {personalInfo.name}
  </h3>

  <p className="text-sm text-primary-500 font-medium">
    Full Stack Developer
  </p>

  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
    React • Flutter • Node.js
  </p>
</div>
          {/* Orbiting icons */}
          <div className="absolute inset-0 animate-spin-slow">
            {techIcons.map((tech, i) => {
              const angle = (i / techIcons.length) * 2 * Math.PI;
              const radius = 200;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <div
                  key={tech.name}
                  className="absolute top-1/2 left-1/2"
                  style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center shadow-lg hover:scale-125 transition-transform animate-float"
                    style={{ animationDelay: `${i * 0.3}s` }}
                    title={tech.name}
                  >
                    <tech.Icon size={26} style={{ color: tech.color }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Decorative rings */}
          <div className="absolute w-80 h-80 rounded-full border border-slate-200/30 dark:border-slate-700/30" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-slate-200/20 dark:border-slate-700/20" />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <MousePointer2 size={16} className="animate-bounce" />
        <span className="text-xs">Scroll to explore</span>
      </motion.div>
    </section>
  );
}
