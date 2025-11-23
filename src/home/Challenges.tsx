import { ArrowRight } from 'lucide-react';
import ChallengeCard from './ChallengeCard';

const Challenges = () => {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <span className="text-[#3A86FF] font-bold tracking-wider uppercase text-sm mb-2 block">Explore Challenges</span>
          <h2 className="text-4xl font-bold text-white">Find your tribe.</h2>
        </div>
        <div className="hidden md:flex gap-2">
          <button className="p-3 rounded-full border border-white/10 text-white hover:bg-white/10"><ArrowRight className="rotate-180" /></button>
          <button className="p-3 rounded-full border border-white/10 text-white hover:bg-white/10"><ArrowRight /></button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto px-6 pb-12 snap-x hide-scrollbar">
        <ChallengeCard 
          title="75 Hard"
          subtitle="Two workouts. 1 gallon water. No cheat meals. Reading. No alcohol."
          image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          members="12,403"
        />
         <ChallengeCard 
          title="Mind & Mood"
          subtitle="Meditation, gratitude journaling, and 30 minutes of sunlight daily."
          image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          members="8,192"
        />
         <ChallengeCard 
          title="7-Day Discipline"
          subtitle="The perfect starter pack. Wake up at 6am, make bed, cold shower."
          image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          members="24,091"
        />
         <ChallengeCard 
          title="Marathon Prep"
          subtitle="16-week structured running plan for beginner to intermediate runners."
          image="https://images.unsplash.com/photo-1552674605-5d2178b84916?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          members="3,200"
        />
      </div>
    </section>
  );
};

export default Challenges;

