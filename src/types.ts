export interface Section {
  heading: string;
  headingZh: string;
  content: string;
  contentZh: string;
  graphic?: 'transit' | 'blackhole' | 'waves' | 'ai' | 'wavelength' | 'telescope';
}

export interface QuizQuestion {
  question: string;
  questionZh: string;
  options: string[];
  optionsZh: string[];
  correctIndex: number;
  explanation: string;
  explanationZh: string;
}

export interface Topic {
  id: string;
  title: string;
  titleZh: string;
  subtitle: string;
  subtitleZh: string;
  gameLink?: string;
  gameName?: string;
  gameNameZh?: string;
  tag: string;
  tagZh: string;
  color: string;
  accentGradient: string;
  sections: Section[];
  quiz: QuizQuestion;
}
