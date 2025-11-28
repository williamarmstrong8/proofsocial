import Navigation from './home/Navigation';
import Hero from './home/Hero';
import CoreLoop from './home/CoreLoop';
import Problem from './home/Problem';
import Solution from './home/Solution';
import AccordionSection from './home/AccordionSection';
import StickerBoard from './home/StickerBoard';
import Challenges from './home/Challenges';
import CTA from './home/CTA';
import Footer from './home/Footer';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import { SmoothCursor } from './components/ui/smooth-cursor';

const App = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden font-sans selection:bg-[#3A86FF] selection:text-white cursor-none">
      <SmoothCursor />
      <SmoothScrollProvider>
        <Navigation />
        <Hero />
        <Problem />
        <Solution />
        <AccordionSection />
        <CoreLoop />
        <StickerBoard />
        <Challenges />
        <CTA />
        <Footer />
      </SmoothScrollProvider>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;
