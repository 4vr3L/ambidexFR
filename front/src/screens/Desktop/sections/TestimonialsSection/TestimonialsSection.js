import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const TestimonialsSection = () => {
  // FAQ questions and answers data
  const faqItems = [
    {
      question: "Quels services proposez-vous?",
      answer: "",
    },
    {
      question: "Quels sont vos tarifs pour un site web ou une app mobile?",
      answer: "",
    },
    {
      question: "Quelle est la durée moyenne de réalisation d'un projet?",
      answer: "",
    },
    {
      question: "Offrez-vous des services de maintenance après livraison?",
      answer: "",
    },
    {
      question: "Comment gérez-vous la sécurité des données?",
      answer: "",
    },
    {
      question: "Travaillez-vous avec des entreprises de toutes tailles?",
      answer: "",
    },
    {
      question:
        "Quels langages de programmation et technologies utilisez-vous?",
      answer: "",
    },
    {
      question: "Comment assurez-vous la qualité de vos développements?",
      answer: "",
    },
    {
      question: "Proposez-vous des solutions d'hébergement pour les sites web?",
      answer: "",
    },
    {
      question: "Comment puis-je suivre l'avancement de mon projet?",
      answer: "",
    },
  ];

  return (
    <section className="w-full max-w-[1233px] mx-auto py-16">
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-[40px]">
          FAQ
        </h2>
        <img
          className="w-[72px] h-[19px] mt-2"
          alt="Vector"
          src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2052.svg"
        />
      </div>

      <Accordion type="single" collapsible className="w-full space-y-5">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-black rounded-[45px] border border-solid border-[#bfff003b] px-[52px] py-5"
          >
            <AccordionTrigger className="font-['Montserrat',Helvetica] font-bold text-white text-3xl hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-white">
              {item.answer || "Contenu à venir..."}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
