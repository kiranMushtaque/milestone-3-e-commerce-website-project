

import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-gray-800 text-white py-12 h-screen">
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center h-full">
        <div className="w-full md:w-1/2 relative -mt-20 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">
            KING BURGER
          </h1>
          <p className="text-lg mb-4">
            King Burger is a burger joint where you will find premium taste and
            quality. Our goal is to provide you with a royal experience in every
            bite.
          </p>
          <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-md">
            Order Now
          </button>
        </div>

        <div className="w-full md:w-1/2 relative mt-6 md:mt-0">
          <Image
            src="/ai-generated-8556731_1280-removebg-preview.png"
            alt="Delicious Burger"
            className="w-full h-auto rounded-lg"
            width={900}
            height={900}
            priority
          />
          <div className="absolute bg-yellow-400 text-black font-bold p-3 rounded-md bottom-4 left-1 mb-24">
            Save 50%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
