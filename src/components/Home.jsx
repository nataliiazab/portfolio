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
          <h1 className="text-primary text-4xl md:text-5xl font-extrabold tracking-wider mb-4 md:mb-8">
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
              fontSize: "1.5rem",
              display: "inline-block",
            }}
            repeat={Infinity}
            className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 md:text-2xl"
          />
          <p className="text-light text-lg md:text-xl my-4 md:my-8 leading-relaxed">
            As a Business Applications Developer at St George's University of
            London, I contribute to the development and maintenance of their
            student information system.
            <br />
            <br />I volunteer as a full-stack developer for nonprofits like{" "}
            <a
              href="https://github.com/enBloc-org/kindly/tree/dev"
              className="text-blue-500 underline"
            >
              Trafalgar Girls
            </a>{" "}
            and CodeYourFuture, where I enhance my coding skills and contribute
            to meaningful projects.
            <br />
            <br />I completed a 12-month coding programme and actively engage
            with the tech community through events.
          </p>
          <a
            href="#projects"
            className="btn py-3 px-8 md:py-4 md:px-16 bg-gradient-to-r from-purple-400 to-pink-600 text-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      <div className="bg-white w-16 md:w-20 rounded py-1 px-2 absolute left-0 top-32 md:top-48 hidden md:block">
        <div className="py-1">
          <a
            href="https://www.linkedin.com/in/nataliia-zablotska/"
            className="p-2 md:p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img
              src={LinkedInIcon}
              alt="LinkedIn"
              className="w-8 md:w-10 h-8 md:h-10"
            />
          </a>
        </div>
        <div className="py-1">
          <a
            href="https://github.com/nataliiazab"
            className="flex items-center justify-center p-2 md:p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 hover:shadow-xl transition-transform transform-gpu duration-300 ease-in-out"
          >
            <img
              src={GitHubIcon}
              alt="GitHub"
              className="w-6 md:w-8 h-6 md:h-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
