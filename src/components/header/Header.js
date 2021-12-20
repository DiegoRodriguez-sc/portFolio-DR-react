import React from 'react';

// styles
import "./header.css";

const Header = () => {
 return (
  <header id="welcome-section">
     <div className="forest" />
     <div className="silhouette" />
     <div className="moon" />
     <div className="container">
       <h1>
        <span className="line"> Web developer</span>
       </h1>
       <div className="buttons">
          <a href="#projects">Porfolio</a>
          <a href="#contact" className="cta">
            Download CV
          </a>
        </div>
     </div>
  </header>
 );
}

export default Header;
