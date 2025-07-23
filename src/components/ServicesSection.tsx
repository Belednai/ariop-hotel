import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Utensils, Car, Wifi, Dumbbell } from "lucide-react";
import restaurantImage from "@/assets/restaurant.jpeg";
import hallImage from "@/assets/hall.jpg";
import eventImage from "@/assets/event.jpeg";
import businessImage from "@/assets/business.jpeg";
import transportImage from "@/assets/transport.jpeg";
import wellnessImage from "@/assets/wellness.jpeg";

const ServicesSection = () => {
  const services = [
    {
      icon: Building,
      title: "Conference Halls",
      description: "State-of-the-art meeting rooms and conference facilities equipped with modern audiovisual technology for your business events.",
      image: hallImage,
      features: ["10-200 capacity", "A/V Equipment", "Catering Available", "WiFi Included"]
    },
    {
      icon: Users,
      title: "Event Hosting",
      description: "Elegant venues for weddings, celebrations, and special occasions with personalized service and attention to detail.",
      image: eventImage,
      features: ["Wedding Planning", "Custom Decor", "Professional Staff", "Photography Services"]
    },
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "Experience exquisite cuisine at our restaurant featuring both international dishes and authentic South Sudanese specialties.",
      image: restaurantImage,
      features: ["International Cuisine", "Local Specialties", "Room Service", "Private Dining"]
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Convenient airport transfers and city transportation services to ensure comfortable travel throughout your stay.",
      image: transportImage,
      features: ["Airport Pickup", "City Tours", "Car Rental", "24/7 Service"]
    },
    {
      icon: Dumbbell,
      title: "Wellness Center",
      description: "Maintain your fitness routine with our modern gym facilities and relaxing spa services for ultimate rejuvenation.",
      image: wellnessImage,
      features: ["Fitness Center", "Spa Services", "Massage Therapy", "Wellness Programs"]
    },
    {
      icon: Wifi,
      title: "Business Center",
      description: "Complete business support services including high-speed internet, printing, and professional meeting spaces.",
      image: businessImage,
      features: ["High-Speed WiFi", "Printing Services", "Secretarial Support", "24/7 Access"]
    }
  ];

  return (
    <section id="services" className="pt-32 pb-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-brand/10 text-brand border-brand/20 mb-4 mt-8">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            World-Class Amenities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From business facilities to leisure amenities, we provide comprehensive services to meet all your needs during your stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden shadow-card hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-1 bg-card border-0"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-light/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="p-3 bg-brand rounded-xl shadow-luxury">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;