"use client";

import React, { useState } from "react";
import { destinations } from "@/app/lib/data";
import Image from "next/image";

const Destination = () => {
  const [activeDestination, setActiveDestination] = useState(destinations[0]);

  return (
    <div className="relative bg-[url('/background-destination-mobile.jpg')] md:bg-[url('/background-destination-tablet.jpg')] lg:bg-[url('/background-destination-desktop.jpg')] bg-cover bg-no-repeat bg-center min-h-screen pt-25 md:pt-40 px-4">
      {/* Header */}
      <div className="flex gap-4 items-center text-white uppercase text-lg tracking-[2.7px] font-barlow-condensed mb-12 md:pl-40">
        <span className="text-gray-500 font-bold">01</span>
        <h2>PICK YOUR DESTINATION</h2>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:place-items-end h-full text-center text-white font-bellefair gap-10 z-20">
        {/* Image */}
        <div className="flex justify-center m-auto">
          <Image
            src={activeDestination.imageUrl}
            alt={activeDestination.name}
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>

        {/* Destination Info */}
        <div className="flex flex-col items-center lg:items-start gap-6 max-w-md m-auto">
          {/* Tabs/Menu */}
          <div className="flex m-auto gap-6 text-sm font-barlow-condensed tracking-[2.5px] text-gray-400">
            {destinations.map((dest) => (
              <button
                key={dest.name}
                onClick={() => setActiveDestination(dest)}
                className={`pb-2 border-b-2 transition-all duration-300 ${
                  activeDestination.name === dest.name
                    ? "border-white text-white"
                    : "border-transparent hover:border-gray-500"
                }`}
              >
                {dest.name}
              </button>
            ))}
          </div>

          {/* Info */}
          <h1 className="text-8xl m-auto">{activeDestination.name}</h1>
          <p className="text-[#D0D6F9] text-base font-barlow leading-7">
            {activeDestination.description.replace(/&apos;/g, "'")}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-gray-700 my-6" />

          {/* Stats */}
          <div className="flex justify-between w-full text-center uppercase text-sm font-barlow-condensed tracking-widest">
            <div>
              <p className="text-[#D0D6F9]">Avg. distance</p>
              <p className="text-2xl text-white">
                {activeDestination.distance}
              </p>
            </div>
            <div>
              <p className="text-[#D0D6F9]">Est. travel time</p>
              <p className="text-2xl text-white">
                {activeDestination.travelTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
