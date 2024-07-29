import React from "react";
import Headline from "../shared/Headline";
import projects from "../../public/projects.js";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto md:py-8 px-7" id="projects">
      <Headline
        title={"PROJECTS"}
        subtitle={"Some of my personal and group projects."}
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
              <a
                href={project.demo}
                itemScope
                itemType="http://schema.org/WebPage"
              >
                <img
                  className="transform transition-transform hover:scale-105 rounded shadow-lg"
                  src={project.image}
                  alt={project.name}
                  width={940}
                  height={788}
                  loading="lazy" 
                />
              </a>

              <div className="md:w-10/12 text-center md:text-left px-2">
                <h1 className="text-2xl font-bold mb-4" itemProp="name">
                  {project.name}
                </h1>

                <p className="text-light mb-4">
                  <span className="bg-slate-200 py-2 px-4 rounded text-sm uppercase font-semibold text-gray-700">
                    {project.type}
                  </span>
                </p>

                <p
                  className="text-lg text-gray-700 leading-6 mb-6"
                  itemProp="description"
                >
                  {project.description}
                </p>
                {project.type === "group project" && (
                  <p
                    className="text-lg text-gray-700 leading-6 mb-6"
                    itemProp="myContribution"
                  >
                    {project.myContribution}
                  </p>
                )}

                <div className="text-light mb-6">
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {project.skills.map((skill) => (
                      <span
                        className="bg-slate-200 border border-slate-300 rounded py-1 px-3 text-sm font-medium text-gray-700 shadow-sm"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center md:justify-start gap-4">
                  <a
                    className="btn py-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-600"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    className="btn py-2 px-6 bg-white border-2 border-purple-600 text-purple-600 rounded hover:bg-purple-50"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </a>
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
