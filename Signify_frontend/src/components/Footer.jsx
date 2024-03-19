import React from "react";
import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const footerNavs = [
  {
    id: 1,
    href: "",
    name: "About Us",
  },
  {
    id: 2,
    href: "",
    name: "Contribute",
  },
  {
    id: 3,
    href: "",
    name: "Team",
  },
  {
    id: 4,
    href: "",
    name: "Contact Us",
  },
];
const socialMediaLinks = [
  { id: 1, icon: <FaGithub size={25} />, href: "" },
  { id: 2, icon: <FaLinkedin size={25} />, href: "" },
  { id: 3, icon: <FaInstagram size={25} />, href: "" },
];
const Footer = () => {
  return (
    <footer className="text-gray-500 px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="gap-0 md:gap-6 justify-between  flex flex-col sm:flex-row">
        <div className="md:flex  flex items-center justify-center ">
          <div className="max-w-xs sm:block flex justify-center flex-col items-center">
            <img src={logo} alt="signify logo" className="w-32" />
            <p className="leading-8 mt-2 text-[15px] sm:text-left text-center">
              Signify is your gateway to effortless, high- quality video
              conferencing. Join us in shaping the future Of communication!
            </p>
          </div>
        </div>
        <div className=" mt-10 space-y-6  items-center sm:items-start flex flex-col sm:flex  sm:mt-10 ">
          {footerNavs.map((item) => (
            <ul key={item.id}>
              <li>
                <Link
                  to={item.href}
                  rel="noopener noreferrer"
                  className=" hover:text-indigo-600"
                >
                  {item.name}
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2024 Signify All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-6">
            {socialMediaLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
