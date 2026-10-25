import { BRAND } from "./constants";
import CreativeDivider from "./components/CreativeDivider";
import HeroSection from "./components/HeroSection";
import OriginStorySection from "./components/OriginStorySection";
import FlavoursSection from "./components/FlavoursSection";
import FamilySection from "./components/FamilySection";
import CtaSection from "./components/CtaSection";

export default function OurStoryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden relative" style={{ backgroundColor: BRAND.cream, color: BRAND.ink }}>
      <HeroSection />
      
      
      <OriginStorySection />
      
      
      <FlavoursSection />
      
      
      <FamilySection />
      
      
      <CtaSection />
    </main>
  );
}