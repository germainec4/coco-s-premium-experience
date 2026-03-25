import philosophy1 from "@/assets/philosophy-1.jpg";
import philosophy2 from "@/assets/philosophy-2.jpg";
import philosophy3 from "@/assets/philosophy-3.jpg";

const pillars = [
  {
    title: "L'Héritage",
    description: "Chaque plat est le reflet d'un savoir-faire artisanal transmis de génération en génération.",
    image: philosophy1,
  },
  {
    title: "L'Excellence Sensorielle",
    description: "Une palette infinie d'épices et de saveurs, soigneusement dosées pour chaque création.",
    image: philosophy2,
  },
  {
    title: "Le Partage",
    description: "Derrière chaque assiette, nous croyons en la puissance de la table et des moments partagés.",
    image: philosophy3,
  },
];

const PhilosophySection = () => {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground italic mb-4">
            Derrière Chaque Assiette.
          </h2>
          <p className="text-muted-foreground font-body text-base max-w-lg mx-auto leading-relaxed">
            Notre philosophie est simple : la vraie qualité naît d'un dévouement aux traditions 
            et de la puissance des moments partagés.
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
