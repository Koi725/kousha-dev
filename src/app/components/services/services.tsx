"use client";
import { servicesData } from "./services-data";
import { useTranslations } from "next-intl";
import "@/tailwind/components/services/services.css";

const Services = () => {
  const t = useTranslations("services");

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">{t("title")}</h2>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-box">
              {service.icon}
              <h3 className="service-title">{t(`${service.id}.title`)}</h3>
              <p className="service-desc">{t(`${service.id}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
