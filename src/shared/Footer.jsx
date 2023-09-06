/* eslint-disable no-unused-vars */
import React from "react";
import linkedin from "./../assets/icons-white/linkedin-white.png";
import github from "./../assets/icons-white/github-white.png";

const Footer = () => {
  return (
    <div className="bg-black md:h-70 px-7">
      <div className="max-w-7xl mx-auto py-20 flex flex-col md:flex-row justify-between">
        {/* Logo and description */}
        <div className="md:w-2/5 my-3">
          <h4 className="text-white font-bold text-2xl tracking-white">
            NATALIE ZABLOTSKA
          </h4>
          <p className="mt-5 text-sm leading-7 text-[#eee]">
            Full stack Developer
          </p>
        </div>

        {/*social icons */}
        <div className="my-3">
          <h4 className="text-white font-bold text-2xl tracking-white">
            SOCIAL MEDIA
          </h4>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.linkedin.com/in/nataliia-zablotska"
              className="ml-1"
            >
              <img src={linkedin} alt="" className="w-7 h-7" />
            </a>
            <a href="https://github.com/nataliiazab" className="ml-1">
              <img src={github} alt="" className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

