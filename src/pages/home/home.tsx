import { useRef } from "react";
import Navbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import ExperienceSection from "../../components/Experiencesection/Experiencesection";
import SocialSection from "../../components/Socialsection/Socialsection";
import Footer from "../../components/Footer/Footer";
import "../../index.css";

export default function Home() {
  const experiencesRef = useRef<HTMLElement | null>(null);

  const handleScrollToExperiences = () => {
    experiencesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0e0b07] min-h-screen">
      <Navbar />
      <main>
        <Hero onScrollToExperiences={handleScrollToExperiences} />
        <ExperienceSection sectionRef={experiencesRef} />
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
}