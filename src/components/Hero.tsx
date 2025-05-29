import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="flex items-center justify-center min-h-[550px] px-4 sm:px-6 md:px-10 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="text-white space-y-6 animate-fadeIn text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="text-cyan-400">Prakash's Portfolio</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200">
            Hi, I'm Prakash — a passionate full-stack developer who loves
            turning ideas into beautiful, functional web applications. Take a
            look around and let’s build something awesome together!
          </p>
          <a
            href="#projects"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-6 rounded-full transition duration-300"
          >
            View My Projects
          </a>
        </div>

        {/* Profile Image with Background Circle */}
        <div className="relative flex justify-center items-center animate-slideIn">
          {/* Circle */}
          <div className="absolute w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] rounded-full bg-cyan-900 opacity-40 z-0"></div>

          {/* Image */}
          <Image
            src="/images/prakash.png"
            alt="Prakash's Portfolio"
            width={320}
            height={320}
            className="rounded-full 
            border-b-4 border-cyan-400 shadow-lg 
            relative z-10 object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
