import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
//Defines the icons:

const gitHub = <FontAwesomeIcon icon={faGithub} size="2x" color="green" />;
const linkedIn = <FontAwesomeIcon icon={faLinkedin} size="2x" color="blue" />;
const mail = <FontAwesomeIcon icon={faEnvelope} size="2x" color="red" />;

const Footer = () => {
  return (
    <motion.nav
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{delay: 1}}
      className="navbar is-fixed-bottom mb-5 pl-4"
      style={{ backgroundColor: "transparent", maxWidth: '100vw' }}
    >
      <div className="container">
        <div className="navbar-item pr-6">
          <motion.a whileHover={{scale: 1.2}} href="https://github.com/andres039" target="_blank">
            <i className="icon">{gitHub}</i>
          </motion.a>
        </div>
        <div className="navbar-item pr-6">
          <motion.a whileHover={{scale: 1.2}}
            href="https://www.linkedin.com/in/andres-beltran-5ab844191/"
            target="_blank"
          >
            <i className="icon">{linkedIn}</i>
          </motion.a>
        </div>
        <div className="navbar-item">
          <motion.a whileHover={{scale: 1.2}} href="mailto:andres.kosan@gmail.com">
            <i className="icon">{mail}</i>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Footer;
