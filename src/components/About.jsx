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
          "Here you will find more information about me, what I do, and my current tech skills"
        }
      />

      {/*About content*/}
      <div className="flex flex-col md:flex-row items-start justify-start">
        {/*left side*/}
        <motion.div
          className="md:w-1/2 my-8"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h4 className="text-2xl font-bold mb-8">Get to know me!</h4>
          <div className="md:w-10/12 text-lg text-[#666] mb-8">
            <p className="mb-5">
              I'm Natalie, a Fullstack developer with a passion for using
              technology to solve real-world problems. I have a background in
              project management and a STEM degree, and I'm eager to start my
              career as a Fullstack developer.
            </p>
            <p className="mb-5">
              In my previous role as a project manager, I was responsible for
              leading and coordinating teams to deliver projects on time and
              within budget. I have a proven track record of success in
              communicating effectively, solving problems, and working
              collaboratively.
            </p>
            <p className="mb-5">
              In my bootcamp, I learned the fullstack development process, from
              front-end to back-end. I built the Good PR App, which uses GitHub
              APIs to enhance engagement within a bootcamp community. I'm also a
              quick learner and eager to work hard.
            </p>
            <p className="mb-5">
              I'm looking for an entry-level full-stack developer role where I
              can learn, grow and make a difference. Connect with me on{" "}
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
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
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
