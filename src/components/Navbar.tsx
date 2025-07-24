import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import ariopLogo from "@/assets/ariop_logo.png";

const handleNavClick = (idOrPath: string) => (event: React.MouseEvent) => {
  // Let react-router-dom handle navigation first
  setTimeout(() => {
    const id = idOrPath.replace('/', '');
    if (id === '' || id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, 0);
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Rooms", to: "/rooms" },
    { label: "Services", to: "/services" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 shadow-soft">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <a href="tel:+211928741200" className="hover:text-luxury-gold">+211928741200</a>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Marol Market, Bor Town, South Sudan</span>
            </div>
          </div>
          <div className="text-luxury-gold font-medium">Since 2012</div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img src={ariopLogo} alt="Ariop Logo" className="w-10 h-10 mr-3" />
            <div className="flex flex-row md:flex-col leading-tight space-x-2 md:space-x-0">
              <span className="text-xl md:text-2xl font-serif font-bold text-brand-dark">Ariop</span>
              <span className="text-xl md:text-2xl font-serif font-bold text-brand-dark">Hotel</span>
            </div>
            <div className="hidden md:block ml-2 text-sm text-muted-foreground">
              <span className="text-xl text-luxury-gold align-middle">★★★</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `text-foreground hover:text-brand-mid transition-colors duration-300 font-medium${isActive ? ' underline underline-offset-4' : ''}`
                }
                end={item.to === "/"}
                onClick={handleNavClick(item.to)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/reserve">
              <Button variant="default" className="bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-luxury">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-luxury-gold transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-foreground hover:text-brand-mid transition-colors duration-300 font-medium py-2${isActive ? ' underline underline-offset-4' : ''}`
                  }
                  onClick={e => { setIsOpen(false); handleNavClick(item.to)(e); }}
                  end={item.to === "/"}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/reserve" onClick={() => setIsOpen(false)}>
                <Button variant="default" className="bg-gradient-hero text-primary-foreground mt-4">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;