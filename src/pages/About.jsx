import React from "react";
import aboutImage from "../assets2/about.jpg";
import me_datamobi from "../assets2/me_datamobi.jpg";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="text-white max-w-[1200px] mx-auto my-12"
      id="about"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 3 }}
    >
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
          <div className="my-auto mx-6p-2">
            <h2 className="text-4xl font-bold mb-4 primary-color text-center">
              About me
            </h2>

            <p className="text-base lg:text-lg">
              Hello! 👋 I'm Justine Adrian, an aspiring professional software
              developer with a passion for creating innovative and efficient
              software solutions. I'm looking forward to opportunities where I
              can apply my skills and contribute to the digital world.
            </p>
          </div>
        </div>

        {/*  */}
        <img
          className="mx-auto rounded-3x1 py-8 md:py-0"
          src={me_datamobi}
          alt="About image"
          width={300}
          height={300}
        />
      </div>
    </motion.div>
  );
}
