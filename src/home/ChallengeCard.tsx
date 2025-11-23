import { Users } from 'lucide-react';

interface ChallengeCardProps {
  title: string;
  subtitle: string;
  image: string;
  members: string;
}

const ChallengeCard = ({ title, subtitle, image, members }: ChallengeCardProps) => {
  return (
    <div className="min-w-[300px] md:min-w-[380px] h-[450px] rounded-3xl relative overflow-hidden group cursor-pointer shrink-0 snap-center">
      <div className="absolute inset-0 bg-zinc-800 transition-transform duration-700 group-hover:scale-110">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-8">
        <div className="bg-white/10 backdrop-blur-md border border-white/10 inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4">
          <Users size={14} className="text-white" />
          <span className="text-xs font-bold text-white">{members} active</span>
        </div>
        <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
        <p className="text-zinc-300 mb-6">{subtitle}</p>
        <button className="w-full bg-white text-black py-3 rounded-xl font-bold hover:bg-zinc-200 transition-colors">Join Team</button>
      </div>
    </div>
  );
};

export default ChallengeCard;

