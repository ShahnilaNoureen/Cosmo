import React from 'react';
import about1 from "../assets/about2.jpg";
import hero2 from "../assets/hero2.jpg";
import { Link } from "react-router-dom";
import skin from "../assets/skin.png";
import lab from "../assets/lab.png";
import derma from "../assets/derma.png";
import vegan from "../assets/vegan.png";

function About() {
  return (
    <>
      {/* About Section */}
      <section className="py-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-25 min-h-screen">
        <div className="relative w-full max-w-xl">
          <div className="relative z-10 overflow-hidden">
            <img
              src={about1}
              alt="Product Application"
              className="w-full h-125 object-cover"
            />
          </div>
        </div>

        <div className="max-w-md z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] leading-tight mb-6">
            About Our Iconic<br />Cosmetic Products
          </h2>

          <p className="text-gray-500 text-md leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor. Donec consectetur nisi eu.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-md text-gray-600">
              <div className="shrink-0 w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              Makeup removes the signs of age.
            </li>
            <li className="flex items-center gap-3 text-md text-gray-600">
              <div className="shrink-0 w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              Skin condition can be improved by application.
            </li>
          </ul>

          <a href="#" className="group flex items-center gap-4 text-md font-bold tracking-[0.2em] uppercase text-gray-800 hover:text-[#c49b63]">
            Know More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#fdf9f4] py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="mb-6 text-[#1a1a1a]">
              <img src={vegan} />
            </div>
            <h3 className="text-2xl font-serif text-[#1a1a1a] mb-3 leading-tight">100% Natural<br />product</h3>
            <p className="text-md text-gray-500 leading-relaxed max-w-50">
              Lorem ipsum dolor sit amet, const adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-6 text-[#1a1a1a]">
              <img width="48" height="48" src={derma} alt="test-partial-passed" />
            </div>
            <h3 className="text-2xl font-serif text-[#1a1a1a] mb-3 leading-tight">Dermatologically<br />tested</h3>
            <p className="text-md text-gray-500 leading-relaxed max-w-50">
              Lorem ipsum dolor sit amet, const adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-6 text-[#1a1a1a]">
              <img width="50" height="50" src={lab} alt="lab-items" />
            </div>
            <h3 className="text-2xl font-serif text-[#1a1a1a] mb-3 leading-tight">Laboratory<br />tested</h3>
            <p className="text-md text-gray-500 leading-relaxed max-w-50">
              Lorem ipsum dolor sit amet, const adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-10 text-[#1a1a1a]">
              <img width="60" height="60" src={skin} alt="dermatology" />
            </div>
            <h3 className="text-2xl font-serif text-[#1a1a1a] mb-3 -mt-7 leading-tight">Gentle clean<br />skin</h3>
            <p className="text-md text-gray-500 leading-relaxed max-w-50">
              Lorem ipsum dolor sit amet, const adipiscing elit.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="text-center mb-16">
          <span className="text-[15px] tracking-widest text-gray-500 uppercase block mb-2">
            Who are you
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">
            Meet Our Team
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600"
              alt="Team Member wearing headscarf"
              className="w-full aspect-3/4 object-cover grayscale-10 hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600"
              alt="Male Team Member"
              className="w-full aspect-3/4 object-cover grayscale-10 hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600"
              alt="Female Team Member"
              className="w-full aspect-3/4 object-cover grayscale-10 hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Hero Video Section */}
      <section className="relative bg-[#fdf9f4] min-h-screen flex items-center overflow-hidden">
        <div className="relative w-full h-full flex flex-col lg:flex-row items-center">
          {/* Left Text */}
          <div className="z-20 w-full lg:w-1/2 px-8 md:px-24 py-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-black"></div>
              <span className="text-[10px] font-bold italic tracking-widest uppercase text-gray-700">
                Cosmetic Care Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] mb-10 leading-tight">
              Proud & Classic
            </h1>

            <button className="group flex items-center justify-center w-20 h-20 rounded-full border border-black hover:bg-black transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-18 h-18 text-black group-hover:text-white translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
            </button>
          </div>

          {/* Right Video */}
          <div className="relative w-full lg:w-1/2 h-125 lg:h-screen">
            <div className="absolute inset-0 z-10 hidden lg:block"></div>
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={hero2}
              className="w-full h-full object-cover"
            >
              <source src="video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Decorative SVG */}
        <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
            <path d="M-100 400C50 350 150 450 400 300" stroke="black" strokeWidth="1" />
          </svg>
        </div>
      </section>
    </>
  );
}

export default About;
