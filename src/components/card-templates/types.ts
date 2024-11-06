import { Term } from '@/lib/terms';

export interface CardTemplateProps {
  term: Term;
  className?: string;
}

export enum TemplateType {
  DEFAULT = 'default',
  MINIMAL = 'minimal',
  MODERN = 'modern',
  CLASSIC = 'classic'
}
