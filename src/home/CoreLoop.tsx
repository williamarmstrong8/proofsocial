import { Check, Users, Trophy } from 'lucide-react';
import FeatureCard from './FeatureCard';

const CoreLoop = () => {
  return (
    <section data-scroll-section className="py-32 bg-[#050505] relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Build habits that <br/><span className="text-[#3A86FF]">actually stick.</span></h2>
          <p className="text-zinc-400 text-lg">
            Most habit trackers are lonely lists. Proof turns your daily discipline into a multiplayer game.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard 
            title="Swipe to Complete" 
            desc="A clean, gesture-based interface designed for speed. Check off your wins in seconds, not minutes."
            icon={Check}
            color="bg-green-500"
            delay={0.1}
          />
          <FeatureCard 
            title="Social Proof" 
            desc="Don't just check a box. Show your work. Upload photos to prove your progress and inspire your circle."
            icon={Users}
            color="bg-blue-500"
            delay={0.2}
          />
           <FeatureCard 
            title="Team Challenges" 
            desc="Join '75 Hard' or create custom 30-day sprints with friends. Compete on leaderboards."
            icon={Trophy}
            color="bg-orange-500"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default CoreLoop;

