
export enum SlideType {
  INTRO = 'INTRO',
  CRITIQUE = 'CRITIQUE',
  UNDERSTANDING = 'UNDERSTANDING',
  MEMORY = 'MEMORY',
  REPETITION = 'REPETITION',
  AI_LAB = 'AI_LAB'
}

export interface SlideData {
  id: string;
  type: SlideType;
  title: string;
  subtitle?: string;
}
