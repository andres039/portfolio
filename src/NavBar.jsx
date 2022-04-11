import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const element = <FontAwesomeIcon icon={faCoffee} />
  return (
    <nav class="navbar is-fixed" role="navigation" aria-label="main navigation">
      <div className="container pt-5">
      <div class="navbar-start navbar-menu" id="navbarBasicExample">
        <div class="navbar-item is-size-5">
          <a>
            <strong>Skills</strong>
          </a>
        </div>
      </div>
     
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <p className=" has-text-weight-bold is-size-3">Andrés Beltrán</p>
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="true"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-end navbar-menu" id="navbarBasicExample">
        <div class="navbar-item">
          <a class="subTitle is-size-5">
            <strong>Projects</strong>
          </a>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
