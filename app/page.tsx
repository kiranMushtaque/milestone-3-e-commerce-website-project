import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Products from "./components/products";
import Footer from "./components/footer";

const navItems = [
  { id: 1, title: "Burgers", price: "$10" },
  { id: 2, title: "Chicken Meals", price: "$15" },
  { id: 3, title: "Drinks", price: "$5" },
];

const Page = () => {
  return (
    <div>
      {/* Pass the items prop to Navbar */}
      <Navbar items={navItems} />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
};

export default Page;
