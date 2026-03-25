import { Star } from "lucide-react";

const reviews = [
  {
    text: "ON SE SENT COMME À LA MAISON ! LES PLATS SONT GÉNÉREUX, FAITS MAISON, ET L'ACCUEIL DE MATHIEU EST INCROYABLE. UNE VRAIE PÉPITE À CHAMONIX.",
    author: "Marie L.",
    rating: 5,
    source: "Google",
  },
  {
    text: "LE BRUNCH DU DIMANCHE EST UNE TUERIE ! TOUT EST FRAIS ET MAISON. ON Y RETOURNE CHAQUE WEEK-END DEPUIS QU'ON A DÉCOUVERT COCO.",
    author: "Pierre D.",
    rating: 5,
    source: "Google",
  },
  {
    text: "LE GRATIN DAUPHINOIS EST LE MEILLEUR QUE J'AI JAMAIS MANGÉ. LA DÉCO EST SOIGNÉE, L'AMBIANCE CHALEUREUSE. UN VRAI COUP DE CŒUR.",
    author: "Sophie M.",
    rating: 5,
    source: "Google",
  },
  {
    text: "L'APÉRO DU MARCHÉ LE SAMEDI EST UN CONCEPT GÉNIAL ! MATHIEU PARTAGE SES TROUVAILLES DU MARCHÉ DE CHAMONIX. CONVIVIALITÉ AU TOP.",
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
