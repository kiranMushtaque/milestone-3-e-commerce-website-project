"use client";
import React, { useState } from "react";
import Image from "next/image";

const Products = () => {
  const [notification, setNotification] = useState<string | null>(null);
  const [cart, setCart] = useState<{ [key: string]: number }>({}); 

  const handleAddToCart = (item: string) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[item] = (newCart[item] || 0) + 1;
      return newCart;
    });
    setNotification(`${item} added to your cart.`);
    setTimeout(() => setNotification(null), 3000); 
  };

  const handleRemoveFromCart = (item: string) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[item] && newCart[item] > 0) {
        newCart[item] -= 1; 
        if (newCart[item] === 0) delete newCart[item]; 
      }
      return newCart;
    });
    setNotification(`${item} removed from your cart.`);
    setTimeout(() => setNotification(null), 3000); 
  };

  const items = [
    {
      src: "/3-removebg-preview.png",
      title: "Chicken Burger",
      description: "Indulge in the ultimate comfort food.",
      price: "$5.99",
    },
    {
      src: "/2-removebg-preview.png",
      title: "Zinger Burger",
      description: "Crispy and delicious for the perfect bite!",
      price: "$6.99",
    },
    {
      src: "/3-removebg-preview.png",
      title: "Crispy Burger",
      description: "Crunchy and savory for the ultimate flavor!",
      price: "$7.99",
    },
    {
      src: "/brost-removebg-preview.png",
      title: "Chicken Broast",
      description: "Indulge in the ultimate comfort food.",
      price: "$5.99",
    },
    {
      src: "/crisp-removebg-preview.png",
      title: "Crispy Chicken",
      description: "Indulge in the ultimate comfort food.",
      price: "$5.99",
    },
    {
      src: "/bucket-removebg-preview.png",
      title: "Chicken Bucket",
      description: "09 Pcs Chicken Bucket (3 Thigh, 3 Legs, 3 Wings).",
      price: "$5.99",
    },
    {
      src: "/drink-removebg-preview.png",
      title: "1 Litre",
      price: "$5.99",
    },
    {
      src: "/ml-removebg-preview.png",
      title: "345 ML",
      price: "$5.99",
    },
  ];

  // Calculate total price
  const calculateTotalPrice = () => {
    return Object.keys(cart)
      .reduce((total, item) => {
        const product = items.find((p) => p.title === item);
        const price = product ? parseFloat(product.price.replace("$", "")) : 0;
        return total + price * cart[item];
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="space-y-16 relative">
      {/* Cart Icon */}
      <div className="fixed top-4 right-4 bg-yellow-400 text-black font-bold py-2 px-4 rounded-full">
        Cart:{" "}
        {Object.values(cart).reduce((total, quantity) => total + quantity, 0)}{" "}
        items
        <br />
        Total: ${calculateTotalPrice()} 
      </div>

      {/* Notification */}
      {notification && (
        <div className="fixed top-16 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg transition-opacity">
          {notification}
        </div>
      )}

      {/* Product Sections */}
      {["burgers", "chicken-meals", "drinks"].map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h1 className="text-5xl font-bold text-amber-400 text-center">
            {section.toUpperCase()}
          </h1>
          <div className="flex justify-center space-x-4 mt-8">
            {items
              .slice(sectionIndex * 3, sectionIndex * 3 + 3)
              .map((product, index) => (
                <div
                  key={index}
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex items-center group hover:bg-orange-200 transition-all"
                >
                  <Image
                    src={product.src}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="p-4">
                    <h2 className="font-bold text-lg text-gray-800">
                      {product.title}
                    </h2>
                    <p className="text-black">{product.description}</p>
                    <p className="text-xl text-white bg-black rounded text-center">
                      Price: {product.price}
                    </p>
                    <div className="mt-4 flex space-x-2">
                      <button
                        className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-md"
                        onClick={() => handleAddToCart(product.title)}
                      >
                        Add to Cart
                      </button>
                      {cart[product.title] > 0 && (
                        <>
                          <button
                            className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md"
                            onClick={() => handleRemoveFromCart(product.title)}
                          >
                            Remove
                          </button>
                          <p className="text-black mt-2">
                            Qty: {cart[product.title]}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
