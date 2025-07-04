import React from "react";
import { useState } from "react"
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select"

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    linkedin: "",
    serviceType: "", // 'project' or 'platform'
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const inputStyles = `
    w-full px-6 py-4 
    bg-[#0A0A0A] 
    text-white text-base 
    rounded-[14px] 
    border-[1px] border-solid border-[#bfff0040] 
    font-['Montserrat',Helvetica] 
    font-normal 
    placeholder:text-gray-500 
    focus:border-[#bfff00] 
    focus:ring-1 
    focus:ring-[#bfff00] 
    focus:bg-[#0A0A0A]
    focus:outline-none
    active:bg-[#0A0A0A]
    hover:bg-[#0A0A0A]
    transition-all duration-300 
    hover:border-[#bfff0080] 
    shadow-sm shadow-[#bfff0020]
    [&:not(:focus)]:bg-[#0A0A0A]
  `
    .replace(/\s+/g, " ")
    .trim()

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "France",
    "Germany",
    "Spain",
    "Italy",
    "Netherlands",
    "Australia",
    "Japan",
    "South Korea",
    "Brazil",
    "Mexico",
    "Argentina",
    "India",
    "China",
    "Russia",
    "Other",
  ]

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      console.log("Form submitted:", formData)

      // Here you would typically send the data to your backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // Simulate success
      await new Promise((resolve) => setTimeout(resolve, 1000))

      alert("Message sent successfully!")

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        country: "",
        linkedin: "",
        serviceType: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Error sending message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full py-8 sm:py-12 md:py-16">
      <div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-[40px]">Contact Us</h2>
          <img
            className="w-[246px] h-[22px] mt-3"
            alt="Decorative underline"
            src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2046.svg"
          />
        </div>

        <div className="w-full max-w-[1240px]">
          <Card className="bg-[#000000] rounded-[45px] border border-solid border-[#bfff003b] shadow-[0_0_20px_rgba(191,255,0,0.15)]">
            <CardContent className="flex flex-col lg:flex-row justify-between gap-8 p-8 sm:p-12">
              {/* Form Section */}
              <div className="flex flex-col gap-6 w-full lg:w-[60%]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <Input
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className={inputStyles}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Input
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className={inputStyles}
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <Input
                        placeholder="Enter your mobile no."
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className={inputStyles}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Input
                        placeholder="Enter your e-mail"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={inputStyles}
                        required
                      />
                    </div>
                  </div>

                  {/* Country and LinkedIn */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                        <SelectTrigger className={`${inputStyles} flex justify-between items-center`}>
                          <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0A0A0A] border-[#bfff0040] text-white">
                          {countries.map((country) => (
                            <SelectItem
                              key={country}
                              value={country}
                              className="hover:bg-[#bfff0020] focus:bg-[#bfff0020]"
                            >
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Input
                        placeholder="LinkedIn Profile (Optional)"
                        value={formData.linkedin}
                        onChange={(e) => handleInputChange("linkedin", e.target.value)}
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  {/* Service Type Radio Buttons */}
                  <div className="flex flex-col gap-4">
                    <label className="text-white font-['Montserrat',Helvetica] font-medium text-lg">
                      What are you looking for?
                    </label>
                    <div className="flex gap-8">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <div className="relative">
                          <input
                            type="radio"
                            name="serviceType"
                            value="project"
                            checked={formData.serviceType === "project"}
                            onChange={(e) => handleInputChange("serviceType", e.target.value)}
                            className="sr-only"
                            required
                          />
                          <div
                            className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                              formData.serviceType === "project"
                                ? "border-[#bfff00] bg-[#bfff00]"
                                : "border-[#bfff0040] bg-transparent"
                            }`}
                          >
                            {formData.serviceType === "project" && (
                              <div className="w-3 h-3 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            )}
                          </div>
                        </div>
                        <span className="text-white font-['Montserrat',Helvetica] text-base">Project</span>
                      </label>

                      <label className="flex items-center gap-3 cursor-pointer">
                        <div className="relative">
                          <input
                            type="radio"
                            name="serviceType"
                            value="platform"
                            checked={formData.serviceType === "platform"}
                            onChange={(e) => handleInputChange("serviceType", e.target.value)}
                            className="sr-only"
                            required
                          />
                          <div
                            className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                              formData.serviceType === "platform"
                                ? "border-[#bfff00] bg-[#bfff00]"
                                : "border-[#bfff0040] bg-transparent"
                            }`}
                          >
                            {formData.serviceType === "platform" && (
                              <div className="w-3 h-3 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            )}
                          </div>
                        </div>
                        <span className="text-white font-['Montserrat',Helvetica] text-base">Platform</span>
                      </label>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-2">
                    <Textarea
                      placeholder="Write message..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={`${inputStyles} min-h-[120px] resize-none !bg-[#0A0A0A]`}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-[61px] bg-[#bfff00] hover:bg-[#a8e600] rounded-full text-black text-lg font-bold font-['Montserrat',Helvetica] transition-all duration-300 hover:shadow-lg hover:shadow-[#bfff0040] transform hover:-translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Help Section */}
              <div className="flex items-start justify-center w-full lg:w-[40%] pt-8 lg:pt-0">
                <div className="relative group">
                  {/* Main Chat Card */}
                  <div className="relative w-[340px] h-[240px] bg-[#0A0A0A] rounded-[30px] border border-[#bfff0020] overflow-hidden backdrop-blur-sm transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(191,255,0,0.15)] group-hover:border-[#bfff0040]">
                    {/* Chat Bubbles Animation */}
                    <div className="absolute inset-0">
                      {/* Animated Chat Bubble 1 */}
                      <div className="absolute left-8 bottom-8 w-32 h-16 bg-[#bfff0008] rounded-3xl border border-[#bfff0020] transform transition-all duration-500 group-hover:border-[#bfff0040] animate-float-1">
                        <div className="absolute -bottom-3 left-4 w-4 h-4 bg-[#0A0A0A] border-b border-r border-[#bfff0020] transform rotate-45 group-hover:border-[#bfff0040]"></div>
                      </div>

                      {/* Animated Chat Bubble 2 */}
                      <div className="absolute right-10 top-8 w-40 h-20 bg-[#bfff0008] rounded-3xl border border-[#bfff0020] transform transition-all duration-500 group-hover:border-[#bfff0040] animate-float-2">
                        <div className="absolute -top-3 right-6 w-4 h-4 bg-[#0A0A0A] border-t border-r border-[#bfff0020] transform rotate-45 group-hover:border-[#bfff0040]"></div>
                      </div>

                      {/* Typing Animation Dots */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3">
                        <div className="w-3 h-3 bg-[#bfff00] rounded-full animate-typing-1 opacity-40"></div>
                        <div className="w-3 h-3 bg-[#bfff00] rounded-full animate-typing-2 opacity-40"></div>
                        <div className="w-3 h-3 bg-[#bfff00] rounded-full animate-typing-3 opacity-40"></div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#bfff0005] to-transparent"></div>
                      <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-[#bfff0005] to-transparent"></div>
                    </div>
                  </div>

                  {/* Help Text Bubble */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#bfff00] to-[#9eff00] text-black px-6 py-3 rounded-2xl font-medium text-base z-10 transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="relative">
                      Need Help? Ask!
                      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-10 rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
