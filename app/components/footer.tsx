import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
const Footer = () => {
  return (
    <div className="flex justify-center bg-black text-white p-10">
      <p>021-3456-789</p>

      <p className="mb-2">www.foodwebsite.com</p>
      <div className="flex space-x-4"></div>
      <span className="flex justify-end ml-96 space-x-7">
        {" "}
        <TiSocialFacebook className="bg-red-600 size-8" />
        <TiSocialTwitter className="bg-red-600 size-8" />
        <TiSocialInstagram className="bg-red-600 size-8" />
      </span>
    </div>
  );
};

export default Footer;
