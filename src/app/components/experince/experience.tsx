"use client";
import { useTranslations } from "next-intl";
import { experienceData } from "./experience-data";
import "@/tailwind/components/experience/experience.css";

const Experience = () => {
  const t = useTranslations("experience");

  return (
    <section className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">{t("title")}</h2>

        <div className="experience-grid">
          {experienceData.map((item) => (
            <div key={item.id} className="experience-card">
              {item.icon}
              <h3 className="experience-card-title">{t(`items.${item.id}.title`)}</h3>
              <p className="experience-card-desc">{t(`items.${item.id}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
