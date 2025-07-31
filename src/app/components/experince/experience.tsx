"use client";
import { useTranslations } from "next-intl";
import { experienceData } from "./experience-data";
import "@/tailwind/components/experince/experience.css";

const Experience = () => {
  const t = useTranslations("experience");

  return (
    <section className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">{t("title")}</h2>

        <div className="experience-list">
          {experienceData.map((item, index) => (
            <div key={item.id} className="experience-item">
              <div className="experience-icon-wrapper">{item.icon}</div>
              <div className="experience-texts">
                <h3 className="experience-item-title">{t(`items.${index}.title`)}</h3>
                <p className="experience-item-desc">{t(`items.${index}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
