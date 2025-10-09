import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { Crosshair } from './components/Crosshair';

export default function App() {
  return (
    <div className="dark size-full relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
          .bg-grid-dark {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.03)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
          }
        `}
      </style>
      
      {/* Crosshair cursor effect */}
      <Crosshair />
      
      <div className="absolute inset-0 bg-grid-dark [mask-image:linear-gradient(0deg,rgba(0,0,0,1),rgba(0,0,0,0.6))] bg-[size:40px_40px]" style={{ pointerEvents: 'none' }} />
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Footer />
      </div>
    </div>
  );
}
