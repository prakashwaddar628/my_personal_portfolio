import Image from 'next/image'
import React from 'react'

export default function Landing() {
  return (
    <div className="flex items-center justify-center min-h-[580px] px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="text-white space-y-6 animate-fadeIn">
          <h1 className="text-5xl font-extrabold leading-tight">
            Welcome to <span className="text-cyan-400">Prakash's Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Hi, I'm Prakash — a passionate full-stack developer who loves turning ideas into beautiful, functional web applications.
            Take a look around and let’s build something awesome together!
          </p>
          <a
            href="#projects"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-6 rounded-full transition duration-300"
          >
            View My Projects
          </a>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center animate-slideIn">
          <Image
            src="/images/prakash.png"
            alt="Prakash's Portfolio"
            width={320}
            height={320}
            className="rounded-full border-4 border-cyan-400 shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  )
}
