import { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MousePointer2 } from 'lucide-react';
import {
  SiReact, SiFlutter, SiNodedotjs, SiPython, SiMongodb, SiFirebase, SiGit, SiDocker,
} from 'react-icons/si';
import { personalInfo } from '../../data/personal';

// ---------------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------------

const techIcons = [
  { Icon: SiReact, color: '#61DAFB', name: 'React' },
  { Icon: SiFlutter, color: '#02569B', name: 'Flutter' },
  { Icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
  { Icon: SiPython, color: '#3776AB', name: 'Python' },
  { Icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
  { Icon: SiFirebase, color: '#FFCA28', name: 'Firebase' },
  { Icon: SiGit, color: '#F05032', name: 'Git' },
  { Icon: SiDocker, color: '#2496ED', name: 'Docker' },
] as const;

// Breakpoints (must match Tailwind's sm/lg breakpoints used elsewhere in this file)
const BREAKPOINTS = { sm: 640, lg: 1024 } as const;

type ScreenSize = 'mobile' | 'tablet' | 'desktop';

// ---------------------------------------------------------------------------
// Hooks
// ---------------------------------------------------------------------------

/** Typing/deleting effect that cycles through a list of words. */
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

/**
 * Tracks the current responsive tier (mobile / tablet / desktop) using a
 * debounced resize listener + matchMedia, so no window reads happen during render.
 */
function useScreenSize(): ScreenSize {
  const getSize = (): ScreenSize => {
    if (typeof window === 'undefined') return 'desktop';
    if (window.innerWidth < BREAKPOINTS.sm) return 'mobile';
    if (window.innerWidth < BREAKPOINTS.lg) return 'tablet';
    return 'desktop';
  };

  const [size, setSize] = useState<ScreenSize>(getSize);

  useEffect(() => {
    let frame: number;
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setSize(getSize()));
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return size;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/** Glassmorphism profile card shown at the center of the orbit. */
function ProfileCard() {
  return (
    <div
      className="
        relative z-10 flex flex-col items-center justify-center
        w-[220px] h-[220px]
        sm:w-[250px] sm:h-[250px]
        lg:w-[300px] lg:h-[300px]
        rounded-full glass-card shadow-2xl
        animate-float
      "
    >
      <div
        className="
          relative overflow-hidden rounded-full
          w-[130px] h-[130px]
          sm:w-[150px] sm:h-[150px]
          lg:w-[180px] lg:h-[180px]
          border-[5px] border-primary-500
          shadow-2xl shadow-primary-500/40
        "
      >
        <img
          src="/images/profile.jpeg"
          alt={personalInfo.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <h3 className="mt-3 text-base sm:text-lg lg:text-xl font-bold text-center px-2">
        {personalInfo.name}
      </h3>
      <p className="text-xs sm:text-sm text-primary-500 font-medium">Full Stack Developer</p>
      <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1 text-center px-2">
        React • Flutter • Node.js
      </p>
    </div>
  );
}

/** Orbiting tech icon ring around the profile card. Radius adapts to screen size. */
function OrbitIcons({ screenSize }: { screenSize: ScreenSize }) {
  const radius = screenSize === 'mobile' ? 140 : screenSize === 'tablet' ? 180 : 230;

  const positions = useMemo(
    () =>
      techIcons.map((tech, i) => {
        const angle = (i / techIcons.length) * 2 * Math.PI;
        return {
          ...tech,
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
        };
      }),
    [radius]
  );

  return (
    <div className="absolute inset-0 animate-spin-slow">
      {positions.map((tech, i) => (
        <div
          key={tech.name}
          className="absolute top-1/2 left-1/2"
          style={{ transform: `translate(${tech.x}px, ${tech.y}px) translate(-50%, -50%)` }}
        >
          {/* Counter-rotate wrapper keeps the icon upright while the ring spins */}
          <div className="animate-spin-slow-reverse">
            <div
              className="
                w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14
                rounded-2xl glass-card flex items-center justify-center
                shadow-lg hover:scale-125 transition-transform animate-float
              "
              style={{ animationDelay: `${i * 0.3}s` }}
              title={tech.name}
            >
              <tech.Icon size={24} style={{ color: tech.color }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Profile card + orbiting icons + decorative rings, sized responsively. */
function OrbitScene({ screenSize }: { screenSize: ScreenSize }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="
        relative flex items-center justify-center
        h-[360px] w-[360px]
        sm:h-[440px] sm:w-[440px]
        lg:h-[560px] lg:w-[560px]
        mx-auto
      "
    >
      <ProfileCard />
      <OrbitIcons screenSize={screenSize} />

      {/* Decorative rings — sized per breakpoint, gentle opacity breathing */}
      <motion.div
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="
          absolute rounded-full border border-slate-200/30 dark:border-slate-700/30
          w-[260px] h-[260px] sm:w-[330px] sm:h-[330px] lg:w-[420px] lg:h-[420px]
        "
      />
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="
          absolute rounded-full border border-slate-200/20 dark:border-slate-700/20
          w-[330px] h-[330px] sm:w-[400px] sm:h-[400px] lg:w-[520px] lg:h-[520px]
        "
      />
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export function Hero() {
  const typed = useTypingEffect(personalInfo.roles);
  const screenSize = useScreenSize();
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Mouse-follow glow, throttled with rAF to avoid excess re-renders.
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    let frame: number | null = null;

    const onMove = (e: MouseEvent) => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        frame = null;
      });
    };

    el.addEventListener('mousemove', onMove);
    return () => {
      el.removeEventListener('mousemove', onMove);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 lg:pt-20 lg:pb-0"
    >
      {/* Mouse glow */}
      <div
        className="pointer-events-none absolute w-96 h-96 rounded-full bg-primary-500/10 dark:bg-primary-500/15 blur-[100px] transition-transform duration-300 ease-out"
        style={{ left: mouse.x - 192, top: mouse.y - 192 }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">
        {/* ---------------- Left: text ---------------- */}
        <div className="text-center lg:text-left z-10 w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="badge mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </motion.span>

          {/* Animated name: zoom pulse + shimmering gradient + soft glow */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
            transition={{
              opacity: { duration: 0.6 },
              y: { duration: 0.6 },
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-balance"
          >
            Hi, I'm{' '}
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                filter: [
                  'drop-shadow(0 0 6px rgba(249,115,22,0.35))',
                  'drop-shadow(0 0 18px rgba(249,115,22,0.55))',
                  'drop-shadow(0 0 6px rgba(249,115,22,0.35))',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
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
            <button
              onClick={() => scrollTo('projects')}
              className="
                group relative inline-flex items-center gap-2 px-6 py-3 rounded-full
                font-semibold text-white overflow-hidden
                bg-gradient-to-r from-primary-500 to-orange-500
                shadow-lg shadow-primary-500/30
                transition-transform duration-300 hover:scale-105
                hover:shadow-xl hover:shadow-primary-500/50
              "
            >
              <span className="relative z-10">View Projects</span>
              <ArrowRight
                size={18}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 px-6 py-3 rounded-full
                font-semibold glass-card
                transition-all duration-300 hover:scale-105 hover:shadow-lg
              "
            >
              <Download size={18} /> Download Resume
            </a>

            <button
              onClick={() => scrollTo('contact')}
              className="
                group relative inline-flex items-center gap-2 px-6 py-3 rounded-full
                font-semibold border-2 border-primary-500 text-primary-600 dark:text-primary-400
                overflow-hidden transition-colors duration-300
              "
            >
              <span className="absolute inset-0 bg-primary-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 -z-0" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                <Mail size={18} /> Hire Me
              </span>
            </button>
          </motion.div>
        </div>

        {/* ---------------- Right: orbit scene ---------------- */}
        <OrbitScene screenSize={screenSize} />
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <MousePointer2 size={16} className="animate-bounce" />
        <span className="text-xs">Scroll to explore</span>
      </motion.div>
    </section>
  );
}