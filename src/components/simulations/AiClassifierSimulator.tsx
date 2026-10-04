import React, { useState } from 'react';
import { Cpu, CheckCircle2, AlertCircle, Scan } from 'lucide-react';

interface Props {
  isZh?: boolean;
}

interface Sample {
  id: string;
  name: string;
  nameZh: string;
  type: string;
  typeZh: string;
  icon: string;
  confidence: number;
  features: string[];
  featuresZh: string[];
  classificationScores: { label: string; labelZh: string; score: number }[];
}

const SAMPLES: Sample[] = [
  {
    id: 'spiral',
    name: 'M51 Whirlpool Candidate',
    nameZh: 'M51 涡状星系候选体',
    type: 'Spiral Galaxy',
    typeZh: '旋涡星系',
    icon: '🌀',
    confidence: 98.4,
    features: ['Logarithmic spiral arms', 'Blue star-forming knots', 'Central bulge'],
    featuresZh: ['对数螺旋对偶悬臂', '恒星形成蓝色星团', '致密明亮中心核球'],
    classificationScores: [
      { label: 'Spiral Galaxy', labelZh: '旋涡星系', score: 98.4 },
      { label: 'Elliptical Galaxy', labelZh: '椭圆星系', score: 1.1 },
      { label: 'Irregular / Merger', labelZh: '不规则/并合星系', score: 0.5 },
    ],
  },
  {
    id: 'elliptical',
    name: 'NGC 4889 Giant',
    nameZh: 'NGC 4889 巨型椭圆星系',
    type: 'Elliptical Galaxy',
    typeZh: '椭圆星系',
    icon: '⭕',
    confidence: 96.8,
    features: ['Smooth light gradient', 'Old red population', 'No dust lanes'],
    featuresZh: ['平滑连续椭球光度剖面', '老年红色演化星族', '无显著遮光尘埃带'],
    classificationScores: [
      { label: 'Spiral Galaxy', labelZh: '旋涡星系', score: 0.8 },
      { label: 'Elliptical Galaxy', labelZh: '椭圆星系', score: 96.8 },
      { label: 'Irregular / Merger', labelZh: '不规则/并合星系', score: 2.4 },
    ],
  },
  {
    id: 'irregular',
    name: 'NGC 1427A Cluster Feeder',
    nameZh: 'NGC 1427A 团簇潮汐畸变',
    type: 'Irregular Galaxy',
    typeZh: '不规则星系',
    icon: '🌌',
    confidence: 94.2,
    features: ['Asymmetric tidal tails', 'Chaotic starburst clusters', 'High gas velocity'],
    featuresZh: ['不对称潮汐剥离尾迹', '剧烈混沌星暴区', '高弥散气体动力学'],
    classificationScores: [
      { label: 'Spiral Galaxy', labelZh: '旋涡星系', score: 3.1 },
      { label: 'Elliptical Galaxy', labelZh: '椭圆星系', score: 2.7 },
      { label: 'Irregular / Merger', labelZh: '不规则/并合星系', score: 94.2 },
    ],
  },
  {
    id: 'exoplanet',
    name: 'TESS Sector 44 Curve',
    nameZh: 'TESS 巡天 44 区光变数据',
    type: 'Exoplanet Transit',
    typeZh: '系外行星凌日候选',
    icon: '🪐',
    confidence: 99.1,
    features: ['U-shaped periodic dip', 'Consistent duration (3.2h)', 'Low stellar noise'],
    featuresZh: ['标准 U 型周期性通量下降', '稳定持续时长（3.2小时）', '低恒星色球层耀斑噪声'],
    classificationScores: [
      { label: 'Confirmed Exoplanet', labelZh: '高概率系外行星', score: 99.1 },
      { label: 'Eclipsing Binary', labelZh: '双星食掩假阳性', score: 0.7 },
      { label: 'Instrument Noise', labelZh: '仪器抖动噪声', score: 0.2 },
    ],
  },
];

