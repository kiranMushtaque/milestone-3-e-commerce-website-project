// "use client";

// import CartIconWithModal from "./CartIconWithModal";
// import Image from "next/image";
// import React, { useState } from "react";

// interface NavbarProps {
//   items: Array<{ id: number; title: string; price: string }>;
// }

// const Navbar: React.FC<NavbarProps> = ({ items }) => {
//   const [cartItems, setCartItems] = useState<
//     { id: number; name: string; price: number; quantity: number }[]
//   >([
//     { id: 1, name: "Product 1", price: 20, quantity: 2 },
//     { id: 2, name: "Product 2", price: 50, quantity: 1 },
//   ]);

//   return (
//     <div className="bg-red-600 p-3 sticky top-0 h-24 z-50">
//       <div className="flex items-center justify-between h-full">
//         <div className="flex items-center">
//           <Image src="/Vector.png" alt="logo" width={60} height={60} />
//         </div>
//         <div className="flex space-x-9">
//           <a href="#burgers" className="font-bold text-white">
//             Burgers
//           </a>
//           <a href="#chickenmeals" className="font-bold text-white">
//             Chicken Meals
//           </a>
//           <a href="#drinks" className="font-bold text-white">
//             Drinks
//           </a>
//         </div>

     
//         <CartIconWithModal cartItems={cartItems} setCartItems={setCartItems} />
//       </div>
//     </div>
//   );
// };

// export default Navbar;







"use client"; // Marking as a client-side component

import CartIconWithModal from "./CartIconWithModal";
import Image from "next/image";
import React, { useState } from "react";

interface NavbarProps {
  items: Array<{ id: number; title: string; price: string }>;
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [cartItems, setCartItems] = useState<
    { id: number; name: string; price: number; quantity: number }[]
  >([
    { id: 1, name: "Product 1", price: 20, quantity: 2 },
    { id: 2, name: "Product 2", price: 50, quantity: 1 },
  ]);

  return (
    <div className="bg-red-600 p-3 sticky top-0 h-24 z-50">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center">
          <Image src="/Vector.png" alt="logo" width={60} height={60} />
        </div>
        <div className="flex space-x-9">
          {/* Loop through items if necessary */}
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-bold text-white"
            >
              {item.title}
            </a>
          ))}
        </div>
        <CartIconWithModal cartItems={cartItems} setCartItems={setCartItems} />
      </div>
    </div>
  );
};

export default Navbar;
