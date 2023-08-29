/* eslint-disable no-unused-vars */
import React from "react";

import LinkedIn from "../assets/social-media-icons/LinkedIn.svg";
import GitHub from "../assets/social-media-icons/GitHub.svg";
import { TypeAnimation } from "react-type-animation";
//motion animation
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="hero my-8 md:py-8 px-7 relative" id="home">
      <div className="h-screen flex items-center justify-center">
        <motion.div
          className="text-center md:w-1/2"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
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
            I <strong>switched from project management to tech</strong> after
            discovering my passion for programming while delivering
            cybersecurity projects for the US Department of State. I{" "}
            <strong>
              completed a 500-hour fullstack development bootcamp
            </strong>{" "}
            and I'm now looking for my first role where I can use my skills to
            create innovative solutions.
          </p>

          <button className="btn py-4 px-16">
            <Link to="projects">Projects </Link>
          </button>
        </motion.div>
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
