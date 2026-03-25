import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SignatureDishes from "@/components/SignatureDishes";
import ChefSelection from "@/components/ChefSelection";
import PhilosophySection from "@/components/PhilosophySection";
import AperoMarche from "@/components/AperoMarche";
import ChefQuote from "@/components/ChefQuote";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SignatureDishes />
      <ChefSelection />
      <PhilosophySection />
      <AperoMarche />
      <ChefQuote />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;
