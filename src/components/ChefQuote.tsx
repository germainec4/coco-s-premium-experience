import chefImg from "@/assets/chef.jpg";
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
                Je suis convaincu que la vraie émotion en cuisine réside dans la simplicité 
                et la qualité des ingrédients. Chaque plat est un voyage, chaque saveur une 
                histoire qui mérite d'être racontée. Mon objectif est de créer une expérience 
                inoubliable, pas seulement un repas.
              </blockquote>
            </div>
            <div className="mt-8 pl-8">
              <p className="font-display text-lg text-foreground font-semibold">Antoine Nguyen</p>
              <p className="text-muted-foreground font-body text-sm">Chef Exécutif</p>
            </div>
          </div>

          {/* Images */}
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-sm">
              <img
                src={chefImg}
                alt="Chef Antoine Nguyen"
                loading="lazy"
                width={640}
                height={800}
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-sm mt-8">
              <img
                src={restaurantImg}
                alt="Restaurant Coco extérieur"
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
