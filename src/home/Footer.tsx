import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer data-scroll-section className="bg-black py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#3A86FF] rounded-lg flex items-center justify-center text-white">
                <Zap size={18} fill="currentColor" />
              </div>
              PROOF
            </div>
            <p className="text-zinc-500 text-sm max-w-xs">
              The social habit tracker for high performers.
              <br />© 2024 Proof App Inc.
            </p>
          </div>
          
          <div className="flex gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold">Product</h4>
              <a href="#" className="text-zinc-500 hover:text-white text-sm">Features</a>
              <a href="#" className="text-zinc-500 hover:text-white text-sm">Challenges</a>
              <a href="#" className="text-zinc-500 hover:text-white text-sm">Join Waitlist</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold">Company</h4>
              <a href="#" className="text-zinc-500 hover:text-white text-sm">Manifesto</a>
              <a href="#" className="text-zinc-500 hover:text-white text-sm">Careers</a>
              <a href="#" className="text-zinc-500 hover:text-white text-sm">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

