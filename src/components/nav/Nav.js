import React from 'react';
import { Fragment } from 'react';


const Nav = ({toggleMenu, menuShow}) => {
 return (
  <Fragment>
    <nav id="navbar">
     <div className="nav-wrapper">
       <p className="brand">
          Diego
          <strong>Rodriguez</strong>
       </p>
       <div className={menuShow === "active" ? "menu-button active": "menu-button"}
        onClick={toggleMenu}
        >
         <span />
       </div>
     </div>
    </nav>
  </Fragment>
 );
}

export default Nav;
