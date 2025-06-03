import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";

export const ContactSection = () => {
  const [selectedOption, setSelectedOption] = useState("project");
  const [selectedCountry, setSelectedCountry] = useState("");

  const formFields = [
    { id: "company", label: "Company's name", placeholder: "Name" },
    { id: "contact", label: "Phone / Email", placeholder: "Phone / Email" },
  ];

  const radioOptions = [
    { id: "project", label: "Project" },
    { id: "platform", label: "Platform" },
  ];

  const contactInfo = [
    { type: "Email", value: "info@positivus.com" },
    { type: "Phone", value: "555-567-8901" },
  ];

  return (
    <section className="w-full py-16">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-[40px] text-white font-['Montserrat',Helvetica] mb-4">
          Contact Us
        </h2>
        <img
          className="w-[186px] h-[29px] mb-12"
          alt="Decorative line"
          src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2053.svg"
        />

        <div className="w-full max-w-[1240px] px-[100px]">
          <Card className="bg-black rounded-[45px] border border-solid border-[#bfff003b]">
            <CardContent className="flex flex-wrap gap-[72px] pt-[60px] pb-20 px-[100px]">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-[25px]">
                  {formFields.map((field) => (
                    <div key={field.id} className="flex flex-col gap-[5px]">
                      <Label
                        htmlFor={field.id}
                        className="font-normal text-white text-base leading-7 font-['Montserrat',Helvetica]"
                      >
                        {field.label}
                      </Label>
                      <Input
                        id={field.id}
                        placeholder={field.placeholder}
                        className="w-[556px] px-[30px] py-[18px] bg-black text-white text-lg rounded-[14px] border border-solid border-[#bfff0080] font-['Montserrat',Helvetica] font-normal"
                      />
                    </div>
                  ))}

                  <div className="flex items-start gap-[41px]">
                    <div className="flex flex-col gap-[5px]">
                      <Label
                        htmlFor="country"
                        className="font-normal text-white text-base leading-7 font-['Montserrat',Helvetica]"
                      >
                        Country
                      </Label>
                      <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                        <SelectTrigger className="w-[257px] px-[30px] py-[18px] bg-black text-white text-lg rounded-[14px] border border-solid border-[#bfff0080] font-['Montserrat',Helvetica] font-normal">
                          <SelectValue placeholder="Country" />
                          <ChevronDownIcon className="h-[8.06px] w-[14.71px]" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex flex-col gap-[5px]">
                      <Label
                        htmlFor="linkedin"
                        className="font-normal text-white text-base leading-7 font-['Montserrat',Helvetica]"
                      >
                        LinkedIn*
                      </Label>
                      <Input
                        id="linkedin"
                        placeholder="LinkedIn"
                        className="w-[257px] px-[30px] py-[18px] bg-black text-white text-lg rounded-[14px] border border-solid border-[#bfff0080] font-['Montserrat',Helvetica] font-normal"
                      />
                    </div>
                  </div>
                </div>

                <RadioGroup
                  value={selectedOption}
                  onValueChange={setSelectedOption}
                  className="flex items-start gap-[35px]"
                >
                  {radioOptions.map((option) => (
                    <div key={option.id} className="flex items-center gap-[15px]">
                      <div className="relative w-7 h-7">
                        <div className={`relative w-[30px] h-[30px] bg-black rounded-[29px] border border-solid border-[#bfff00]`}>
                          {selectedOption === option.id && (
                            <div className="absolute w-4 h-4 top-1.5 left-1.5 bg-[#bfff00] rounded-lg" />
                          )}
                        </div>
                      </div>
                      <Label
                        htmlFor={option.id}
                        className="font-p text-white text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)]"
                      >
                        {option.label}
                      </Label>
                      <RadioGroupItem value={option.id} id={option.id} className="sr-only" />
                    </div>
                  ))}
                </RadioGroup>

                <Button className="w-[556px] h-[61px] bg-[#bfff00] rounded-[1000px] text-black text-xl font-bold font-['Montserrat',Helvetica]">
                  Get Started
                </Button>
              </div>

              <div className="flex flex-col w-[450px] gap-[18px]">
                <div className="p-2.5 h-[409px]">
                  <img
                    className="w-full h-[380.78px]"
                    alt="Contact illustration"
                    src="https://c.animaapp.com/mbefdp65f3u1c4/img/fgjghjghj-1.png"
                  />
                </div>

                <div className="flex flex-col gap-[21px] w-[237px]">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="font-medium text-white text-lg leading-normal font-['Montserrat',Helvetica]"
                    >
                      {info.type}: {info.value}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
