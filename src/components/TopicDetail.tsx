import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Play,
  Orbit,
  ExternalLink,
  HelpCircle,
  Sparkles,
  Sliders,
  Globe,
  Volume2,
  VolumeX,
  Compass,
} from 'lucide-react';
import { Topic } from '../types';
import { TOPICS, GLOBAL_GAME_LINK } from '../data/topics';
import { TransitSimulator } from './simulations/TransitSimulator';
import { BlackHoleSimulator } from './simulations/BlackHoleSimulator';
import { GravitationalWaveSimulator } from './simulations/GravitationalWaveSimulator';
import { AiClassifierSimulator } from './simulations/AiClassifierSimulator';
import { MultiWavelengthSimulator } from './simulations/MultiWavelengthSimulator';
import { FutureTelescopeSimulator } from './simulations/FutureTelescopeSimulator';

interface Props {
  topic: Topic;
  onBack: () => void;
  onSelectTopic?: (topic: Topic) => void;
  isZh: boolean;
  onToggleLang: () => void;
  isAudioActive: boolean;
  onToggleAudio: () => void;
}

export const TopicDetail: React.FC<Props> = ({
  topic,
  onBack,
  onSelectTopic,
  isZh,
  onToggleLang,
  isAudioActive,
  onToggleAudio,
}) => {
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [interactiveMode, setInteractiveMode] = useState<boolean>(true);

  // Find next topic in sequence
  const currentIndex = TOPICS.findIndex((t) => t.id === topic.id);
  const nextTopic = currentIndex >= 0 && currentIndex < TOPICS.length - 1 ? TOPICS[currentIndex + 1] : TOPICS[0];

  // Render the appropriate simulation based on topic ID
  const renderInteractiveSimulation = () => {
    switch (topic.id) {
      case 'exoplanets':
        return <TransitSimulator isZh={isZh} />;
      case 'black-holes':
        return <BlackHoleSimulator isZh={isZh} />;
      case 'gravitational-waves':
        return <GravitationalWaveSimulator isZh={isZh} />;
      case 'ai':
        return <AiClassifierSimulator isZh={isZh} />;
      case 'multi-wavelength':
        return <MultiWavelengthSimulator isZh={isZh} />;
      case 'future':
        return <FutureTelescopeSimulator isZh={isZh} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative z-20 h-screen overflow-y-auto bg-[#020205] text-white selection:bg-cyan-500/30">
      {/* Sticky Top Header Bar */}
      <header className="sticky top-0 z-50 bg-[#020205]/85 backdrop-blur-xl border-b border-white/10 px-4 md:px-8 py-3.5 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Back button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold tracking-wider text-white transition-all hover:scale-105"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isZh ? '返回主题中心' : 'BACK TO HUB'}</span>
          </button>

          {/* Center Topic Title indicator (on tablet/desktop) */}
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-gray-400">
            <span className="text-cyan-400 font-bold">0{currentIndex + 1}</span>
            <span>/</span>
            <span className="text-white font-semibold">{isZh ? topic.titleZh : topic.title}</span>
          </div>

          {/* Right Utilities */}
          <div className="flex items-center gap-2">
            {/* Visual Mode Toggle */}
            <button
              onClick={() => setInteractiveMode(!interactiveMode)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
                interactiveMode
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40 shadow-sm'
                  : 'bg-white/10 text-gray-400 hover:text-white border-white/10'
              }`}
              title="Toggle interactive simulator / original graphic"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {interactiveMode
                  ? (isZh ? '交互仿真' : 'Simulator Lab')
                  : (isZh ? '经典图解' : 'Graphic')}
              </span>
            </button>

            {/* Language Switch */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-gray-200 transition-all border border-white/10"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isZh ? 'English' : '中文'}</span>
            </button>

            {/* Audio Switch */}
            <button
              onClick={onToggleAudio}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
                isAudioActive
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40 shadow-sm'
                  : 'bg-white/10 text-gray-400 hover:text-white border-white/10'
              }`}
            >
              {isAudioActive ? (
                <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              ) : (
                <VolumeX className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Continuous Scrollable Content Container */}
      <main className="max-w-6xl mx-auto px-6 md:px-10 pt-10 pb-28">
        {/* Topic Header Hero Banner */}
        <div className="mb-14 pb-10 border-b border-white/10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-wider text-cyan-300 uppercase mb-4">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>{isZh ? topic.tagZh : topic.tag}</span>
            <span className="text-white/30">•</span>
            <span className="text-white/60">TOPIC 0{currentIndex + 1}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black stroke-text mb-3 tracking-wide">
            {isZh ? topic.titleZh : topic.title}
          </h1>

          <p className="text-xl md:text-2xl text-cyan-400 font-medium leading-relaxed max-w-3xl">
            {isZh ? topic.subtitleZh : topic.subtitle}
          </p>

          {/* Quick jump navigation chips */}
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-white/5">
            <span className="text-xs font-mono text-gray-500 mr-1">{isZh ? '本章导航：' : 'Sections:'}</span>
            {topic.sections.map((sec, i) => (
              <a
                key={i}
                href={`#topic-section-${i}`}
                className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/15 text-xs text-gray-300 hover:text-white border border-white/5 transition-colors font-mono"
              >
                § 0{i + 1}
              </a>
            ))}
          </div>
        </div>

        {/* Sections Flow (Normal, non-jumping continuous layout) */}
        <div className="space-y-20 md:space-y-28">
          {topic.sections.map((section, index) => {
            return (
              <article
                key={index}
                id={`topic-section-${index}`}
                className="scroll-mt-24 pt-6 border-t border-white/10 first:border-0 first:pt-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                  {/* Left Column: Educational Text */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-bold">
                        0{index + 1}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {isZh ? section.headingZh : section.heading}
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg whitespace-pre-line font-light">
                      {isZh ? section.contentZh : section.content}
                    </div>
                  </div>

                  {/* Right Column: Visual Graphic / Interactive Simulation */}
                  <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-28">
                    {interactiveMode ? (
                      /* Interactive Simulation Lab */
                      <div className="w-full flex justify-center">
                        {renderInteractiveSimulation()}
                      </div>
                    ) : (
                      /* Original CSS Graphic Container */
                      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl flex items-center justify-center min-h-[260px]">
                        {index === 0 && (
                          <div className="w-56 h-56 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/20 shadow-[0_0_80px_rgba(255,255,255,0.1)] flex items-center justify-center animate-spin-slow">
                            <Orbit className="w-28 h-28 text-white/20" />
                          </div>
                        )}

                        {section.graphic === 'transit' && (
                          <div className="relative w-44 h-44 flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full bg-yellow-400 shadow-[0_0_50px_rgba(250,204,21,0.5)] animate-pulse" />
                            <div className="absolute top-1/2 -mt-3.5 w-7 h-7 bg-black rounded-full shadow-[0_0_10px_rgba(0,0,0,0.8)] animate-transit" />
                          </div>
                        )}

                        {section.graphic === 'blackhole' && (
                          <div className="relative w-56 h-56 flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-2xl animate-pulse" />
                            <div
                              className="absolute w-44 h-44 rounded-full border-4 border-orange-500/50 animate-spin-slow"
                              style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent' }}
                            />
                            <div
                              className="absolute w-52 h-52 rounded-full border-2 border-orange-400/30 animate-spin-reverse"
                              style={{ borderLeftColor: 'transparent', borderRightColor: 'transparent' }}
                            />
                            <div className="relative w-28 h-28 rounded-full bg-black shadow-[inset_0_0_20px_rgba(0,0,0,1)] border border-orange-500/20 z-10" />
                          </div>
                        )}

                        {section.graphic === 'waves' && (
                          <div className="relative w-56 h-56 flex items-center justify-center overflow-hidden">
                            <div className="absolute w-14 h-14 rounded-full border border-blue-400/50 animate-ripple" style={{ animationDelay: '0s' }} />
                            <div className="absolute w-14 h-14 rounded-full border border-blue-400/40 animate-ripple" style={{ animationDelay: '0.6s' }} />
                            <div className="absolute w-14 h-14 rounded-full border border-blue-400/30 animate-ripple" style={{ animationDelay: '1.2s' }} />
                            <div className="relative flex gap-4">
                              <div className="w-3.5 h-3.5 bg-white rounded-full animate-spin-orbit" />
                              <div className="w-3.5 h-3.5 bg-white rounded-full animate-spin-orbit-reverse" />
                            </div>
                          </div>
                        )}

                        {section.graphic === 'ai' && (
                          <div className="relative flex flex-col items-center space-y-4 w-full">
                            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 animate-pulse">
                              <Sparkles className="w-7 h-7 text-blue-400" />
                            </div>
                            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-500 animate-data-flow" />
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(147,51,234,0.3)]">
                              <span className="text-2xl">🤖</span>
                            </div>
                            <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-green-400 animate-data-flow" style={{ animationDelay: '0.5s' }} />
                            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                              <Sparkles className="w-7 h-7 text-green-400" />
                            </div>
                          </div>
                        )}

                        {(!section.graphic || section.graphic === 'wavelength' || section.graphic === 'telescope') && index !== 0 && (
                          <div className="w-full flex justify-center">
                            {renderInteractiveSimulation()}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Topic Footer: Comprehensive Quiz & Actions Card */}
        <section className="mt-24 pt-12 border-t border-white/15 space-y-12">
          {/* Interactive Comprehension Quiz Card */}
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/15 rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-wider mb-3">
              <HelpCircle className="w-4 h-4 text-cyan-400" />
              <span>{isZh ? '课题速测检验：你掌握核心原理了吗？' : 'Quick Check: Did You Catch This?'}</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              {isZh ? topic.quiz.questionZh : topic.quiz.question}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {(isZh ? topic.quiz.optionsZh : topic.quiz.options).map((opt, optIdx) => {
                const isSelected = selectedQuizAnswer === optIdx;
                const isCorrect = optIdx === topic.quiz.correctIndex;

                let btnClasses = 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:border-white/20';
                if (showExplanation) {
                  if (isCorrect) {
                    btnClasses = 'border-emerald-500/80 bg-emerald-500/20 text-emerald-200 font-semibold shadow-sm';
                  } else if (isSelected) {
                    btnClasses = 'border-rose-500/80 bg-rose-500/20 text-rose-200';
                  }
                } else if (isSelected) {
                  btnClasses = 'border-cyan-400 bg-cyan-500/20 text-white';
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => {
                      setSelectedQuizAnswer(optIdx);
                      setShowExplanation(true);
                    }}
                    className={`text-left p-4 rounded-2xl text-xs md:text-sm border transition-all flex items-start gap-3 ${btnClasses}`}
                  >
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/10 shrink-0 font-bold">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="leading-relaxed">{opt}</span>
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-xs md:text-sm text-cyan-200 leading-relaxed animate-fade-in flex items-start gap-3">
                <Sparkles className="w-5 h-5 shrink-0 text-cyan-400 mt-0.5" />
                <div>
                  <span className="font-bold text-white mr-1">
                    {selectedQuizAnswer === topic.quiz.correctIndex
                      ? (isZh ? '🎉 回答完全正确！' : '🎉 Spot on! ')
                      : (isZh ? '💡 科学解析：' : '💡 Explanation: ')}
                  </span>
                  {isZh ? topic.quiz.explanationZh : topic.quiz.explanation}
                </div>
              </div>
            )}
          </div>

          {/* Standalone Game & Hub Navigation Row */}
          <div className="flex flex-wrap items-center justify-between gap-6 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            {/* If topic has external game */}
            {topic.gameLink ? (
              <div className="space-y-2">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                  {isZh ? '专属互动小游戏' : 'Featured Topic Game'}
                </div>
                <h4 className="text-xl font-bold text-white">
                  {isZh ? topic.gameNameZh || topic.gameName : topic.gameName}
                </h4>
                <a
                  href={topic.gameLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-7 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold uppercase tracking-widest text-xs rounded-full shadow-lg hover:scale-105 transition-all group"
                >
                  <Play className="w-3.5 h-3.5 mr-2 fill-current group-hover:scale-110 transition-transform" />
                  {isZh ? '前往开启试玩' : 'Play Game Now'}
                  <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-70" />
                </a>
              </div>
            ) : (
              <div className="space-y-1">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                  {isZh ? '完成研读' : 'Topic Completed'}
                </div>
                <h4 className="text-lg font-bold text-white">
                  {isZh ? '恭喜！已完成此课题的所有篇章' : 'Congratulations! You completed this topic.'}
                </h4>
              </div>
            )}

            {/* Next Topic & Back Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-all border border-white/10"
              >
                {isZh ? '返回主题中心' : 'Back to Hub'}
              </button>

              {onSelectTopic && nextTopic && nextTopic.id !== topic.id && (
                <button
                  onClick={() => onSelectTopic(nextTopic)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 text-xs font-black uppercase tracking-wider transition-all hover:scale-105 shadow-md"
                >
                  <span>{isZh ? `下一课题: ${nextTopic.titleZh}` : `Next: ${nextTopic.title}`}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
