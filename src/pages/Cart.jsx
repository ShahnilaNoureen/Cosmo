import React from "react";
import { Link } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
  // Remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Update item quantity
  const updateQuantity = (id, qty) => {
    if (qty < 1) return; // minimum quantity is 1
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <section className="bg-[#fdf9f4] min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="w-full max-w-4xl">
        
        {/* Empty Cart Message */}
        {cartItems.length === 0 ? (
          <div className="bg-[#f7f7f7] border-2 p-6 mb-8 shadow-sm">
            <p className="text-[#666666] text-md font-sans tracking-wide">
              Your cart is currently empty.
            </p>
          </div>
        ) : (
          /* Cart Items */
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-white shadow rounded"
              >
                {/* Item Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain"
                  />
                  <p className="font-bold">{item.name}</p>
                </div>

                {/* Item Price and Actions */}
                <div className="flex items-center gap-4">
                  <p>{item.price}</p>

                  {/* Quantity Selector */}
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-12 text-center border rounded"
                  />

                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-600 hover:text-red-800 font-bold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Total Price */}
        <div className="mt-4 font-bold text-xl">
          Total: ${totalPrice.toFixed(2)}
        </div>

        {/* Clear Cart Button */}
        <button
          onClick={() => setCartItems([])}
          className="bg-red-600 text-white px-4 py-2 mt-4 rounded hover:bg-red-800"
        >
          Clear Cart
        </button>

        {/* Return to Shop */}
        <div className="flex justify-start mt-6">
          <Link
            to="/shop"
            className="bg-[#1a1a1a] text-white px-8 py-3 text-[15px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors duration-300 shadow-md"
          >
            Return To Shop
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Cart;
