export enum TemplateType {
  COACH_RUNNER = 'coach-runner',
  CONTENT_CREATOR = 'content-creator',
  EDUCATOR = 'educator',
  PERSONAL_COACH = 'personal-coach',
  PERSONAL = 'personal',
  TEACHER = 'teacher',
  TECH_EXPERT = 'tech-expert',
  TECH_LEADER = 'tech-leader',
  AMO = 'amo',
  SHENGJIAN = 'shengjian'
}

export const templateNames: Record<TemplateType, string> = {
  [TemplateType.PERSONAL]: '凯西',
  [TemplateType.CONTENT_CREATOR]: '丸子🍡',
  [TemplateType.TEACHER]: '梓悦',
  [TemplateType.AMO]: '墨啊',
  [TemplateType.COACH_RUNNER]: '多跃',
  [TemplateType.EDUCATOR]: '雨洪',
  [TemplateType.PERSONAL_COACH]: '橙子🍊',
  [TemplateType.TECH_EXPERT]: '老兮',
  [TemplateType.TECH_LEADER]: '西瓜',
  [TemplateType.SHENGJIAN]: '生姜'
};
