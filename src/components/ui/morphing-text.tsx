"use client"

import { useEffect, useRef } from "react"

interface MorphingTextProps {
  className?: string
  texts: string[]
  progress: number // 0 to 1, scroll-based progress
}

const SvgFilters: React.FC = () => (
  <svg
    id="filters"
    className="fixed h-0 w-0"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
        />
      </filter>
    </defs>
  </svg>
)

export const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  className = "",
  progress,
}) => {
  const text1Ref = useRef<HTMLSpanElement>(null)
  const text2Ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (texts.length < 2) return

    const [current1, current2] = [text1Ref.current, text2Ref.current]
    if (!current1 || !current2) return

    // Clamp progress between 0 and 1
    const clampedProgress = Math.max(0, Math.min(1, progress))
    
    // Segmented progress with hold periods for each screen
    // Structure: [hold, transition, hold, transition, ...]
    // Total timeline extends to 3, we map progress 0-1 to this range
    const segments = [
      { start: 0, end: 0.6, screen: 0, isHold: true },      // Screen 0 hold (0.6)
      { start: 0.6, end: 0.84, screen: 0, isHold: false },  // Transition 0->1 (0.24)
      { start: 0.84, end: 1.32, screen: 1, isHold: true },   // Screen 1 hold (0.48)
      { start: 1.32, end: 1.56, screen: 1, isHold: false },  // Transition 1->2 (0.24)
      { start: 1.56, end: 2.04, screen: 2, isHold: true },    // Screen 2 hold (0.48)
      { start: 2.04, end: 2.28, screen: 2, isHold: false },   // Transition 2->3 (0.24)
      { start: 2.28, end: 2.7, screen: 3, isHold: true },  // Screen 3 hold (0.42)
      { start: 2.7, end: 2.88, screen: 3, isHold: false },  // Transition 3->4 (0.18)
      { start: 2.88, end: 3.0, screen: 4, isHold: true },   // Screen 4 hold (0.12)
    ];
    
    // Map progress 0-1 to timeline 0-3
    const normalizedProgress = clampedProgress * 3;
    
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
    
    // Calculate text index and local progress
    let textIndex = currentSegment.screen;
    let localProgress = 0;
    
    if (!currentSegment.isHold && currentSegment.screen < texts.length - 1) {
      // In transition: calculate local progress within transition
      const segmentProgress = (normalizedProgress - currentSegment.start) / (currentSegment.end - currentSegment.start);
      textIndex = currentSegment.screen;
      localProgress = segmentProgress;
    } else {
      // In hold: stay on current screen
      textIndex = currentSegment.screen;
      localProgress = 0;
    }
    
    // Set text content
    current1.textContent = texts[textIndex]
    current2.textContent = texts[Math.min(textIndex + 1, texts.length - 1)]

    // Apply morphing styles based on local progress
    // Ensure at least one text is always visible
    const fraction = localProgress
    
    if (currentSegment.isHold) {
      // During hold: show only current text fully, hide next text completely
      current1.style.filter = `blur(0px)`
      current1.style.opacity = `100%`
      current2.style.filter = `blur(100px)`
      current2.style.opacity = `0%`
    } else {
      // During transition: crossfade between texts
      // Use smooth easing for the morph effect
      const opacity1 = Math.pow(1 - fraction, 0.4)
      const opacity2 = Math.pow(fraction, 0.4)
      
      // Ensure at least one is always visible by keeping minimum opacity
      const minOpacity = 0.15
      const finalOpacity1 = Math.max(minOpacity, opacity1)
      const finalOpacity2 = Math.max(minOpacity, opacity2)
      
      current1.style.filter = `blur(${Math.min(8 / (1 - fraction + 0.01) - 8, 100)}px)`
      current1.style.opacity = `${finalOpacity1 * 100}%`
      
      current2.style.filter = `blur(${Math.min(8 / (fraction + 0.01) - 8, 100)}px)`
      current2.style.opacity = `${finalOpacity2 * 100}%`
    }
  }, [progress, texts])

  return (
    <div
      className={`relative mx-auto h-16 w-full max-w-screen-md text-center font-sans text-4xl md:text-6xl lg:text-7xl leading-tight font-bold [filter:url(#threshold)_blur(0.6px)] md:h-24 ${className}`}
    >
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full"
        ref={text1Ref}
      />
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full"
        ref={text2Ref}
      />
      <SvgFilters />
    </div>
  )
}

