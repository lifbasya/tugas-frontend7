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
    <main className="bg-[url('/bg-destination.jpg')] bg-cover h-screen grid place-items-center">
      <p className="condensed text-2xl tracking-[4px] mb-2 fixed top-[8rem] left-[11rem]">
        <span className="font-bold opacity-25 mr-2">01</span> PICK YOUR
        DESTINATION
      </p>
      <section className="flex flex-col justify-center items-start mt-32 scale-[0.9]">
        <div className="flex gap-20">
          <div>
            <img
              src={`/${currentPlanet.photoPlanet}`}
              alt={currentPlanet.name}
              className="w-[440px]"
            />
          </div>

          <div className="flex flex-col items-start justify-center w-full max-w-[445px]">
            <ul className="flex gap-10 mb-6">
              {planetPlanet.map((planet, index) => (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`text-white condensed text-xl tracking-[2px] cursor-pointer hover:text-blue-200 ${
                    activeIndex === index ? "border-b-2 pb-1" : ""
                  }`}
                >
                  {planet.name}
                </li>
              ))}
            </ul>

            <h1 className="text-white text-8xl mt-2">{currentPlanet.name}</h1>
            <p className="text-blue-200 text-[18px] mt-6">
              {currentPlanet.description}
            </p>

            <hr className="bg-white w-full opacity-25 mt-6" />

            <div className="flex justify-between items-start mt-6 w-full">
              <div className="flex flex-col">
                <p className="text-blue-200 text-lg condensed tracking-[2px]">
                  AVG. DISTANCE
                </p>
                <h2 className="text-white text-3xl mt-3">
                  {currentPlanet.distance} KM
                </h2>
              </div>
              <div className="flex flex-col">
                <p className="text-blue-200 text-lg condensed tracking-[2px]">
                  EST. TRAVEL TIME
                </p>
                <h2 className="text-white text-3xl mt-3">
                  {currentPlanet.travelDays}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
