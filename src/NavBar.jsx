import React, { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState("");

  const burgerAction = () =>
    setToggle((prev) => (prev === "" ? (prev = "is-active") : (prev = "")));

  return (
    <nav
      className="navbar is-fixed-top pb-4"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container pt-5" 
      // style={{borderBottom: '1px black solid'}}
      
      >
        {toggle !== "is-active" && (
          <div
            className={`navbar-start navbar-menu ${toggle}`}
            id="navbarBasicExample"
          >
            <div className="navbar-item is-size-5">
              <a>
                <strong>Skills</strong>
              </a>
            </div>
          </div>
        )}
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <p className=" has-text-weight-bold is-size-3 p-2">
              Andrés Beltrán
            </p>
          </a>

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
          <div
            className={`navbar-menu ${toggle}`}
            id="navbarBasicExample"
          >
            <div className="navbar-item is-size-5">
              <a>
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
            <a className="subTitle is-size-5">
              <strong>Projects</strong>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
