import React from "react";
import Project from "./Project";
// styles
import "./projects.css";
import { data } from "../../helpers/data";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of most of the projects I've been working on lately.
          </p>
        </div>
        <div className="projects-wrapper">
        {
          data.map(proyect => (
            <Project
              title={proyect.title}
              img={proyect.img}
              tech={proyect.tech}
              link={proyect.link}
              repo={proyect.repo}
            >
              <small>
              {proyect.small}
              </small>
              <p>
              {proyect.p}
              </p>
            </Project>
          ))
        }
        </div>
      </div>
    </section>
  );
};

export default Projects;
