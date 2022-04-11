import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

//Defines the icons:

const gitHub = <FontAwesomeIcon icon={faGithub} size='2x' color='green'/>
const linkedIn = <FontAwesomeIcon icon={faLinkedin} size='2x' color='blue'/>
const mail = <FontAwesomeIcon icon={faEnvelope} size='2x' color='red' />


const Footer = () => {
  return (
    <nav className="navbar is-fixed-bottom mb-5 pl-4" style={{backgroundColor: 'transparent'}}>
      <div className="container">
      <div className="navbar-item pr-6">
        <a href='https://github.com/andres039' target="_blank" >
          <i className="icon">{gitHub}</i>
        </a>
      </div>
      <div className="navbar-item pr-6">
        <a href='https://www.linkedin.com/in/andres-beltran-5ab844191/' target="_blank">
          <i className="icon">{linkedIn}</i>
        </a>
      </div>
      <div className="navbar-item">
        <a href='andres.kosan@gmail.com' onClick={() => alert('andres.kosan@gmail.com')}>
          <i className="icon">{mail}</i>
        </a>
      </div>
      </div>
    </nav>
  );
};

export default Footer;
