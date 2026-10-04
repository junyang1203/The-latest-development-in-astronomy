import React, { useState } from 'react';
import { Layers, Sparkles, Flame, Radio, Sun } from 'lucide-react';

interface Props {
  isZh?: boolean;
}

interface SpectralBand {
  id: string;
  name: string;
  nameZh: string;
  telescope: string;
  color: string;
  glowColor: string;
  description: string;
  descriptionZh: string;
  reveals: string;
  revealsZh: string;
}

const BANDS: SpectralBand[] = [
  {
    id: 'radio',
    name: 'Radio (ALMA / VLA)',
    nameZh: '射电波 (ALMA / 甚大阵)',
    telescope: 'ALMA / VLA',
    color: '#ef4444',
    glowColor: 'rgba(239, 68, 68, 0.4)',
    description: 'Traces vast supersonic jets of relativistic electrons ejected by the supermassive black hole.',
    descriptionZh: '捕捉由中心超大质量黑洞喷发出的高达数百万光年的相对论电子强喷流及无形强磁场。',
    reveals: 'Synchrotron black hole jets spanning millions of light-years',
    revealsZh: '黑洞同步加速相对论粒子流与射电双叶',
  },
  {
    id: 'infrared',
    name: 'Infrared (JWST / Spitzer)',
    nameZh: '红外线 (韦布 / 斯皮策)',
    telescope: 'James Webb Space Telescope',
    color: '#f97316',
    glowColor: 'rgba(249, 115, 22, 0.4)',
    description: 'Penetrates dense obscuring cosmic dust lanes to unveil warm stellar nurseries and protostars.',
    descriptionZh: '轻松穿透致密的遮光宇宙尘埃带，揭示尘埃深处温暖的恒星育婴室与原恒星胚胎。',
    reveals: 'Warm cosmic dust, protostars hidden behind dusty clouds',
    revealsZh: '温热星际尘埃、隐藏在星云背后的初生恒星',
  },
  {
    id: 'visible',
    name: 'Visible Light (Hubble)',
    nameZh: '可见光 (哈勃望远镜)',
    telescope: 'Hubble Space Telescope',
    color: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    description: 'What human eyes would see: billions of mature stars dissected by a dramatic warped dark dust band.',
    descriptionZh: '人类肉眼所能见到的宏伟景致：数以百亿计的成熟恒星辉光，被一条扭曲的黝黑尘埃带切开。',
    reveals: 'Direct starlight from main-sequence stars and opaque dust silhouettes',
    revealsZh: '主序恒星的真实星光与不透光暗星云轮廓',
  },
  {
    id: 'xray',
    name: 'X-Ray (Chandra)',
    nameZh: 'X 射线 (钱德拉天文台)',
    telescope: 'Chandra X-ray Observatory',
    color: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    description: 'Reveals multi-million-degree superheated shockwaves, colliding gas clouds, and inner accretion flows.',
    descriptionZh: '揭示温度高达数千万度的剧烈超高温激波区、气体碰撞晕以及黑洞边缘的吸积物质流。',
    reveals: 'Ultra-hot 10,000,000°C plasma shock fronts and high-energy core',
    revealsZh: '千万度超高温等离子体激波前沿与高能致密核心',
  },
  {
    id: 'composite',
    name: 'Composite (All Combined)',
    nameZh: '全波段多色合成图 (综合全景)',
    telescope: 'Multi-Observatory Synthesis',
    color: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    description: 'Combining all wavelengths reveals the complete astrophysical story: the calm stars, violent jets, and dusty heart.',
    descriptionZh: '将所有波段的数据融合赋色，拼凑出完整的宇宙全景：宁静的恒星群、狂暴的黑洞喷流与孕育新星的尘埃核心！',
    reveals: 'The complete multi-messenger astrophysical puzzle',
    revealsZh: '天文学家梦寐以求的完整多信使天体物理拼图',
  },
];

