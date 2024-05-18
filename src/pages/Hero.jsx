import React from "react";
import profilePicture from "../assets/profilepic5.png";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillMail,
  AiFillFacebook,
} from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import signature from "../assets/css.png";
import realProfile from "../assets2/profilepic7.png";
import programmer_icon from "../assets2/programmer_icon.png";
import Sirios_Justine_Resume_II from "../assets2/Sirios,Justine_Resume_II.pdf";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="  my-7 md:my-0 max-w-[1300px] md:h-[70vh] mx-auto grid md:grid-cols-4 place-items-center"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 3 }}
    >
      <div className="md:col-span-2 md:ml-28">
        <img
          src={programmer_icon}
          alt="Profile Pic"
          className="w-[300px] md:w-[450px] h-auto mx-auto"
        />
      </div>
      <div className="m-w-[400px] flex flex-row md:flex-col">
        <p className="md:text-5xl sm:text-3xl text-xl tracking-tight">
          Hi! I am
        </p>{" "}
        <br />
        <span className="font-bold italic ">JUSTINE ADRIAN SIRIOS</span> <br />
        <TypeAnimation
          sequence={[
            "Software Developer",
            1200,
            "Team player",
            1200,
            "Detailed Oriented",
            1200,
          ]}
          speed={50}
          repeat={Infinity}
        />
        <a
          href={Sirios_Justine_Resume_II}
          download
          title="Click to download"
          className="text-center mt-6 p-2 bg-gradient-to-r from-[#d46307] to-[#c437d7]"
        >
          Download my CV
        </a>
      </div>
      <div className=" text-5xl flex flex-row md:flex-col gap-10 md:w-full place-items-end">
        <a
          title="https://github.com/buboyskie26"
          href="https://github.com/buboyskie26"
          target="_blank"
        >
          <AiFillGithub />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/justine-adrian-sirios-76b05a294/"
          title="https://www.linkedin.com/in/justine-adrian-sirios-76b05a294/"
          target="_blank"
        >
          <AiFillLinkedin />{" "}
        </a>
        <a
          title="justinesirios15@gmail.com"
          href="mailto:justinesirios15@gmail.com"
          target="_blank"
        >
          <AiFillMail />{" "}
        </a>
        <a
          title="Jjustine Sirios"
          href="https://www.facebook.com/justine.sirios"
          target="_blank"
        >
          <AiFillFacebook />{" "}
        </a>
      </div>
    </motion.div>
  );
}
