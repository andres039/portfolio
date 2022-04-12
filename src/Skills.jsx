import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faServer,
  faSquareCaretUp,
  faTape
} from "@fortawesome/free-solid-svg-icons";

import {
  faReact,
  faNodeJs,
  faJs,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

const postgres = <FontAwesomeIcon icon={faDatabase} size="2x" color="orange" />;
const express = <FontAwesomeIcon icon={faServer} size="2x" color="red" />;
const react = <FontAwesomeIcon icon={faReact} size="2x" color="blue" />;
const node = <FontAwesomeIcon icon={faNodeJs} size="2x" color="green" />;
const js = <FontAwesomeIcon icon={faJs} size="2x" color="orange" />;
const css = <FontAwesomeIcon icon={faCss3} size="2x" color="blue" />;
const prisma = <FontAwesomeIcon icon={faSquareCaretUp} size="2x" color="purple" />;
const api = <FontAwesomeIcon icon={faTape} size="2x" color="green" />;





const Skills = () => {
  return (
    <section className="hero is-large" style={{maxHeight: '100vh'}}>
      <div className="container hero-head" style={{minWidth: '100vw'}}>
        <div className="is-flex is-justify-content-center pt-4 pb-6">
          <h1 className="title is-center">My Skills:</h1>
          </div>
        <div className="tabs" >
          
          <ul className=" is-flex is-justify-content-center  pt-4">
            <li className="is-active">
              <a>
                <i className="icon">{postgres}</i> PostgreSQL
              </a>
            </li>
            <li>
              <a>
                <i className="icon">{express}</i> Express.js
              </a>
            </li>
           
              <li className="">
                <a>
                  <i className="icon ">{react}</i> React.js
                </a>
              </li>
              <li>
                <a>
                  <i className="icon">{node}</i> Node.js
                </a>
              </li>
              <li>
                <a>
                  <i className="icon">{js}</i> JavaScript
                </a>
              </li>
              <li>
                <a>
                  <i className="icon">{css}</i> CSS
                </a>
              </li>
              <li>
                <a>
                  <i className="icon">{prisma}</i> Prisma
                </a>
              </li>
              <li>
                <a>
                  <i className="icon">{api}</i> API
                </a>
              </li>
          </ul>
          </div>
        </div>
      
    </section>
  );
};

export default Skills;
