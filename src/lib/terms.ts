export interface Term {
  id: number;
  term: string;
  definition: string;
  tip: string;
  color: string;
  bgColor: string;
}

export const terms: Term[] = [
  {
    id: 139,
    term: "内聚性自我",
    definition: "内聚性自我反映了一个人能够在心理上维持一致和稳定的自我形象的程度。内聚性自我较高的人，能更好地应对压力和情绪波动；而内聚性自我较低的人，在外界冲击下更容易陷入自我瓦解。",
    tip: "在遭遇打击时，你可以试着把它当作是一次成长的机会，问问自己：从这次经历中我能学到什么？，并积极寻求支持，保持内在的平衡。",
    color: "#ff8b3d",
    bgColor: "#fff6e9"
  },
  {
    id: 137,
    term: "艾瑞克·弗洛姆",
    definition: "弗洛姆是著名的社会心理学家，他认为，人在面对过多的个人自由时，可能会主动放弃自由，选择服从外部权威或盲从集体。",
    tip: "无论从事什么行业，你都可以试着寻找能够发挥个人创造力的机会，思考问题的独特解决方案，或者在工作中尝试新的方法，让自己更积极地参与到日常活动中。",
    color: "#006d77",
    bgColor: "#f0f9f6"
  }
];

export function getTodayTerm(): Term {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  return terms[dayOfYear % terms.length];
}
