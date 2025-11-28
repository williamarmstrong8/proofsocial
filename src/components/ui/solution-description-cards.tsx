import { useMemo } from 'react';

interface DescriptionCard {
  id: string;
  title: string;
  description: string;
}

interface SolutionDescriptionCardsProps {
  cards: DescriptionCard[];
  progress: number; // 0 to 1
  className?: string;
}

// Screen order: home (0), feed (1), challenges (2), tasks (3), profile (4)
const SCREEN_ORDER = ['home', 'feed', 'challenges', 'tasks', 'profile'];

export function SolutionDescriptionCards({ 
  cards, 
  progress, 
  className = '' 
}: SolutionDescriptionCardsProps) {
  // Map progress with hold periods (matches MorphingText and SynchronizedPhone timing)
  // Total timeline is 3
  const segments = [
    { start: 0, end: 0.6, screen: 0, isHold: true },
    { start: 0.6, end: 0.84, screen: 0, isHold: false },
    { start: 0.84, end: 1.32, screen: 1, isHold: true },
    { start: 1.32, end: 1.56, screen: 1, isHold: false },
    { start: 1.56, end: 2.04, screen: 2, isHold: true },
    { start: 2.04, end: 2.28, screen: 2, isHold: false },
    { start: 2.28, end: 2.7, screen: 3, isHold: true },
    { start: 2.7, end: 2.88, screen: 3, isHold: false },
    { start: 2.88, end: 3.0, screen: 4, isHold: true },
  ];
  
  // Map progress 0-1 to timeline 0-3
  const normalizedProgress = useMemo(() => {
    const clamped = Math.max(0, Math.min(1, progress));
    return clamped * 3;
  }, [progress]);

  // Calculate which screen is active and show corresponding card
  const cardOpacities = useMemo(() => {
    // Find current segment using normalized progress
    let currentSegment = segments[segments.length - 1];
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      const isLast = i === segments.length - 1;
      if (normalizedProgress >= segment.start && (isLast ? normalizedProgress <= segment.end : normalizedProgress < segment.end)) {
        currentSegment = segment;
        break;
      }
    }
    
    return cards.map((card) => {
      const cardScreenIndex = SCREEN_ORDER.indexOf(card.id);
      
      if (cardScreenIndex === -1) return 0; // Card not in screen order
      
      if (currentSegment.isHold) {
        // In hold period: show only current screen's card
        return cardScreenIndex === currentSegment.screen ? 1 : 0;
      } else {
        // In transition: crossfade between current and next
        const segmentProgress = (normalizedProgress - currentSegment.start) / (currentSegment.end - currentSegment.start);
        if (cardScreenIndex === currentSegment.screen) {
          return Math.max(0, 1 - segmentProgress);
        } else if (cardScreenIndex === currentSegment.screen + 1) {
          return Math.min(1, segmentProgress);
        } else {
          return 0;
        }
      }
    });
  }, [normalizedProgress, cards]);

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {cards.map((card, index) => {
        const opacity = cardOpacities[index];
        return (
          <div
            key={card.id}
            style={{
              opacity,
              transition: 'opacity 0.6s cubic-bezier(0.21, 0.84, 0.39, 0.99)',
              pointerEvents: opacity > 0.5 ? 'auto' : 'none',
            }}
          >
            <div className="relative rounded-3xl p-6 overflow-hidden">
              {/* Liquid glass background */}
              <div 
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                }}
              />
              
              {/* Inner glow effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{
                  background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)',
                  pointerEvents: 'none',
                }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-white font-semibold text-base mb-3 leading-tight">{card.title}</h3>
                {card.id === 'tasks' ? (
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <p>Personal and group tasks.</p>
                    <p className="uppercase font-semibold text-white mt-2 leading-relaxed">
                      YOU NEED TO TAKE A PHOTO TO SHOW PROOF THAT YOU COMPLETED THE TASK WHICH WILL THEN POST TO YOUR FRIENDS FEED.
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-300 text-sm leading-relaxed">{card.description}</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

