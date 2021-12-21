import React from 'react';
import Sociallinks from '../contact/SocialLinks';

// style
import "./footer.css";

const Footer = () => {
 return (
  <footer>
  <div className="wrapper" style={{color:"white"}}>
    <h3>THANKS FOR VISITING</h3>
    <p>© {new Date().getFullYear()} Diego Rodriguez.</p>
    <Sociallinks />
  </div>
</footer>
 );
}

export default Footer;
