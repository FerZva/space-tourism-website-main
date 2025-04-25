"use client";
import React, { useState } from "react";
import { technology } from "@/app/lib/data";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Technology = () => {
  const [activeTech, setActiveTech] = useState(technology[0]);

  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  return (
    <div className="bg-[url('/background-technology-mobile.jpg')] md:bg-[url('/background-technology-tablet.jpg')] lg:bg-[url('/background-technology-desktop.jpg')] bg-cover bg-no-repeat bg-center min-h-screen pt-20 md:pt-32 px-4">
      {/* Header */}
      <div className="flex gap-4 items-center text-white uppercase text-lg tracking-[2.7px] font-barlow-condensed mb-12 md:pl-40">
        <span className="text-gray-500 font-bold">03</span>
        <h2>SPACE LAUNCH 101</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 items-center text-white lg:px-40 gap-10">
        {/* Image */}
        <div className="w-full order-1 lg:order-2">
          <Image
            src={
              isMobile
                ? activeTech.images.landscape
                : activeTech.images.portrait
            }
            alt={activeTech.name}
            width={600}
            height={600}
            className="w-full h-auto object-contain mx-auto"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-10 order-2 lg:order-1">
          {/* Tabs (numbers) */}
          <div className="flex lg:flex-col justify-center items-center gap-6">
            {technology.map((tech, index) => (
              <button
                key={tech.name}
                onClick={() => setActiveTech(tech)}
                className={`w-12 h-12 rounded-full border border-white text-white text-xl font-bellefair transition-all duration-300 ${
                  activeTech.name === tech.name
                    ? "bg-white text-black"
                    : "bg-transparent hover:bg-white/20"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Info */}
          <div className="flex flex-col text-center lg:text-left gap-4">
            <p className="text-[#D0D6F9] uppercase text-sm font-barlow-condensed tracking-[2.7px]">
              The terminology...
            </p>
            <h1 className="text-4xl md:text-6xl uppercase font-bellefair">
              {activeTech.name}
            </h1>
            <p className="text-[#D0D6F9] text-base font-barlow leading-7 max-w-lg">
              {activeTech.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
