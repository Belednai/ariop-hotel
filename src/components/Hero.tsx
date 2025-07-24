import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";
import heroImage from "@/assets/Ariop.png";
import ariopLogo from "@/assets/ariop_logo.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-card">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Ariop Hotel exterior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-brand-dark/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-8 md:mt-24">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 leading-tight">
            Welcome to
            <span className="block text-luxury-gold">Ariop Hotel</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          Experience unparalleled luxury and exceptional hospitality at South Sudan's premier five-star hotel since 2012.
        </p>
        
        <div className="mt-8 flex flex-row space-x-2 overflow-x-auto md:grid md:grid-cols-3 md:gap-8 md:space-x-0 text-center">
          <div className="backdrop-blur-md bg-white/80 rounded-xl p-3 border border-white/60 shadow-lg min-w-[120px] flex-1">
            <h3 className="text-xl md:text-3xl font-bold font-serif text-brand-dark mb-1">12+</h3>
            <p className="text-xs md:text-lg text-[#333]">Years</p>
          </div>
          <div className="backdrop-blur-md bg-white/80 rounded-xl p-3 border border-white/60 shadow-lg min-w-[120px] flex-1">
            <h3 className="text-xl md:text-3xl font-bold font-serif text-brand-dark mb-1">50+</h3>
            <p className="text-xs md:text-lg text-[#333]">Rooms</p>
          </div>
          <div className="backdrop-blur-md bg-white/80 rounded-xl p-3 border border-white/60 shadow-lg min-w-[120px] flex-1">
            <h3 className="text-xl md:text-3xl font-bold font-serif text-brand-dark mb-1">5★</h3>
            <p className="text-xs md:text-lg text-[#333]">Service</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;