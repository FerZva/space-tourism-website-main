import React from "react";

const Hero = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:place-items-end h-screen text-center text-white font-bellefair">
      {/* Description */}
      <div className="text-center lg:text-left px-16 mt-25 md:mt-40 lg:p-40">
        <h1 className="text-[10px]  md:text-[18px] leading-[32px] font-barlow uppercase tracking-[2.7px]">
          So, you want to travel to
        </h1>
        <h2 className="text-[80px] lg:text-[150px] leading-[150px] font-bellefair md:my-10">
          SPACE
        </h2>
        <p className="text-[12px] md:text-[18px] leading-[20px] md:leading-[32px] font-barlow">
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well, sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>
      {/* Explore button */}
      <div className="rounded-full p-5 lg:p-25 lg:m-15 group hover:bg-white/10 transition-all duration-200">
        <button className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] bg-white rounded-full flex items-center justify-center text-[32px] font-bellefair uppercase tracking-[2.7px] cursor-pointer group-hover:bg-neutral-200 transition-all duration-300 text-black">
          <span>EXPLORE</span>
        </button>
      </div>
    </main>
  );
};

export default Hero;
