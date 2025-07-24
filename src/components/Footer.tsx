import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Rooms", href: "#rooms" },
    { name: "Services", href: "#services" },
    { name: "Events", href: "#events" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Conference Halls",
    "Event Hosting", 
    "Fine Dining",
    "Transportation",
    "Wellness Center",
    "Business Center"
  ];

  return (
    <footer className="bg-[#154c79] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-serif font-bold text-luxury-gold mb-4">
              Ariop Hotel
            </h3>
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="text-luxury-gold text-xl">★</span>
              ))}
            </div>
            <p className="text-lg leading-relaxed mb-6 max-w-md">
              Experience unparalleled luxury and exceptional hospitality at South Sudan's premier five-star hotel. Located in the heart of Bor Town since 2012.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <span>Marol Market, Bor Town, South Sudan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <a href="tel:+211928741200" className="hover:text-luxury-gold">+211928741200</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <span>info@ariophotel.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-semibold text-luxury-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-luxury-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-serif font-semibold text-luxury-gold mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-warm-cream">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-luxury-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-lg">Follow Us:</span>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 bg-luxury-gold/10 hover:bg-luxury-gold hover:text-primary-foreground rounded-lg transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-luxury-gold/10 hover:bg-luxury-gold hover:text-primary-foreground rounded-lg transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-luxury-gold/10 hover:bg-luxury-gold hover:text-primary-foreground rounded-lg transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm">
                © {currentYear} Ariop Hotel. All rights reserved.
              </p>
              <p className="text-xs text-luxury-gold mt-1">
                Luxury hospitality since 2012
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;