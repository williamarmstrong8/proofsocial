import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-16 md:pt-20 pb-0 bg-[#050505]">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#3A86FF] opacity-10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900 opacity-10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-8 z-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9] mb-6">
              Proof over <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-700">perfection</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              The social habit tracker that makes discipline addictive.<br />
              Track habits, share proof, and win together.
            </p>
          </motion.div>
        </div>

        {/* Three Screen Layout */}
        <div className="relative flex items-center justify-center gap-0 max-w-7xl mx-auto mt-8 md:mt-12">
          {/* Left Screen - Home */}
          <motion.div
            className="relative hidden lg:block w-[420px] transform -mr-16 overflow-hidden rounded-[2.5rem]"
            style={{ rotate: '-8deg' }}
            initial={{ opacity: 0, y: 40, x: 60 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ 
              duration: 2.5, 
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <img 
              src="/Challenges-6.png" 
              alt="Home Screen" 
              className="w-full h-auto block"
              style={{ imageRendering: 'auto', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
            />
            {/* Fade gradient overlay */}
            <div className="absolute bottom-0 left-[-1px] right-[-1px] h-[60%] bg-gradient-to-t from-[#050505] from-0% via-[#050505] via-40% to-transparent pointer-events-none rounded-b-[2.5rem]"></div>
          </motion.div>

          {/* Center Screen - Main (Homepage-5) */}
          <motion.div
            className="relative w-[400px] md:w-[480px] z-10 transform overflow-hidden rounded-[2.5rem]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 2.5, 
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <img 
              src="/Homepage-6.png" 
              alt="Proof Feed" 
              className="w-full h-auto block"
              style={{ imageRendering: 'auto', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
            />
            {/* Fade gradient overlay */}
            <div className="absolute bottom-0 left-[-1px] right-[-1px] h-[60%] bg-gradient-to-t from-[#050505] from-0% via-[#050505] via-40% to-transparent pointer-events-none rounded-b-[2.5rem]"></div>
          </motion.div>

          {/* Right Screen - Tasks */}
          <motion.div
            className="relative hidden lg:block w-[420px] transform -ml-16 overflow-hidden rounded-[2.5rem]"
            style={{ rotate: '8deg' }}
            initial={{ opacity: 0, y: 40, x: -60 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ 
              duration: 2.5, 
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <img 
              src="/Tasks-3.png" 
              alt="Daily Tasks Screen" 
              className="w-full h-auto block"
              style={{ imageRendering: 'auto', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
            />
            {/* Fade gradient overlay */}
            <div className="absolute bottom-0 left-[-1px] right-[-1px] h-[60%] bg-gradient-to-t from-[#050505] from-0% via-[#050505] via-40% to-transparent pointer-events-none rounded-b-[2.5rem]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
