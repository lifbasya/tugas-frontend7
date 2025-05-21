"use client";
import { useState } from "react";

const technologyData = [
  {
    photoTechnology: "launch.png",
    name: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    photoTechnology: "space.png",
    name: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    photoTechnology: "capsule.png",
    name: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses aerodynamic drag and parachutes to land gently in an ocean or on land. The capsule is where you’ll spend your time during the flight. It includes life support and navigation systems, as well as a space for you to rest and store your luggage.",
  },
];

export default function Technology() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = technologyData[activeIndex];

  return (
    <main className="bg-[url('/bg-technology.jpg')] bg-cover min-h-screen w-full text-white md:pt-8 xl:pt-0">
      {/* Title */}
      <p className="condensed text-xl sm:text-2xl tracking-[4px] pt-28 px-6 md:px-16 lg:px-52">
        <span className="font-bold opacity-25 mr-2">03</span> SPACE LAUNCH 101
      </p>

      {/* Content Layout */}
      <section className="flex flex-col-reverse xl:flex-row items-center lg:items-center justify-end w-full mt-10 md:mt-24 lg:mt-14">
        {/* Left Section */}
        <div className="flex flex-col xl:flex-row py-14 gap-14 xl:gap-14 2xl:gap-24 px-8 sm:px-20 lg:px-44 lg:py-18 xl:px-18 2xl:px-36">
          {/* Numbered Navigation */}
          <div className="flex xl:flex-col gap-6 items-center xl:items-start justify-center">
            {technologyData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-white text-black"
                    : "border border-white text-white opacity-30 hover:opacity-80"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Description */}
          <div className="max-w-[524px] xl:max-w-[520px] text-center xl:text-left">
            <h3 className="uppercase text-2xl tracking-[2px] mb-2 opacity-50">
              The Terminology…
            </h3>
            <h1 className="text-4xl sm:text-5xl mb-4">{activeItem.name}</h1>
            <p className="text-blue-200 text-base leading-7">
              {activeItem.description}
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full xl:w-[440px]">
          <img
            src={`/${activeItem.photoTechnology}`}
            alt={activeItem.name}
            className="w-full h-auto lg:h-[440px] object-cover"
          />
        </div>
      </section>
    </main>
  );
}
