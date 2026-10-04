import React, { useState, useEffect } from 'react';
import { Volume2, Play, RefreshCw } from 'lucide-react';
import { soundEngine } from '../../utils/audio';

interface Props {
  isZh?: boolean;
}

export const GravitationalWaveSimulator: React.FC<Props> = ({ isZh = false }) => {
  const [phase, setPhase] = useState<'inspiral' | 'merger' | 'ringdown'>('inspiral');
  const [t, setT] = useState<number>(0);
  const [chirping, setChirping] = useState<boolean>(false);

  useEffect(() => {
    let frame: number;
    let time = 0;
    const update = () => {
      time += 0.04;
      setT(time);

      const cycle = time % 6; // 6-second total loop
      if (cycle < 4.2) {
        setPhase('inspiral');
      } else if (cycle < 5.0) {
        setPhase('merger');
      } else {
        setPhase('ringdown');
      }

      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, []);

  const triggerChirpAudio = () => {
    setChirping(true);
    soundEngine.playGravitationalChirp();
    setTimeout(() => setChirping(false), 600);
  };

  // Orbit radius shrinks during inspiral
  const cycleTime = t % 6;
  const inspiralProgress = Math.min(1, cycleTime / 4.2);
  const orbitRadius = phase === 'inspiral' ? 36 * (1 - inspiralProgress * 0.65) : 8;
  const angularSpeed = phase === 'inspiral' ? (1 + inspiralProgress * 6) * 3 : 18;
  const angle = t * angularSpeed;

  const bh1X = Math.cos(angle) * orbitRadius;
  const bh1Y = Math.sin(angle) * orbitRadius;
  const bh2X = -bh1X;
  const bh2Y = -bh1Y;

  // Real-time strain waveform points
  const waveformPoints: string[] = [];
  const waveLength = 240;
  for (let i = 0; i <= waveLength; i += 3) {
    const norm = i / waveLength;
    // Frequency and amplitude scale with cycle
    const freq = 0.05 + inspiralProgress * 0.25;
    const amp = (12 + inspiralProgress * 18) * Math.sin((i - t * 60) * freq);
    const y = 30 + amp * (phase === 'ringdown' ? 0.2 : 1);
    waveformPoints.push(`${20 + i},${y}`);
  }

  return (
    <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between mb-3 text-xs uppercase tracking-wider text-gray-400">
        <span className="font-semibold text-white/90">
          {isZh ? '🌊 LIGO GW150914 时空干涉仪' : '🌊 LIGO GW150914 Interferometer'}
        </span>
        <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono text-[11px]">
          h ~ 10⁻²¹
        </span>
      </div>

      {/* Spacetime Metric Distorting Canvas */}
      <div className="relative h-48 w-full bg-black/80 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">
        {/* Metric Ripple Waves */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-24 h-24 rounded-full border border-indigo-500/30 animate-ripple" style={{ animationDelay: '0s' }} />
          <div className="absolute w-24 h-24 rounded-full border border-indigo-400/25 animate-ripple" style={{ animationDelay: '0.6s' }} />
          <div className="absolute w-24 h-24 rounded-full border border-violet-400/20 animate-ripple" style={{ animationDelay: '1.2s' }} />
          <div className="absolute w-24 h-24 rounded-full border border-blue-400/15 animate-ripple" style={{ animationDelay: '1.8s' }} />
        </div>

        {/* Binary Black Holes */}
        <div className="relative flex items-center justify-center">
          {phase !== 'ringdown' ? (
            <>
              {/* Black Hole 1 */}
              <div
                className="absolute w-6 h-6 rounded-full bg-black border-2 border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.9)] z-20 flex items-center justify-center"
                style={{
                  transform: `translate(${bh1X}px, ${bh1Y}px)`,
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </div>

              {/* Black Hole 2 */}
              <div
                className="absolute w-5 h-5 rounded-full bg-black border-2 border-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.9)] z-20 flex items-center justify-center"
                style={{
                  transform: `translate(${bh2X}px, ${bh2Y}px)`,
                }}
              >
                <div className="w-1 h-1 rounded-full bg-white/40" />
              </div>
            </>
          ) : (
            /* Merged Single Kerr Black Hole with Ringdown */
            <div className="w-9 h-9 rounded-full bg-black border-2 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.8)] z-20 flex items-center justify-center animate-pulse">
              <div className="w-2 h-2 rounded-full bg-cyan-200/50" />
            </div>
          )}
        </div>

        {/* Phase Badge */}
        <div className="absolute top-2 left-3 text-[11px] font-mono">
          <span
            className={`px-2 py-0.5 rounded-md ${
              phase === 'inspiral'
                ? 'bg-blue-500/20 text-blue-300'
                : phase === 'merger'
                ? 'bg-amber-500/30 text-amber-300 animate-pulse'
                : 'bg-emerald-500/20 text-emerald-300'
            }`}
          >
            {phase === 'inspiral'
              ? (isZh ? '旋近阶段 (Inspiral)' : 'Phase: Inspiral')
              : phase === 'merger'
              ? (isZh ? '轰鸣并合 (Merger!)' : 'Phase: Merger!')
              : (isZh ? '铃荡衰减 (Ringdown)' : 'Phase: Ringdown')}
          </span>
        </div>

        <div className="absolute bottom-2 right-3 text-[11px] font-mono text-indigo-300">
          f: {Math.round(35 + inspiralProgress * 215)} Hz
        </div>
      </div>

      {/* Gravitational Strain Waveform Plot */}
      <div className="mt-3 bg-black/40 border border-white/5 rounded-xl p-2.5">
        <div className="flex justify-between text-[11px] text-gray-400 font-mono mb-1">
          <span>{isZh ? '引力波应变信号 h(t)' : 'Gravitational Strain h(t)'}</span>
          <span className="text-indigo-400">{isZh ? '啾啾声 Chirp' : 'Chirp Waveform'}</span>
        </div>

        <svg className="w-full h-14" viewBox="0 0 280 60">
          <line x1="15" y1="30" x2="265" y2="30" stroke="rgba(255,255,255,0.15)" strokeDasharray="2 2" />
          <polyline
            fill="none"
            stroke="#818cf8"
            strokeWidth="2"
            strokeLinecap="round"
            points={waveformPoints.join(' ')}
          />
        </svg>
      </div>

      {/* Interactive Controls & Chirp Audio Button */}
      <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10">
        <button
          onClick={triggerChirpAudio}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md ${
            chirping
              ? 'bg-indigo-400 text-white scale-105'
              : 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white'
          }`}
        >
          <Volume2 className={`w-4 h-4 ${chirping ? 'animate-bounce' : ''}`} />
          {isZh ? '🔊 播放真实引力波“啾啾声”' : '🔊 Listen to Real Cosmic Chirp'}
        </button>

        <span className="text-[11px] text-gray-400 font-mono">
          {isZh ? '13亿光年外并合' : '1.3B light-yrs away'}
        </span>
      </div>
    </div>
  );
};
