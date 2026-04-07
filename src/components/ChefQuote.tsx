import chefImg from "@/assets/chef-mathieu.jpg";
import restaurantImg from "@/assets/restaurant-exterior.jpg";

const ChefQuote = () => {
  return (
    <section id="chef" className="bg-cream-dark py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Quote */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <span className="font-display text-8xl text-accent/20 absolute -top-10 -left-4">"</span>
              <blockquote className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed pl-8">
                Coco, c'est le surnom de ma grand-mère Ch'ti. Ses recettes généreuses, 
                ses plats mijotés, cette convivialité du Nord… Tout ça m'a suivi jusqu'ici, 
                à Chamonix. Quand les traditions d'enfance ont tellement de sens, 
                elles finissent par devenir un lieu où tout le monde se retrouve.
              </blockquote>
            </div>
            <div className="mt-8 pl-8">
              <p className="font-display text-lg text-foreground font-semibold">Mathieu</p>
              <p className="text-muted-foreground font-body text-sm">Gérant de Coco Chamonix</p>
            </div>
          </div>

          {/* Images */}
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-sm">
              <img
                src={chefImg}
                alt="Mathieu, patron de Coco"
                loading="lazy"
                width={640}
                height={800}
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-sm mt-8">
              <img
                src={restaurantImg}
                alt="Restaurant Coco à Chamonix"
                loading="lazy"
                width={800}
                height={512}
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefQuote;
