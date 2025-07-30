import React from "react";
import { HomeSectionProps } from "./home-types";
import "../../../tailwind/components/home/home.css";

const Home: React.FC<HomeSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="home-section">
      <h1 className="home-title">{title}</h1>
      {subtitle && <p className="home-subtitle">{subtitle}</p>}
    </section>
  );
};

export default Home;
