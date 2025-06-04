import React from "react";

export const HeroSection = () => {
  return (
    <section className="flex justify-center items-center py-16 w-full mt-12">
      <div className="flex flex-col items-center max-w-4xl">
        <h1 className="font-['Montserrat',Helvetica] text-center text-5xl">
          <span className="font-extrabold text-white">
            Transformez votre vision
            <br />
            en{" "}
          </span>
          <span className="font-extrabold text-[#bfff00]">
            réalité digitale.
          </span>
        </h1>

        <div className="relative mt-4 mb-8 w-full flex justify-center">
          <img
            className="w-[324px] h-11"
            alt="Decorative curved line"
            src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2.svg"
          />
        </div>

        <p className="font-['Montserrat',Helvetica] text-center text-2xl">
          <span className="font-thin text-white">
            Trouvez le bon développeur en{" "}
          </span>
          <span className="font-bold text-white">un clic!</span>
        </p>
      </div>
    </section>
  );
};
