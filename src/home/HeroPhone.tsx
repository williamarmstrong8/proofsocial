import React from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { Users } from 'lucide-react';

const HeroPhone = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 200;
    const yPct = (mouseY / height - 0.5) * 200;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-[320px] h-[680px] mx-auto perspective-1000 cursor-default"
    >
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-zinc-900 rounded-[3rem] shadow-2xl border-[8px] border-zinc-800 overflow-hidden z-10">
        {/* Screen Content - Tasks Image */}
        <div className="absolute inset-[8px] flex items-center justify-center pointer-events-none overflow-hidden rounded-[2.2rem]">
          <img 
            src="/Tasks-2.png" 
            alt="Tasks Screen" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Reflection/Gloss */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-20 rounded-[2.5rem]"></div>
      </div>
      
      {/* Floating Elements (Parallax) */}
      <motion.div 
        style={{ translateZ: 40 }}
        className="absolute top-20 -right-12 bg-zinc-800/90 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-xl z-0 w-40"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Streak</span>
        </div>
        <div className="text-3xl font-bold text-white">24 Days</div>
      </motion.div>

      <motion.div 
        style={{ translateZ: 60 }}
        className="absolute bottom-40 -left-12 bg-[#3A86FF] p-4 rounded-xl shadow-[0_10px_40px_rgba(58,134,255,0.4)] z-20 w-44"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
            <Users size={20} />
          </div>
          <div>
            <div className="text-xs text-blue-100">Team Challenge</div>
            <div className="font-bold text-white">75 Hard</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroPhone;

