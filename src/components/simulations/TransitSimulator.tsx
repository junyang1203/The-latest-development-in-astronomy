import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface Props {
  isZh?: boolean;
}

export const TransitSimulator: React.FC<Props> = ({ isZh = false }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [planetSize, setPlanetSize] = useState<'earth' | 'neptune' | 'jupiter'>('jupiter');
  const [progress, setProgress] = useState(0); // 0 to 1
  const animRef = useRef<number | null>(null);

  const radiusMap = {
    earth: { r: 5, dip: 0.008, label: isZh ? '地球 (1 R⊕)' : 'Earth (1 R⊕)' },
    neptune: { r: 12, dip: 0.04, label: isZh ? '海王星 (4 R⊕)' : 'Neptune (4 R⊕)' },
    jupiter: { r: 22, dip: 0.14, label: isZh ? '木星 (11 R⊕)' : 'Jupiter (11 R⊕)' },
  };

  useEffect(() => {
    let lastTime = performance.now();
    const speed = 0.22; // cycle duration ~ 4.5 seconds

    const loop = (now: number) => {
      if (isPlaying) {
        const delta = (now - lastTime) / 1000;
        setProgress((prev) => (prev + delta * speed) % 1);
      }
      lastTime = now;
      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPlaying]);

  // Planet x position across star (-120 to +120)
  const planetX = (progress - 0.5) * 280;
  const isTransiting = Math.abs(planetX) < 55;
  const currentDip = isTransiting ? radiusMap[planetSize].dip : 0;
  const currentBrightness = (1 - currentDip) * 100;

  // Generate points for the light curve SVG
  const lightCurvePoints: string[] = [];
  const pointsCount = 60;
  for (let i = 0; i <= pointsCount; i++) {
    const p = i / pointsCount;
    const px = (p - 0.5) * 280;
    const inTransit = Math.abs(px) < 55;
    const dip = inTransit ? radiusMap[planetSize].dip : 0;
    const y = 30 + dip * 140; // baseline at y=30
    const x = 20 + (i / pointsCount) * 240;
    lightCurvePoints.push(`${x},${y}`);
  }

  const cursorX = 20 + progress * 240;

  return (
    <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md shadow-2xl">
      {/* Title */}
      <div className="flex items-center justify-between mb-3 text-xs uppercase tracking-wider text-gray-400">
        <span className="font-semibold text-white/90">
          {isZh ? '🔬 实时凌日测光仿真器' : '🔬 Live Transit Photometry Simulator'}
        </span>
        <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[11px]">
          {isZh ? '开普勒/TESS' : 'Kepler / TESS'}
        </span>
      </div>

      {/* Main Star & Orbit Canvas */}
      <div className="relative h-44 w-full bg-black/60 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center">
        {/* Stellar Glow & Surface */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-36 h-36 rounded-full bg-amber-400/20 blur-xl animate-pulse" />
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-200 shadow-[0_0_40px_rgba(245,158,11,0.6)] border border-amber-300/40 relative flex items-center justify-center">
            {/* Sunspot details */}
            <div className="absolute top-6 left-5 w-2 h-1.5 bg-amber-900/60 rounded-full blur-[0.5px]" />
            <div className="absolute bottom-8 right-6 w-3 h-2 bg-amber-900/50 rounded-full blur-[0.5px]" />
          </div>

          {/* Orbital path line */}
          <div className="absolute w-72 h-[1px] bg-white/20 border-dashed border-b border-white/30" />

          {/* Planet */}
          <div
            className="absolute rounded-full bg-slate-900 border border-slate-600 shadow-[0_0_12px_rgba(0,0,0,0.9)] z-20 transition-transform duration-75"
            style={{
              width: `${radiusMap[planetSize].r * 2}px`,
              height: `${radiusMap[planetSize].r * 2}px`,
              transform: `translate(${planetX}px, 0px)`,
            }}
          >
            {/* Subtle atmospheric edge rim */}
            <div className="w-full h-full rounded-full border-r border-cyan-400/40 opacity-70" />
          </div>
        </div>

        {/* Status Overlay */}
        <div className="absolute top-2 left-3 text-[11px] font-mono text-gray-400">
          {isTransiting ? (
            <span className="text-amber-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
              {isZh ? '凌日发生中 (Transit Event)' : 'Transit Event Active'}
            </span>
          ) : (
            <span className="text-emerald-400/80">{isZh ? '常态基线星光' : 'Baseline Starlight'}</span>
          )}
        </div>

        <div className="absolute bottom-2 right-3 text-[11px] font-mono text-cyan-300">
          {isZh ? '相对通量' : 'Flux'}: {currentBrightness.toFixed(2)}%
        </div>
      </div>

      {/* Synchronized Light Curve Graph */}
      <div className="mt-3 bg-black/40 border border-white/5 rounded-xl p-2.5">
        <div className="flex justify-between text-[11px] text-gray-400 font-mono mb-1">
          <span>{isZh ? '光变曲线 (Light Curve)' : 'Normalized Light Curve'}</span>
          <span className="text-amber-400">ΔF = -{(radiusMap[planetSize].dip * 100).toFixed(1)}%</span>
        </div>

        <svg className="w-full h-16" viewBox="0 0 280 65">
          {/* Baseline reference */}
          <line x1="20" y1="30" x2="260" y2="30" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
          
          {/* Dip line */}
          <polyline
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={lightCurvePoints.join(' ')}
          />

          {/* Time tracker line */}
          <line
            x1={cursorX}
            y1="5"
            x2={cursorX}
            y2="55"
            stroke="#f59e0b"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          <circle cx={cursorX} cy="30" r="3" fill="#f59e0b" />
        </svg>
      </div>

      {/* Interactive Controls */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10">
        {/* Planet Presets */}
        <div className="flex items-center gap-1.5 text-xs">
          {(['earth', 'neptune', 'jupiter'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setPlanetSize(type)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                planetSize === type
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-transparent'
              }`}
            >
              {radiusMap[type].label}
            </button>
          ))}
        </div>

        {/* Play / Reset buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          </button>
          <button
            onClick={() => setProgress(0)}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
            title="Reset cycle"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
