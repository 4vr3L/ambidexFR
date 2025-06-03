import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = () => {
  // Service card data for mapping
  const serviceCards = [
    { id: 1, src: "https://c.animaapp.com/mbefdp65f3u1c4/img/component-2.svg" },
    { id: 2, src: "https://c.animaapp.com/mbefdp65f3u1c4/img/component-1.svg" },
    { id: 3, src: "https://c.animaapp.com/mbefdp65f3u1c4/img/component-3.svg" },
    { id: 4, src: "https://c.animaapp.com/mbefdp65f3u1c4/img/component-4.svg" },
    { id: 5, src: "https://c.animaapp.com/mbefdp65f3u1c4/img/component-5.svg" },
    { id: 6, src: "https://c.animaapp.com/mbefdp65f3u1c4/img/component-6.svg" },
  ];

  return (
    <section className="w-full max-w-[1242px] mx-auto py-16">
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-[40px]">
          Nos Services
        </h2>
        <img
          className="w-[246px] h-[22px] mt-3"
          alt="Decorative underline"
          src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2046.svg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceCards.map((card) => (
          <Card key={card.id} className="bg-transparent border-0">
            <CardContent className="p-0">
              <img
                className="w-full h-[235px]"
                alt={`Service ${card.id}`}
                src={card.src}
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="w-full h-[300px] mt-[146px] bg-black rounded-[45px] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] border-0">
        <CardContent className="p-0 flex flex-col md:flex-row items-center h-full">
          <div className="relative w-[387px] h-56 ml-[75px] mt-[21px]">
            <div className="absolute w-[275px] top-8 left-0 font-['Montserrat',Helvetica] font-medium text-white text-[90px] leading-[96.4px]">
              Offre
              <br />
              20%
            </div>
            <div className="absolute w-[173px] h-[166px] top-5 left-[196px] rotate-[15deg]">
              <div className="absolute w-11 h-[87px] top-0 left-5 bg-black rounded-[21.84px/43.68px]" />
              <div className="absolute w-11 h-[87px] top-0 left-[109px] bg-black rounded-[21.84px/43.68px]" />
              <div className="absolute w-[180px] h-[115px] top-[90px] -left-1">
                <img
                  className="absolute w-[161px] h-[76px] top-5 left-[9px] rotate-[-15deg]"
                  alt="Vector"
                  src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2039.svg"
                />
                <img
                  className="absolute w-[19px] h-[19px] top-[30px] left-0.5 rotate-[-15deg]"
                  alt="Vector"
                  src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2040.svg"
                />
                <img
                  className="absolute w-[19px] h-[19px] top-[30px] left-[159px] rotate-[-15deg]"
                  alt="Vector"
                  src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2041.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[644px] mt-[74px] ml-[83px] font-['Montserrat',Helvetica] font-normal text-[40px]">
            <span className="text-white">Profitez de </span>
            <span className="font-medium text-white">20%</span>
            <span className="text-white">
              {" "}
              de réduction sur votre premier trimestre, et une consultation{" "}
            </span>
            <span className="font-medium text-white">gratuite!</span>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
