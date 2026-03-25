import { useState } from "react";
import { Utensils } from "lucide-react";

const menuCategories = [
  {
    name: "PLATS DU JOUR",
    items: [
      { name: "Plat Mijoté du Jour — Recette de Grand-Mère", price: "€16" },
      { name: "Gratin Dauphinois Maison", price: "€14" },
      { name: "Saucisse au Couteau, Purée Maison", price: "€17" },
      { name: "Blanquette de Veau à l'Ancienne", price: "€18" },
      { name: "Pot-au-Feu Traditionnel", price: "€16" },
    ],
  },
  {
    name: "PETIT-DÉJEUNER",
    items: [
      { name: "P'tit Déj Français — Tartines, Confiture Maison, Viennoiseries", price: "€12" },
      { name: "English Breakfast — Œufs, Bacon, Toast, Beans", price: "€15" },
      { name: "Granola Maison, Yaourt & Fruits Frais", price: "€10" },
    ],
  },
  {
    name: "BRUNCH DU DIMANCHE",
    items: [
      { name: "Formule Brunch Complète — Sucré & Salé", price: "€28" },
      { name: "Œufs Bénédictine, Saumon Fumé", price: "€18" },
      { name: "Pancakes Maison, Sirop d'Érable & Fruits", price: "€14" },
      { name: "Croque-Madame Gourmand", price: "€15" },
    ],
  },
  {
    name: "DESSERTS",
    items: [
      { name: "Tarte aux Fruits de Saison Maison", price: "€9" },
      { name: "Crème Brûlée à la Vanille", price: "€8" },
      { name: "Moelleux au Chocolat, Crème Anglaise", price: "€10" },
      { name: "Tarte au Sucre Ch'ti", price: "€8" },
    ],
  },
];

const ChefSelection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="grid md:grid-cols-2 min-h-[700px]">
      {/* Left - Dark green */}
      <div className="bg-forest p-10 md:p-16 lg:p-20 flex flex-col justify-center">
        <h2 className="font-display text-4xl md:text-5xl text-cream italic mb-4">
          La Carte
          <br />
          de Coco.
        </h2>
        <p className="text-gold/70 font-body text-base leading-relaxed mb-8 max-w-sm">
          Des recettes de grand-mère, généreuses et 100% maison. 
          Petit-déjeuner tous les jours, et brunch le dimanche jusqu'à 15h !
        </p>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`font-body text-xs tracking-[0.15em] uppercase px-4 py-2 border rounded-sm transition-all duration-300 ${
                activeCategory === i
                  ? "bg-gold text-forest-dark border-gold"
                  : "border-gold/30 text-gold/60 hover:border-gold hover:text-gold"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <a href="#contact" className="btn-outline-gold self-start">
          Voir la Carte Complète
        </a>
      </div>

      {/* Right - Cream with menu items */}
      <div className="bg-cream-dark p-10 md:p-16 lg:p-20 flex flex-col justify-center">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-display text-2xl text-foreground font-semibold">
            {menuCategories[activeCategory].name}
          </h3>
          <Utensils className="w-6 h-6 text-accent" />
        </div>

        <div className="space-y-6">
          {menuCategories[activeCategory].items.map((item) => (
            <div key={item.name} className="group">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-lg text-foreground group-hover:text-accent transition-colors duration-300 flex-shrink-0 max-w-[80%]">
                  {item.name}
                </span>
                <span className="menu-item-line" />
                <span className="font-display text-lg text-accent font-semibold flex-shrink-0">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefSelection;
