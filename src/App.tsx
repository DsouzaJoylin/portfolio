import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { Navbar } from './components/layouts/Navbar';
import { Footer } from './components/layouts/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Certificates } from './components/sections/Certificates';
import { Resume } from './components/sections/Resume';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <AnimatedBackground />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
