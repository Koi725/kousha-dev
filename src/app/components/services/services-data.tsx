import { ServiceType } from "./services-types";
import {
  FaCode,
  FaComments,
  FaCogs,
  FaWrench,
  FaRocket,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";

export const servicesData: ServiceType[] = [
  {
    id: "web",
    title: "Web Developing",
    description: "Building modern, fast, and scalable web applications.",
    icon: <FaCode className="service-icon icon-web" />,
  },
  {
    id: "consulting",
    title: "Consulting",
    description:
      "Providing guidance for digital strategy, startups, and businesses.",
    icon: <FaComments className="service-icon icon-consulting" />,
  },
  {
    id: "automation",
    title: "Creating Automation Tools",
    description:
      "Building custom tools and bots to automate tasks and workflows.",
    icon: <FaCogs className="service-icon icon-automation" />,
  },
  {
    id: "penetration",
    title: "Penetration Testing",
    description:
      "Security testing and vulnerability assessments for applications.",
    icon: <FaShieldAlt className="service-icon icon-cyber" />,
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description:
      "Building intelligent systems using modern ML frameworks.",
    icon: <FaRocket className="service-icon icon-ai" />,
  },
  {
    id: "problem-solving",
    title: "Tech Problem Solving",
    description:
      "Diagnosing and resolving complex technical issues efficiently.",
    icon: <FaLightbulb className="service-icon icon-problem" />,
  },
];
