import { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaLinux,
  FaJsSquare,
  FaCode,
  FaTerminal,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

export type SkillType = {
  name: string;
  icon: IconType;
  className: string;
};

export const skillsData: SkillType[] = [
  { name: "React", icon: FaReact, className: "react" },
  { name: "Next.js", icon: SiNextdotjs, className: "next" },
  { name: "Tailwind CSS", icon: SiTailwindcss, className: "tailwind" },
  { name: "JavaScript", icon: FaJsSquare, className: "javascript" },
  { name: "TypeScript", icon: SiTypescript, className: "ts" },
  { name: "Python", icon: FaPython, className: "python" },
  { name: "Django", icon: SiDjango, className: "django" },
  { name: "MySQL", icon: SiMysql, className: "mysql" },
  { name: "PostgreSQL", icon: SiPostgresql, className: "sql" },
  { name: "Node.js", icon: FaNodeJs, className: "node" },
  { name: "Java", icon: FaJava, className: "java" },
  { name: "Git", icon: FaGitAlt, className: "git" },
  { name: "Linux", icon: FaLinux, className: "linux" },
  // { name: "C#", icon: FaCode, className: "csharp" }, // جایگزین پیشنهادی
  { name: "C++", icon: FaCode, className: "cpp" },
  { name: "Bash", icon: FaTerminal, className: "bash" },
];
