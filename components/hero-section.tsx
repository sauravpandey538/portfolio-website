import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-6  min-h-[60vh] px-4 mt-16 md:mt-32">
      {/* Upper Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 w-full max-w-6xl mx-auto">
        {/* Left - Text */}
        <div className="flex-1 text-left space-y-4">
          <p className="text-secondary leading-loose text-base sm:text-lg">
            Hi, I’m{" "}
            <span className="font-semibold text-cyan-400">Saurav Pandey</span>,
            a Full-Stack <span className="font-semibold">PERN Developer</span>{" "}
            currently working with{" "}
            <span className="font-semibold">MigrantMinds</span>.
          </p>

          <p className="text-secondary leading-loose text-base sm:text-lg">
            Over the past years, I’ve been lucky to work on some exciting
            projects like <span className="font-semibold">TiffinBox</span> and{" "}
            <span className="font-semibold">MigrantMinds</span>.
          </p>

          <p className="text-secondary leading-loose text-base sm:text-lg">
            At <span className="font-semibold text-cyan-400">TiffinBox</span>, I
            was the sole developer responsible for building a full restaurant
            booking ecosystem — covering everything from customers and vendors
            to delivery partners and administrators.
          </p>

          <p className="text-secondary leading-loose text-base sm:text-lg">
            With{" "}
            <span className="font-semibold text-cyan-400">MigrantMinds</span>,
            I’m part of a team creating a platform that supports entrepreneurs,
            tech professionals, scientists, academicians, and artists in their
            journey to the UK through visas like the{" "}
            <span className="font-semibold">Global Talent Visa (GTV)</span> and{" "}
            <span className="font-semibold">Innovator Founder Visa (IFV)</span>.
          </p>

          <p className="text-secondary leading-loose text-base sm:text-lg">
            Beyond my professional work, I’ve also built personal projects
            including <span className="font-semibold">CodeSync</span>, a
            JavaScript compiler platform, and{" "}
            <span className="font-semibold">SchoolGrid</span>, a school
            management platform.
          </p>
        </div>

        {/* Right - Profile Image */}
        <div className=" w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
              <path
                d="M0.6,-0.8C0.8,-0.5,0.9,-0.2,0.8,0.1C0.7,0.4,0.4,0.8,0.1,0.8C-0.2,0.8,-0.5,0.5,-0.7,0.2C-0.9,-0.1,-0.9,-0.4,-0.7,-0.7C-0.5,-0.9,-0.2,-1,0.1,-1C0.4,-1,0.7,-0.9,0.6,-0.8Z"
                transform="translate(1 1) scale(1.2)"
              />
            </clipPath>
            <foreignObject width="200" height="200" clipPath="url(#blobClip)">
              <div className="w-full h-full">
                <Image
                  src="/pp.jpeg"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>

      {/* Bottom Content */}
      {/* <div className="text-center  w-full max-w-2xl mx-auto mt-">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Let's Build Something Great Together
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-300">
          I'm <span className="font-semibold">Saurav Pandey</span>, a{" "}
          <span className="font-semibold text-cyan-400">
            Full-Stack PERN Developer
          </span>
        </p>
        <button className="mt-6 px-6 py-3 rounded-lg bg-purple-600 text-white font-medium shadow-lg hover:bg-purple-700 transition">
          Explore My Work
        </button>
      </div> */}
    </div>
  );
}

export default HeroSection;
