import { Term } from '@/lib/terms';
import { TemplateType } from './types';

// 导入所有模板组件
import CoachRunnerCard from './coach-runner-card';
import ContentCreatorCard from './content-creator-card';
import EducatorCard from './educator-card';
import PersonalCoachCard from './personal-card-coach';
import PersonalCard from './personal-card';
import TeacherCard from './teacher-card';
import TechExpertCard from './tech-expert-card';
import TechLeaderCard from './tech-leader-card';
import AmoCard from './amo';
import ShengjianCard from './shengjian';

// 创建类型安全的模板映射
export const templates: Record<TemplateType, React.ComponentType<{term: Term}>> = {
  [TemplateType.COACH_RUNNER]: CoachRunnerCard,
  [TemplateType.CONTENT_CREATOR]: ContentCreatorCard,
  [TemplateType.EDUCATOR]: EducatorCard,
  [TemplateType.PERSONAL_COACH]: PersonalCoachCard,
  [TemplateType.PERSONAL]: PersonalCard,
  [TemplateType.TEACHER]: TeacherCard,
  [TemplateType.TECH_EXPERT]: TechExpertCard,
  [TemplateType.TECH_LEADER]: TechLeaderCard,
  [TemplateType.AMO]: AmoCard
};

export {
  CoachRunnerCard,
  ContentCreatorCard,
  EducatorCard,
  PersonalCoachCard,
  PersonalCard,
  TeacherCard,
  TechExpertCard,
  TechLeaderCard,
  AmoCard,
  ShengjianCard
};
