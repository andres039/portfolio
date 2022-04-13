import React, { useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [toggle, setToggle] = useState("");

  const burgerAction = () =>
    setToggle((prev) => (prev === "" ? (prev = "is-active") : (prev = "")));

  return (
    <motion.nav
      // animate={{ y: 0 }}
      // initial={{ y: -150 }}
      // transition={{ duration: 0.5 }}
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
      style={{maxWidth: '100vw'}}
    >
      <div
        className="container pt-5"
        // style={{borderBottom: '1px black solid'}}
      >
        {toggle !== "is-active" && (
          <div
            className={`navbar-start navbar-menu ${toggle}`}
            id="navbarBasicExample"
          >
            <div className="navbar-item is-size-5">
              <motion.a
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
            <p className=" has-text-weight-bold is-size-3 p-2">
              Andrés Beltrán
            </p>
          </motion.a>

          <a
            role="button"
            className={`navbar-burger ${toggle}`}
            aria-label="menu"
            aria-expanded="true"
            data-target="navbarBasicExample"
            onClick={burgerAction}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
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
              className="subTitle is-size-5"
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
