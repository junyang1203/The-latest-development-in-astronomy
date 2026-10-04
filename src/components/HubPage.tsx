import React from 'react';
import { ArrowRight, Play, Globe, Volume2, VolumeX, Sparkles, Orbit, CircleDot, Waves, Cpu, Layers, Telescope, ExternalLink } from 'lucide-react';
import { Topic } from '../types';
import { TOPICS, GLOBAL_GAME_LINK } from '../data/topics';

interface Props {
  onSelectTopic: (topic: Topic) => void;
  isZh: boolean;
  onToggleLang: () => void;
  isAudioActive: boolean;
  onToggleAudio: () => void;
  onBackToLanding: () => void;
}

export const HubPage: React.FC<Props> = ({
  onSelectTopic,
  isZh,
  onToggleLang,
  isAudioActive,
  onToggleAudio,
  onBackToLanding,
}) => {
  const getTopicIcon = (id: string) => {
    switch (id) {
      case 'exoplanets':
        return <Orbit className="w-6 h-6 text-cyan-400" />;
      case 'black-holes':
        return <CircleDot className="w-6 h-6 text-orange-400" />;
      case 'gravitational-waves':
        return <Waves className="w-6 h-6 text-indigo-400" />;
      case 'ai':
        return <Cpu className="w-6 h-6 text-purple-400" />;
      case 'multi-wavelength':
        return <Layers className="w-6 h-6 text-pink-400" />;
      case 'future':
        return <Telescope className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="relative z-10 min-h-screen pt-12 pb-28 px-6 max-w-6xl mx-auto bg-transparent">
      {/* Top Bar Navigation */}
      <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-4">
        <button
          onClick={onBackToLanding}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="font-bold">{isZh ? '← 返回星空扉页' : '← THE UNIVERSE INTRO'}</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-xs font-mono text-gray-200 transition-all border border-white/10"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isZh ? 'English' : '简体中文'}</span>
          </button>

          <button
            onClick={onToggleAudio}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-mono transition-all border ${
              isAudioActive
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'bg-white/10 text-gray-400 hover:text-white border-white/10'
            }`}
          >
            {isAudioActive ? (
              <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            ) : (
              <VolumeX className="w-3.5 h-3.5" />
            )}
            <span>{isZh ? (isAudioActive ? '声效开' : '静音') : (isAudioActive ? 'Audio ON' : 'Muted')}</span>
          </button>
        </div>
      </div>

      {/* Hub Header */}
      <div className="mb-14 text-center animate-fade-in">
        <h2 className="text-4xl md:text-6xl font-black mb-4 stroke-text tracking-wide">
          {isZh ? '选择探索主题' : 'SELECT TOPIC'}
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          {isZh
            ? '纵览现代天文学最前沿的技术突破与物理洞见，逐一解锁六大宇宙谜题'
            : 'Navigate through the latest advancements and observational revolutions in astronomy'}
        </p>
      </div>

      {/* 6 Topic Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {TOPICS.map((topic, index) => (
          <div
            key={topic.id}
            onClick={() => onSelectTopic(topic)}
            className="group relative border border-white/10 bg-white/5 backdrop-blur-md p-7 rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 hover:border-white/40 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,255,255,0.08)] animate-fade-in-up flex flex-col justify-between"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Top Index & Icon */}
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                {getTopicIcon(topic.id)}
              </div>
              <span className="text-5xl font-black text-white/10 group-hover:text-white/20 transition-colors font-mono select-none">
                0{index + 1}
              </span>
            </div>

            {/* Tag */}
            <div className="mb-2">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5">
                {isZh ? topic.tagZh : topic.tag}
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="my-2">
              <h3 className="text-2xl font-black mb-2 tracking-wide text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all">
                {isZh ? topic.titleZh : topic.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-400 line-clamp-2 leading-relaxed">
                {isZh ? topic.subtitleZh : topic.subtitle}
              </p>
            </div>

            {/* Action Row */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-cyan-300 transition-colors">
                {isZh ? '进入研读与仿真' : 'Explore & Simulate'}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>

              {topic.gameLink && (
                <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  {isZh ? '带小游戏' : 'Game'}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Astro-Quest Grand Challenge Banner */}
      <div
        className="relative border border-white/15 bg-gradient-to-br from-indigo-950/40 via-purple-950/20 to-black/60 rounded-3xl p-8 md:p-12 text-center animate-fade-in-up backdrop-blur-xl shadow-2xl overflow-hidden"
        style={{ animationDelay: '600ms' }}
      >
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-3xl pointer-events-none rounded-full" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4 border border-purple-500/30">
          <Sparkles className="w-3.5 h-3.5" />
          {isZh ? '终极综合科学检验' : 'Cumulative Astrophysics Quiz Game'}
        </div>

        <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
          {isZh ? '检验你的宇宙知识储备' : 'TEST YOUR KNOWLEDGE'}
        </h3>

        <p className="text-gray-300 mb-8 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          {isZh
            ? '将这六大核心课题的所有天文知识融会贯通，在 Astro-Quest 终极星际挑战中一显身手！'
            : "Combine all the knowledge you've gathered from the 6 topics into one ultimate challenge."}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={GLOBAL_GAME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-sm rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 shadow-lg group"
          >
            <Play className="w-5 h-5 mr-3 fill-current group-hover:scale-110 transition-transform" />
            {isZh ? '启动 Astro-Quest 终极挑战' : 'Play Astro-Quest'}
            <ExternalLink className="w-4 h-4 ml-2 opacity-60" />
          </a>
        </div>
      </div>
    </div>
  );
};
