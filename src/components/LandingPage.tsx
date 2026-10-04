import React from 'react';
import { ChevronDown, Volume2, VolumeX, Globe, Sparkles, Compass, MousePointer } from 'lucide-react';

interface Props {
  onEnter: () => void;
  isZh: boolean;
  onToggleLang: () => void;
  isAudioActive: boolean;
  onToggleAudio: () => void;
}

export const LandingPage: React.FC<Props> = ({
  onEnter,
  isZh,
  onToggleLang,
  isAudioActive,
  onToggleAudio,
}) => {
  return (
    <div
      className="relative z-10 min-h-screen flex flex-col items-center justify-between cursor-pointer overflow-hidden bg-transparent select-none px-6 py-8"
      onClick={onEnter}
    >
      {/* Top utility row */}
      <div
        className="w-full max-w-6xl mx-auto flex items-center justify-between z-30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-gray-400">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
          <span>ASTROPHYSICS RESEARCH INITIATIVE</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Language Switch */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-xs font-mono text-gray-200 transition-all border border-white/10"
            title="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isZh ? 'English' : '简体中文'}</span>
          </button>

          {/* Audio Drone Switch */}
          <button
            onClick={onToggleAudio}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-mono transition-all border ${
              isAudioActive
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'bg-white/10 text-gray-400 hover:text-white border-white/10'
            }`}
            title="Cosmic Audio"
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>{isZh ? '宇宙声景' : 'Cosmic Audio: ON'}</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span>{isZh ? '静音' : 'Mute'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Hero Center Title */}
      <div className="relative z-20 text-center animate-fade-in-up my-auto max-w-5xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs text-cyan-300 font-mono tracking-widest uppercase mb-6 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          {isZh ? '探索现代天文学的六大前沿疆域' : 'Exploring The Six Frontiers of Modern Astrophysics'}
        </div>

        {/* Updated Big Title requested by user */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 select-none leading-[1.08] max-w-5xl mx-auto">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
            {isZh ? '现代天文学' : 'The latest development'}
          </span>
          <span className="block stroke-text mt-2 md:mt-3">
            {isZh ? '最新前沿发展' : 'in astronomy'}
          </span>
        </h1>

        <p className="text-gray-300 mt-4 tracking-widest text-xs md:text-sm uppercase max-w-xl mx-auto leading-relaxed">
          {isZh
            ? '轻点屏幕或下滑滚轮，启程踏入太阳系外的无垠星河'
            : 'Tap or scroll anywhere to enter and explore'}
        </p>

        {/* Interactive comet tail hint */}
        <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono text-cyan-300/90 backdrop-blur-md">
          <MousePointer className="w-3 h-3 text-cyan-400 animate-pulse" />
          <span>
            {isZh
              ? '✨ 移动鼠标体验彗星粒子流与时空引力扭曲'
              : '✨ Move mouse to experience comet trail & spacetime warping'}
          </span>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={onEnter}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-black uppercase tracking-widest text-xs hover:scale-105 hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transition-all duration-300"
          >
            <Compass className="w-4 h-4 text-black" />
            {isZh ? '进入星系导航中心' : 'ENTER HUB'}
          </button>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="relative z-20 text-center pb-4 animate-bounce opacity-70">
        <ChevronDown className="w-8 h-8 text-white/50 mx-auto" />
      </div>
    </div>
  );
};