export const MultiWavelengthSimulator: React.FC<Props> = ({ isZh = false }) => {
  const [activeBand, setActiveBand] = useState<SpectralBand>(BANDS[4]); // default composite

  return (
    <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between mb-3 text-xs uppercase tracking-wider text-gray-400">
        <span className="font-semibold text-white/90">
          {isZh ? '🌈 半人马座 A (Cen A) 多波段透视' : '🌈 Centaurus A Multi-Spectral Explorer'}
        </span>
        <span className="px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 font-mono text-[11px]">
          EM Spectrum
        </span>
      </div>

      {/* Galaxy Multi-Spectral Canvas */}
      <div className="relative h-48 w-full bg-black rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">
        {/* Dynamic Multi-Wavelength Visuals */}
        {/* 1. Radio Jets (shown in radio or composite) */}
        {(activeBand.id === 'radio' || activeBand.id === 'composite') && (
          <>
            {/* North Radio Lobe */}
            <div
              className="absolute -top-6 w-16 h-36 rounded-full bg-red-600/50 blur-md transform -rotate-25 animate-pulse"
              style={{ boxShadow: '0 0 30px rgba(239,68,68,0.7)' }}
            />
            {/* South Radio Lobe */}
            <div
              className="absolute -bottom-6 w-16 h-36 rounded-full bg-red-600/50 blur-md transform -rotate-25 animate-pulse"
              style={{ boxShadow: '0 0 30px rgba(239,68,68,0.7)' }}
            />
          </>
        )}

        {/* 2. X-ray Jet & Core (shown in xray or composite) */}
        {(activeBand.id === 'xray' || activeBand.id === 'composite') && (
          <>
            <div className="absolute w-2 h-36 bg-cyan-300/80 blur-[1px] transform -rotate-25" />
            <div className="absolute w-8 h-8 rounded-full bg-cyan-400/80 blur-md animate-ping" />
          </>
        )}

        {/* 3. Infrared Warm Dust (shown in infrared or composite) */}
        {(activeBand.id === 'infrared' || activeBand.id === 'composite') && (
          <div
            className="absolute w-44 h-12 rounded-[50%] bg-gradient-to-r from-orange-500/80 via-amber-400/90 to-orange-500/80 blur-sm transform -rotate-12"
            style={{ boxShadow: '0 0 25px rgba(249,115,22,0.8)' }}
          />
        )}

        {/* 4. Visible Starlight Ellipse (shown in visible or composite) */}
        {(activeBand.id === 'visible' || activeBand.id === 'composite') && (
          <>
            <div className="w-56 h-36 rounded-full bg-gradient-to-r from-emerald-100/20 via-yellow-100/30 to-emerald-100/20 blur-xl" />
            <div className="absolute w-48 h-32 rounded-full bg-yellow-100/40 blur-md" />
            {/* Dark dust lane silhouette cutting across */}
            <div className="absolute w-48 h-5 bg-black/90 blur-[1.5px] transform -rotate-12 border-y border-black/80" />
          </>
        )}

        {/* Active Band Badge */}
        <div className="absolute top-2 left-3 text-[11px] font-mono">
          <span
            className="px-2.5 py-1 rounded-md text-white font-semibold backdrop-blur-md border border-white/20"
            style={{ backgroundColor: activeBand.glowColor }}
          >
            {activeBand.telescope}
          </span>
        </div>

        <div className="absolute bottom-2 right-3 text-[11px] font-mono text-gray-300 bg-black/60 px-2 py-0.5 rounded">
          {activeBand.name.split(' ')[0]}
        </div>
      </div>

      {/* Band Selector Switcher */}
      <div className="mt-3 grid grid-cols-5 gap-1">
        {BANDS.map((band) => (
          <button
            key={band.id}
            onClick={() => setActiveBand(band)}
            className={`py-1.5 px-1 rounded-lg text-center text-[10px] font-medium transition-all border ${
              activeBand.id === band.id
                ? 'bg-white/20 text-white border-white/40 shadow-sm'
                : 'bg-white/5 text-gray-400 border-transparent hover:text-white hover:bg-white/10'
            }`}
          >
            {band.name.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Explanation Box */}
      <div className="mt-3 bg-black/40 border border-white/5 rounded-xl p-3 text-xs leading-relaxed space-y-1">
        <div className="font-semibold text-white flex items-center justify-between">
          <span style={{ color: activeBand.color }}>
            {isZh ? activeBand.nameZh : activeBand.name}
          </span>
        </div>
        <p className="text-gray-300">
          {isZh ? activeBand.descriptionZh : activeBand.description}
        </p>
        <div className="text-[11px] text-pink-300 font-mono pt-1">
          ✦ {isZh ? '关键揭秘：' + activeBand.revealsZh : 'Key Discovery: ' + activeBand.reveals}
        </div>
      </div>
    </div>
  );
};
