import React from "react";

const About = () => {
  return (
    <div name="about" className="bg-[#0a192f] w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className=" pb-6 pl-4">
            <p className="text-4xl font-bold inline  border-b-4 border-pink-600 mb-1">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className=" text-4xl font-bold">
            <p>Hi. I'm Chethan, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="font-semibold">
              I am passionate about building excellent software that improves
              the lives of those around me and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2021.I was always interested in technology especially the software
              part.i still remember when i got my first android when i was
              16years old and ever since then i was flashing one custom rom or
              another, rooting and all kinds of fun stuffs.I would like to be a
              part of an organization where I could use and enhance my knowledge
              and talent for the development of both the organization and
              myself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
