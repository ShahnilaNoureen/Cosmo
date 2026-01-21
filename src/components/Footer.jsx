import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../assets/icon1.png";

const Footer = () => {
  return (
    <>
      {/* Payment Section */}
      <section className="bg-white py-40 px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif mb-4">Shop Limited Edition.</h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor.
          </p>

          <div className="flex justify-center items-center gap-6 opacity-70">
            <img
              src={icon1}
              alt="Visa"
              width="48"
              height="48"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              className="h-6"
              alt="Mastercard"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/Maestro_2016.svg"
              className="h-6"
              alt="Maestro"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              className="h-6"
              alt="PayPal"
            />
          </div>
        </div>
      </section>

      {/* Footer Links Section */}
      <footer className="bg-[#f9f7f2] border-t border-gray-100 py-7 px-6 md:px-12">
        <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Links */}
          <div className="flex gap-8 text-md black">
            <a href="#" className="hover:text-[#c49b63] transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#c49b63] transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-[#c49b63] transition">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-md text-black hover:text-[#c49b63]">
            © 2021 Cosma. All Rights Reserved
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-gray-900 text-2xl">
              <a href="#">
                <i className="fab fa-facebook-f hover:text-[#c49b63]"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram hover:text-[#c49b63]"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter hover:text-[#c49b63]"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest hover:text-[#c49b63]"></i>
              </a>
              <a href="#">
                <i className="fab fa-spotify hover:text-[#c49b63]"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
