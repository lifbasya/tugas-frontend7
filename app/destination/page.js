"use client";

import { useState } from "react";

const planetPlanet = [
  {
    photoPlanet: "moon.png",
    name: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400",
    travelDays: "3 days",
  },
  {
    photoPlanet: "mars.png",
    name: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL.",
    travelDays: "9 months",
  },
  {
    photoPlanet: "europa.png",
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL.",
    travelDays: "3 years",
  },
  {
    photoPlanet: "titan.png",
    name: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL.",
    travelDays: "7 years",
  },
];

export default function Destination() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentPlanet = planetPlanet[activeIndex];

  return (
    <main className="bg-[url('/bg-destination.jpg')] bg-cover min-h-screen flex flex-col items-center px-6 md:px-16 lg:px-52 pt-28 md:pt-36 xl:pt-28 pb-12">
      {/* Top Title */}
      <p className="condensed text-xl sm:text-2xl tracking-[4px] text-white mb-12 text-center md:text-left self-start">
        <span className="font-bold opacity-25 mr-2">01</span> PICK YOUR DESTINATION
      </p>

      {/* Planet Section */}
      <section className="flex flex-col xl:flex-row items-center justify-between gap-16 w-full max-w-5xl">
        {/* Planet Image */}
        <div className="flex justify-center">
          <img
            src={`/${currentPlanet.photoPlanet}`}
            alt={currentPlanet.name}
            className="w-[200px] sm:w-[300px] md:w-[350px] lg:w-[440px]"
          />
        </div>

        {/* Planet Info */}
        <div className="flex flex-col items-center xl:items-start max-w-[453px] text-center xl:text-left">
          {/* Tabs */}
          <ul className="flex gap-8 mb-6 text-white text-lg tracking-[2px] condensed">
            {planetPlanet.map((planet, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer hover:text-blue-200 ${
                  activeIndex === index ? "border-b-2 pb-1" : ""
                }`}
              >
                {planet.name}
              </li>
            ))}
          </ul>

          {/* Planet Name */}
          <h1 className="text-white text-6xl sm:text-7xl md:text-8xl mt-2">
            {currentPlanet.name}
          </h1>

          {/* Description */}
          <p className="text-blue-200 text-sm sm:text-lg mt-6 leading-7 max-w-prose">
            {currentPlanet.description}
          </p>

          {/* Divider */}
          <hr className="bg-white w-full opacity-25 mt-6" />

          {/* Distance & Travel Time */}
          <div className="flex flex-wrap justify-center md:gap-32 xl:justify-start gap-14 lg:gap-24 mt-6 w-full text-white">
            <div className="flex flex-col">
              <p className="text-blue-200 text-sm condensed tracking-[2px]">AVG. DISTANCE</p>
              <h2 className="text-2xl mt-2">{currentPlanet.distance} KM</h2>
            </div>
            <div className="flex flex-col">
              <p className="text-blue-200 text-sm condensed tracking-[2px]">EST. TRAVEL TIME</p>
              <h2 className="text-2xl mt-2">{currentPlanet.travelDays}</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
