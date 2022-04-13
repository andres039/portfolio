import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faServer,
  faSquareCaretUp,
  faTape,
} from "@fortawesome/free-solid-svg-icons";

import {
  faReact,
  faNodeJs,
  faJs,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const postgres = <FontAwesomeIcon icon={faDatabase} size="2x" color="orange" />;
const express = <FontAwesomeIcon icon={faServer} size="2x" color="red" />;
const react = <FontAwesomeIcon icon={faReact} size="2x" color="blue" />;
const node = <FontAwesomeIcon icon={faNodeJs} size="2x" color="green" />;
const js = <FontAwesomeIcon icon={faJs} size="2x" color="orange" />;
const css = <FontAwesomeIcon icon={faCss3} size="2x" color="blue" />;
const prisma = (
  <FontAwesomeIcon icon={faSquareCaretUp} size="2x" color="purple" />
);
const api = <FontAwesomeIcon icon={faTape} size="2x" color="green" />;

const Skills = () => {
  return (
    <section className="hero is-large" style={{ maxHeight: "100vh", maxWidth: "100vw"   }}>
      <div
        className="container hero-head mb-6 pb-1"
        style={{ minWidth: "100vw", maxWidth: "100%" }}
      >
        <div className="is-flex isflex-wrap-wrap is-justify-content-center is-align-items-center pt-4 pb-6 is-align-content-center">
          <motion.h1
            whileInView={{opacity: 1 }}
           initial={{ opacity: 0 }}
           transition={{duration: 1}}
            className="title mt-6 pt-6 pb-6"
          >
            My Skills:
          </motion.h1>
        </div>
        <motion.div className="tabs"  whileInView={{ x: 0}} initial={{x: -300}} transition={{duration: 0.5}}>
          <ul
         
            className=" is-flex is-flex-wrap-wrap is-justify-content-center  pt-6 mt-6"
            style={{ maxWidth: "90vw" }}
          >
            <li className="is-active">
              <span>
                <motion.a whileHover={{scale: 1.2}}>
                  <i className="icon">{postgres}</i> PostgreSQL
                </motion.a>
              </span>
            </li>
            <li>
              <span>
                <motion.a whileHover={{scale: 1.2}}>
                  <i className="icon">{express}</i> Express.js
                </motion.a>
              </span>
            </li>

            <li>
              <span>
                <motion.a whileHover={{scale: 1.2}}>
                  <i className="icon ">{react}</i> React.js
                </motion.a>
              </span>
            </li>
            <li>
              <span>
                <motion.a whileHover={{scale: 1.2}}>
                  <i className="icon">{node}</i> Node.js
                </motion.a>
              </span>
            </li>
            <li>
              <span>
                <motion.a whileHover={{scale: 1.2}}>
                  <i className="icon">{js}</i> JavaScript
                </motion.a>
              </span>
            </li>
            <li>
              <span>
                <motion.a whileHover={{scale: 1.2}}>
                  <i className="icon">{css}</i> CSS
                </motion.a>
              </span>
            </li>
            <li>
              <span>
                <motion.a whileHover={{scale: 1.2}}>
                  <i className="icon">{prisma}</i> Prisma
                </motion.a>
              </span>
            </li>
            <li>
              <span>
                <motion.a whileHover={{scale: 1.2}}>
                  <i className="icon">{api}</i> API
                </motion.a>
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
