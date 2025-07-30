import { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiDjango, SiMysql, SiNextdotjs } from "react-icons/si";

export type SkillType = {
  name: string;
  icon: IconType;
  className: string;
};

export const skillsData: SkillType[] = [
  { name: "React", icon: FaReact, className: "react" },
  { name: "Next.js", icon: SiNextdotjs, className: "next" },
  { name: "Tailwind CSS", icon: SiTailwindcss, className: "tailwind" },
  { name: "JavaScript", icon: FaJsSquare, className: "js" },
  { name: "TypeScript", icon: SiTypescript, className: "ts" },
  { name: "Python", icon: FaPython, className: "python" },
  { name: "Django", icon: SiDjango, className: "django" },
  { name: "MySQL", icon: SiMysql, className: "mysql" },
  { name: "Node.js", icon: FaNodeJs, className: "node" },
  { name: "Java", icon: FaJava, className: "java" },
  { name: "HTML", icon: FaHtml5, className: "html" },
  { name: "CSS", icon: FaCss3Alt, className: "css" },
  { name: "Git", icon: FaGitAlt, className: "git" },
  { name: "Bootstrap", icon: FaBootstrap, className: "bootstrap" },
];
