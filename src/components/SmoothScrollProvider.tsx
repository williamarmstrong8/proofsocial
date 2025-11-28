import { useEffect, useRef, ReactNode } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
  const navigationRef = useRef<HTMLElement | null>(null);
  const problemSectionRef = useRef<HTMLElement | null>(null);
  const solutionSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Initialize Locomotive Scroll
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.15, // Increased from 0.1 for smoother scrolling
      multiplier: 1,
      smartphone: {
        smooth: false, // Disable smooth scroll on mobile to prevent conflicts with native touch scrolling
      },
      tablet: {
        smooth: true,
      },
    });

    // Update scroll after initialization to ensure proper height calculation
    setTimeout(() => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.update();
      }
    }, 100);

    // Cache DOM references
    navigationRef.current = document.querySelector("#navigation");
    problemSectionRef.current = document.querySelector("#problem");
    solutionSectionRef.current = document.querySelector("#solution");

    // Track scroll progress for effects
    locomotiveScrollRef.current.on("scroll", (args: any) => {
      // Navigation fade out effect
      if (navigationRef.current) {
        const scrollY = args?.scroll?.y ?? 0;
        const fadeDistance = 300;
        const opacity = Math.max(0, 1 - scrollY / fadeDistance);
        const translateY = -40 * (scrollY / fadeDistance);

        document.documentElement.style.setProperty("--nav-opacity", opacity.toString());
        document.documentElement.style.setProperty("--nav-translate-y", `${translateY}px`);
      }

      // Problem section grayscale effect
      if (problemSectionRef.current) {
        const rect = problemSectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionHeight = rect.height;
        
        // Progress: 0 when section top enters viewport, 1 when section bottom reaches viewport top
        // Calculate based on how much of the section has scrolled past the viewport top
        let rawProgress = 0;
        if (rect.top < viewportHeight && rect.bottom > 0) {
          // Section is in or entering viewport
          const scrolledPastTop = viewportHeight - rect.top;
          rawProgress = Math.max(0, Math.min(1, scrolledPastTop / sectionHeight));
        } else if (rect.top >= viewportHeight) {
          // Section hasn't entered yet
          rawProgress = 0;
        } else {
          // Section has scrolled past
          rawProgress = 1;
        }
        
        // Apply start and end offsets: fade starts at 25% and completes at 85% of section scroll
        const startOffset = 0.25;
        const endOffset = 0.85;
        let grayscale = 0;
        
        if (rawProgress < startOffset) {
          // Before start offset: stay at 0
          grayscale = 0;
        } else if (rawProgress >= endOffset) {
          // After end offset: stay at 1
          grayscale = 1;
        } else {
          // Between start and end: map from [startOffset, endOffset] to [0, 1]
          grayscale = (rawProgress - startOffset) / (endOffset - startOffset);
        }
        
        document.documentElement.style.setProperty("--problem-grayscale", grayscale.toString());
      }

      // Solution section morphing text progress
      if (solutionSectionRef.current) {
        const rect = solutionSectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionHeight = rect.height;
        
        // Calculate progress: 0 when section top enters viewport, 1 when section bottom reaches viewport top
        // Similar to problem section but for morphing animation
        let rawProgress = 0;
        if (rect.top < viewportHeight && rect.bottom > 0) {
          // Section is in or entering viewport
          const scrolledPastTop = viewportHeight - rect.top;
          rawProgress = Math.max(0, Math.min(1, scrolledPastTop / sectionHeight));
        } else if (rect.top >= viewportHeight) {
          // Section hasn't entered yet
          rawProgress = 0;
        } else {
          // Section has scrolled past
          rawProgress = 1;
        }
        
        // Fade-in progress: starts at 15% and completes at 25% of section scroll (reduced duration)
        const fadeInStart = 0.15;
        const fadeInEnd = 0.25;
        let fadeInProgress = 0;
        if (rawProgress < fadeInStart) {
          // Before fade-in starts: invisible
          fadeInProgress = 0;
        } else if (rawProgress >= fadeInEnd) {
          // After fade-in completes: fully visible
          fadeInProgress = 1;
        } else {
          // During fade-in: fade from 0 to 1
          fadeInProgress = (rawProgress - fadeInStart) / (fadeInEnd - fadeInStart);
        }
        document.documentElement.style.setProperty("--solution-fade-in-progress", fadeInProgress.toString());
        
        // Description cards fade-in: starts later (at 25%) and completes at 35% of section scroll
        const cardFadeInStart = 0.25;
        const cardFadeInEnd = 0.35;
        let cardFadeInProgress = 0;
        if (rawProgress < cardFadeInStart) {
          // Before fade-in starts: invisible
          cardFadeInProgress = 0;
        } else if (rawProgress >= cardFadeInEnd) {
          // After fade-in completes: fully visible
          cardFadeInProgress = 1;
        } else {
          // During fade-in: fade from 0 to 1
          cardFadeInProgress = (rawProgress - cardFadeInStart) / (cardFadeInEnd - cardFadeInStart);
        }
        document.documentElement.style.setProperty("--solution-card-fade-in-progress", cardFadeInProgress.toString());
        
        // Apply start and end offsets: morph starts at 30% (delayed to give first slide more hold time) and completes at 95% of section scroll
        // Using more of the section scroll to accommodate the longer timeline (0-10)
        const startOffset = 0.3;
        const endOffset = 0.95;
        
        // Fade-out progress: happens in last 5% of section scroll (0.95-1.0)
        const fadeOutStart = 0.95;
        let fadeOutProgress = 1;
        if (rawProgress >= fadeOutStart) {
          fadeOutProgress = Math.max(0, 1 - (rawProgress - fadeOutStart) / (1 - fadeOutStart));
        }
        document.documentElement.style.setProperty("--solution-fade-out-progress", fadeOutProgress.toString());
        let morphProgress = 0;
        
        if (rawProgress < startOffset) {
          // Before start offset: stay at 0
          morphProgress = 0;
        } else if (rawProgress >= endOffset) {
          // After end offset: stay at 1
          morphProgress = 1;
        } else {
          // Between start and end: map from [startOffset, endOffset] to [0, 1]
          morphProgress = (rawProgress - startOffset) / (endOffset - startOffset);
        }
        
        document.documentElement.style.setProperty("--solution-morph-progress", morphProgress.toString());
      }
    });

    // Update scroll on window resize
    const handleResize = () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.update();
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
      // Reset CSS variables on unmount
      document.documentElement.style.setProperty("--nav-opacity", "1");
      document.documentElement.style.setProperty("--nav-translate-y", "0px");
      document.documentElement.style.setProperty("--problem-grayscale", "0");
      document.documentElement.style.setProperty("--solution-morph-progress", "0");
      document.documentElement.style.setProperty("--solution-fade-in-progress", "0");
      document.documentElement.style.setProperty("--solution-card-fade-in-progress", "0");
      document.documentElement.style.setProperty("--solution-fade-out-progress", "1");
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScrollProvider;

