import React from 'react';
import Project from './Project';

// styles
import "./projects.css";

const Projects = () => {
 return (
  <section id="projects">
  <div className="projects-container">
    <div className="heading">
      <h3 className="title">Mis proyectos</h3>
      <p className="separator" />
      <p className="subtitle">
        Aquí hay una lista de la mayoría de los proyectos en los que he estado trabajando últimamente.
      </p>
    </div>
    <div className="projects-wrapper">
      <Project
        title="Anonymous Message Board."
        img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/AnonMsgBoard.jpg'}
        tech="js css react node"
        link="https://yagoestevez-anon-msg-board.glitch.me/"
        repo="https://github.com/yagoestevez/anonymous-message-board"
      >
        <small>
          Built using Node, Express, MongoDB, CSS + Bulma, React.js and React Router.
        </small>
        <p>
          This is a full-stack website that I made which lets the users read and post anonymous
          messages and replies.
        </p>
      </Project>
    </div>
  </div>
</section>
 );
}

export default Projects;
