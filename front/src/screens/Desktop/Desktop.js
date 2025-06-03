import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { PricingSection } from "./sections/PricingSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TeamSection } from "./sections/TeamSection/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";

// Import images
import image1White from "../../photos/image1_white.png";
import image1Colored from "../../photos/image1_colored.png";
import image2White from "../../photos/image2_white.png";
import image2Colored from "../../photos/image2_colored.png";
import image3White from "../../photos/image3_white.png";
import image3Colored from "../../photos/image3_colored.png";
import image4White from "../../photos/image4_white.png";
import image4Colored from "../../photos/image4_colored.png";

export const Desktop = () => {
  // Partner logos data
  const partnerLogos = [
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/godaddylogo-2020-1.png",
      alt: "Godaddylogo",
    },
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/-citypng-com-hd-black-airbnb-official-logo-brand-png-image---221-1.png",
      alt: "Citypng COM HD black",
    },
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/amazon-logo-black-transparent-1.png",
      alt: "Amazon logo black",
    },
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/riot-games-logo-1.png",
      alt: "Riot games logo",
    },
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/hoyoverse-logo-svg-1-1.png",
      alt: "Hoyoverse logo svg",
    },
  ];

  // Navigation items
  const navItems = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
  ];

  // Instagram images
  const instagramImages = [
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/rectangle-81.png",
      alt: "Rectangle",
    },
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/rectangle-82.png",
      alt: "Rectangle",
    },
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/rectangle-83.png",
      alt: "Rectangle",
    },
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/rectangle-84.png",
      alt: "Rectangle",
    },
  ];

  // Portfolio images
  const portfolioImages = [
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/frame-90.png",
      alt: "Frame",
      width: "244px",
    },
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/frame-95.png",
      alt: "Frame",
      width: "292px",
    },
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/frame-96.png",
      alt: "Frame",
      width: "292px",
    },
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/frame-97.png",
      alt: "Frame",
      width: "292px",
    },
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/frame-98.png",
      alt: "Frame",
      width: "268px",
    },
  ];

  // Social media icons
  const socialIcons = [
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/group-31.svg",
      alt: "Group",
    },
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/social-icon.svg",
      alt: "Social icon",
    },
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/watss.svg",
      alt: "Watss",
    },
  ];

  return (
    <div className="bg-black flex flex-col items-center w-full">
      {/* Fixed Navigation */}
      {/* <header className="fixed z-50 w-full max-w-[1252px] top-[50px] px-4"> */}
        <Card className="  z-50 max-w-[1252px] top-[50px] px-4 relative w-full h-[62px] bg-[#000000cc] rounded-[1000px] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] border-none">
          <div className="flex items-center justify-between h-full px-8">
            <img
              className="w-[134px] h-[18px]"
              alt="Vector"
              src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector.svg"
            />

            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-[39px]">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <a
                      href={item.href}
                      className="font-['Montserrat',Helvetica] font-medium text-[#949494] text-xl tracking-[0] leading-[27.1px] whitespace-nowrap"
                    >
                      {item.label}
                    </a>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <img
              className="w-[50px] h-[50px]"
              alt="Group"
              src="https://c.animaapp.com/mbefdp65f3u1c4/img/group-30.svg"
            />
          </div>
        </Card>
      {/* </header> */}

      <main className="w-full max-w-[1440px] relative">
        {/* Hero Section with Background */}
        <section className="relative w-full">
          <div className="w-full h-[834px] shadow-[inset_0px_4px_191.6px_178px_#000000e0] [background:linear-gradient(34deg,rgba(0,0,0,0.39)_0%,rgba(191,255,0,0.39)_100%)] opacity-[0.74]" />

          <div className="absolute w-full h-[1370px] top-[269px] left-0 rotate-[91.45deg]">
            <img
              className="absolute w-[1354px] h-[1405px] top-[-43px] left-2 rotate-[-91.45deg] object-cover"
              alt="Dsprsd"
              src="https://c.animaapp.com/mbefdp65f3u1c4/img/dsprsd.png"
            />
          </div>

          <div className="absolute w-full h-[1324px] top-[513px] left-0 [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]" />

          <div className="absolute top-0 left-0 w-full">
            <HeroSection />
            <Button className="absolute top-[448px] left-1/2 transform -translate-x-1/2 h-[42px] bg-[#bfff00] rounded-[1000px] text-black font-['Montserrat',Helvetica] font-bold text-[15px]">
              Contactez-nous
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative w-full mt-4">
          <ServicesSection />

          <div className="flex items-center justify-center gap-[49px] py-[25px] mt-4">
            {partnerLogos.map((logo, index) => (
              <img
                key={index}
                className="h-[31px] object-contain"
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="relative w-full mt-16">
          <div className="w-full h-[834px] rotate-180 shadow-[inset_0px_4px_191.6px_178px_#000000e0] [background:linear-gradient(34deg,rgba(0,0,0,0.39)_0%,rgba(191,255,0,0.39)_100%)] opacity-[0.74]" />

          <div className="absolute w-full top-[93px] left-0">
            <h2 className="text-center font-['Montserrat',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal]">
              Nos Réalisations
            </h2>

            <img
              className="mx-auto w-[297px] h-[25px] mt-4"
              alt="Vector"
              src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2043.svg"
            />

            <div className="flex justify-center gap-4 mt-[120px]">
              {portfolioImages.map((image, index) => (
                <img
                  key={index}
                  className="h-[392px] object-cover"
                  style={{ width: image.width }}
                  alt={image.alt}
                  src={image.src}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative w-full mt-16 pt-16">
          <h2 className="text-center font-['Montserrat',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal]">
            COMMENT PROCÉDONS NOUS?
          </h2>

          <img
            className="mx-auto w-[389px] h-[30px] mt-8"
            alt="Vector"
            src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2047.svg"
          />

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-16 px-2 sm:px-4">
            {/* Card 1: Premier Contact */}
            <Card className="w-full sm:w-[85%] md:w-[48%] bg-black rounded-[45px] border-2 border-transparent hover:border-[#bfff00] transition-all duration-300 group">
              <CardContent className="p-4 sm:p-6 md:p-8 h-auto sm:h-[287px] flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-['Montserrat',Helvetica] font-bold text-[#bfff00] text-xl sm:text-2xl mb-4 sm:mb-6">
                    Premier Contact & Qualification
                  </h3>
                  <div className="text-white space-y-2 sm:space-y-4">
                    <p>
                      <span className="font-bold">Prise de contact:</span><br />
                      Le client vous contacte. Premier échange pour cerner son besoin.
                    </p>
                    <p>
                      <span className="font-bold">Analyse des besoins:</span><br />
                      Discussion du projet, objectifs et technologies. Consultation gratuite si besoin.
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 h-[200px] sm:h-full flex items-center justify-center">
                  <div className="relative w-[160px] sm:w-[200px] h-[160px] sm:h-[200px]">
                    <img
                      className="w-full h-full object-contain opacity-50 group-hover:opacity-0 transition-opacity duration-300 absolute top-0 left-0"
                      alt="Premier Contact - Black"
                      src={image1White}
                    />
                    <img
                      className="w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0"
                      alt="Premier Contact - Color"
                      src={image1Colored}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Proposition */}
            <Card className="w-full sm:w-[85%] md:w-[48%] bg-black rounded-[45px] border-2 border-transparent hover:border-[#bfff00] transition-all duration-300 group">
              <CardContent className="p-4 sm:p-6 md:p-8 h-auto sm:h-[287px] flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-['Montserrat',Helvetica] font-bold text-[#bfff00] text-xl sm:text-2xl mb-4 sm:mb-6">
                    Proposition & Validation
                  </h3>
                  <div className="text-white space-y-2 sm:space-y-4">
                    <p>
                      <span className="font-bold">Rédaction d'une proposition:</span><br />
                      Devis détaillé avec étapes, délais et budget. Proposition d'un modèle de collaboration.
                    </p>
                    <p>
                      <span className="font-bold">Validation et contractualisation:</span><br />
                      Ajustements de la proposition si besoin, signature du contrat et planning de réalisation.
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 h-[200px] sm:h-full flex items-center justify-center">
                  <div className="relative w-[160px] sm:w-[200px] h-[160px] sm:h-[200px]">
                    <img
                      className="w-full h-full object-contain opacity-50 group-hover:opacity-0 transition-opacity duration-300 absolute top-0 left-0"
                      alt="Proposition - Black"
                      src={image2White}
                    />
                    <img
                      className="w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0"
                      alt="Proposition - Color"
                      src={image2Colored}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Suivi */}
            <Card className="w-full sm:w-[85%] md:w-[48%] bg-black rounded-[45px] border-2 border-transparent hover:border-[#bfff00] transition-all duration-300 group">
              <CardContent className="p-4 sm:p-6 md:p-8 h-auto sm:h-[287px] flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-['Montserrat',Helvetica] font-bold text-[#bfff00] text-xl sm:text-2xl mb-4 sm:mb-6">
                    Développement & Suivi
                  </h3>
                  <div className="text-white space-y-2 sm:space-y-4">
                    <p>
                      <span className="font-bold">Lancement du projet:</span><br />
                      Mise en place des ressources nécessaires, des étapes et suivi régulier.
                    </p>
                    <p>
                      <span className="font-bold">Feedback et ajustements:</span><br />
                      Points d'avancement périodiques, corrections et améliorations.
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 h-[200px] sm:h-full flex items-center justify-center">
                  <div className="relative w-[160px] sm:w-[200px] h-[160px] sm:h-[200px]">
                    <img
                      className="w-full h-full object-contain opacity-50 group-hover:opacity-0 transition-opacity duration-300 absolute top-0 left-0"
                      alt="Suivi - Black"
                      src={image3White}
                    />
                    <img
                      className="w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0"
                      alt="Suivi - Color"
                      src={image3Colored}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 4: Livraison */}
            <Card className="w-full sm:w-[85%] md:w-[48%] bg-black rounded-[45px] border-2 border-transparent hover:border-[#bfff00] transition-all duration-300 group">
              <CardContent className="p-4 sm:p-6 md:p-8 h-auto sm:h-[287px] flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-['Montserrat',Helvetica] font-bold text-[#bfff00] text-xl sm:text-2xl mb-4 sm:mb-6">
                    Livraison & Support
                  </h3>
                  <div className="text-white space-y-2 sm:space-y-4">
                    <p>
                      <span className="font-bold">Mise en ligne & formation:</span><br />
                      Déploiement du projet et formation si nécessaire.
                    </p>
                    <p>
                      <span className="font-bold">Maintenance & évolution:</span><br />
                      Suivi technique, maintenance et accompagnement futur.
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 h-[200px] sm:h-full flex items-center justify-center">
                  <div className="relative w-[160px] sm:w-[200px] h-[160px] sm:h-[200px]">
                    <img
                      className="w-full h-full object-contain opacity-50 group-hover:opacity-0 transition-opacity duration-300 absolute top-0 left-0"
                      alt="Livraison - Black"
                      src={image4White}
                    />
                    <img
                      className="w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0"
                      alt="Livraison - Color"
                      src={image4Colored}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative w-full mt-16">
          <TeamSection />
        </section>

        {/* Pricing Section */}
        <section className="relative w-full mt-16">
          <PricingSection />

          <div className="flex items-center justify-center gap-[60px] py-[31px] mt-8">
            {partnerLogos.map((logo, index) => (
              <img
                key={index}
                className="h-[38px] object-contain"
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </section>

        {/* Instagram Section */}
        <section className="relative w-full mt-16 pt-16">
          <h2 className="text-center font-['Montserrat',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal]">
            Instagram
          </h2>

          <img
            className="mx-auto w-[198px] h-[17px] mt-4"
            alt="Vector"
            src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2051.svg"
          />

          <img
            className="absolute w-[205px] h-[69px] top-[120px] right-[250px]"
            alt="Vector"
            src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2036.svg"
          />

          <div className="flex justify-center gap-8 mt-[246px]">
            {instagramImages.map((image, index) => (
              <img
                key={index}
                className="w-[330px] h-[337px] object-cover"
                alt={image.alt}
                src={image.src}
              />
            ))}
          </div>

          <img
            className="mx-auto w-[702px] h-28 mt-16"
            alt="Vector"
            src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2035.svg"
          />
        </section>

        {/* Testimonials Section */}
        <section className="relative w-full mt-16">
          <TestimonialsSection />
        </section>

        {/* Contact Section */}
        <section className="relative w-full mt-16">
          <ContactSection />
        </section>

        {/* Footer Section */}
        <section className="relative w-full bg-black">
          <div className="max-w-[1240px] mx-auto px-8 py-16">
            <div className="flex flex-col items-start">
              {/* Logo and Navigation */}
              <div className="w-full flex flex-wrap justify-between items-center mb-16">
                {/* Logo */}
                <img 
                  src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector.svg"
                  alt="Ambidex Logo" 
                  className="h-6 mb-8 md:mb-0"
                />
                
                {/* Navigation */}
                <div className="flex items-center gap-8">
                  <a href="#home" className="text-white hover:text-[#bfff00] transition-all duration-300 font-['Montserrat']">Home</a>
                  <a href="#about" className="text-white hover:text-[#bfff00] transition-all duration-300 font-['Montserrat']">About Us</a>
                  <a href="#services" className="text-white hover:text-[#bfff00] transition-all duration-300 font-['Montserrat']">Services</a>
                  <a href="#blog" className="text-white hover:text-[#bfff00] transition-all duration-300 font-['Montserrat']">Blog</a>
                  <a href="#projects" className="text-white hover:text-[#bfff00] transition-all duration-300 font-['Montserrat']">Projects</a>
                  <a href="#contact" className="text-white hover:text-[#bfff00] transition-all duration-300 font-['Montserrat']">Contact</a>
                </div>
              </div>

              {/* Contact Button and Newsletter */}
              <div className="w-full flex flex-wrap justify-between items-stretch gap-8">
                {/* Contact Info Box */}
                <div className="flex-1 min-w-[280px] max-w-[400px] bg-[#0A0A0A] rounded-[20px] p-8 border border-[#bfff0020] group hover:border-[#bfff0040] transition-all duration-500">
                  <div className="space-y-6">
                    <button className="bg-[#bfff00] text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#a8e600] transition-all duration-300 transform hover:-translate-y-[2px] hover:shadow-lg hover:shadow-[#bfff0020]">
                      Contact us
                    </button>
                    <div className="text-[#949494] font-['Montserrat'] text-sm space-y-3">
                      <p className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#bfff00] opacity-50"></span>
                        Address: 1234 Main St
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#bfff00] opacity-50"></span>
                        Moonstone City, Stardust State 12345
                      </p>
                    </div>
                  </div>
                </div>

                {/* Newsletter Box */}
                <div className="flex-1 min-w-[280px] bg-[#0A0A0A] rounded-[20px] p-8 border border-[#bfff0020] group hover:border-[#bfff0040] transition-all duration-500">
                  <div className="space-y-6">
                    <h3 className="text-white font-['Montserrat'] text-lg font-medium">Subscribe to our newsletter</h3>
                    <div className="flex gap-3">
                      <input 
                        type="email" 
                        placeholder="Enter Your Email" 
                        className="flex-1 bg-black border border-[#333] rounded-full px-6 py-3 text-white text-sm placeholder:text-[#666] focus:outline-none focus:border-[#bfff00] focus:shadow-lg focus:shadow-[#bfff0010] transition-all duration-300 font-['Montserrat']"
                      />
                      <button className="bg-[#bfff00] text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#a8e600] transition-all duration-300 transform hover:-translate-y-[2px] hover:shadow-lg hover:shadow-[#bfff0020] whitespace-nowrap">
                        Subscribe newsletter
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="w-full mt-12 pt-8 border-t border-[#333] text-sm text-[#949494] font-['Montserrat']">
                <p>© 2025 Ambidex. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
