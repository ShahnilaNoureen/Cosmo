import React, { useState } from "react";
import Products from "./products";
import { Link, useSearchParams } from "react-router-dom";

const Shop = ({ addToCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  /* 🔹 FILTER PRODUCTS BASED ON SEARCH */
  const filteredProducts = Products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /* 🔹 PAGINATION AFTER FILTERING */
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  /* 🔹 HIGHLIGHT FUNCTION */
  const highlightText = (text, highlight) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));

    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="bg-yellow-200 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="container mx-auto px-40 py-58">
      <div className="grid md:grid-cols-3 gap-9 font-serif">
        {currentProducts.map((p) => (
          <div
            key={p.id}
            className="p-4 text-center flex flex-col items-center"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-124 h-124 object-contain mb-4"
            />

            {/* ✅ HIGHLIGHTED NAME */}
            <h3 className="text-2xl font-light hover:text-[#c49b63]">
              {highlightText(p.name, searchTerm)}
            </h3>

            <div className="gap-1 text-yellow-500 text-2xl mb-1">
              <span>★</span><span>★</span><span>★</span><span>★</span>
              <span className="text-gray-500">★</span>
              <span className="text-black text-xl ml-1">(1)</span>
            </div>

            <p className="text-black text-xl">{p.price}</p>

            <button
              onClick={() => addToCart(p)}
              className="inline-block mt-6 text-[13px] font-bold uppercase tracking-[0.2em] hover:border-b border-black pb-1 cursor-pointer"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {/* 🔹 PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 border rounded ${
                currentPage === i + 1
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
