import React from "react";
import { HomeSectionProps } from "./home-types";
import "../../../tailwind/components/home/home.css";
import { FaChevronDown } from "react-icons/fa";

const Home: React.FC<HomeSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="home-section">
      <h1 className="home-title">{title}</h1>
      {subtitle && <p className="home-subtitle">{subtitle}</p>}
      <FaChevronDown className="scroll-down-icon" />
    </section>
  );
};

export default Home;
