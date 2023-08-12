/* eslint-disable no-unused-vars */
import React from "react";
import { TypeAnimation } from "react-type-animation";
import LinkedIn from "../assets/social-media-icons/LinkedIn.svg";
import GitHub from "../assets/social-media-icons/GitHub.svg";

const Home = () => {
  return (
    <div className="hero h-screen flex items-center justify-center">
      <div className="text-center md:w-1/2">
        <h1 className="text-primary text-5xl font-extrabold tracking-wider mb-8">
          {" "}
          HEY, I'M NATALIE ZABLOTSKA
        </h1>
        <TypeAnimation
          sequence={[
            "Fullstack Developer",
            1000,
            "Software Engineer",
            1000,
            "React Developer",
            1000,
            "JavaScript Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2rem", display: "inline-block" }}
          repeat={Infinity}
          className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 "
        />
        <p className="text-light text-xl my-8">
          I am a full-stack web developer with a passion for learning. I believe
          in the power of technology and the power of solving problems. I am
          passionate about creating and solving problems that make a difference.
          
        </p>
        <button className="btn py-4 px-16">Projects</button>
      </div>

      {/*hero social-media*/}
      <div className="bg-white w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block">
        <div className="py-1">
          <a
            href="https://www.linkedin.com/in/nataliia-zablotska/"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={LinkedIn} alt="LinkedIn" className="w-10 h-10" />
          </a>
        </div>
        <div className="py-1">
          <a
            href="https://github.com/nataliiazab"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={GitHub} alt="gitHub" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
