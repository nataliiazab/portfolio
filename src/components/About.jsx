/* eslint-disable no-unused-vars */
import React from "react";
import Headline from "../shared/Headline";
import skills from "../../public/skills.js";
//motion animation
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto my-14 md:py-8 px-7" id="about">
      <Headline
        title={"ABOUT ME"}
        subtitle={
          "This is a brief overview of my background and my tech skills."
        }
      />

      {/*About content*/}
      <div className="flex flex-col md:flex-row items-start justify-start">
        {/*left side*/}
        <motion.div
          className="md:w-1/2 my-8"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h4 className="text-2xl font-bold mb-8">Get to know me!</h4>
          <div className="md:w-10/12 text-lg text-[#666] mb-8">
            <p className="mb-5">
              I'm Natalie, a <strong>Fullstack developer</strong> with a passion
              for using technology to solve real-world problems. I have a{" "}
              <strong>background in project management</strong> and a{" "}
              <strong>STEM degree</strong>, and I'm eager to start my career as
              a Fullstack developer.
            </p>
            <p className="mb-5">
              As a project manager, I have a proven track record of delivering
              <strong> cybersecurity projects</strong> on time and within
              budget. I am particularly proud of leading a project that trained
              70+ Ukrainian veterans to become cybersecurity professionals -{" "}
              <a
                href="https://www.crdfglobal.org/insights/cybersecurity-gives-me-opportunity-continue-path-defender/"
                className="text-secondary font-bold underline"
              >
                CyberDefenders
              </a>
              .
            </p>
            <p className="mb-5">
              In my <strong>bootcamp</strong>, I learned the fullstack
              development process and collaborated with a diverse group of
              developers. As part of my final project, I co-developed the{" "}
              <a
                href="https://good-pr.vercel.app/"
                className="text-secondary font-bold underline"
              >
                Good PR App
              </a>
              , which uses GitHub APIs to enhance engagement within a bootcamp
              community. In my spare time, I attend <strong>tech events</strong>{" "}
              and build <strong>personal projects</strong> to stay up-to-date on
              the latest technologies. I'm always looking for new ways to
              <strong> learn and grow</strong> as a developer.
            </p>
            <p className="mb-5">
              I'm looking for an{" "}
              <strong>entry-level Fullstack developer role</strong> where I can
              learn, grow and make a difference. Connect with me on{" "}
              <a
                href="https://www.linkedin.com/feed/"
                className="text-secondary font-bold underline"
              >
                {" "}
                LinkedIn
              </a>
              !
            </p>
          </div>
        </motion.div>
        {/*right side*/}
        <motion.div
          className="md:w-1/2 my-8"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h4 className="text-2xl font-bold mb-8">My Skills</h4>
          <div className="flex flex-wrap gap-3 md:w-10/12">
            {skills.map((skill) => (
              <p
                key={skill.id}
                className="bg-slate-300 text-light py-2 px-4 rounded"
              >
                {skill.title}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
