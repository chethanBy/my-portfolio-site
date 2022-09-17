import React from "react";
import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { onButtonClick } from "../helper/pdfDownload";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 selection:bg-pink-600">
      {/* logo */}
      <div className="grid grid-cols-2 gap-2 sm:gap-6">
        <div>
          <img
            src={Logo}
            alt="My logo"
            style={{ width: "90px", height: "55px", objectFit: "cover" }}
            className="rounded"
          />
        </div>
        <button
          onClick={onButtonClick}
          className="text-lg text-center self-center border-b-2 border-pink-400 flex hover:border-b-4 transition-transform duration-300 sm:font-bold"
        >
          Resume <AiOutlineDownload className="mt-1 ml-1 hover:scale-110" />
        </button>
      </div>
      {/* Links */}
      {/* anything above small screen dont hide it make it flex */}

      <ul className="hidden md:flex md:items-center">
        <Link
          to="home"
          smooth={true}
          duration={300}
          className="px-4 cursor-pointer"
        >
          <span className="text-pink-600 text-lg">01.</span>
          <span className="text-sm font-bold"> Home</span>
        </Link>

        <Link
          to="about"
          smooth={true}
          duration={300}
          className="px-4 cursor-pointer"
        >
          <span className="text-pink-600 text-lg">02.</span>
          <span className="text-sm font-bold"> About</span>
        </Link>

        <Link
          to="skills"
          smooth={true}
          duration={300}
          className="px-4 cursor-pointer"
        >
          <span className="text-pink-600 text-lg">03.</span>
          <span className="text-sm font-bold"> Skills</span>
        </Link>

        <Link
          to="project"
          smooth={true}
          duration={300}
          className="px-4 cursor-pointer"
        >
          <span className="text-pink-600 text-lg ">04.</span>
          <span className="text-sm font-bold"> Projects</span>
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={300}
          className="px-4 cursor-pointer"
        >
          <span className="text-pink-600 text-lg">05.</span>
          <span className="text-sm font-bold"> Contact</span>
        </Link>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? `hidden`
            : `absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center md:hidden `
        }
      >
        <Link
          onClick={handleClick}
          to="home"
          smooth={true}
          duration={300}
          className="py-6 text-4xl cursor-pointer"
        >
          Home
        </Link>

        <Link
          to="about"
          smooth={true}
          duration={300}
          onClick={handleClick}
          className="py-6 text-4xl cursor-pointer"
        >
          About
        </Link>

        <Link
          to="skills"
          smooth={true}
          duration={300}
          onClick={handleClick}
          className="py-6 text-4xl cursor-pointer"
        >
          Skills
        </Link>

        <Link
          to="project"
          smooth={true}
          duration={300}
          onClick={handleClick}
          className="py-6 text-4xl cursor-pointer"
        >
          Projects
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={300}
          onClick={handleClick}
          className="py-6 text-4xl cursor-pointer"
        >
          Contact
        </Link>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/chethan-by-a34891180/"
              className="flex justify-between items-center w-full text-gray-300 font-bold pl-6"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/chethanBy"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300 font-bold pl-6"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] ">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold pl-6 cursor-pointer"
              onClick={onButtonClick}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
