import { BRAND } from "./constants";
import CreativeDivider from "./components/CreativeDivider";
import HeroSection from "./components/HeroSection";
import OriginStorySection from "./components/OriginStorySection";
import FlavoursSection from "./components/FlavoursSection";
import FamilySection from "./components/FamilySection";
import CtaSection from "./components/CtaSection";

export default function OurStoryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden font-sans relative" style={{ backgroundColor: BRAND.cream, color: BRAND.ink }}>
      <HeroSection />
      <CreativeDivider />
      
      <OriginStorySection />
      <CreativeDivider />
      
      <FlavoursSection />
      <CreativeDivider />
      
      <FamilySection />
      <CreativeDivider />
      
      <CtaSection />
    </main>
  );
}