import HeroSection from "./components/HeroSection";
import HistoryTimeline from "./components/HistoryTimeline";
import QuotesCarousel from "./components/QuotesCarousel";
import LoveLetterSection from "./components/LoveLetterSection";
import PoemSection from "./components/PoemSection";
import KumaoniSection from "./components/KumaoniSection";
import PledgeSection from "./components/PledgeSection";
import Footer from "./components/Footer";
import FloatingElements from "./components/FloatingElements";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-warm-white selection:bg-rose-200 selection:text-deep-rose">
      {/* Dynamic Background Elements */}
      <FloatingElements />
      
      {/* Sections */}
      <HeroSection />
      
      <div className="relative z-10 space-y-0">
        <HistoryTimeline />
        <QuotesCarousel />
        <LoveLetterSection />
        <PoemSection />
        <KumaoniSection />
        {/* <PledgeSection /> */}
      </div>
      
      <Footer />
    </main>
  );
}
