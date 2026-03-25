import { ShoppingBasket } from "lucide-react";

const AperoMarche = () => {
  return (
    <section className="bg-forest py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/30 mb-8">
            <ShoppingBasket className="w-7 h-7 text-gold" />
          </div>
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Chaque Samedi
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream italic mb-6">
            L'Apéro du Marché.
          </h2>
          <p className="text-gold/70 font-body text-base md:text-lg leading-relaxed mb-4 max-w-xl mx-auto">
            Mathieu arpente le marché de Chamonix et offre, sur consommation, 
            les produits locaux dénichés sur son comptoir.
          </p>
          <p className="text-gold/50 font-serif text-lg italic max-w-md mx-auto mb-10">
            Un moment pour se retrouver et fédérer les bons vivants !
          </p>
          <div className="gold-divider mb-10" />
          <a href="#contact" className="btn-outline-gold">
            Nous Rejoindre Samedi
          </a>
        </div>
      </div>
    </section>
  );
};

export default AperoMarche;
