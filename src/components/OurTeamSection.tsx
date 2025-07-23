import React from "react";
import AdumImg from "./../assets/Adum.JPG";
import AlatImg from "./../assets/alat.png";
import AbulImg from "./../assets/Abul.jpg";

const team = [
  {
    name: "Adum Thuc",
    role: "General Manager",
    img: AdumImg,
    bio: "Oversees daily operations, ensures team efficiency, and manages internal processes to meet business goals.",
  },
  {
    name: "Reuben Kok Alat",
    role: "Chief Executive Officer (CEO)",
    img: AlatImg,
    bio: "Sets the company’s vision and strategy, leads decision-making, and ensures overall growth and profitability.",
  },
  {
    name: "Abul Elizabeth",
    role: "Head of Marketing",
    img: AbulImg,
    bio: "Leads marketing strategy, branding, and campaigns to drive visibility, customer engagement, and sales.",
  },
];

const OurTeamSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-serif text-brand-dark">Meet Our Team</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {team.map((member) => (
          <div key={member.name} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-brand-dark"
            />
            <h3 className="text-xl font-semibold text-brand-dark mb-1">{member.name}</h3>
            <p className="text-sm text-luxury-gold mb-2 font-medium">{member.role}</p>
            <p className="text-gray-600 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurTeamSection; 