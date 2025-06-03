import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: "$500",
      popular: false,
      features: [
        "Website optimization",
        "Social media setup and management (1 platform)",
        "Monthly progress report",
        "Email Support",
        "Basic competitor analysis",
        "Initial SEO audit",
      ],
    },
    {
      title: "Pro",
      price: "$1000",
      popular: true,
      features: [
        "Website optimization",
        "Social media setup and management (3 platforms)",
        "Bi-weekly progress report",
        "Priority Email Support",
        "Advanced competitor analysis",
        "Detailed SEO audit",
      ],
    },
    {
      title: "Enterprise",
      price: "$3000",
      popular: false,
      features: [
        "Full website and app optimization",
        "Social media setup and management (all platforms)",
        "Weekly progress report",
        "Dedicated account manager",
        "Comprehensive competitor analysis",
        "Full SEO audit & ongoing improvements",
      ],
    },
  ];

  return (
    <section className="relative w-full py-20">
      <div className="flex flex-col items-center">
        <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-[40px] mb-4">
          Pricing
        </h2>
        <img
          className="w-[135px] h-[21px] mb-12"
          alt="Vector"
          src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2049.svg"
        />

        <div className="w-full max-w-[1240px] mx-auto shadow-[inset_0px_4px_162.8px_82px_#000000]">
          <div className="flex flex-wrap items-center gap-10 justify-center">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`flex-1 min-w-[326px] rounded-[45px] border-none backdrop-blur-[7.5px] ${
                  plan.popular
                    ? "bg-[#000000cc] backdrop-blur-[12.5px]"
                    : "bg-[#1414144a]"
                }`}
              >
                <CardContent className="flex flex-col h-[883px] items-center gap-[38px] p-[30px]">
                  <div className="flex flex-col w-full items-center gap-[59px]">
                    <div className="flex flex-col items-center gap-11 w-full">
                      <div className="flex flex-col items-start gap-[59px] w-full">
                        <div className="flex flex-col h-[125px] items-start gap-[25px] w-full">
                          <div className="flex items-center justify-between w-full py-2.5">
                            <div className="font-['Montserrat',Helvetica] font-bold text-white text-3xl">
                              {plan.title}
                            </div>
                            {plan.popular && (
                              <Badge
                                className="bg-[#bfff00] text-black rounded-[1000px] px-3 py-1"
                                role="status"
                                aria-label="Popular plan"
                              >
                                <span className="font-['Montserrat',Helvetica] font-medium text-base">
                                  Popular
                                </span>
                              </Badge>
                            )}
                          </div>

                          <div className="flex h-[37px] items-end gap-2.5 w-full">
                            <div className="font-['Montserrat',Helvetica] font-medium text-white text-[51px] leading-normal whitespace-nowrap">
                              {plan.price}
                            </div>
                            <div className="font-['Montserrat',Helvetica] font-normal text-white text-lg leading-normal whitespace-nowrap">
                              /month
                            </div>
                          </div>
                        </div>

                        <Button
                          className="w-full h-[61px] bg-[#bfff00] text-black rounded-[1000px] font-['Montserrat',Helvetica] font-bold text-xl"
                          aria-label={`Get started with the ${plan.title} plan`}
                        >
                          Get Started
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 w-full">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-[5px] w-full"
                        >
                          <CheckIcon
                            className="w-6 h-6 text-white"
                            aria-hidden="true"
                          />
                          <div className="flex items-center px-2.5 py-0">
                            <div className="font-['Montserrat',Helvetica] font-normal text-white text-lg leading-7">
                              {feature}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
