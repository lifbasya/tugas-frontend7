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
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
];

export default function Crew() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCrew = crewMembers[activeIndex];

  return (
    <main className="bg-[url('/bg-crew.jpg')] bg-cover h-screen grid place-items-center">
      <p className="condensed text-2xl tracking-[4px] mb-2 fixed top-[8rem] left-[11rem]">
        <span className="font-bold opacity-25 mr-2">02</span> MEET YOUR CREW
      </p>
      <section className="flex flex-col justify-center items-start mt-24 scale-[0.9]">
        <div className="flex gap-20">
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center w-full max-w-[539px]">
            <h2 className=" text-white opacity-50 text-3xl">
              {activeCrew.role}
            </h2>
            <h1 className="text-white text-6xl mt-4">{activeCrew.name}</h1>
            <p className="text-blue-200 text-[18px] mt-6">
              {activeCrew.description}
            </p>

            {/* Dot navigation */}
            <div className="flex gap-5 mt-20">
              {crewMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    index === activeIndex ? "bg-white" : "bg-white opacity-25"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={`/${activeCrew.photoCrew}`}
              alt={activeCrew.name}
              className="w-[400px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
