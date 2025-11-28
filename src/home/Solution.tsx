import { useEffect, useState } from 'react';
import HomepageImage from '../assets/solution/home.png';
import FeedImage from '../assets/solution/feed.png';
import ChallengesImage from '../assets/solution/challenges.png';
import TasksImage from '../assets/solution/tasks.png';
import ProfileImage from '../assets/solution/profile.png';
import { MorphingText } from '../components/ui/morphing-text';
import { SynchronizedPhone } from '../components/ui/synchronized-phone';
import { SolutionDescriptionCards } from '../components/ui/solution-description-cards';

const Solution = () => {
  const [morphProgress, setMorphProgress] = useState(0);
  const [fadeInProgress, setFadeInProgress] = useState(0);
  const [cardFadeInProgress, setCardFadeInProgress] = useState(0);
  const [fadeOutProgress, setFadeOutProgress] = useState(1);

  useEffect(() => {
    let animationFrameId: number;
    
    const updateProgress = () => {
      const progress = parseFloat(
        getComputedStyle(document.documentElement)
          .getPropertyValue('--solution-morph-progress')
          .trim() || '0'
      );
      setMorphProgress(progress);
      
      const fadeIn = parseFloat(
        getComputedStyle(document.documentElement)
          .getPropertyValue('--solution-fade-in-progress')
          .trim() || '0'
      );
      setFadeInProgress(fadeIn);
      
      const cardFadeIn = parseFloat(
        getComputedStyle(document.documentElement)
          .getPropertyValue('--solution-card-fade-in-progress')
          .trim() || '0'
      );
      setCardFadeInProgress(cardFadeIn);
      
      const fadeOut = parseFloat(
        getComputedStyle(document.documentElement)
          .getPropertyValue('--solution-fade-out-progress')
          .trim() || '1'
      );
      setFadeOutProgress(fadeOut);
      
      // Continue animation loop
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    // Start animation loop using requestAnimationFrame for smoother updates
    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
  
  // Combined opacity: fade in first, then fade out at the end
  const contentOpacity = fadeInProgress * fadeOutProgress;
  // Description cards have delayed fade-in
  const cardOpacity = cardFadeInProgress * fadeOutProgress;

  return (
    <section
      id="solution"
      data-scroll-section
      data-scroll-id="solution"
      className="relative w-full min-h-[550vh] overflow-hidden bg-black pt-20"
    >
      <div 
        data-scroll
        data-scroll-sticky
        data-scroll-target="#solution"
        className="relative z-20 max-w-6xl px-6 mx-auto"
      >
        <div 
          className="mb-8 text-center"
          style={{
            opacity: contentOpacity,
            transform: `translateY(${20 * (1 - fadeInProgress) - 60 * (1 - fadeOutProgress)}px)`,
            willChange: 'opacity, transform',
          }}
        >
          <MorphingText 
            texts={["The Solution", "Feed", "Challenges", "Tasks", "Profile"]}
            progress={morphProgress}
            className="text-white"
          />
        </div>
        
        {/* Phone container - stays centered */}
        <div 
          className="relative flex justify-center"
          style={{
            opacity: contentOpacity,
            transform: `translateY(${20 * (1 - fadeInProgress) - 60 * (1 - fadeOutProgress)}px)`,
            willChange: 'opacity, transform',
          }}
        >
          <div className="w-full max-w-[360px]">
            <SynchronizedPhone
              images={[
                { src: HomepageImage, id: 'home' },
                { src: FeedImage, id: 'feed' },
                { src: ChallengesImage, id: 'challenges' },
                { src: TasksImage, id: 'tasks' },
                { src: ProfileImage, id: 'profile' },
              ]}
              progress={morphProgress}
            />
          </div>
          
          {/* Description cards - positioned on right side for odd indices, left side for even indices */}
          {/* Right side cards: Home, Challenges, Profile */}
          <div 
            className="absolute left-[calc(50%+240px)] top-0 w-[320px] hidden lg:block"
            style={{
              opacity: cardOpacity,
              transform: `translateY(${20 * (1 - cardFadeInProgress) - 60 * (1 - fadeOutProgress)}px)`,
              willChange: 'opacity, transform',
            }}
          >
            <SolutionDescriptionCards
              cards={[
                {
                  id: 'home',
                  title: 'A platform built on real community',
                  description: 'Share your daily wins, connect with friends, and build habits together. Proof turns your personal goals into a shared journey.',
                },
                {
                  id: 'challenges',
                  title: 'Challenge yourself and others',
                  description: 'Create and join challenges that push you to achieve more. Track progress, celebrate milestones, and stay accountable with your community.',
                },
                {
                  id: 'profile',
                  title: 'Profile',
                  description: 'A profile to connect with friends and see all your progress.',
                },
              ]}
              progress={morphProgress}
            />
          </div>
          
          {/* Left side cards: Feed, Tasks */}
          <div 
            className="absolute right-[calc(50%+240px)] top-0 w-[320px] hidden lg:block"
            style={{
              opacity: cardOpacity,
              transform: `translateY(${20 * (1 - cardFadeInProgress) - 60 * (1 - fadeOutProgress)}px)`,
              willChange: 'opacity, transform',
            }}
          >
            <SolutionDescriptionCards
              cards={[
                {
                  id: 'feed',
                  title: 'Feed',
                  description: 'A feed of friends\' tasks achieved to support and hold each other accountable.',
                },
                {
                  id: 'tasks',
                  title: 'Tasks',
                  description: 'Personal and group tasks. YOU NEED TO TAKE A PHOTO TO SHOW PROOF THAT YOU COMPLETED THE TASK WHICH WILL THEN POST TO YOUR FRIENDS FEED.',
                },
              ]}
              progress={morphProgress}
            />
          </div>
        </div>
        
        {/* Mobile: show cards below phone */}
        <div 
          className="mt-6 lg:hidden"
          style={{
            opacity: cardOpacity,
            transform: `translateY(${20 * (1 - cardFadeInProgress) - 60 * (1 - fadeOutProgress)}px)`,
            willChange: 'opacity, transform',
          }}
        >
          <div className="w-full max-w-[320px] relative mx-auto">
            <SolutionDescriptionCards
              cards={[
                {
                  id: 'home',
                  title: 'A platform built on real community',
                  description: 'Share your daily wins, connect with friends, and build habits together. Proof turns your personal goals into a shared journey.',
                },
                {
                  id: 'feed',
                  title: 'Feed',
                  description: 'A feed of friends\' tasks achieved to support and hold each other accountable.',
                },
                {
                  id: 'challenges',
                  title: 'Challenge yourself and others',
                  description: 'Create and join challenges that push you to achieve more. Track progress, celebrate milestones, and stay accountable with your community.',
                },
                {
                  id: 'tasks',
                  title: 'Tasks',
                  description: 'Personal and group tasks. YOU NEED TO TAKE A PHOTO TO SHOW PROOF THAT YOU COMPLETED THE TASK WHICH WILL THEN POST TO YOUR FRIENDS FEED.',
                },
                {
                  id: 'profile',
                  title: 'Profile',
                  description: 'A profile to connect with friends and see all your progress.',
                },
              ]}
              progress={morphProgress}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

