import React from "react";
import Project from "./Project";
import { projects } from "./data/projects";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <section
      id="projects"
      className="container mb-6 pb-6  pt-6"
      style={{ minHeight: "100vh", maxWidth: "90vw",marginTop: "20rem" }}
    >
      <div
        className="is-flex is-justify-content-center is-align-content-center"
        style={{ width: "100%" }}
      >
        <motion.h1
          id='test'
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="title mt-6 pt-6 mb-6 pb-6"
        >
          Some of my Projects:
        </motion.h1>
      </div>

      <div className="container is-flex is-justify-content-center">
        <div
          className="columns is-flex is-flex-wrap-wrap"
          style={{ maxWidth: "100vw" }}
        >
          {projects.map((project, index) => (
            <Project
              image={project.image}
              title={project.title}
              description={project.description}
              stack={project.stack}
              type={project.type}
              code={project.code}
              live={project.live}
              timeDelay={index !== 0 ? index - index/2 : index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
