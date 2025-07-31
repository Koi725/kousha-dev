import { ExperienceItemType } from "./experience-types";
import {
  FaBriefcase,
  FaCertificate,
  FaBook,
  FaTools,
  FaLaptopCode
} from "react-icons/fa";

export const experienceData: ExperienceItemType[] = [
  {
    id: "professional-background",
    icon: <FaBriefcase className="experience-icon" />,
  },
  {
    id: "certifications",
    icon: <FaCertificate className="experience-icon" />,
  },
  {
    id: "competitions-research",
    icon: <FaBook className="experience-icon" />,
  },
  {
    id: "skills",
    icon: <FaTools className="experience-icon" />,
  },
  {
    id: "portfolio",
    icon: <FaLaptopCode className="experience-icon" />,
  },
];
