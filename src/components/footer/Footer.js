import React from 'react';
import Sociallinks from '../contact/SocialLinks';

const Footer = () => {
 return (
  <footer>
  <div className="wrapper">
    <h3>THANKS FOR VISITING</h3>
    <p>© {new Date().getFullYear()} Yago Estévez.</p>
    <Sociallinks />
  </div>
</footer>
 );
}

export default Footer;
