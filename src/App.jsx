import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./ScrollToTop";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import "./App.css"
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Products from "./pages/products";

function App() {
  // Load initial cart from localStorage if exists
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add product to cart
  const addToCart = (product) => {
    setCartItems((prev) =>{
    // Check if product already in cart
    const existing = prev.find((item) => item.id === product.id);
    if (existing) {
      // Increase quantity
      return prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    // Add new product with quantity 1
    return [...prev, { ...product, quantity: 1 }];
  });

  toast.success(`${product.name} added to cart!`);
};


  return (
    <>
      <ScrollToTop />
      <Toaster />
      <Navbar cartItems={cartItems}  products={Products}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop  addToCart={addToCart}/>} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart  cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
 <Footer/>
    </>
  );
}

export default App;