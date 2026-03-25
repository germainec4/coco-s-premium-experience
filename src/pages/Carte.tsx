import { Link } from "react-router-dom";
import { ArrowLeft, Utensils, Coffee, Sun, Cake } from "lucide-react";

const menuSections = [
  {
    icon: Utensils,
    title: "Plats du Jour",
    subtitle: "Les recettes de Grand-Mère Coco",
    items: [
      { name: "Plat Mijoté du Jour — Recette de Grand-Mère", price: "€16" },
      { name: "Gratin Dauphinois Maison", price: "€14" },
      { name: "Saucisse au Couteau, Purée Maison", price: "€17" },
      { name: "Blanquette de Veau à l'Ancienne", price: "€18" },
      { name: "Pot-au-Feu Traditionnel", price: "€16" },
      { name: "Burger Gourmand Maison, Potatoes Rôties", price: "€17" },
      { name: "Planche Charcuterie & Fromages", price: "€16" },
    ],
  },
  {
    icon: Coffee,
    title: "Petit-Déjeuner",
    subtitle: "Tous les jours de 8h à 11h",
    items: [
      { name: "P'tit Déj Français — Tartines, Confiture Maison, Viennoiseries", price: "€12" },
      { name: "English Breakfast — Œufs, Bacon, Toast, Beans", price: "€15" },
      { name: "Granola Maison, Yaourt & Fruits Frais", price: "€10" },
    ],
  },
  {
    icon: Sun,
    title: "Brunch du Dimanche",
    subtitle: "Chaque dimanche jusqu'à 15h",
    items: [
      { name: "Formule Brunch Complète — Sucré & Salé", price: "€28" },
      { name: "Œufs Bénédictine, Saumon Fumé", price: "€18" },
      { name: "Pancakes Maison, Sirop d'Érable & Fruits", price: "€14" },
      { name: "Croque-Madame Gourmand", price: "€15" },
    ],
  },
  {
    icon: Cake,
    title: "Desserts",
    subtitle: "Tout est fait maison, évidemment !",
    items: [
      { name: "Tarte aux Fruits de Saison Maison", price: "€9" },
      { name: "Crème Brûlée à la Vanille", price: "€8" },
      { name: "Moelleux au Chocolat, Crème Anglaise", price: "€10" },
      { name: "Tarte au Sucre Ch'ti", price: "€8" },
    ],
  },
];

const Carte = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-forest py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gold/70 hover:text-gold font-body text-sm tracking-widest uppercase mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          <h1 className="font-display text-5xl md:text-6xl text-cream italic mb-4">
            La Carte de Coco.
          </h1>
          <p className="text-gold/60 font-body text-base max-w-md mx-auto leading-relaxed">
            Des recettes de grand-mère, généreuses et 100% maison.
          </p>
          <div className="gold-divider mt-8" />
        </div>
      </header>

      {/* Menu Sections */}
      <main className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
        {menuSections.map((section, sectionIdx) => (
          <div key={section.title} className={sectionIdx > 0 ? "mt-16 md:mt-20" : ""}>
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center">
                <section.icon className="w-5 h-5 text-accent" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground italic">
                {section.title}
              </h2>
            </div>
            <p className="text-muted-foreground font-body text-sm tracking-wide mb-8 pl-14">
              {section.subtitle}
            </p>

            {/* Items */}
            <div className="space-y-5 pl-2">
              {section.items.map((item) => (
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

            {/* Divider */}
            {sectionIdx < menuSections.length - 1 && (
              <div className="mt-16 flex justify-center">
                <span className="block w-16 h-px bg-accent/30" />
              </div>
            )}
          </div>
        ))}
      </main>

      {/* Footer note */}
      <footer className="bg-forest py-12 text-center">
        <p className="text-gold/50 font-body text-sm tracking-widest uppercase mb-2">
          Service non-stop de 11h à 23h
        </p>
        <p className="text-gold/40 font-body text-xs">
          Petit-déjeuner de 8h à 11h · Brunch le dimanche jusqu'à 15h
        </p>
        <Link
          to="/"
          className="inline-block mt-8 btn-outline-gold"
        >
          Retour à l'accueil
        </Link>
      </footer>
    </div>
  );
};

export default Carte;
