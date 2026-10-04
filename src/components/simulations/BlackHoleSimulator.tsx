import React, { useState } from 'react';
import { Sparkles, Eye } from 'lucide-react';

interface Props {
  isZh?: boolean;
}

export const BlackHoleSimulator: React.FC<Props> = ({ isZh = false }) => {
  const [spinSpeed, setSpinSpeed] = useState<number>(1);
  const [showJets, setShowJets] = useState<boolean>(true);
  const [showDoppler, setShowDoppler] = useState<boolean>(true);

  return (
    <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between mb-3 text-xs uppercase tracking-wider text-gray-400">
        <span className="font-semibold text-white/90">
          {isZh ? '🕳️ M87* / Sgr A* 事件视界重构仪' : '🕳️ M87* / Sgr A* Event Horizon Model'}
        </span>
        <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 font-mono text-[11px]">
          EHT VLBI
        </span>
      </div>

      {/* Black Hole Viewport */}
      <div className="relative h-56 w-full bg-black rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">
        {/* Background stars getting gravitationally lensed */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-8 left-10 w-1 h-1 bg-white rounded-full animate-ping" />
          <div className="absolute bottom-12 right-12 w-1.5 h-1.5 bg-blue-200 rounded-full" />
          <div className="absolute top-1/3 right-8 w-1 h-1 bg-amber-100 rounded-full" />
        </div>

        {/* Relativistic Bipolar Jets */}
        {showJets && (
          <>
            {/* North Jet */}
            <div className="absolute top-0 w-3 h-28 bg-gradient-to-t from-cyan-400/80 via-blue-500/40 to-transparent blur-sm -translate-y-6" />
            <div className="absolute top-0 w-1 h-24 bg-white/90 blur-[1px] -translate-y-6" />
            
            {/* South Jet */}
            <div className="absolute bottom-0 w-3 h-28 bg-gradient-to-b from-cyan-400/80 via-blue-500/40 to-transparent blur-sm translate-y-6" />
            <div className="absolute bottom-0 w-1 h-24 bg-white/90 blur-[1px] translate-y-6" />
          </>
        )}

        {/* Outer Plasma Diffuse Glow */}
        <div className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-orange-600/30 to-amber-500/20 blur-2xl animate-pulse" />

        {/* Accretion Disk (Tilted Ellipse with Relativistic Doppler Asymmetry) */}
        <div
          className="absolute w-52 h-20 rounded-[50%] border-[8px] border-orange-500/60 blur-[1.5px] transition-all"
          style={{
            transform: 'rotate(-18deg) scaleY(0.55)',
            boxShadow: showDoppler
              ? '-25px 0 35px 8px rgba(249, 115, 22, 0.9), 25px 0 18px 2px rgba(234, 88, 12, 0.3)'
              : '0 0 30px rgba(249, 115, 22, 0.7)',
            animation: `spinSlow ${12 / spinSpeed}s linear infinite`,
          }}
        />

        {/* Secondary Back Lensed Arc (Gravitational light bending over the top) */}
        <div
          className="absolute w-44 h-44 rounded-full border-4 border-amber-400/50 blur-[1px]"
          style={{
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
            transform: 'rotate(-45deg)',
          }}
        />

        {/* Photon Sphere Ring (Light orbiting 1.5x Schwarzschild radius) */}
        <div className="absolute w-28 h-28 rounded-full border border-yellow-200/80 shadow-[0_0_15px_rgba(253,224,71,0.6)] animate-pulse" />

        {/* Event Horizon (Pure Black Shadow) */}
        <div className="relative w-20 h-20 rounded-full bg-black border border-orange-500/30 shadow-[inset_0_0_25px_rgba(0,0,0,1)] z-10 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
        </div>

        {/* Diagram Annotations */}
        <div className="absolute bottom-2 left-3 text-[10px] font-mono text-orange-400 flex items-center gap-1">
          <Eye className="w-3 h-3" />
          {showDoppler
            ? (isZh ? '相对论多普勒增亮（朝向地球旋转侧更亮）' : 'Relativistic Beaming (approaching side brighter)')
            : (isZh ? '对称模式' : 'Symmetric Mode')}
        </div>
      </div>

      {/* Scientific Insights */}
      <div className="mt-3 text-xs text-gray-300 bg-black/40 border border-white/5 rounded-xl p-2.5 leading-relaxed">
        <span className="text-orange-400 font-semibold">{isZh ? '关键原理：' : 'Key Principle: '}</span>
        {isZh
          ? '中心纯黑圆形为事件视界阴影（直径约为视界的2.6倍）；外侧炽热明亮的光环是引力透镜弯折的高温等离子体发出的射电波。'
          : 'The central pure black circular void is the event horizon shadow; the surrounding golden-orange crescent is superheated plasma bent by extreme gravitational lensing.'}
      </div>

      {/* Simulator Controls */}
      <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowJets(!showJets)}
            className={`px-2.5 py-1 rounded-lg border transition-all ${
              showJets
                ? 'bg-blue-500/20 text-blue-300 border-blue-400/40'
                : 'bg-white/5 text-gray-400 border-transparent hover:text-white'
            }`}
          >
            {isZh ? '相对论喷流' : 'Jets'}
          </button>
          <button
            onClick={() => setShowDoppler(!showDoppler)}
            className={`px-2.5 py-1 rounded-lg border transition-all ${
              showDoppler
                ? 'bg-orange-500/20 text-orange-300 border-orange-400/40'
                : 'bg-white/5 text-gray-400 border-transparent hover:text-white'
            }`}
          >
            {isZh ? '多普勒增亮' : 'Doppler'}
          </button>
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <span>{isZh ? '自旋' : 'Spin'}:</span>
          <button
            onClick={() => setSpinSpeed((s) => (s === 2 ? 0.5 : s === 1 ? 2 : 1))}
            className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white font-mono"
          >
            {spinSpeed}x
          </button>
        </div>
      </div>
    </div>
  );
};
