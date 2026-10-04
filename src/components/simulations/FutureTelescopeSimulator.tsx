import React, { useState } from 'react';
import { Telescope, Maximize2, Sparkles } from 'lucide-react';

interface Props {
  isZh?: boolean;
}

export const FutureTelescopeSimulator: React.FC<Props> = ({ isZh = false }) => {
  const [mode, setMode] = useState<'hubble' | 'roman' | 'comparison'>('comparison');

  return (
    <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between mb-3 text-xs uppercase tracking-wider text-gray-400">
        <span className="font-semibold text-white/90">
          {isZh ? '🔭 罗曼 vs 哈勃 视场(FOV) 100倍对比' : '🔭 Roman vs Hubble 100x FOV Matrix'}
        </span>
        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[11px]">
          100x Wider
        </span>
      </div>

      {/* Panoramic Cosmic Deep Field Viewport */}
      <div className="relative h-52 w-full bg-slate-950 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center p-3">
        {/* Galaxy field representation (thousands of micro galaxies) */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-2 p-3 opacity-75">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              {i % 5 === 0 ? (
                <div className="w-3 h-1.5 rounded-full bg-blue-300/80 blur-[0.5px] transform rotate-45" />
              ) : i % 3 === 0 ? (
                <div className="w-2 h-2 rounded-full bg-amber-300/80 blur-[0.5px]" />
              ) : i % 2 === 0 ? (
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-300/70" />
              ) : (
                <div className="w-1 h-1 rounded-full bg-white/80" />
              )}
            </div>
          ))}
        </div>

        {/* Roman Space Telescope Large Survey Field (18-detector focal plane mosaic) */}
        {(mode === 'roman' || mode === 'comparison') && (
          <div className="absolute inset-4 border-2 border-emerald-400/80 bg-emerald-500/10 rounded-lg flex flex-col justify-between p-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <div className="flex justify-between items-center text-[10px] font-mono text-emerald-300">
              <span className="bg-black/60 px-1.5 py-0.5 rounded">
                {isZh ? '罗曼广域视场 (Roman FOV: 0.28 sq deg)' : 'Roman Wide-Field (0.28 sq deg)'}
              </span>
              <span className="bg-emerald-500/20 px-1.5 py-0.5 rounded font-bold text-emerald-200">
                100x
              </span>
            </div>

            {/* Detector array grid lines */}
            <div className="w-full h-full grid grid-cols-6 grid-rows-3 border border-emerald-400/20 my-1 pointer-events-none opacity-40">
              {Array.from({ length: 18 }).map((_, idx) => (
                <div key={idx} className="border border-emerald-400/20" />
              ))}
            </div>

            <div className="text-[10px] font-mono text-emerald-300/80 text-right">
              {isZh ? '一次曝光捕获数万个星系' : 'Tens of thousands of galaxies in one shot'}
            </div>
          </div>
        )}

        {/* Hubble Narrow Field of View (Tiny Keyhole in center) */}
        {(mode === 'hubble' || mode === 'comparison') && (
          <div className="absolute z-20 w-8 h-8 border-2 border-cyan-400 bg-cyan-400/30 rounded flex items-center justify-center shadow-[0_0_12px_rgba(34,211,238,0.8)]">
            <div className="text-[8px] font-mono text-cyan-200 font-bold leading-none text-center">
              HST
            </div>
          </div>
        )}

        {/* Comparison Callout Marker */}
        {mode === 'comparison' && (
          <div className="absolute bottom-2 left-6 text-[10px] font-mono text-cyan-300 bg-black/80 px-2 py-0.5 rounded border border-cyan-400/30 z-30">
            {isZh ? '中心方块：哈勃视野 (仅为罗曼的 1/100)' : 'Center Box: Hubble (1/100th Roman area)'}
          </div>
        )}
      </div>

      {/* Mode Buttons */}
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        <button
          onClick={() => setMode('comparison')}
          className={`py-1.5 px-2 rounded-lg text-center text-xs font-medium transition-all border ${
            mode === 'comparison'
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50'
              : 'bg-white/5 text-gray-400 border-transparent hover:text-white'
          }`}
        >
          {isZh ? '视场同台对比' : '100x Comparison'}
        </button>
        <button
          onClick={() => setMode('roman')}
          className={`py-1.5 px-2 rounded-lg text-center text-xs font-medium transition-all border ${
            mode === 'roman'
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50'
              : 'bg-white/5 text-gray-400 border-transparent hover:text-white'
          }`}
        >
          {isZh ? '仅罗曼全景' : 'Roman Panorama'}
        </button>
        <button
          onClick={() => setMode('hubble')}
          className={`py-1.5 px-2 rounded-lg text-center text-xs font-medium transition-all border ${
            mode === 'hubble'
              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50'
              : 'bg-white/5 text-gray-400 border-transparent hover:text-white'
          }`}
        >
          {isZh ? '仅哈勃视场' : 'Hubble Only'}
        </button>
      </div>

      {/* Scientific Impact */}
      <div className="mt-3 bg-black/40 border border-white/5 rounded-xl p-3 text-xs leading-relaxed text-gray-300">
        <span className="text-emerald-400 font-semibold">{isZh ? '划时代革命：' : 'Revolutionary Leap: '}</span>
        {isZh
          ? '哈勃需要花费数百年反复拼接的超深空天区，罗曼空间望远镜仅需数十天即可完成无缝普查，从而揭示暗能量、星系演化与数十亿系外行星。'
          : 'What took Hubble hundreds of days of individual mosaic pointings can be completed by Roman in mere days, revolutionizing dark energy and exoplanet statistics.'}
      </div>
    </div>
  );
};
