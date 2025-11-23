import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  delay: number;
}

const FeatureCard = ({ title, desc, icon: Icon, color, delay }: FeatureCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900 transition-colors group relative overflow-hidden"
    >
      <div className={`absolute top-0 right-0 p-32 opacity-10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:opacity-20 ${color}`}></div>
      
      <div className="w-14 h-14 bg-zinc-950 border border-white/10 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
        <Icon size={28} />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
};

export default FeatureCard;

