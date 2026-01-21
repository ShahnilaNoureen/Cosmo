import React, { useEffect, useRef, useState } from "react";
import hero from "../assets/hero.jpg";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import gsap from "gsap";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import pic7 from "../assets/pic7.png";
import pic8 from "../assets/pic8.png"
import hero3 from "../assets/a.png";
import coll1 from"../assets/coll1.jpg";
import coll2 from"../assets/coll2.jpg";
import { Link } from "react-router-dom";
import user from "../assets/user.png";
import vegan from "../assets/vegan.png";
import hand from "../assets/hand.png";
import paraben from "../assets/paraben.png";

function Home() {
  const slides = [
    {
      image: slider1,
      title: "New Elevated Looks",
      button: "SHOP ESSENTIALS",
    },
    {
      image: slider2,
      title: "Beautiful & Soft Skin",
      button: "SHOP ESSENTIALS",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  // AUTO SLIDE CHANGE
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(slideRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % slides.length);
        },
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      {/* hero */}
      <section
        className="relative min-h-screen md:min-h-290 w-full bg-[#fdfaf5] flex items-center overflow-hidden font-serif px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="z-10 w-full max-w-7xl mx-auto mb-8 md:mb-15 px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black leading-tight mb-4 md:mb-5">
            Clean beauty
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-light mb-8 md:mb-12">
            For colorful people
          </p>

         <div className="flex flex-wrap justify-start gap-6 sm:gap-8 md:gap-12 mb-10 md:mb-16  ">
        <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-black rounded-full flex items-center justify-center p-1 md:p-2">
      <img 
        src={vegan} 
        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" 
        alt="Vegan"
      />
    </div>
    <span className="text-xs sm:text-sm md:text-medium uppercase tracking-widest text-black">
      Vegan<br />product
    </span>
  </div>

  <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-black rounded-full flex items-center justify-center p-1 md:p-2">
      <img 
        src={hand}
        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" 
        alt="Handmade"
      />
    </div>
    <span className="text-xs sm:text-sm md:text-medium uppercase tracking-widest text-black">
      Hand<br />made
    </span>
  </div>

  <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-black rounded-full flex items-center justify-center p-1 md:p-2">
      <img 
        src={paraben} 
        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" 
        alt="Paraben Free"
      />
    </div>
    <span className="text-xs sm:text-sm md:text-medium uppercase tracking-widest text-black">
      Paraben<br />free
    </span>
  </div>
</div>





          <Link
            to="/shop"
            className="group inline-flex items-center text-lg sm:text-xl md:text-2xl font-medium tracking-[0.2em] uppercase pb-8 md:pb-16 hover:text-[#c49b63]"
          >
            Shop Now
            <span className="ml-2 md:ml-4 group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* hero 1 */}
      <section className="bg-[#F9F6F1] py-12 md:py-20 lg:py-54 relative px-4 sm:px-6 lg:px-8"> 
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="absolute -bottom-3 md:-bottom-4 lg:-bottom-5 -left-3 md:-left-4 lg:-left-5 w-full h-full border border-gray-900 z-0">
            </div> 
            <div className="relative z-10"> 
              <img src={hero1} className="w-full h-auto grayscale-20" alt="About Products"/> 
            </div> 
          </div> 
          <div className="lg:col-span-5 lg:col-start-8 space-y-4 md:space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">About Our<br/>Iconic Products</h2> 
            <p className="text-gray-600 font-sans text-base sm:text-lg md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor. Donec consectetur nisi eu mauris auctor, in egestodio mollis phasellus urna lacus. 
            </p> 
            <Link
              to="/about"
              className="inline-flex items-center space-x-1 text-lg sm:text-xl md:text-2xl font-semibold uppercase border-b border-transparent transition-all hover:text-[#c49b63]"
            >
              <span>Know More</span>
              <span className="text-2xl md:text-3xl lg:text-4xl">→</span>
            </Link> 
          </div> 
        </div> 
      </section>

      {/* hero 2 */}
      <section className="py-8 md:py-16 lg:py-30 container mx-auto px-4 sm:px-6 lg:px-24 grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-1 bg-white">
        <div className="relative overflow-hidden aspect-square md:aspect-4/5">
          <img src={hero2} className="w-full h-full object-cover" alt="New Arrivals" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-16 lg:pb-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase font-serif">New Arrivals</h1>
            <Link
  to="/shop"
  className="mt-3 md:mt-5 text-lg sm:text-xl uppercase border-b border-black hover:text-[#c49b63]"
>
  Shop Collection
</Link>
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative overflow-hidden aspect-square md:aspect-4/5">
          <img
            ref={slideRef}
            src={slides[currentIndex].image}
            className="absolute inset-0 w-full h-full object-contain"
            alt={slides[currentIndex].title}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-12 lg:pb-15">
            <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase font-serif text-center px-4">
              {slides[currentIndex].title}
            </h1>
           
<Link
  to="/shop" // or any path you want
  className="mt-3 md:mt-5 text-lg sm:text-xl uppercase hover:text-[#c49b63] flex items-center"
>
  {slides[currentIndex].button}
  <span className="ml-2 md:ml-4 group-hover:translate-x-2 transition-transform duration-300">
    →
  </span>
</Link>
          </div>
        </div>
      </section>

      {/* collection */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#F9F6F1] px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center space-y-8 md:space-y-12">
          {/* Section Header */}
          <div className="space-y-2">
            <p className="text-xs sm:text-sm md:text-[15px] uppercase tracking-[0.4em] font-semibold text-gray-600 mb-3 md:mb-5">
              Shop Products
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3 md:mb-4">Our Collections</h2>
            <p className="text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Horizontal Scrollable Products */}
          <div className=" flex space-x-4 md:space-x-6 lg:space-x-8 pb-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { img: p1, title: "Hydrating Serum", price: "$25 — $70", rating: 5, reviews: 1 },
              { img: p2, title: "Dry Skin Lotion", price: "$30 — $80", rating: 4, reviews: 2 },
              { img: p3, title: "Brightninig Serum", price: "$20 — $60", rating: 5, reviews: 1 },
            ].map((product, idx) => (
              <div key={idx} className="min-w-62.5 sm:min-w-70 md:min-w-62.5 group cursor-pointer p-3 md:p-4 snap-center">
                <div className="relative overflow-hidden aspect-square mb-3 md:mb-4">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-contain p-3 md:p-4"
                  />
                  <button className="absolute top-1 right-1 md:top-2 md:right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-1 md:p-2 rounded-full shadow-md">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                </div>
                <h4 className="text-lg sm:text-xl font-serif">{product.title}</h4>
                <div className="flex justify-center text-yellow-400 text-base md:text-xl my-1">
                  {"★".repeat(product.rating)}
                  <span className="text-black ml-1">({product.reviews})</span>
                </div>
                <p className="text-base md:text-1xl font-sans text-black">{product.price}</p>
                <Link
                  to="/shop"
                  className="inline-block mt-1 md:mt-2 text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] border-b border-black pb-1 hover:text-[#c49b63]"
                >
                  Select Options
                </Link>
              </div>
            ))}
          </div>

          {/* Shop All Link */}
          <Link
            to="/shop"
            className="inline-block text-lg sm:text-xl md:text-[22px] font-light uppercase pb-3 md:pb-5 pt-6 md:pt-12 hover:text-[#c49b63]"
          >
            Shop All Collections →
          </Link>
        </div>
      </section>

      {/* hero3 */}
      <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 font-sans text-black relative">
        <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16 lg:mb-24">
          <p className="uppercase tracking-widest text-xs sm:text-sm md:text-[15px] mb-3 md:mb-4 text-semibold">Cosmetic Care Solutions</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 md:mb-6">Body Care Results</h1>
          <p className="text-black max-w-xl mx-auto leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-35 items-center relative">
          <div className="lg:col-span-4 space-y-8 md:space-y-12 lg:space-y-16">
            <div className="group">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <img 
                  src="https://img.icons8.com/badges/48/natural-food.png" 
                  className="w-8 h-8 md:w-10 md:h-10"
                  alt="Natural"
                />
                <h3 className="text-xl sm:text-2xl font-serif">Natural Ingredients</h3>
              </div>
              <p className="text-sm md:text-md text-black leading-relaxed mb-4 md:mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor donec consectetur.
              </p>
              <Link
                to="/shop"
                className="text-base md:text-lg tracking-widest flex items-center gap-1 md:gap-2 hover:text-[#c49b63]"
              >
                SHOP NOW <span className="text-base md:text-lg">→</span>
              </Link>
            </div>

            <div className="group">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <img 
                  width="50" 
                  height="50" 
                  src="https://img.icons8.com/ios-filled/50/oil-massage.png" 
                  className="w-8 h-8 md:w-10 md:h-10"
                  alt="No Mineral Oil"
                />
                <h3 className="text-xl sm:text-2xl font-serif">No Mineral Oil</h3>
              </div>
              <p className="text-sm md:text-md text-black leading-relaxed mb-4 md:mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor donec consectetur.
              </p>
              <Link
                to="/shop"
                className="text-base md:text-lg tracking-widest flex items-center gap-1 md:gap-2 hover:text-[#c49b63]"
              >
                SHOP NOW <span className="text-base md:text-lg">→</span>
              </Link>
            </div>

            <div className="group">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <img 
                  width="50" 
                  height="50" 
                  src="https://img.icons8.com/ios-filled/50/face-powder.png" 
                  className="w-8 h-8 md:w-10 md:h-10"
                  alt="Clean Cosmetics"
                />
                <h3 className="text-xl sm:text-2xl font-serif">Clean Cosmetics</h3>
              </div>
              <p className="text-sm md:text-md text-black leading-relaxed mb-4 md:mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor donec consectetur.
              </p>
              <Link
                to="/shop"
                className="text-base md:text-lg tracking-widest flex items-center gap-1 md:gap-2 hover:text-[#c49b63]"
              >
                SHOP NOW <span className="text-base md:text-lg">→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 relative flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative">
              <img src={hero3} alt="Body Care Product" className="w-full max-w-2xl lg:max-w-5xl mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* products */}
      <section className="bg-[#F9F6F1] font-serif py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16 lg:mb-24">
          <p className="uppercase tracking-widest text-xs sm:text-sm md:text-[15px] mb-3 md:mb-4 text-semibold">Shop Products</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 md:mb-6">Our Collections</h1>
          <p className="text-black max-w-xl mx-auto leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          {[
            { img: p1, title: "Hydrating Serum", price: "$35 – $70", rating: 4 },
            { img: p2, title: "Dry Skin Lotion", price: "$40 – $70", rating: 5 },
            { img: p3, title: "Brightening Serum", price: "$30 – $70", rating: 4 },
            { img: pic4, title: "Antioxidant Serum", price: "$30 – $50", rating: 5 },
            { img: pic5, title: "Hydrating Serum", price: "$35 – $70", rating: 4 },
            { img: pic6, title: "Dry Skin Lotion", price: "$40 – $70", rating: 5 },
            { img: pic7, title: "Brightening Serum", price: "$30 – $70", rating: 4 },
            { img: pic8, title: "Hydrating Serum", price: "$35 – $70", rating: 4 },
          ].map((product, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group cursor-pointer px-2">
              <div className="mb-6 md:mb-8 transform transition-transform duration-300 group-hover:scale-105">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-48 sm:h-56 md:h-64 lg:h-72 object-contain product-shadow"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-black mb-2">{product.title}</h3>
              <div className="flex items-center justify-center gap-1 text-yellow-500 text-base md:text-xl mb-1">
                {"★".repeat(product.rating)}
                <span className="text-black text-base md:text-xl ml-1">(1)</span>
              </div>
              <p className="text-black text-base md:text-lg">{product.price}</p>
              <Link
                to="/shop"
                className="inline-block mt-1 md:mt-2 text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] border-b border-black pb-1 hover:text-[#c49b63]"
              >
                Select Options
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* testimonials */}
      <section className="bg-white py-12 md:py-20 lg:py-60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-3 text-center">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center">
              <img
                width="50"
                height="50"
                src={user}
                alt="user"
                className="mb-3 md:mb-4 w-10 h-10 md:w-12 md:h-12"
              />
              <div className="text-red-500 mb-3 md:mb-4 text-2xl md:text-3xl">★★★★★</div>
              <p className="text-black text-sm md:text-base mb-4 md:mb-6 px-4">
                "Fusce vehicula vitae mauris sit amet tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </p>
              <div className="w-12 h-px bg-gray-400 mb-2"></div>
              <span className="font-serif italic text-base md:text-lg text-gray-900 hover:text-[#c49b63]">
                Emily
              </span>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col items-center">
              <img
                width="50"
                height="50"
                src={user}
                alt="user"
                className="mb-3 md:mb-4 w-10 h-10 md:w-12 md:h-12"
              />
              <div className="text-red-500 mb-3 md:mb-4 text-2xl md:text-3xl">★★★★★</div>
              <p className="text-black text-sm md:text-base mb-4 md:mb-6 px-4">
                "Donec consectetur nisi eu mauris auctor, in egestadio mollis phasellus urna lacus. Cras vel mi quam."
              </p>
              <div className="w-12 h-px bg-gray-400 mb-2"></div>
              <span className="font-serif italic text-base md:text-lg text-gray-900 hover:text-[#c49b63]">
                Isabella
              </span>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col items-center">
              <img
                width="50"
                height="50"
                src={user}
                alt="user"
                className="mb-3 md:mb-4 w-10 h-10 md:w-12 md:h-12"
              />
              <div className="text-red-500 mb-3 md:mb-4 text-2xl md:text-3xl">★★★★★</div>
              <p className="text-black text-sm md:text-base mb-4 md:mb-6 px-4">
                "Fusce vehicula vitae mauris sit amet tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </p>
              <div className="w-12 h-px bg-gray-400 mb-2"></div>
              <span className="font-serif italic text-base md:text-lg text-gray-900 hover:text-[#c49b63]">
                Gwen
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* instagram section */}
      <section className="bg-[#f9f7f2] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-12 mb-12 md:mb-16 lg:mb-24">
          <div className="md:w-1/3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-4">
              <div className="w-6 md:w-8 lg:w-10 h-px bg-black"></div>
              <span className="italic text-sm md:text-md black">Follow Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-3 md:mb-5">Our Collections</h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-gray-800">#cosmetics</p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            <img src={coll2} className="aspect-square object-cover w-full" alt="Models"/>
            <img src={coll1} className="aspect-square object-cover w-full" alt="Using product"/>
            <img src={hero2} className="aspect-square object-cover w-full" alt="Model with flower"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;