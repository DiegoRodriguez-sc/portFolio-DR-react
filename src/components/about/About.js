import React from "react";

// styles
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>About me</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Diego.</h4>
            <p>
              I am a university students of systems and web developer from
              Buenos Aires, Argentina.
            </p>
            <p>
              I really enjoy solving problems and making things nice and easy to
              use. I can't stop learning new things; the more the merrier. I
              also love video games. A hobby that led me to meet and compete
              with good people. Ah, and Dulce de leche; I have a passion for
              dulce de leche!
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the front-end I usually work with Javascript, either
              standalone or including popular frameworks like ReactJS and VueJS.
              I also make the web pretty by using Sass, CSS and, whenever
              needed, any of their friends: Bootstrap, Bulma, etc.
            </p>
            <p>
              For the back-end I also work with Javascript (NodeJS, Express,
              MongoDB, etc.). But, lately I am learning java with Spring Boot.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
