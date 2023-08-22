/* eslint-disable no-unused-vars */
import React from "react";
import Headline from "../shared/Headline";
import skills from "../../public/skills.js";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto my-14 md:py-8 px-7">
      <Headline
        title={"ABOUT ME"}
        subtitle={
          "Here you will find more information about me, what I do, and my current tech skills"
        }
      />

      {/*About content*/}
      <div className="flex flex-col md:flex-row items-start justify-start">
        {/*left side*/}
        <div className="md:w-1/2 my-8">
          <h4 className="text-2xl font-bold mb-8">Get to know me!</h4>
          <div className="md:w-10/12 text-lg text-[#666] mb-8">
            <p className="mb-5">
              I am a passionate <strong>Fullstack Developer</strong> with a
              background in project management.
            </p>
            <p className="mb-5">
              I have always been fascinated by technology, and my love for it
              only grew stronger when I moved to London last year. I knew that I
              wanted to make a career in tech, so I enrolled in several online
              courses and completed an intense{" "}
              <strong>fullstack development bootcamp</strong>. During my
              bootcamp, I collaborated with a team of developers to create an
              app that was so successful that Code Your Future implemented it as
              a part of their final project assessment toolset.
            </p>
            <p className="mb-5">
              My teammates would say that I am a <strong>quick learner</strong>{" "}
              with exceptional <strong>critical thinking</strong> and
              <strong> problem-solving</strong> skills. They also say that I am
              easy to work with and always willing to help others.
            </p>
            <p className="mb-5">
              I am currently looking for an entry-level Fullstack Developer role
              where I can use my skills and{" "}
              <strong>passion to create innovative solutions</strong> to complex
              problems as well as learn and grow. I am always happy to connect
              with fellow professionals on{" "}
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
        </div>
        {/*right side*/}
        <div className="md:w-1/2 my-8">
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
        </div>
      </div>
    </div>
  );
};

export default About;
