"use client";

import { skillsProgressData } from "./skills-progress-data";
import { useTranslations } from "next-intl";
import "@/tailwind/components/skills/skills-progress.css";

const SkillsProgress = () => {
  const t = useTranslations("skillsProgress");

  return (
    <section className="skills-progress-section">
      <div className="skills-progress-container">
        <h2 className="skills-progress-title">{t("title")}</h2>
        <div className="skills-progress-grid">
          {skillsProgressData.map((skill, index) => (
            <div key={index} className="skill-bar-item">
              <div className="skill-bar-header">
                <span className="skill-bar-name">{skill.name}</span>
                <span className="skill-bar-percent">{skill.percent}%</span>
              </div>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.percent}%`, backgroundColor: skill.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsProgress;
