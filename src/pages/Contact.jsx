import React from 'react';
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="bg-[#fdf9f4] py-24 px-6 relative overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-[15px] tracking-widest text-gray-500 uppercase block mb-2">
            Ask Us Anything
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-4">
            Let's Talk
          </h2>
          <p className="text-gray-500 text-md max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Form and Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Contact Form */}
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full bg-[#f7f3ed] border-none p-4 text-md placeholder-gray-400 focus:ring-1 focus:ring-[#b59d85] outline-none"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-[#f7f3ed] border-none p-4 text-md placeholder-gray-400 focus:ring-1 focus:ring-[#b59d85] outline-none"
            />
            <textarea 
              placeholder="Message" 
              rows="6" 
              className="w-full bg-[#f7f3ed] border-none p-4 text-md placeholder-gray-400 focus:ring-1 focus:ring-[#b59d85] outline-none resize-none"
            ></textarea>
            
            <button 
              type="submit" 
              className="bg-[#efe5d8] text-gray-800 px-10 py-3 text-[15px] font-bold uppercase tracking-[0.2em] hover:bg-[#e2d4c3] transition-colors duration-300"
            >
              Send
            </button>
          </form>

          {/* Contact Information */}
          <div className="lg:pl-12 space-y-10">
            <h3 className="text-2xl font-serif text-[#1a1a1a] mb-8">Get in Touch with Us</h3>
            
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#1a1a1a] uppercase tracking-wide">Visit us daily</h4>
                <p className="text-gray-500 text-xs mt-1">1222 Arlington Avenue, USA</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#1a1a1a] uppercase tracking-wide">Call us 24/7</h4>
                <p className="text-gray-500 text-xs mt-1">(+1) 870-238-1576</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#1a1a1a] uppercase tracking-wide">Mail us</h4>
                <p className="text-gray-500 text-xs mt-1">example@example.com</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact;
