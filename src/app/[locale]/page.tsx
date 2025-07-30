import Navbar from "@/app/components/navbar/navbar";
import Home from "@/app/components/home/home";
import About from "@/app/components/about/about";
import Skills from "@/app/components/skills/skills";
import SkillsProgress from "@/app/components/skills/skills-progress/skills-progress";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="space-y-1">
        <Home />
        <About />
        <Skills />
        <SkillsProgress />
      </main>
    </>
  );
};

export default HomePage;
