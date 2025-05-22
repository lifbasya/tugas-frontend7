"use client";

import { useState } from "react";

const crewMembers = [
  {
    photoCrew: "doug.png",
    name: "DOUGLAS HURLEY",
    role: "COMMANDER",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    photoCrew: "mark.png",
    name: "MARK SHUTTLEWORTH",
    role: "MISSION SPECIALIST",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    photoCrew: "victor.png",
    name: "VICTOR GLOVER",
    role: "PILOT",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
];

export default function Crew() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCrew = crewMembers[activeIndex];

  return (
    <main className="bg-[url('/bg-destination.jpg')] bg-cover min-h-screen flex flex-col items-center px-6 md:px-16 lg:px-52 pt-28 md:pt-36 xl:pt-28 pb-12">
      {/* Top Title */}
      <p className="condensed text-xl sm:text-2xl tracking-[4px] text-white mb-14 lg:mb-20 md:mb-24 xl:mb-16 2xl:mb-5 text-center md:text-left self-start">
        <span className="font-bold opacity-25 mr-2">02</span> MEET YOUR CREW
      </p>

      {/* Content Section */}
      <section className="flex flex-col-reverse xl:flex-row-reverse items-center justify-between gap-10 w-full max-w-4xl">
        {/* Crew Image */}
        <div className="flex justify-center w-full lg:w-auto">
          <img
            src={`/${activeCrew.photoCrew}`}
            alt={activeCrew.name}
            className="w-[250px] sm:w-[300px] md:w-[350px] xl:w-[593px] 2xl:w-[350px] object-contain"
          />
        </div>

        {/* Crew Info */}
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left max-w-[453px] md:max-w-[590px] xl:max-w-[500px] w-full">
          <h2 className="text-white opacity-50 text-xl sm:text-3xl uppercase">
            {activeCrew.role}
          </h2>
          <h1 className="text-white text-3xl sm:text-5xl mt-2 uppercase">
            {activeCrew.name}
          </h1>
          <p className="text-blue-200 text-base sm:text-lg mt-6 leading-7 max-w-prose">
            {activeCrew.description}
          </p>

          {/* Dot Navigation */}
          <div className="flex gap-5 mt-10 xl:mt-20">
            {crewMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3  rounded-full transition-opacity cursor-pointer ${
                  index === activeIndex
                    ? "bg-white"
                    : "bg-white opacity-25 hover:opacity-60"
                }`}
                aria-label={`Go to crew member ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

