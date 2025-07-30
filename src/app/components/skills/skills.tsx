"use client";
import { skillsData } from "./skills-data";
import { useTranslations } from "next-intl";
import "@/tailwind/components/skills/skills.css";

const Skills = () => {
  const t = useTranslations("skills");

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">{t("title")}</h2>

        <div className="skills-grid">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;

            return (
              <div key={index} className="skill-item">
                <IconComponent className={`skill-icon ${skill.className}`} />
                <span className="skill-name">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
