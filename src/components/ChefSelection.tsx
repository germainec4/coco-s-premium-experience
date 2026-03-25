import { useState } from "react";
import { Utensils } from "lucide-react";

const menuCategories = [
  {
    name: "PLATS PRINCIPAUX",
    items: [
      { name: "Canard Laqué, Mangue Rôtie, Purée de Patate Douce", price: "€32" },
      { name: "Bar Grillé, Beurre Blanc au Citron & Asperges Vertes", price: "€36" },
      { name: "Risotto aux Cèpes & Truffe Noire", price: "€34" },
      { name: "Filet de Bœuf, Sauce au Poivre & Gratin Dauphinois", price: "€42" },
      { name: "Homard Rôti, Bisque Crémeuse & Tagliatelles Fraîches", price: "€48" },
    ],
  },
  {
    name: "ENTRÉES",
    items: [
      { name: "Carpaccio de Saint-Jacques, Agrumes & Huile de Noisette", price: "€18" },
      { name: "Velouté de Châtaignes, Crème de Truffe", price: "€16" },
      { name: "Tartare de Saumon, Avocat & Sésame Grillé", price: "€19" },
    ],
  },
  {
    name: "DESSERTS",
    items: [
      { name: "Soufflé au Chocolat Grand Cru, Crème Anglaise", price: "€14" },
      { name: "Tarte Tatin, Glace Vanille de Madagascar", price: "€13" },
      { name: "Panna Cotta Passion, Coulis de Framboise", price: "€12" },
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
          Sélection
          <br />
          du Chef.
        </h2>
        <p className="text-gold/70 font-body text-base leading-relaxed mb-8 max-w-sm">
          Une sélection raffinée de créations saisonnières, où les techniques traditionnelles 
          rencontrent les plus belles récoltes locales.
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
