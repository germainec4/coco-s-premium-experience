import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";

const dishes = [
  { name: "Gratin Dauphinois", image: dish1 },
  { name: "Saucisse au Couteau", image: dish2 },
  { name: "Plat Mijoté du Jour", image: dish3 },
  { name: "Tarte aux Fruits Maison", image: dish4 },
];

const SignatureDishes = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-2">Tout est maison</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-bold tracking-tight">
              Les Classiques<br />de Coco.
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center transition-colors hover:bg-foreground hover:text-cream"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center transition-colors hover:bg-foreground hover:text-cream"
              aria-label="Suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {dishes.map((dish, i) => (
            <div
              key={dish.name}
              className="flex-shrink-0 w-64 md:w-72 snap-start group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-sm aspect-square mb-4">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === i ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-forest-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-display text-lg text-foreground text-center">{dish.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
