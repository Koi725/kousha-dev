import Navbar from "@/app/components/navbar/navbar";
import Home from "@/app/components/home/home";
import About from "@/app/components/about/about";
import Skills from "@/app/components/skills/skills";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="space-y-1"> 
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
};

export default HomePage;
