import React from "react";
import Project from "./Project";
import { projects } from "./data/projects";

const Projects = () => {
  return (
    <section className="container  mb-4 mt-6 pt-6" style={{ minHeight: "90vh" }}>
      <div className="is-flex is-justify-content-center">
        <h1 className="title pb-6">Some of my Projects:</h1>
      </div>
     
        <div className="container is-flex is-flex-wrap-wrap">
      {projects.map((project) => (
        <Project
         
          image={project.image}
          title={project.title}
          description={project.description}
          stack={project.stack}
          type={project.type}
        />
      ))}
      </div>
     
    </section>
  );
};

export default Projects;
