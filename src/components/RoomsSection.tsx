import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

import luxuryRoomImage from "@/assets/luxury-room.jpg";
import premiumRoomImage from "@/assets/premium.jpeg";
import executiveRoomImage from "@/assets/executive.jpeg";
import presidentialRoomImage from "@/assets/presidential.jpeg";

interface RoomsSectionProps {
  showViewAllButton?: boolean;
}

const RoomsSection: React.FC<RoomsSectionProps> = ({ showViewAllButton = true }) => {
  const rooms = [
    {
      name: "Luxury Suite",
      image: luxuryRoomImage,
      price: "$250/night",
      rating: 5,
      description: "A spacious suite with a king-sized bed, a private balcony with a city view, and a luxurious marble bathroom.",
      amenities: ["King Bed", "City View", "Free WiFi", "Mini Bar"]
    },
    {
      name: "Premium Room",
      image: premiumRoomImage,
      price: "$180/night",
      rating: 4,
      description: "A beautifully appointed room with modern amenities, perfect for both business and leisure travelers.",
      amenities: ["Queen Bed", "Desk", "Free WiFi", "Coffee Maker"]
    },
    {
      name: "Executive Room",
      image: executiveRoomImage,
      price: "$220/night",
      rating: 5,
      description: "Designed for the discerning guest, this room offers extra space and exclusive access to our business lounge.",
      amenities: ["King Bed", "Lounge Access", "Free WiFi", "Breakfast"]
    },
    {
      name: "Presidential Suite",
      image: presidentialRoomImage,
      price: "$500/night",
      rating: 5,
      description: "The pinnacle of luxury, offering panoramic views, a separate living area, and personalized butler service.",
      amenities: ["2 Bedrooms", "Panoramic View", "Butler Service", "Full Bar"]
    }
  ];

  return (
    <section id="rooms" className="pt-32 pb-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-deep-blue/10 text-deep-blue border-deep-blue/20 mb-4 mt-8">
            Our Rooms
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Explore Our Accommodations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each of our rooms is designed with your comfort in mind, offering a blend of luxury, elegance, and modern amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <Card key={room.name} className="overflow-hidden shadow-soft-strong hover:shadow-luxury-glow transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img src={room.image} alt={room.name} className="w-full h-56 object-cover"/>
                <div className="absolute top-2 right-2 flex items-center bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-yellow-400 mr-1">{room.rating}</span>
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{room.name}</h3>
                <p className="text-lg font-semibold text-luxury-gold mb-3">{room.price}</p>
                <p className="text-muted-foreground mb-4 text-sm h-20">{room.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.map(amenity => (
                        <Badge key={amenity} variant="secondary" className="text-xs">{amenity}</Badge>
                    ))}
                </div>

                <Link to="/reserve">
                  <Button className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-luxury">
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {showViewAllButton && (
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6">
              View All Rooms
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RoomsSection;