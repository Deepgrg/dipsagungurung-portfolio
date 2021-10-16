import BenefitSection from "../components/BenefitSection";
import AboutMeSection from "../components/AboutMeSection";
import ProjectSection from "../components/ProjectSection";
import FooterSection from "../components/FooterSection";
import GradientText from "../components/GradientText";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="font-jugo font-medium text-gray-200 ">
      <div className="relative">
        <Navbar />
        <HeroSection />
        <GradientText />
        <BenefitSection />
        <ProjectSection />
        <AboutMeSection />
        <FooterSection />
      </div>
    </div>
  );
}
