/* eslint-disable no-unused-vars */
import React from "react";

const Home = () => {
  return (
    <div className="hero h-screen flex items-center justify-center">
      <div className="text-center md:w-1/2">
        <h1 className="text-primary text-5xl font-extrabold tracking-wider mb-8">
          {" "}
          HEY, I'M NATALIE ZABLOTSKA
        </h1>
        <p className="text-light text-xl my-8">
          I am a recent graduate of a fullstack development bootcamp with 5
          years of experience in project management. I am passionate about
          fullstack development and love the challenge of building complex web
          applications from scratch. I am eager to apply my skills and knowledge
          to an entry-level fullstack developer role in the UK, where I can use
          my passion for technology to make a real difference.
        </p>
        <button className="btn py-4 px-16">Projects</button>
      </div>
    </div>
  );
};

export default Home;
