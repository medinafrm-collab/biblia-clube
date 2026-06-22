import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Footer } from "@/components/Footer";
import { FutureSection } from "@/components/FutureSection";
import { GamesSection } from "@/components/GamesSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PremiumSection } from "@/components/PremiumSection";
import { Quiz } from "@/components/Quiz";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <AdPlaceholder />
        <Quiz />
        <GamesSection />
        <PremiumSection />
        <FutureSection />
      </main>
      <Footer />
    </>
  );
}
