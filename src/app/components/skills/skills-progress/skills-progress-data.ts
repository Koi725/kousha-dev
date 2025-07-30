// skills-progress-data.ts
export type SkillProgressType = {
  name: string;
  percent: number;
  color: string;
};

export const skillsProgressData: SkillProgressType[] = [
  { name: "JavaScript", percent: 90, color: "#facc15" },
  { name: "Python", percent: 85, color: "#3b82f6" },
  { name: "Node.js", percent: 70, color: "#10b981" },
  { name: "React", percent: 90, color: "#38bdf8" },
  { name: "Django", percent: 85, color: "#16a34a" },
  { name: "SQL", percent: 90, color: "#f97316" },
  { name: "Cybersecurity", percent: 80, color: "#a855f7" },
];
