import React from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
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

          <div className="flex flex-wrap justify-center mt-16">
            <img
              className="w-[604px] h-[287px]"
              alt="Proposition"
              src="https://c.animaapp.com/mbefdp65f3u1c4/img/proposition.svg"
            />

            <div className="flex mt-8">
              <img
                className="w-[608px] h-[287px]"
                alt="Suivi"
                src="https://c.animaapp.com/mbefdp65f3u1c4/img/suivi.svg"
              />

              <img
                className="w-[606px] h-[289px] ml-6"
                alt="Livraison"
                src="https://c.animaapp.com/mbefdp65f3u1c4/img/livraison.svg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative w-full mt-16">
          <FeaturesSection />
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
        <section className="relative w-full">
          <FooterSection />

          <div className="flex items-center justify-center gap-[42px] py-8">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                className="w-16 h-16"
                alt={icon.alt}
                src={icon.src}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
