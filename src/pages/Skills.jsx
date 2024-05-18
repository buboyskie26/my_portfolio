import React from "react";
import html from "../assets2/html.png";
import css from "../assets2/css.png";
import javascript from "../assets2/javascript.png";
import tailwind from "../assets2/tailwind.png";
import react from "../assets2/react.png";
import next_js from "../assets2/next_js.png";
// import next_js from "../assets2/next.png";
import asp_net from "../assets2/.net.png";
import php_logo from "../assets2/php_logo.png";
import node_js from "../assets2/node_js.png";
import express_js from "../assets2/express_js.png";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 3 }}
    >
      <div className="text-center mt-10 mb-8">
        <p className="text-center text-4xl font-bold primary-color_v2">
          Used Technologies
        </p>
      </div>
      <div
        className="mb-4 bg-transparent text-gray-400 md:h-[150px max-w-[1200px] 
        mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center"
      >
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={html} width={100} height={100} alt="" />
          <p className="mt-2">HTML</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={css} width={100} height={100} alt="" />
          <p className="mt-2">CSS</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={javascript} width={100} height={100} alt="" />
          <p className="mt-2">Javascript</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={react} width={100} height={100} alt="" />
          <p className="mt-2">React</p>
        </div>
      </div>
      {/*  */}
      <div
        className="bg-transparent text-gray-400 md:h-[150px max-w-[1200px] 
        mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center"
      >
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={tailwind} width={100} height={100} alt="" />
          <p className="mt-2">Tailwind</p>
        </div>

        <div className="flex flex-col items-center m-4 w-[180px] md:w-[200px]">
          <img src={next_js} width={200} height={280} alt="" />
          <p className="mt-2">NextJS14</p>
        </div>

        <div className="flex flex-col items-center m-4 w-[180px] md:w-[200px]">
          <img src={asp_net} width={200} height={280} alt="" />
          <p className="mt-2">ASP.NET</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[180px] md:w-[200px]">
          <img src={php_logo} width={200} height={280} alt="" />
          <p className="mt-2">PHP</p>
        </div>
      </div>
      <div
        className="bg-transparent text-gray-400 md:h-[150px max-w-[1200px] 
        mx-auto grid grid-cols-2 place-items-center  md:items-center"
      >
        <div className="bg-black flex flex-col items-center m-4 sm:my-0 w-[180px] md:w-[200px]">
          <img src={node_js} width={200} height={280} alt="" />
          <p className="mt-2">Node JS</p>
        </div>

        <div className="bg-black flex flex-col items-center m-4 sm:my-0 w-[180px] md:w-[200px]">
          <img
            className="bg-black"
            src={express_js}
            width={200}
            height={280}
            alt=""
          />
          <p className="mt-2">Express JS</p>
        </div>
      </div>
    </motion.div>
  );
}
