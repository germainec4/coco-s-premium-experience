import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-forest-dark text-gold-light">
      {/* Big logo section */}
      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="flex justify-end mb-16">
          <h2 className="text-8xl md:text-[10rem] lg:text-[14rem] text-gold/30 tracking-tight" style={{ fontFamily: "'Corinthia', cursive" }}>
            Coco
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-10 border-t border-gold/10 pt-10">
          {/* About */}
          <div>
            <img src="/images/logo.svg" alt="Coco" className="h-8 mb-4" />
            <p className="text-gold/50 font-body text-sm leading-relaxed">
              Les recettes de Grand-Mère Coco, du Nord jusqu'à Chamonix. 
              Cuisine maison, convivialité et plats généreux.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Horaires
            </h4>
            <div className="space-y-2 text-gold/50 font-body text-sm">
              <p>Ouvert de 8h à 23h</p>
              <p>Petit-déjeuner : 8h - 11h</p>
              <p>Service non-stop : 11h - 23h</p>
              <p className="text-gold/70 font-medium">Dim : Brunch jusqu'à 15h !</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4" /> Contact
            </h4>
            <div className="space-y-2 text-gold/50 font-body text-sm">
              <p>+33 4 50 XX XX XX</p>
              <p>info@coco-chamonix.fr</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Adresse
            </h4>
            <div className="space-y-2 text-gold/50 font-body text-sm">
              <p>Chamonix-Mont-Blanc</p>
              <p>74400, France</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gold/40 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gold/40 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-10 pt-6 text-center">
          <p className="text-gold/30 font-body text-xs tracking-wider">
            © 2026 Coco — Chamonix-Mont-Blanc. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
