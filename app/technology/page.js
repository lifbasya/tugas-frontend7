'use client';
import { useState } from "react";

// ⬅️ Taruh di luar komponen
const technologyData = [
  {
    photoTechnology: "launch.jpg",
    name: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    photoTechnology: "space.jpg",
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

  return (
    <main className="bg-[url('/bg-technology.jpg')] bg-cover h-screen flex flex-col items-end justify-center">
      <p className="condensed text-2xl tracking-[4px] mb-2 fixed top-[8rem] left-[11rem]">
        <span className="font-bold opacity-25 mr-2">03</span> SPACE LAUNCH 101
      </p>

      <section className="flex flex-col justify-center items-center mt-20">
        <div className="flex justify-center items-center gap-28">
          {/* Left Numbered Tabs */}
          <div className="flex flex-col gap-8">
            {technologyData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-2xl tracking-[2px] w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300
                  ${
                    activeIndex === index
                      ? "bg-white text-black"
                      : "border border-white text-white opacity-45 hover:opacity-75"
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-start justify-center w-full max-w-[543px]">
            <h2 className="text-white opacity-50 text-2xl">THE TERMINOLOGY…</h2>
            <h1 className="text-white text-6xl mt-3">{technologyData[activeIndex].name}</h1>
            <p className="text-blue-200 text-[16px] mt-6">
              {technologyData[activeIndex].description}
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src={`/${technologyData[activeIndex].photoTechnology}`}
              alt={technologyData[activeIndex].name}
              className="w-[428px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
