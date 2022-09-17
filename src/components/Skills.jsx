import React from "react";
import JavaScript from "../assets/javascript.svg";
import HTML from "../assets/html-5.svg";
import CSS from "../assets/css3.svg";
import ReactImg from "../assets/icons8-react-40.svg";
import GitHub from "../assets/github.svg";
import Node from "../assets/node-js.svg";
import Mongo from "../assets/mongodb.svg";
import Tailwind from "../assets/tailwind-css.svg";
import SocketIO from "../assets/socket-io.svg";
import Webrtc from "../assets/webrtc.svg";
import MaterialUI from "../assets/material-ui.svg";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full sm:h-screen bg-[#0a192f] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full sm:h-screen">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:shadow-md hover:shadow-pink-400 duration-300">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:shadow-md hover:shadow-pink-400 duration-300">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:shadow-md hover:shadow-pink-400 duration-300">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:shadow-md hover:shadow-pink-400 duration-300">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACTJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:shadow-md hover:shadow-pink-400 duration-300">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB and GIT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:shadow-md hover:shadow-pink-400 duration-300">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:shadow-md hover:shadow-pink-400 duration-300">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:shadow-md hover:shadow-pink-400 duration-300">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:shadow-md hover:shadow-pink-400 duration-300">
            <img className="w-20 mx-auto" src={SocketIO} alt="HTML icon" />
            <p className="my-4">SOCKETIO</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:shadow-md hover:shadow-pink-400 duration-300">
            <img className="w-20 mx-auto" src={Webrtc} alt="HTML icon" />
            <p className="my-4">WEBRTC</p>
          </div>{" "}
          <div className="shadow-md shadow-[#040c16] hover:shadow-md hover:shadow-pink-400 duration-300">
            <img className="w-20 mx-auto" src={MaterialUI} alt="HTML icon" />
            <p className="my-4">MATERIALUI</p>
          </div>{" "}
          <div className="shadow-md shadow-[#040c16] hover:shadow-md hover:shadow-pink-400 duration-300">
            <img
              className="w-20 mx-auto"
              src="https://styled-components.com/logo.png"
              alt="HTML icon"
            />
            <p className="my-4">STYLED COMPONENTS</p>
          </div>
        </div>
        <div>
          <div>
            <p className="py-2 border-b-2 border-slate-400">
              // Skills I am currently learning.
            </p>
            <ul className="pt-6 flex items-center">
              <div className="inline-block bg-pink-600 w-2 h-5 rounded-tl-md rounded-bl-md "></div>
              <li className="inline font-bold text-slate-400 pl-1 pr-6">
                Figma
              </li>
              <div className="inline-block bg-pink-600 w-2 h-5 rounded-tl-md rounded-bl-md "></div>
              <li className="inline font-bold text-slate-400 pl-1 pr-6">
                Redis
              </li>
              <div className="inline-block bg-pink-600 w-2 h-5 rounded-tl-md rounded-bl-md "></div>
              <li className="inline font-bold text-slate-400 pl-1 pr-6">
                Graphql
              </li>
              <div className="inline-block bg-pink-600 w-2 h-5 rounded-tl-md rounded-bl-md "></div>
              <li className="inline font-bold text-slate-400 pl-1 pr-6">
                Docker
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
