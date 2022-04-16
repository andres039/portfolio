import React, { useState } from "react";
import { motion } from "framer-motion";
import './navbar.css'
const NavBar = () => {
  const [toggle, setToggle] = useState("");

  const burgerAction = () =>
    setToggle((prev) => (prev === "" ? (prev = "is-active") : (prev = "")));

  return (
    <motion.nav
      className="navbar is-fixed-top is-flex is-info test"
      role="navigation"
      aria-label="main navigation"
      style={{ maxWidth: "100vw" }}
    >
      <div
        className="container pt-5"
         
      >
        {toggle !== "is-active" && (
          <div
            className={`navbar-start navbar-menu ${toggle}`}
            id="navbarBasicExample"
          >
            <div className="navbar-item is-size-5 has-text-danger">
              <motion.a
              className="has-text-danger"
                href="#skills"
                animate={{ y: 0 }}
                initial={{ y: -200 }}
                transition={{ delay: 0.5 }}
              >
                <strong>Skills</strong>
              </motion.a>
            </div>
          </div>
        )}
        <div className="navbar-brand">
          <motion.a
            animate={{ y: 0 }}
            initial={{ y: -200 }}
            className="navbar-item"
            href="#top"
          >
            <p id='test' className=" has-text-weight-bold is-size-3 p-2">
              Andrés Beltrán
            </p>
          </motion.a>

          <button
            className={`navbar-burger ${toggle} mr-4  is-align-self-center`}
            aria-label="menu"
            aria-expanded="true"
            data-target="navbarBasicExample"
            onClick={burgerAction}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        {toggle === "is-active" && (
          <div className={`navbar-menu ${toggle}`} id="navbarBasicExample">
            <div className="navbar-item is-size-5">
              <a href="#skills">
                <strong>Skills</strong>
              </a>
            </div>
          </div>
        )}
        <div
          className={`navbar-end navbar-menu${toggle}`}
          id="navbarBasicExample"
        >
          <div className="navbar-item">
            <motion.a
              animate={{ y: 0 }}
              initial={{ y: -200 }}
              transition={{ delay: 0.5 }}
              className="subTitle is-size-5 has-text-danger"
              href="#projects"
            >
              <strong>Projects</strong>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
