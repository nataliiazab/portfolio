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
        subtitle={"I have included some of my personal and group projects here"}
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
              <a href={project.demo}>
                {" "}
                <img
                  className="transform transition-transform hover:scale-105 rounded"
                  src={project.image}
                  alt={project.name}
                  width={940}
                  height={788}
                />
              </a>

              <div className="md:w-10/12 text-center md:text-left px-2">
                <h4 className="text-2xl font-bold mb-6">{project.name}</h4>

                <p className="  text-light  mb-4  ">
                  <span className="rounded bg-slate-300 py-2 px-4 text-left uppercase ">
                    {project.type}
                  </span>
                </p>

                <p className="text-lg text-[#666] leading-6 mb-6">
                  {project.description}
                </p>
                {project.type === "group project" && (
                  <p className="text-lg text-[#666] leading-6 mb-6">
                    {project.myContribution}
                  </p>
                )}
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
