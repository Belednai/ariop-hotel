import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: "+211928741200",
      subtitle: "Available 24/7",
      link: "tel:+211928741200"
    },
    {
      icon: Mail,
      title: "Email Address", 
      details: "info@ariophotel.com",
      subtitle: "We reply within 2 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Marol Market, Bor Town",
      subtitle: "South Sudan"
    },
    {
      icon: Clock,
      title: "Reception Hours",
      details: "24/7 Service",
      subtitle: "Always here for you"
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" },
    { icon: Twitter, name: "Twitter", href: "#" }
  ];

  return (
    <section id="contact" className="pt-32 pb-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-white text-[#154c79] font-bold border-white mb-4 mt-8">
            Connect With Us!
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
            Contact Ariop Hotel
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to experience luxury? Contact us to make a reservation or learn more about our services and amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-8 text-center">
              Reach Out to Us
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-card hover:shadow-luxury transition-all duration-300 bg-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-brand/10 rounded-xl">
                        <info.icon className="w-6 h-6 text-brand" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <p className="text-lg text-foreground mb-1">
                          {info.link ? (
                            <a href={info.link} className="hover:text-brand">{info.details}</a>
                          ) : (
                            info.details
                          )}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="shadow-card bg-card border-0 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  title="Ariop Comercial centre Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d397.3939644798367!2d31.5591802!3d6.210716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1710272f4e7e8a67%3A0x38d7629b3042c93b!2sAriop%20Comercial%20centre!5e0!3m2!1sen!2sus!4v1717171717171!5m2!1sen!2sus"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64"
                ></iframe>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-luxury bg-card border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 text-center">
                  Send us a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name
                      </label>
                      <Input 
                        placeholder="Enter your first name"
                        className="border-input focus:border-luxury-gold focus:ring-luxury-gold"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Enter your last name"
                        className="border-input focus:border-luxury-gold focus:ring-luxury-gold"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input 
                      type="email"
                      placeholder="Enter your email address"
                      className="border-input focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input 
                      type="tel"
                      placeholder="Enter your phone number"
                      className="border-input focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your inquiry or reservation needs..."
                      rows={5}
                      className="border-input focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-luxury py-3 text-lg font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;