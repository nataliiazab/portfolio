/* eslint-disable no-unused-vars */
import React from "react";
import Headline from "../shared/Headline";
import projects from "../../public/projects.js";
//motion animation
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto md:py-8 px-7" id="projects">
      <Headline
        title={"PROJECTS"}
        subtitle={
          "Here you will find some of the personal and group projects that I worked on"
        }
      />
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <motion.div
              className="projects items-center my-20"
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img src={project.image} alt="" />
              <div className="md:w-10/12 text-center md:text-left px-2">
                <h4 className="text-2xl font-bold mb-6">{project.name}</h4>
                <p className="text-lg text-[#666] leading-6 mb-6">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <button className="btn py-3 px-7">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                  <button className="btn py-3 px-7 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-200">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repo
                    </a>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
