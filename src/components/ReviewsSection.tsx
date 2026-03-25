import { Star } from "lucide-react";

const reviews = [
  {
    text: "LE SERVICE ÉTAIT EXCELLENT, LES SERVEURS TRÈS ATTENTIONNÉS ET ACCUEILLANTS. DU DÉBUT À LA FIN, LE REPAS ÉTAIT DÉLICIEUX.",
    author: "Marie L.",
    rating: 5,
    source: "Google",
  },
  {
    text: "SI VOUS CHERCHEZ UN RESTAURANT GASTRONOMIQUE, VOUS NE POUVEZ PAS ÊTRE DÉÇU. LES SAVEURS SONT INCROYABLES ET LE CADRE MAGNIFIQUE.",
    author: "Pierre D.",
    rating: 5,
    source: "Google",
  },
  {
    text: "UNE EXPÉRIENCE CULINAIRE UNIQUE. LE CHEF MAÎTRISE PARFAITEMENT L'ART DE SUBLIMER LES PRODUITS DE SAISON.",
    author: "Sophie M.",
    rating: 5,
    source: "Google",
  },
  {
    text: "LE CADRE EST SOMPTUEUX ET LA CUISINE RAFFINÉE. ON S'Y SENT COMME DANS UN COCON DE SAVEURS.",
    author: "Jean-Marc R.",
    rating: 5,
    source: "TripAdvisor",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="bg-cream py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-bold leading-tight">
              Ce Que Disent<br />Nos Invités.
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-cream-dark rounded-sm px-6 py-4">
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-display text-2xl text-foreground font-bold">4.8/5</span>
            </div>
            <span className="text-muted-foreground font-body text-xs uppercase tracking-wider">Google</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-cream-dark p-6 rounded-sm border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-xs text-foreground leading-relaxed mb-6 tracking-wide">
                {review.text}
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-display text-sm text-foreground">{review.author}</p>
                <p className="text-muted-foreground font-body text-xs">{review.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
