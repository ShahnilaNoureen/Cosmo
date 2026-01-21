import React, { useState } from "react";
import { Search, User, ShoppingBag, X, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ cartItems = [], products = [] }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ Top-level state

  const navigate = useNavigate();

  // Handle input changes in search
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      const matches = products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  // Execute search
  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    setIsSearchOpen(false);
    setSuggestions([]);

    navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <>
      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center pt-20 px-6">
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-8 right-10"
          >
            <X size={30} strokeWidth={1.5} />
          </button>

          <div className="w-full max-w-3xl border-b border-black py-4 flex items-center gap-4 relative">
            <input
              type="text"
              placeholder="Search Here"
              value={searchQuery}
              onChange={handleSearchChange}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSearch();
                }
              }}
              className="flex-1 text-2xl font-serif outline-none"
            />

            <button
              onClick={handleSearch}
              className="text-sm uppercase tracking-widest border border-black px-6 py-3 hover:bg-black hover:text-white transition-all"
            >
              Search
            </button>

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border shadow-md mt-1 max-h-60 overflow-y-auto z-50">
                {suggestions.map((item) => (
                  <li
                    key={item.id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSearchQuery(item.name);
                      setSuggestions([]);
                    }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {/* Navbar */}
      <header className="w-full bg-white border-b">
        <nav className="px-6 h-25 flex items-center justify-between relative">
          {/* Logo */}
          <h1 className="text-5xl font-serif">
            <Link to="/">Cosma</Link>
          </h1>

          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-10 text-xl hover:text-[#c49b63]">
            <li className="text-black hover:text-[#c49b63]">
              <Link to="/">Home</Link>
            </li>
            <li className="text-black hover:text-[#c49b63]">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="text-black hover:text-[#c49b63]">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="text-black hover:text-[#c49b63]">
              <Link to="/about">About Us</Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <button onClick={() => setIsSearchOpen(true)}>
              <Search size={30} />
            </button>

            <Link to="/Contact">
              <User size={30} />
            </Link>

            <Link to="/Cart" className="relative">
              <ShoppingBag size={30} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden hover:text-[#c49b63]"
            >
              <Menu size={30} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 px-6 py-6 space-y-4 lg:hidden z-40">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg uppercase tracking-widest"
              >
                Home
              </Link>
              <Link
                to="/shop"
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg uppercase tracking-widest"
              >
                Shop
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg uppercase tracking-widest"
              >
                Blog
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg uppercase tracking-widest"
              >
                About Us
              </Link>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
