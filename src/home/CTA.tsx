const CTA = () => {
  return (
    <section data-scroll-section className="py-32 container mx-auto px-6 text-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3A86FF]/5 pointer-events-none"></div>
      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Ready to prove it?</h2>
      <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">Join thousands of others using social accountability to build unstoppable habits.</p>
      <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]">
        Join Waitlist
      </button>
    </section>
  );
};

export default CTA;

