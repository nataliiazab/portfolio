import React from "react";
import { Helmet } from "react-helmet";
import Headline from "../shared/Headline";
import skills from "../../public/skills.js";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto my-14 md:py-8 px-7" id="about">
      <Helmet>
        <title>About Me - Full-Stack Developer</title>
        <meta
          name="description"
          content="Learn about Nataliia, a Full-Stack Developer with a background in project management and a passion for technology. Find her skills and aspirations."
        />
      </Helmet>
      <Headline
        title="ABOUT ME"
        subtitle="This is a brief overview of my background and my tech skills."
      />

      <div className="flex flex-col md:flex-row items-start justify-start">
        <motion.div
          className="md:w-1/2 my-8"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="text-2xl font-bold mb-8">Get to know me!</h1>
          <div className="md:w-10/12 text-lg text-[#666] mb-8">
            <p className="mb-5">
              I'm Nataliia, a <strong>Full-Stack Developer</strong> with a
              passion for using technology to solve real-world problems. I led
              cybersecurity projects funded by the U.S. government and
              configured a critical student system at St. George's, University
              of London. I am particularly proud of leading a project that
              trained 70+ Ukrainian veterans to become cybersecurity
              professionals -{" "}
              <a
                href="https://www.crdfglobal.org/insights/cybersecurity-gives-me-opportunity-continue-path-defender/"
                className="text-secondary font-bold underline"
              >
                CyberDefenders
              </a>
              .{" "}
            </p>

            <p className="mb-5">
              My experience includes full-stack development (CodeYourFuture),
              business applications support (St. George's), and project
              management (CRDF Global). I have strong analytical skills, gained
              through M.Sc. in Business Economics and Analytics.
            </p>
            <p className="mb-5">
              In <strong>CodeYourFuture</strong> (CYF), a 12-month coding
              programme, I learned the full-stack development and collaborated
              with a diverse group of developers. As part of my final project, I
              co-developed the{" "}
              <a
                href="https://good-pr.vercel.app/"
                className="text-secondary font-bold underline"
              >
                Good PR App
              </a>
              , which resulted in an invitation to join a CYF product team. In
              my spare time, I attend <strong>tech events</strong> and build{" "}
              <strong>personal projects</strong> to stay up-to-date on the
              latest technologies. I'm always looking for new ways to
              <strong> learn and grow</strong> as a developer.
            </p>
            <p className="mb-5">
              I'm looking for a{" "}
              <strong>
                junior-level full-stack or front-end developer role
              </strong>{" "}
              where I can learn, grow and make a difference. Connect with me on{" "}
              <a
                href="https://www.linkedin.com/feed/"
                className="text-secondary font-bold underline"
              >
                LinkedIn
              </a>
              !
            </p>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 my-8"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="text-2xl font-bold mb-8">My Skills</h1>
          <div className="flex flex-wrap gap-3 md:w-10/12">
            {skills.map((skill) => (
              <p
                key={skill.id}
                className="bg-slate-200 py-2 px-4 rounded text-sm uppercase font-semibold text-gray-700"
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
