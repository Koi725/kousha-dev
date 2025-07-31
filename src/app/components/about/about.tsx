import { FaReact, FaPython } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { useTranslations } from "next-intl";
import { FaUserSecret, FaShieldAlt } from "react-icons/fa";
import { SiJavascript, SiMysql } from "react-icons/si";
import "@/tailwind/components/about/about.css";

const About = () => {
  const t = useTranslations("about");

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-left">
          <h2 className="about-title">{t("title")}</h2>
          <h3 className="about-subtitle">{t("subtitle")}</h3>
          <p className="about-description">{t("description")}</p>

          <div className="about-icons">
            <FaReact className="about-icon react" title="React" />
            <SiNextdotjs className="about-icon nextjs" title="Next.js" />
            <SiTailwindcss className="about-icon tailwind" title="Tailwind CSS" />
            <FaPython className="about-icon python" title="Python" />
            <SiDjango className="about-icon django" title="Django" />
            <SiJavascript className="about-icon javascript" title="JavaScript" />
            <SiMysql className="about-icon mysql" title="MySQL" />
            <FaUserSecret className="about-icon cybersecurity" title="Cybersecurity" />
            <FaShieldAlt className="about-icon shield" title="Security Shield" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
