import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Import the colored image
import coloredImage from "../../../../photos/Votre_sit.._colored.png";

export const ServicesSection = () => {
  const services = [
    {
      id: 1,
      number: "1",
      titleEn: "Tailor-Made\nWebsites",
      titleFr: "Votre site web sur\nmesure",
    },
    {
      id: 2,
      number: "2",
      titleEn: "Web & Mobile\nDevelopment",
      titleFr: "Développement web et mobile sur mesure",
    },
    {
      id: 3,
      number: "3",
      titleEn: "UI/UX &\nBranding",
      titleFr: "L'expérience utilisateur au cœur de votre identité",
    },
    {
      id: 4,
      number: "4",
      titleEn: "Digital System\nMaintenance",
      titleFr: "Des systèmes digitaux performants et sécurisés",
    },
    {
      id: 5,
      number: "5",
      titleEn: "E-Commerce\nSolutions",
      titleFr: "Boostez vos ventes en ligne",
    },
    {
      id: 6,
      number: "6",
      titleEn: "AI &\nAutomation",
      titleFr: "L'intelligence artificielle au service de votre entreprise",
    },
  ];

  const handleContact = () => {
    console.log("Contact button clicked");
  };

  return (
    <section className="w-full max-w-[1242px] mx-auto py-16">
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-['Montserrat'] font-bold text-white text-[40px]">
          Nos Services
        </h2>
        <img
          className="w-[246px] h-[22px] mt-3"
          alt="Decorative underline"
          src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2046.svg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {services.map((service) => (
          <div key={service.id} className="w-[400px] h-[200px] overflow-hidden cursor-pointer group">
            <div className="relative w-full h-full rounded-[24px] bg-[#0a0a0a] transition-transform duration-300 group-hover:scale-[1.02]">
              {/* Main color fill - smooth bottom to top */}
              <div
                className="absolute bottom-0 left-0 right-0 rounded-[24px] h-0 group-hover:h-full transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ backgroundColor: "#c1ff00" }}
              />

              {/* Content container */}
              <div className="relative z-10 w-full h-full p-8 flex items-center">
                {/* Large number */}
                <div className="absolute left-8 top-8" style={{ width: '130px', height: '140px', overflow: 'hidden', background: 'transparent' }}>
                  {/* Gradient number (default) */}
                  <span
                    className="absolute inset-0 leading-none font-['Montserrat'] transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                    style={{
                      fontSize: "220px",
                      fontWeight: 300,
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      verticalAlign: "top",
                      background: "linear-gradient(to bottom, #fff 60%, #000 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline-block",
                      marginTop: "-30px",
                      marginLeft: "0px",
                    }}
                  >
                    {service.number}
                  </span>
                  {/* Solid black number (on hover) */}
                  <span
                    className="absolute inset-0 leading-none font-['Montserrat'] transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    style={{
                      fontSize: "220px",
                      fontWeight: 300,
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      verticalAlign: "top",
                      color: "#000",
                      display: "inline-block",
                      marginTop: "-30px",
                      marginLeft: "0px",
                    }}
                  >
                    {service.number}
                  </span>
                </div>

                {/* Content section */}
                <div className="ml-[140px] flex flex-col items-start justify-center">
                  {/* Text content */}
                  <div className="relative h-20 mb-4 w-full">
                    {/* Dark version text */}
                    <h2
                      className="absolute top-0 left-0 text-white text-2xl whitespace-pre-line text-left font-['Montserrat'] font-bold transition-all duration-600 ease-out group-hover:opacity-0 group-hover:translate-y-[-10px]"
                      style={{ lineHeight: 1.2, maxWidth: '200px' }}
                    >
                      {service.titleEn}
                    </h2>

                    {/* Bright version text */}
                    <h2
                      className="absolute top-0 left-0 ml-9 -mt-6  text-black text-xl whitespace-pre-line text-left font-['Montserrat'] font-bold transition-all duration-600 ease-out opacity-0 translate-y-[10px] group-hover:opacity-100 group-hover:translate-y-0 delay-200"
                      style={{ lineHeight: 1.2, maxWidth: '200px' }}
                    >
                      {service.titleFr}
                    </h2>
                  </div>

                  {/* Contact button */}
                  <button
                    onClick={handleContact}
                    className="bg-black text-[#c1ff00] px-5 py-2 ml-9 rounded-full transition-all duration-500 ease-out opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 delay-400 font-['Montserrat'] font-semibold text-sm"
                  >
                    Contactez-nous
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto mt-[80px]">
        <div
          className="rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 border"
          style={{
            background: "linear-gradient(90deg, #18191a 0%, #101010 100%)",
            borderColor: "#222",
            minHeight: '270px',
          }}
        >
          {/* Left side - Offer and percentage */}
          <div className="flex flex-col items-start min-w-[300px]">
            <span
              className="font-['Montserrat'] text-white text-5xl md:text-6xl lg:text-7xl font-semibold mb-3"
              style={{ fontWeight: 700, lineHeight: 1.1 }}
            >
              Offre
            </span>
            <span
              className="font-['Montserrat'] text-white text-7xl md:text-8xl lg:text-9xl font-bold"
              style={{ fontWeight: 800, lineHeight: 1 }}
            >
              20%
            </span>
          </div>
          {/* Right side - Description text */}
          <div className="flex-1 max-w-3xl ml-20">
            <span
              className="font-['Montserrat'] text-white text-2xl md:text-3xl lg:text-4xl leading-relaxed"
              style={{ fontWeight: 500, lineHeight: 1.4 }}
            >
              Profitez de 20% de réduction sur votre premier trimestre, et une consultation gratuite!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

