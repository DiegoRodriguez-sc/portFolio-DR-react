import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Nav from './components/nav/Nav';
import Projects from './components/projects/Projects';

//styles
import "./style.css";

const Portafolioapp = () => {

  const [menu, setMenu] = useState(false);
  const [menuShow, setMenuShow] = useState("deactive");


  const toggleMenu = () => {
     setMenu(!menu);
     if(menu){
       setMenuShow("deactive")
     }else{
       setMenuShow("active");
     }
  }

  useEffect(() => {

    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility = header.style.visibility === 'hidden' && 'visible';
      else header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
      else navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          });
        }
      }
    })();

  }, [])

 return (
  <Fragment>
    <Menu toggleMenu={toggleMenu} menuShow={menuShow} />
    <Nav toggleMenu={toggleMenu} menuShow={menuShow} />
    <Header />
    <About />
    <Projects />
    <Contact />
  </Fragment>
 );
}

export default Portafolioapp;
