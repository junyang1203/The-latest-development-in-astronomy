/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StarryBackground } from './components/StarryBackground';
import { LandingPage } from './components/LandingPage';
import { HubPage } from './components/HubPage';
import { TopicDetail } from './components/TopicDetail';
import { Topic } from './types';
import { soundEngine } from './utils/audio';

export default function App() {
  const [view, setView] = useState<'landing' | 'hub' | 'topic'>('landing');
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [isZh, setIsZh] = useState<boolean>(false); // Defaults to English on initial launch
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);

  // Allow scrolling down on landing page to smoothly enter hub
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (view === 'landing' && e.deltaY > 20) {
        soundEngine.playClick(600);
        setView('hub');
      }
    };
    window.addEventListener('wheel', handleScroll, { passive: true });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [view]);

  // Keyboard navigation shortcuts (Escape to step back)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (view === 'topic') {
          soundEngine.playClick(440);
          setActiveTopic(null);
          setView('hub');
        } else if (view === 'hub') {
          soundEngine.playClick(400);
          setView('landing');
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [view]);

  const toggleLanguage = () => {
    setIsZh((prev) => !prev);
    soundEngine.playClick(750);
  };

  const toggleAudio = () => {
    const enabled = soundEngine.toggleMute();
    setIsAudioActive(enabled);
  };

  const handleEnterHub = () => {
    soundEngine.playClick(520);
    setView('hub');
  };

  const handleSelectTopic = (topic: Topic) => {
    soundEngine.playClick(650);
    setActiveTopic(topic);
    setView('topic');
  };

  const handleBackToHub = () => {
    soundEngine.playClick(440);
    setActiveTopic(null);
    setView('hub');
  };

  const handleBackToLanding = () => {
    soundEngine.playClick(400);
    setView('landing');
  };

  // Silky smooth cinematic transition parameters
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 18,
      scale: 0.99,
      filter: 'blur(5px)',
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.42,
        ease: 'easeOut' as const,
      },
    },
    exit: {
      opacity: 0,
      y: -14,
      scale: 0.99,
      filter: 'blur(4px)',
      transition: {
        duration: 0.28,
        ease: 'easeInOut' as const,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#020205] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30">
      {/* Global CSS for Stroke Typography and Micro Animations */}
      <style>{`
        /* Typography */
        .stroke-text {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.85);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 24s linear infinite;
        }
        
        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-reverse {
          animation: spinReverse 16s linear infinite;
        }

        /* Transit animation */
        @keyframes transit {
          0% { transform: translateX(-140px); }
          100% { transform: translateX(140px); }
        }
        .animate-transit {
          animation: transit 3.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Gravitational Wave Ripple */
        @keyframes ripple {
          0% { width: 3rem; height: 3rem; opacity: 1; border-color: rgba(99, 102, 241, 0.9); }
          100% { width: 22rem; height: 22rem; opacity: 0; border-color: rgba(99, 102, 241, 0); }
        }
        .animate-ripple {
          animation: ripple 2.4s cubic-bezier(0.1, 0.4, 0.8, 1) infinite;
        }

        @keyframes spinOrbit {
          0% { transform: rotate(0deg) translateX(28px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(28px) rotate(-360deg); }
        }
        .animate-spin-orbit {
          animation: spinOrbit 1.8s linear infinite;
        }
        .animate-spin-orbit-reverse {
          animation: spinOrbit 1.8s linear infinite reverse;
        }

        @keyframes dataFlow {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          50.1% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        .animate-data-flow {
          animation: dataFlow 1.8s ease-in-out infinite;
        }
      `}</style>

      {/* Global Interactive Starry Background with Comet Tail & Spacetime Distortion (Never unmounts) */}
      <StarryBackground />

      {/* Seamless Animated View Controller with Smooth Cross-Transition */}
      <div className="relative z-10 w-full min-h-screen">
        <AnimatePresence mode="wait">
          {view === 'landing' && (
            <motion.div
              key="landing"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <LandingPage
                onEnter={handleEnterHub}
                isZh={isZh}
                onToggleLang={toggleLanguage}
                isAudioActive={isAudioActive}
                onToggleAudio={toggleAudio}
              />
            </motion.div>
          )}

          {view === 'hub' && (
            <motion.div
              key="hub"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full min-h-screen"
            >
              <HubPage
                onSelectTopic={handleSelectTopic}
                isZh={isZh}
                onToggleLang={toggleLanguage}
                isAudioActive={isAudioActive}
                onToggleAudio={toggleAudio}
                onBackToLanding={handleBackToLanding}
              />
            </motion.div>
          )}

          {view === 'topic' && activeTopic && (
            <motion.div
              key={`topic-${activeTopic.id}`}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full min-h-screen"
            >
              <TopicDetail
                topic={activeTopic}
                onBack={handleBackToHub}
                onSelectTopic={handleSelectTopic}
                isZh={isZh}
                onToggleLang={toggleLanguage}
                isAudioActive={isAudioActive}
                onToggleAudio={toggleAudio}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
