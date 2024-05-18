// import proj1 from "../assets2/proj1.png";
// import proj2 from "../assets2/proj2.png";
// import proj3 from "../assets2/proj3.png";
// import proj4 from "../assets2/proj4.png";
// import proj5 from "../assets2/proj5.png";
// import proj6 from "../assets2/proj6.png";
import dcbt_landing_page from "../assets2/dcbt_landing_page.png";
import vt_dashboard_authenticated from "../assets2/vt_dashboard_authenticated.png";
import so_dashboard_authenticated from "../assets2/so_dashboard_authenticated.png";
import vending_dashboard from "../assets2/vending_dashboard.png";
import jssoc_dashboard from "../assets2/jssoc_dashboard.png";
import mini_o_dashboard from "../assets2/mini_o_dashboard.png";
import library_dashboard from "../assets2/library_dashboard.png";
import customized_media_api from "../assets2/customized_media_api.png";
import Iconnect_dashboard from "../assets2/Iconnect_dashboard.png";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <motion.div
      className="max-w-[1200px] mx-auto p-5"
      id="work"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 3 }}
    >
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">My Proud Works</p>
        <p className="text-gray-400">Check out some of my recent projects</p>
      </div>

      <div style={{ display: "none" }} className="pb-8 flex justify-between">
        <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-blue-800">
          MERN Stack
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
          Next JS
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
          PHP MyQL
        </button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700">
          .NET
        </button>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-autoo content-div h-[200px] bg-cover relative">
          <img
            src={dcbt_landing_page}
            alt="Online Enrollment System Landing Page"
          />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a
                href="https://github.com/FaithDefender11/School-System-DCBT/tree/sub_main"
                target="_blank"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Online Enrollment System with e-Learning Management System
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-autoo content-div h-[200px] bg-cover relative">
          <img src={vt_dashboard_authenticated} alt="Project 2" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a
                href="https://github.com/buboyskie26/youtube_clone"
                target="_blank"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Youtube Alias
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-autoo content-div h-[200px] bg-cover relative">
          <img src={so_dashboard_authenticated} alt="Project 3" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a
                href="https://github.com/buboyskie26/social_network_clone"
                target="_blank"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Social Network
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-autoo content-div h-[200px] bg-cover relative">
          <img src={jssoc_dashboard} alt="Project 1" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="https://github.com/buboyskie26/jasocial" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  JsSocial App
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-autoo content-div h-[200px] bg-cover relative">
          <img src={vending_dashboard} alt="Project 1" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="https://github.com/buboyskie26/proshop" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Vending Shop
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-autoo content-div h-[200px] bg-cover relative">
          <img src={Iconnect_dashboard} alt="Project 1" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  IConnectSocial
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-autoo content-div h-[200px] bg-cover relative">
          <img src={customized_media_api} alt="Project 1" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a
                href="https://github.com/buboyskie26/Customized-Media"
                target="_blank"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Customized-Media
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-autoo content-div h-[200px] bg-cover relative">
          <img src={mini_o_dashboard} alt="Project 1" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a
                href="https://github.com/buboyskie26/Online-Forum"
                target="_blank"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Web-Forum
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-autoo content-div h-[200px] bg-cover relative">
          <img src={library_dashboard} alt="Project 1" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a
                href="https://github.com/buboyskie26/Napico-Library-Book-Management"
                target="_blank"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Library Management
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