export const AiClassifierSimulator: React.FC<Props> = ({ isZh = false }) => {
  const [selected, setSelected] = useState<Sample>(SAMPLES[0]);
  const [isScanning, setIsScanning] = useState(false);

  const handleSelect = (sample: Sample) => {
    setIsScanning(true);
    setSelected(sample);
    setTimeout(() => setIsScanning(false), 350);
  };

  return (
    <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between mb-3 text-xs uppercase tracking-wider text-gray-400">
        <span className="font-semibold text-white/90">
          {isZh ? '🤖 ExoMiner++ / CNN 深度模式识别' : '🤖 ExoMiner++ Deep Neural Classifier'}
        </span>
        <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-mono text-[11px]">
          ResNet-50
        </span>
      </div>

      {/* Target Selector Buttons */}
      <div className="grid grid-cols-4 gap-1.5 mb-3">
        {SAMPLES.map((s) => (
          <button
            key={s.id}
            onClick={() => handleSelect(s)}
            className={`p-2 rounded-xl text-center border transition-all ${
              selected.id === s.id
                ? 'bg-purple-600/30 border-purple-400 text-white shadow-md'
                : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <div className="text-xl mb-0.5">{s.icon}</div>
            <div className="text-[10px] font-medium truncate">
              {isZh ? s.typeZh.split('')[0] + s.typeZh.split('')[1] : s.type.split(' ')[0]}
            </div>
          </button>
        ))}
      </div>

      {/* Scanning Viewport */}
      <div className="relative h-44 w-full bg-black/80 rounded-xl border border-white/10 overflow-hidden flex flex-col justify-between p-4">
        {/* Scanning laser beam overlay */}
        {isScanning && (
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] animate-data-flow" />
        )}

        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span>{selected.icon}</span>
              <span>{isZh ? selected.nameZh : selected.name}</span>
            </div>
            <div className="text-[11px] text-purple-300 font-mono mt-0.5">
              {isZh ? '目标类别：' + selected.typeZh : 'Category: ' + selected.type}
            </div>
          </div>

          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-mono border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {selected.confidence}%
          </div>
        </div>

        {/* Neural Extracted Features */}
        <div className="bg-white/5 rounded-lg p-2 border border-white/5">
          <div className="text-[10px] uppercase font-mono text-gray-400 mb-1 flex items-center gap-1">
            <Scan className="w-3 h-3 text-purple-400" />
            {isZh ? '已提取特征嵌入向量：' : 'Extracted Feature Embeddings:'}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {(isZh ? selected.featuresZh : selected.features).map((feat, idx) => (
              <span key={idx} className="text-[10px] bg-purple-500/15 text-purple-200 px-2 py-0.5 rounded-md">
                • {feat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Probability Distribution */}
      <div className="mt-3 bg-black/40 border border-white/5 rounded-xl p-3 space-y-2">
        <div className="text-[11px] text-gray-400 font-mono flex justify-between">
          <span>{isZh ? 'Softmax 置信度预测概率' : 'Softmax Class Probabilities'}</span>
          <span className="text-purple-400">{isZh ? '自动筛选完成' : 'Inference: 14ms'}</span>
        </div>

        {selected.classificationScores.map((score, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-gray-300">{isZh ? score.labelZh : score.label}</span>
              <span className="font-mono text-purple-300">{score.score}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                style={{ width: `${score.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Human-in-the-Loop note */}
      <div className="mt-3 text-[11px] text-amber-300/90 bg-amber-500/10 border border-amber-500/20 rounded-xl p-2.5 flex items-start gap-2">
        <AlertCircle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
        <span>
          {isZh
            ? '科学铁律：AI 负责在海量 PB 级巡天图像中快速筛选模式，最终由人类天文学家进行光谱验证与科学定论。'
            : 'Scientific Rule: AI processes petabytes of telescope data to flag patterns; human astrophysicists verify evidence before official discovery.'}
        </span>
      </div>
    </div>
  );
};
