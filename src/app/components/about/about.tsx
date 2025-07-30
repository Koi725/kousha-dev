import { FaReact, FaPython } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { useTranslations } from "next-intl";
import "@/tailwind/components/about/about.css";

const About = () => {
  const t = useTranslations("about");

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left">
          <h2 className="about-title">{t("title")}</h2>
          <h3 className="about-subtitle">{t("subtitle")}</h3>
          <p className="about-description">{t("description")}</p>

          <div className="about-icons">
            <FaReact className="about-icon" title="React" />
            <SiNextdotjs className="about-icon" title="Next.js" />
            <SiTailwindcss className="about-icon" title="Tailwind CSS" />
            <FaPython className="about-icon" title="Python" />
            <SiDjango className="about-icon" title="Django" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
