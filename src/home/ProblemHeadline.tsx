import { motion } from 'framer-motion';

const ProblemHeadline = () => {
  return (
    <div
      data-scroll
      data-scroll-sticky
      data-scroll-target="#problem"
      className="relative z-20 max-w-3xl px-6 text-center mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.84, 0.39, 0.99] }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
      >
        Social media has lost its social side.
      </motion.h2>
    </div>
  );
};

export default ProblemHeadline;

