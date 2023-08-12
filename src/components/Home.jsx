/* eslint-disable no-unused-vars */
import React from "react";
import { TypeAnimation } from "react-type-animation";

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
            "Your Future Teammate 🤞",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2rem", display: "inline-block" }}
          repeat={Infinity}
          className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 "
        />
        <p className="text-light text-xl my-8">
          I am a passionate fullstack developer with a background in project
          management. I have always been fascinated by technology, and my love
          for it only grew stronger when I moved to London last year. I knew
          that I wanted to make a career in tech, so I enrolled in several
          online courses and completed an intense fullstack development
          bootcamp. During my bootcamp, I collaborated with a team of developers
          to create an app that was so successful that Code Your Future
          implemented it as a part of their final project assessment toolset. My
          teammates would say that I am a quick learner with exceptional
          critical thinking and problem-solving skills. They also say that I am
          easy to work with and always willing to help others. I am currently
          looking for an entry-level fullstack developer role where I can use my
          skills and passion to create innovative solutions to complex problems
          as well as learn and grow.
        </p>
        <button className="btn py-4 px-16">Projects</button>
      </div>
    </div>
  );
};

export default Home;
