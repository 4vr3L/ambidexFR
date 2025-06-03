import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TeamSection = () => {
  return (
    <section className="relative w-full py-16">
      <div className="flex flex-col items-center mb-16">
        <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-[40px]">
          Team
        </h2>
        <img
          className="w-[94px] h-[19px] mt-2"
          alt="Decorative underline"
          src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2048.svg"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {/* First Column - Experience */}
        <Card className="bg-transparent border-none">
          <CardContent className="flex flex-col items-center p-0">
            <div className="relative w-full">
              <div className="font-['Montserrat',Helvetica] font-normal text-[79px] leading-[73.3px]">
                <span className="font-bold text-white">
                  years of
                  <br />
                  collective
                  <br />
                </span>
                <span className="text-[#bfff00]">experience</span>
              </div>
              <div className="font-['Montserrat',Helvetica] font-medium text-[#bfff00] text-[213.2px] leading-normal mt-4">
                40+
              </div>
            </div>
            <img
              className="w-[379px] h-[269px] mt-4"
              alt="Decorative vector"
              src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2032.svg"
            />
          </CardContent>
        </Card>

        {/* Second Column - Client Rating */}
        <Card className="bg-transparent border-none">
          <CardContent className="flex flex-col items-center p-0 gap-12">
            <img
              className="w-[325px] h-[251px]"
              alt="Decorative vector"
              src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2033.svg"
            />
            <div className="relative">
              <div className="font-['Montserrat',Helvetica] font-bold text-white text-[213.2px] leading-normal whitespace-nowrap">
                4.8
              </div>
              <img
                className="absolute w-[132px] h-[116px] top-[75px] right-0"
                alt="Star"
                src="https://c.animaapp.com/mbefdp65f3u1c4/img/star-5.svg"
              />
            </div>
            <div className="relative w-full">
              <div className="font-['Montserrat',Helvetica] font-medium text-white text-[79px] leading-[73.3px]">
                client
                <br />
                rating
              </div>
              <img
                className="absolute w-48 h-[215px] top-0 right-0"
                alt="Group"
                src="https://c.animaapp.com/mbefdp65f3u1c4/img/group-32.png"
              />
            </div>
          </CardContent>
        </Card>

        {/* Third Column - Development Stacks */}
        <Card className="bg-transparent border-none">
          <CardContent className="flex flex-col items-center p-0 gap-14">
            <div className="relative">
              <div className="font-['Montserrat',Helvetica] font-normal text-[213.2px] leading-[63.2px]">
                <span className="font-bold text-white">25</span>
                <span className="font-bold text-[#bfff00]">+</span>
              </div>
              <div className="font-['Montserrat',Helvetica] font-medium text-[#bfff00] text-[65.9px] leading-[19.6px] mt-36">
                {'</>'}
              </div>
              <div className="absolute top-[57px] right-0 rotate-[-11.53deg]">
                <div className="relative">
                  <div className="absolute top-[123px] left-[68px]">
                    <div className="flex items-center justify-center px-10 py-3 bg-black rounded-full rotate-[8.40deg]">
                      <div className="font-['Montserrat',Helvetica] font-medium text-[#bfff00] text-[46.2px] leading-[59.1px] whitespace-nowrap">
                        stacks
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center px-10 py-3 bg-[#bfff00] rounded-full rotate-[18.14deg]">
                    <div className="font-['Montserrat',Helvetica] font-medium text-black text-[46.2px] leading-[59.1px] whitespace-nowrap">
                      development
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-36">
              <div className="font-['Montserrat',Helvetica] font-normal text-[79px] leading-[73.3px]">
                <span className="font-bold text-white">
                  highly
                  <br />
                </span>
                <span className="text-[#bfff00]">
                  motivated
                  <br />
                </span>
                <span className="font-medium text-white">
                  group of <br />
                  people
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
