import React, { useState } from "react";
import { Link } from "react-scroll";
import signature from "../assets/css.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Navbar() {
  //
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 25 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 3 }}
    >
      {/*  */}
      <div
        className="text-black flex justify-between 
        item-center max-w-[1300px] mx-auto h-24"
      >
        <a className="ml-4 max-w-[100px]">
          {/* <img width={100} src={''} alt="Signature" /> */}
        </a>

        <ul className="hidden md:flex font-semibold text-white">
          <li className="p-5 cursor-pointer">
            <Link to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>{" "}
          </li>
          <li className="p-5 cursor-pointer">
            <Link to="work" smooth={true} offset={50} duration={500}>
              Work
            </Link>{" "}
          </li>
          {/* <li className="p-5">
            <Link to="experience" smooth={true} offset={50} duration={500}>
              Experience
            </Link>{" "}
          </li> */}
          <li className="p-5 cursor-pointer">
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>{" "}
          </li>
        </ul>

        <div onClick={handleNavbar} className="block md:hidden mr-6">
          {navbar ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            navbar
              ? "z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <a className="ml-4 max-w-[100px]">
            <img
              width={110}
              src={signature}
              className="ml-12"
              alt="Signature"
            />
          </a>

          <ul className="font-semibold text-4x1 ml-12">
            <li className="p-5">
              <Link to="about" smooth={true} offset={50} duration={500}>
                About
              </Link>{" "}
            </li>
            <li className="p-5">
              <Link to="work" smooth={true} offset={50} duration={500}>
                Work
              </Link>{" "}
            </li>
            {/* <li className="p-5">
              <Link to="experience" smooth={true} offset={50} duration={500}>
                Experience
              </Link>{" "}
            </li> */}
            <li className="p-5">
              <Link to="contact" smooth={true} offset={50} duration={500}>
                Contact
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
