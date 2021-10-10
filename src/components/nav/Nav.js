import React from 'react';
import { Fragment } from 'react';

const Nav = (props) => {
 return (
  <Fragment>
    <nav id="navbar">
     <div className="nav-wrapper">
       <p className="brand">
          Diego
          <strong>Rodriguez</strong>
       </p>
       <div className={props.showMenu === "active" ? "menu-button active": "menu-button"}
        onClick={props.toggleMenu}
        >
         <span />
       </div>
     </div>
    </nav>
  </Fragment>
 );
}

export default Nav;
