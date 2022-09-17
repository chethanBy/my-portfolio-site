import React from "react";
import discord from "../assets/discord.png";
import discordIns from "../assets/discordIns.png";
import expense from "../assets/expense.png";
import stacked from "../assets/stacked.png";
import dropdown from "../assets/dropdown.png";

const Project = () => {
  return (
    <div
      name="project"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="pt-3">
            // Check out some of my recent work. Live Demo avilable below
          </p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 ">
          {/* grid item */}
          <div className="sm:col-span-2 ">
            <p className="text-base py-1 sm:pb-4 md:pb-6 pl-1 text-[#8892b0] font-semibold leading-5">
              A Full Stack Web App built on
              <span className="text-pink-600"> MERN</span> Stack for Real-time
              messaging and Streaming of Video and Audio.Video Chat with upto 4
              people at once.
            </p>
            <div className=" text-xs  pb-1 pl-1 text-left border-t-2 border-pink-400  font-bold sm:mb-4 pt-2">
              React-Express-MongoDB-SocketIO-JWT-StyledComponents-webRTC and
              more
            </div>
            <div
              style={{ backgroundImage: `url(${discord})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
            >
              {/* hover effects */}

              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider ">
                  MERN Web Application
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://discordclone-client.vercel.app/register"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                      Live Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/chethanBy/videoChatApp_Discord_clone"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-base  pl-1 text-[#8892b0] font-semibold leading-5">
              A Full Stack Web App built on
              <span className="text-pink-600"> MERN</span> Stack Using
              redux-toolkit for global state management.
            </p>
            <div className=" text-xs  pb-4 pl-1 text-left border-t-2 border-pink-400 pt-1 font-bold ">
              React-TailwindCSS-Chartjs-Redux_Toolkit-Redux_RTK_query-lodash-MongoDB-Express
            </div>
            <div
              style={{ backgroundImage: `url(${expense})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
            >
              {/* hover effects */}

              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider text-center ">
                  Full Stack Application
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://expensetracker-client.vercel.app/"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Live Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/chethanBy/expense-tracker"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-base pb-2 sm:pb-7 pl-1 text-[#8892b0] font-semibold leading-5">
              A Web Application Inspired by discord. <br />
              Dark mode Switch and Cool Animations.
            </p>
            <div className=" text-xs  pb-2 pl-1 text-left border-t-2 border-pink-400 pt-1 font-bold sm:mb-4">
              React-TailwindCSS-Git
            </div>

            <div
              style={{ backgroundImage: `url(${discordIns})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* hover effects */}

              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider ">
                  ReactJS Application
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://chethanby.github.io/discord-inspired_animated_navbar/"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Live Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/chethanBy/discord-inspired_animated_navbar"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-base pb-2 pl-1 text-[#8892b0] font-semibold leading-5 sm:pb-7">
              Mini-project Inspired by css-tricks.com made with vanilla CSS and
              Javascript
            </p>
            <div className=" text-xs  pb-4 pl-1 text-left border-t-2 border-pink-400 pt-1 font-bold sm:pb-7">
              HTML-CSS3-Animations
            </div>
            <div
              style={{ backgroundImage: `url(${stacked})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
            >
              {/* hover effects */}

              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider ">
                  HTML and CSS3
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://stacked-card-list.vercel.app/"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Live Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/chethanBy/stacked-card-list"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-base pb-2 pl-1 text-[#8892b0] font-semibold leading-5">
              This is a Multi-level Dropdown menu Built using ReactJS and CSS3
              inspired by facebook dropdown menu.
            </p>
            <div className=" text-xs  pb-4 pl-1 text-left border-t-2 border-pink-400 pt-1 font-bold sm:mb-3">
              React-CSS3-react_icons
            </div>
            <div
              style={{ backgroundImage: `url(${dropdown})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
            >
              {/* hover effects */}

              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider ">
                  React js application
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://chethanby.github.io/AhriMain.github.io-dropdown/"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                      Live Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/chethanBy/AhriMain.github.io-dropdown"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
