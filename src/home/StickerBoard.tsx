import { motion } from 'framer-motion';
import { Check, Flame, Trophy, Users, Target, Zap } from 'lucide-react';

const StickerBoard = () => {
  return (
    <section data-scroll-section className="py-32 bg-[#050505] relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            See it in action
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Real proof from real people building real habits.
          </p>
        </div>

        {/* Sticker Board */}
        <div className="relative min-h-[700px] md:min-h-[600px] flex items-center justify-center py-20">
          {/* Visual 1: The List Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative md:absolute left-1/2 md:left-[5%] top-auto md:top-[5%] -translate-x-1/2 md:translate-x-0 mb-8 md:mb-0 bg-white rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-500 z-10"
            style={{ rotate: '-3deg' }}
          >
            <div className="flex items-center gap-3 mb-3 pb-3 border-b border-zinc-100">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <Check size={14} className="text-white"/>
              </div>
              <span className="font-bold text-zinc-800">Morning Run</span>
            </div>
            <div className="flex items-center gap-3 mb-3 pb-3 border-b border-zinc-100 opacity-50">
              <div className="w-6 h-6 rounded-full border-2 border-zinc-200"></div>
              <span className="font-bold text-zinc-800">Read 10 Pages</span>
            </div>
            <div className="flex items-center gap-3 opacity-50">
              <div className="w-6 h-6 rounded-full border-2 border-zinc-200"></div>
              <span className="font-bold text-zinc-800">Cold Plunge</span>
            </div>
          </motion.div>

          {/* Visual 2: The Feed Post Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative md:absolute right-auto md:right-[5%] bottom-auto md:bottom-[5%] left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 bg-white rounded-2xl p-4 shadow-2xl transform hover:translate-y-[-10px] transition-transform duration-500 w-full max-w-[400px] md:w-[400px] z-10"
            style={{ rotate: '2deg' }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-200 rounded-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80')`}}></div>
                <div>
                  <div className="font-bold text-zinc-900 text-sm">William Armstrong</div>
                  <div className="text-xs text-zinc-500">75 Hard • Day 42</div>
                </div>
              </div>
              <div className="px-2 py-1 bg-zinc-100 rounded text-xs font-bold text-zinc-600">Verified</div>
            </div>
            <div className="h-48 bg-zinc-100 rounded-xl w-full bg-cover bg-center relative overflow-hidden group-hover:shadow-inner transition-shadow" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')`}}>
              <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                <Flame size={12} className="text-orange-500" fill="currentColor" />
                <span className="text-white text-xs font-bold">42 Day Streak</span>
              </div>
            </div>
          </motion.div>

          {/* Visual 3: Challenge Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20, rotate: -1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative md:absolute left-1/2 md:left-[50%] top-auto md:top-[15%] -translate-x-1/2 md:-translate-x-1/2 mb-8 md:mb-0 bg-white rounded-2xl p-5 shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full max-w-[320px] md:w-[320px] z-20"
            style={{ rotate: '-1.5deg' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                <Trophy size={20} className="text-white"/>
              </div>
              <div>
                <div className="font-bold text-zinc-900 text-sm">75 Hard Challenge</div>
                <div className="text-xs text-zinc-500">28 days remaining</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-600">Team Progress</span>
                <span className="text-xs font-bold text-zinc-900">68%</span>
              </div>
              <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" style={{ width: '68%' }}></div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <Users size={14} className="text-zinc-400"/>
                <span className="text-xs text-zinc-600">12 participants</span>
              </div>
            </div>
          </motion.div>

          {/* Visual 4: Profile Stats Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20, rotate: 1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative md:absolute left-1/2 md:left-[25%] top-auto md:top-[50%] -translate-x-1/2 md:-translate-x-1/2 mb-8 md:mb-0 bg-white rounded-2xl p-5 shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full max-w-[280px] md:w-[280px] z-15"
            style={{ rotate: '1.5deg' }}
          >
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Target size={24} className="text-white"/>
              </div>
              <div className="font-bold text-zinc-900 text-lg">142</div>
              <div className="text-xs text-zinc-500">Total Completions</div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-100">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Flame size={14} className="text-orange-500" fill="currentColor" />
                  <span className="font-bold text-zinc-900 text-sm">28</span>
                </div>
                <div className="text-xs text-zinc-500">Day Streak</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Zap size={14} className="text-yellow-500" fill="currentColor" />
                  <span className="font-bold text-zinc-900 text-sm">5</span>
                </div>
                <div className="text-xs text-zinc-500">Active Tasks</div>
              </div>
            </div>
          </motion.div>

          {/* Visual 5: Leaderboard Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative md:absolute left-1/2 md:left-[70%] top-auto md:top-[40%] -translate-x-1/2 md:-translate-x-1/2 mb-8 md:mb-0 bg-white rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full max-w-[300px] md:w-[300px] z-15"
            style={{ rotate: '-2deg' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Trophy size={18} className="text-orange-500"/>
              <span className="font-bold text-zinc-900 text-sm">Weekly Leaderboard</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white text-xs font-bold">1</div>
                  <span className="text-sm font-semibold text-zinc-900">Sarah M.</span>
                </div>
                <span className="text-xs font-bold text-orange-600">42 pts</span>
              </div>
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white text-xs font-bold">2</div>
                  <span className="text-sm text-zinc-700">Mike T.</span>
                </div>
                <span className="text-xs font-bold text-zinc-600">38 pts</span>
              </div>
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white text-xs font-bold">3</div>
                  <span className="text-sm text-zinc-700">You</span>
                </div>
                <span className="text-xs font-bold text-zinc-600">35 pts</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StickerBoard;

