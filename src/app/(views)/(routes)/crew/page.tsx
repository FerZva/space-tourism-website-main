"use client";
import React, { useState } from "react";
import { crewMembers } from "@/app/lib/data";
import Image from "next/image";

const Crew = () => {
  const [activeCrewMember, setActiveCrewMember] = useState(crewMembers[0]);

  return (
    <div className="relative bg-[url('/background-crew-mobile.jpg')] md:bg-[url('/background-crew-tablet.jpg')] lg:bg-[url('/background-crew-desktop.jpg')] bg-cover bg-no-repeat bg-center min-h-screen pt-25 md:pt-40 px-4">
      <div className="flex gap-4 items-center text-white uppercase text-lg tracking-[2.7px] font-barlow-condensed mb-12 md:pl-40">
        <span className="text-gray-500 font-bold">02</span>
        <h2>MEET YOUR CREW</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-end lg:items-start text-white gap-10 lg:px-40 text-center lg:text-left min-h-full">
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start gap-6 max-w-xl">
          <h3 className="text-xl text-gray-400 uppercase font-bellefair">
            {activeCrewMember.role}
          </h3>
          <h1 className="text-5xl md:text-6xl uppercase font-bellefair">
            {activeCrewMember.name}
          </h1>
          <p className="text-[#D0D6F9] text-base font-barlow leading-7">
            {activeCrewMember.bio}
          </p>

          {/* Tabs */}
          <div className="flex gap-4 mt-8">
            {crewMembers.map((member) => (
              <button
                key={member.name}
                onClick={() => setActiveCrewMember(member)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeCrewMember.name === member.name
                    ? "bg-white"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center items-end lg:justify-end lg:items-end">
          <Image
            src={activeCrewMember.imageUrl}
            alt={activeCrewMember.name}
            width={432}
            height={1200}
            className="object-contain min-h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
