import heroBg from "@/assets/hero-bg.jpg";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Restaurant Coco à Chamonix"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-forest-dark/30" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 flex items-end justify-between h-full pb-24">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Chamonix — Cuisine Maison
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95] mb-8 italic">
            Les Recettes
            <br />
            <span className="not-italic">de Grand-Mère.</span>
          </h1>
          <p className="text-cream/70 font-body text-base md:text-lg max-w-md mb-8 leading-relaxed">
            Chez Coco, tout est maison. Des plats copieux, des recettes d'antan 
            et la convivialité du Nord — au cœur des Alpes.
          </p>
          <a href="#menu" className="btn-primary inline-block">
            Découvrir le Menu
          </a>
        </div>

        {/* Rating badge */}
        <div className="hidden lg:flex flex-col items-center bg-cream/10 backdrop-blur-sm border border-gold/30 rounded-sm px-6 py-5 mb-8">
          <div className="flex gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-cream font-display text-3xl font-bold">4.8/5</span>
          <span className="text-cream/60 font-body text-xs tracking-wider uppercase mt-1">Google Reviews</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
