"use client";

import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

interface CartIconWithModalProps {
  cartItems: { id: number; name: string; price: number; quantity: number }[];
  setCartItems: React.Dispatch<
    React.SetStateAction<
      { id: number; name: string; price: number; quantity: number }[]
    >
  >;
}

const CartIconWithModal: React.FC<CartIconWithModalProps> = ({
  cartItems,
  setCartItems,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce(
      (subtotal, item) => subtotal + item.price * item.quantity,
      0
    );
  };

  const subtotal = calculateTotal();
  const shippingFee = 5;
  const total = subtotal + shippingFee;

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="relative">
      {/* Cart Icon */}
      <button
        onClick={toggleModal}
        className="p-2 bg-blue-500 text-white rounded-full flex items-center justify-center"
      >
        <FaShoppingCart size={24} />
      </button>

      {/* Cart Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span>${item.price * item.quantity}</span>
                    <button
                      className="text-red-500"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 border-t">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shippingFee}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <button
                onClick={toggleModal}
                className="bg-red-500 text-white p-2 rounded"
              >
                Close
              </button>
              <button className="bg-green-500 text-white p-2 rounded">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartIconWithModal;
