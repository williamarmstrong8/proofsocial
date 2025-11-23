import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-transparent py-6">
      <div className="flex justify-between items-center px-6">
        <div className="flex items-center">
          <img 
            src="/Proof Logo.png" 
            alt="Proof" 
            className="h-10 w-auto"
          />
        </div>


        <div className="hidden md:flex items-center gap-4">
          <button className="bg-[#3A86FF] hover:bg-[#2b6cdb] text-white px-8 py-3 rounded-full text-base font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(58,134,255,0.5)]">
            Join Waitlist
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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

