import React from 'react';
import { IoMailOutline, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

// style
import "./contact.css";

const Contact = () => {
 return (
  <div>
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
               Please, you can press the icons or you can find me with the link to contact me:
            </p>
          </div>
        </div>
      <div className='icons'>
        <p> <IoMailOutline /> Diego.rodriguez.sc@gmail.com </p>
        <p> <IoLogoGithub /> Diego Rodriguez</p>
        <p> <IoLogoLinkedin /> Diego Rodriguez </p>
      </div>   
      </div>
    </section>
  </div>
 );
}

export default Contact;
