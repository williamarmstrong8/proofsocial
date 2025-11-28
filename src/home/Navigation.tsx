import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav 
      data-scroll-section
      id="navigation"
      className="relative z-50 bg-transparent py-6 transition-opacity duration-100"
      style={{ 
        opacity: 'var(--nav-opacity, 1)',
        transform: 'translateY(var(--nav-translate-y, 0px))'
      }}
    >
      <motion.div 
        className="flex justify-between items-center px-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img 
            src="/Proof Logo.png" 
            alt="Proof" 
            className="h-10 w-auto"
          />
        </motion.div>


        <motion.div 
          className="hidden md:flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className="bg-[#3A86FF] hover:bg-[#2b6cdb] text-white px-8 py-3 rounded-full text-base font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(58,134,255,0.5)]">
            Join Waitlist
          </button>
        </motion.div>

        <motion.button 
          className="md:hidden text-white" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
        exit={{ opacity: 0, y: -20 }}
        className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
        style={{ display: isMobileMenuOpen ? 'flex' : 'none' }}
      >
        <button className="bg-[#3A86FF] text-white w-full py-4 rounded-full text-base font-bold">Join Waitlist</button>
      </motion.div>
    </nav>
  );
};

export default Navigation;

