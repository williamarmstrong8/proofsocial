import { useMemo } from 'react';
import { Iphone } from './iphone';

interface SynchronizedPhoneProps {
  images: { src: string; id: string }[];
  progress: number; // 0 to 1
  className?: string;
}

export function SynchronizedPhone({ images, progress, className = '' }: SynchronizedPhoneProps) {
  // Map progress with hold periods for each screen (matches MorphingText timing)
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

  // Calculate opacity for each image based on segmented progress
  const imageOpacities = useMemo(() => {
    if (images.length === 1) return [1];
    
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
    
    return images.map((_, index) => {
      if (currentSegment.isHold) {
        // In hold period: show only current screen
        return index === currentSegment.screen ? 1 : 0;
      } else {
        // In transition: crossfade between current and next
        const segmentProgress = (normalizedProgress - currentSegment.start) / (currentSegment.end - currentSegment.start);
        if (index === currentSegment.screen) {
          return Math.max(0, 1 - segmentProgress);
        } else if (index === currentSegment.screen + 1) {
          return Math.min(1, segmentProgress);
        } else {
          return 0;
        }
      }
    });
  }, [normalizedProgress, images.length]);

  // Determine if we're in a transition (for grain overlay effect)
  const isTransitioning = useMemo(() => {
    if (images.length === 1) return false;
    
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
    
    // Show grain during transitions (not during holds)
    if (!currentSegment.isHold) {
      const segmentProgress = (normalizedProgress - currentSegment.start) / (currentSegment.end - currentSegment.start);
      // Show grain in the middle 80% of transition
      return segmentProgress > 0.1 && segmentProgress < 0.9;
    }
    
    return false;
  }, [normalizedProgress, images.length]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Multiple phone components stacked */}
      {images.map((image, index) => {
        const opacity = imageOpacities[index];
        return (
          <div
            key={image.id}
            className="absolute inset-0 w-full"
            style={{
              opacity,
              transition: 'opacity 0.6s cubic-bezier(0.21, 0.84, 0.39, 0.99)',
              pointerEvents: opacity > 0.5 ? 'auto' : 'none',
            }}
          >
            <Iphone src={image.src} />
          </div>
        );
      })}
      
      {/* Grain overlay - creates cinematic grain effect during transitions */}
      <div
        className="absolute inset-0 pointer-events-none z-10 solution-grain-overlay"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.15) 0px,
              transparent 1px,
              transparent 2px,
              rgba(0, 0, 0, 0.15) 3px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.15) 0px,
              transparent 1px,
              transparent 2px,
              rgba(0, 0, 0, 0.15) 3px
            )
          `,
          mixBlendMode: 'overlay',
          opacity: isTransitioning ? 0.4 : 0,
          transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          filter: 'contrast(1.1)',
        }}
      />
      
      {/* Additional subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none z-[11]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23grain)' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          mixBlendMode: 'soft-light',
          opacity: isTransitioning ? 0.25 : 0,
          transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </div>
  );
}

