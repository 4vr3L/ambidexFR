import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = () => {
  // Data for the feature card
  const featureData = {
    title: "Premier Contact & Qualification",
    content: [
      {
        label: "Prise de contact:",
        text: "Le client remplit un formulaire ou vous contacte.",
      },
      {
        label: "Analyse des besoins:",
        text: "Discussion pour définir objectifs, périmètre et technologies (consultation possible).",
      },
    ],
    image: "https://c.animaapp.com/mbefdp65f3u1c4/img/image-2.png",
  };

  return (
    <div className="flex flex-wrap w-full items-start gap-[30px_23.62px] rounded-[45px]">
      <Card className="flex items-center justify-center gap-[18.31px] p-[31.89px] bg-black rounded-[45px] border-none backdrop-blur-[4.43px]">
        <CardContent className="p-0 flex flex-row gap-2.5">
          <div className="flex flex-col w-[238.58px] items-start gap-2.5">
            <h3 className="font-['Montserrat',Helvetica] font-bold text-[#bfff00] text-xl tracking-[0] leading-[25.5px]">
              {featureData.title}
            </h3>

            <div className="w-[238.11px] font-['Montserrat',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-normal">
              {featureData.content.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="font-bold">{item.label} </span>
                  <span>{item.text}</span>
                  {index < featureData.content.length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <img
            className="w-[288.5px] h-56 object-cover"
            alt="Feature illustration"
            src={featureData.image}
          />
        </CardContent>
      </Card>
    </div>
  );
};
