import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PerformanceSection from "../components/PerformanceSection";
import CameraShowcase from "../components/CameraShowcase";
import DesignSection from "../components/DesignSection";
import FeaturesGrid from "../components/FeaturesGrid";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-background)] overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <PerformanceSection />
        <CameraShowcase />
        <DesignSection />
        <FeaturesGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
