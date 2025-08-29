import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { WineCollection } from "./components/WineCollection";
import { WineriesSection } from "./components/WineriesSection";
import { SustainabilitySection } from "./components/SustainabilitySection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WineCollection />
        <WineriesSection />
        <SustainabilitySection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}