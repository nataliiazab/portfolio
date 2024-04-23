import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import LinkedInIcon from "../assets/social-media-icons/LinkedIn.svg";
import GitHubIcon from "../assets/social-media-icons/GitHub.svg";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="hero my-8 md:py-8 px-7 relative" id="home">
      <Helmet>
        <title>Natalie Zablotska - Full Stack Developer</title>
        <meta
          name="description"
          content="Natalie Zablotska is a Full Stack Developer with a background in project management, passionate about creating innovative tech solutions. Discover her journey and projects."
        />
      </Helmet>
      <div className="h-screen flex items-center justify-center">
        <motion.div
          className="text-center md:w-1/2"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h1 className="text-primary text-5xl font-extrabold tracking-wider mb-8">
            HEY, I'M NATALIE ZABLOTSKA
          </h1>
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1000,
              "Software Engineer",
              1000,
              "Frontend Developer",
              1000,
              "React Developer",
              1000,
              "JavaScript Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "2rem",
              display: "inline-block",
            }}
            repeat={Infinity}
            className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          />
          <p className="text-light text-xl my-8">
            I <strong>switched from project management to tech</strong> after
            discovering my passion for programming while delivering
            cybersecurity projects funded by the US Department of State. I{" "}
            <strong>completed a 12-month coding programme</strong> and currently am working as a Business Applications Developer at St. George's, University of London where I develop and maintain a critical student system.
          </p>

          <a href="#projects" className="btn py-4 px-16">
            Projects
          </a>
        </motion.div>
      </div>
      {/* Hero social-media */}
      <div className="bg-white w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block">
        <div className="py-1">
          <a
            href="https://www.linkedin.com/in/nataliia-zablotska/"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={LinkedInIcon} alt="LinkedIn" className="w-10 h-10" />
          </a>
        </div>
        <div className="py-1">
          <a
            href="https://github.com/nataliiazab"
            className="p-3 hover-bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={GitHubIcon} alt="GitHub" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
