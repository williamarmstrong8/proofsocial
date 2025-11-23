import { motion } from 'framer-motion';

const Problem = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-[#050505]">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#3A86FF] opacity-10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-900 opacity-10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-8">
              Social media has lost its{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A86FF] to-purple-500 italic">
                social
              </span>{' '}
              side.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
              Social media was founded on bringing people together. Yet nowadays, all it seems to do is{' '}
              <span className="text-white font-semibold">separate</span>.
            </p>
          </motion.div>

          {/* Visual divider with gradient line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 h-px bg-gradient-to-r from-transparent via-[#3A86FF] to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default Problem;

