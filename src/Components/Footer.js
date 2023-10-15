import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  // Define a variable for the desired icon color
  const iconColor = "#ff0000"; // Replace with your desired color value

  // Define a CSS style object for the icons
  const iconStyle = {
    color: iconColor,
    // You can add additional styles here if needed
  };

  return (
    <div className="w-full flex flex-col items-center mt-6 gap-4">
      <p className="text-slate-600 text-lg"> Follow us on social media</p>
      <div className="w-full flex justify-center  gap-6">
        <a href="#">
          <FaEnvelope style={iconStyle} />
        </a>
        <a href="#">
          <FaLinkedin style={iconStyle} />
        </a>
        <a href="#">
          <FaInstagram style={iconStyle} />
        </a>
        <a href="#">
          <FaFacebook style={iconStyle} />
        </a>
        <a href="#">
          <FaTwitter style={iconStyle} />
        </a>
        <a href="#">
          <FaYoutube style={iconStyle} />
        </a>
      </div>
      <div className="text-slate-500">
        <span>&copy; <span className="text-slate-700">2023 A2SV Foundation</span>. All rights reserved.&copy;</span>
        <a className="text-blue-600" href="#">Privacy Policy | </a>
        <a className='text-blue-600' href="#">Cookie Policy</a>
      </div>
    </div>
  );
};

export default Footer;
