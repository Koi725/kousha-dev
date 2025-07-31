import { ExperienceItemType } from "./experience-types";
import {
  FaBriefcase,
  FaCertificate,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";

export const experienceData: ExperienceItemType[] = [
  {
    id: "professional-background",
    icon: <FaBriefcase className="experience-icon text-yellow-400" />,
  },
  {
    id: "certifications",
    icon: <FaCertificate className="experience-icon text-purple-400" />,
  },
  {
    id: "skills",
    icon: <FaTools className="experience-icon text-sky-400" />,
  },
  {
    id: "portfolio",
    icon: <FaLaptopCode className="experience-icon text-green-400" />,
  },
];
