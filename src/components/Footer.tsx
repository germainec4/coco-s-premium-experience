import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-forest-dark text-gold-light">
      {/* Big logo section */}
      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="flex justify-end mb-16">
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-gold/30 italic tracking-tight">
            Coco
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-10 border-t border-gold/10 pt-10">
          {/* About */}
          <div>
            <img src="/images/logo.svg" alt="Coco" className="h-8 mb-4" />
            <p className="text-gold/50 font-body text-sm leading-relaxed">
              Une expérience culinaire d'exception au cœur de la ville. 
              Réservez votre table et laissez-vous transporter.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Horaires
            </h4>
            <div className="space-y-2 text-gold/50 font-body text-sm">
              <p>Lun - Ven: 12h00 - 14h30</p>
              <p>Lun - Sam: 19h00 - 22h30</p>
              <p>Dim: Fermé</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4" /> Contact
            </h4>
            <div className="space-y-2 text-gold/50 font-body text-sm">
              <p>+33 1 42 77 88 99</p>
              <p>info@coco-restaurant.fr</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Adresse
            </h4>
            <div className="space-y-2 text-gold/50 font-body text-sm">
              <p>42 Rue du Faubourg Saint-Honoré</p>
              <p>75008 Paris, France</p>
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
            © 2026 Coco Restaurant. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
