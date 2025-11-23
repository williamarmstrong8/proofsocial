import React from 'react';

const Marquee = () => {
  return (
    <div className="py-8 bg-[#3A86FF] overflow-hidden flex items-center relative z-20 rotate-1 scale-105">
      <div className="animate-marquee whitespace-nowrap flex gap-16">
         {Array(10).fill("").map((_, i) => (
           <React.Fragment key={i}>
             <span className="text-xl md:text-3xl font-black text-white italic tracking-tighter">CONSISTENCY &gt; INTENSITY</span>
             <span className="text-xl md:text-3xl font-black text-blue-200 italic tracking-tighter">PROGRESS &gt; PERFECTION</span>
             <span className="text-xl md:text-3xl font-black text-white italic tracking-tighter">COMMUNITY &gt; ISOLATION</span>
           </React.Fragment>
         ))}
      </div>
    </div>
  );
};

export default Marquee;

