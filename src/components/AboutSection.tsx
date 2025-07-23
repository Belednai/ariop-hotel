import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, MapPin, Users, Calendar } from "lucide-react";
import OurTeamSection from "./OurTeamSection";

const AboutSection = ({ showTeam = false }) => {
  const achievements = [
    {
      icon: Award,
      title: "Five-Star Excellence",
      description: "Recognized for outstanding service and luxury hospitality"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Located in the heart of Bor Town at Marol Market"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional staff dedicated to exceptional guest experiences"
    },
    {
      icon: Calendar,
      title: "Since 2012",
      description: "Over a decade of trusted hospitality in South Sudan"
    }
  ];

  return (
    <section id="about" className="pt-32 pb-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <h1 className="text-brand font-serif font-extrabold text-4xl md:text-5xl text-center mb-12 mt-8 w-full">
          Our Story
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-brand-dark">
              A Legacy of 
              <span className="block text-brand-dark">Luxury & Excellence</span>
            </h2>
            <div className="space-y-6 leading-relaxed">
              <p className="text-lg text-[#333333]" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                Since opening our doors in 2012, Ariop Hotel has been South Sudan's premier destination for luxury accommodation and world-class hospitality. Located in the vibrant heart of Bor Town, we have proudly served thousands of guests from around the world.
              </p>
              <p className="text-lg text-[#333333]" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                Our commitment to excellence extends beyond comfortable rooms to encompass every aspect of your stay. From our elegantly appointed suites to our state-of-the-art conference facilities, we blend modern luxury with authentic South Sudanese warmth and hospitality.
              </p>
              <p className="text-lg text-[#333333]" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                Whether you're visiting for business, leisure, or special events, Ariop Hotel provides an unparalleled experience that reflects the rich culture and promising future of South Sudan.
              </p>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl border border-white flex justify-center items-center">
              <div className="flex items-center w-full max-w-xs mx-auto">
                <div className="text-3xl font-serif font-bold text-[#154c79] mr-6" style={{ fontFamily: 'Times New Roman, Times, serif' }}>12+</div>
                <div className="flex flex-col items-center text-center">
                  <h4 className="text-xl font-semibold text-[#154c79]" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Years of Excellence</h4>
                  <p className="text-sm" style={{ color: '#6fa3d9', fontFamily: 'Times New Roman, Times, serif' }}>Serving guests since 2012</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group shadow-card hover:shadow-luxury transition-all duration-300 transform hover:-translate-y-1 bg-card border-0">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-2xl mb-4 shadow-luxury">
                    <achievement.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {showTeam && <OurTeamSection />}

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-card rounded-2xl p-8 shadow-card">
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-luxury-gold mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Luxury Rooms</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-luxury-gold mb-1">5★</div>
              <div className="text-sm text-muted-foreground">Service Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-luxury-gold mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Guest Support</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-luxury-gold mb-1">1000+</div>
              <div className="text-sm text-muted-foreground">Happy Guests</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;