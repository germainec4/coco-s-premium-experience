import philosophy1 from "@/assets/philosophy-1.jpg";
import philosophy2 from "@/assets/philosophy-2.jpg";
import philosophy3 from "@/assets/philosophy-3.jpg";

const pillars = [
  {
    title: "L'Héritage Ch'ti",
    description: "Les recettes de Grand-Mère Coco, transmises avec amour. Plats mijotés, gratins généreux, tartes aux fruits… Madeleine de Proust pour Mathieu.",
    image: philosophy1,
  },
  {
    title: "Tout est Maison",
    description: "Du petit-déjeuner au dessert, chaque plat est préparé sur place avec des produits frais. Pas de raccourci, que du fait maison.",
    image: philosophy2,
  },
  {
    title: "La Convivialité",
    description: "Un lieu de vie, d'échange, de souvenirs. L'esprit du Nord se retrouve dans l'accueil chaleureux et les plats copieux à partager.",
    image: philosophy3,
  },
];

const PhilosophySection = () => {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground italic mb-4">
            L'Esprit Coco.
          </h2>
          <p className="text-muted-foreground font-body text-base max-w-lg mx-auto leading-relaxed">
            Quand les traditions d'enfance ont tellement de sens et de valeur, 
            qu'elles se concrétisent en un restaurant où tout le monde se retrouve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm aspect-[4/5] mb-6">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  loading="lazy"
                  width={512}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2 tracking-wide uppercase text-center">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm text-center leading-relaxed max-w-xs mx-auto">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
