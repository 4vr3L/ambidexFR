import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const FooterSection = () => {
  // Navigation links data
  const navLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

  return (
    <footer className="w-full px-[100px] py-0">
      <Card className="flex flex-col w-full items-start gap-[63px] pt-[60px] pb-20 px-[100px] bg-black rounded-[45px_45px_0px_0px] border-none">
        <CardContent className="p-0 w-full">
          <div className="flex flex-col items-start gap-[66px]">
            {/* Logo and Navigation */}
            <div className="flex w-full items-center justify-between">
              <img
                className="w-[172px] h-[34px] object-cover"
                alt="White on black"
                src="https://c.animaapp.com/mbefdp65f3u1c4/img/white-on-black-1.png"
              />

              <nav className="flex items-start gap-10">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-['Montserrat',Helvetica] font-normal text-white text-lg tracking-[0] leading-normal underline"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact and Subscribe Section */}
            <div className="flex justify-between w-full">
              {/* Contact Information */}
              <div className="flex flex-col items-start gap-[27px]">
                <div className="inline-flex flex-col items-start">
                  <div className="px-[7px] py-0 bg-[#bfff00] rounded-[7px]">
                    <h4 className="font-h-4 font-[number:var(--h-4-font-weight)] leading-[var(--h-4-line-height)] text-black text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] [font-style:var(--h-4-font-style)]">
                      Contact us:
                    </h4>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-5">
                  <address className="font-['Montserrat',Helvetica] font-normal text-white text-lg tracking-[0] leading-normal not-italic">
                    Address: 1234 Main St
                    <br />
                    Moonstone City, Stardust State 12345
                  </address>
                </div>
              </div>

              {/* Subscribe Form */}
              <div className="flex items-center gap-5 py-[58px]">
                <Input
                  className="w-[285px] px-[35px] py-[22px] rounded-[1000px] border border-solid border-[#bfff00] bg-transparent text-[#bfff00] font-p font-[number:var(--p-font-weight)] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]"
                  placeholder="Email"
                />
                <Button className="px-[35px] py-5 bg-[#bfff00] rounded-[1000px] font-['Montserrat',Helvetica] font-normal text-center leading-7 text-black text-xl tracking-[0]">
                  Subscribe to news
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col items-start gap-[50px] w-full mt-[63px]">
            <div className="flex items-start gap-10">
              <span className="font-['Montserrat',Helvetica] font-normal text-[#bfff00] text-lg tracking-[0] leading-7 whitespace-nowrap">
                © 2023 Positivus. All Rights Reserved.
              </span>

              <a
                href="#"
                className="font-['Montserrat',Helvetica] font-normal text-[#bfff00] text-lg tracking-[0] leading-7 underline whitespace-nowrap"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
};
