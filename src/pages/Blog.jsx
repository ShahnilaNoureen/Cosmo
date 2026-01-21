import React from 'react';
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      {/* Main Article */}
      <article className="max-w-full w-full overflow-hidden p-8 md:p-12">
        <div className="flex justify-center mb-8 mt-15">
          <img
            src={blog1}
            alt="Woman holding cosmetic product"
            className="w-full h-220 object-cover max-w-260"
          />
        </div>

        {/* Article Meta */}
        <div className="flex justify-center items-center text-[14px] tracking-widest text-gray-500 uppercase font-semibold mb-6 gap-6">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>December 7, 2020</span>
          </div>

          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Admin</span>
          </div>

          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>1</span>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-260 m-auto">
          <h1 className="text-2xl font-serif font-bold text-black mb-6">
            Cosmetic Creams
          </h1>
          <p className="text-md leading-relaxed text-gray-500 text-justify font-light">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde 
            omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab 
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
            voluptas sit aspernatur aut odit aut
          </p>
        </div>
      </article>

      {/* Blog Grid Section */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden">
              <img src={blog2} alt="Woman with flowers" className="w-full h-125 object-cover" />
            </div>
            <div className="overflow-hidden">
              <img src={blog4} alt="Product bottles" className="w-full h-75 object-cover" />
            </div>
            <div className="pr-4">
              <h2 className="text-2xl font-serif font-semibold text-slate-800 mb-4">Facial Creams</h2>
              <p className="text-gray-500 text-md leading-relaxed text-justify">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden">
              <img src={blog3} alt="Woman with lemon" className="w-full h-70 object-cover" />
            </div>
            <div className="overflow-hidden">
              <img src={blog5} alt="Woman in robe" className="w-full h-130 object-cover" />
            </div>
            <div className="pr-4">
              <h2 className="text-2xl font-serif font-semibold text-slate-800 mb-4">Face Colors</h2>
              <p className="text-gray-500 text-md leading-relaxed text-justify">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Blog;
