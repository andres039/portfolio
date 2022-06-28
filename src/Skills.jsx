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
    <section
      className="hero is-large "
      style={{ maxHeight: "100vh", maxWidth: "100vw" }}
    >
      <div className="container hero-head is-flex is-flex-direction-column is-justify-content-center" style={{ minWidth: "100vw" }}>
        <div className="is-flex isflex-wrap-wrap is-justify-content-center is-align-items-center is-align-content-center">
          <motion.h1
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="title my-6"
          >
            <div className="box">
            <p>
            My Skills: <br></br>
            <span className="is-size-5">
            (Or better, the technologies that I have spent the most time learning and applying. By no means do I consider myself an expert, but I should say that I know what information to look for and where the docs are when we have to tackle a problem.)</span></p>
            </div>
          </motion.h1>
        </div>
        <motion.div
          className="container my-4"
          whileInView={{ x: 0 }}
          initial={{ x: -300 }}
          transition={{ duration: 0.5 }}
        >
          <ul
            className=" is-flex is-flex-wrap-wrap is-justify-content-center "
            style={{ maxWidth: "90vw" }}
          >
            <li>
              <span>
                <motion.a whileHover={{ scale: 1.2 }}>
                  <i className="icon mx-3">{postgres}</i>
                  <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                      <button
                        class="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu4"
                      >
                        <span>PostgreSQL.</span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                      <div class="dropdown-content">
                        <div class="dropdown-item">
                          <p>
                            <div
                              className=""
                              style={{
                                width: "65ch",
                                height: "10vh",
                                whiteSpace: "pre-line",
                              }}
                            >
                              {" "}
                              I learned the basic "SELECT * from ..." at
                              lighthouse labs. After that I tried to use Prisma,
                              and I achieved it with the "Track application". It
                              was insanely easier, but I keep hoping to review
                              the basic SQL sintax soon.
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              </span>
            </li>
            <li>
              <span>
                <motion.a whileHover={{ scale: 1.2 }}>
                  <i className="icon mx-3">{express}</i>{" "}
                  <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                      <button
                        class="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu4"
                      >
                        <span>Express.js</span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                      <div class="dropdown-content">
                        <div class="dropdown-item">
                          <p>
                            <div
                              className=""
                              style={{
                                width: "65ch",
                                height: "15vh",
                                whiteSpace: "pre-line",
                              }}
                            >
                              {" "}
                              I can set up a server that offers endpoints with
                              JSON content, usually an array of objects. I know
                              how to test them with "supertest", which is super
                              cool to use. Whenever I find time in the future I
                              hope to learn just a little more advance
                              "superTest" options. I also have used postman,
                              insomnia and even curl. All the stuff is very
                              interesting, seems like we have not enough time
                              for all of it. Working example on "basic API" on
                              github.
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              </span>
            </li>

            <li>
              <span>
                <motion.a whileHover={{ scale: 1.2 }}>
                  <i className="icon mx-3">{react}</i>{" "}
                  <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                      <button
                        class="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu4"
                      >
                        <span>React.js</span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                      <div class="dropdown-content">
                        <div class="dropdown-item">
                          <p>
                            <div
                              className=""
                              style={{
                                width: "65ch",
                                height: "17vh",
                                whiteSpace: "pre-line",
                              }}
                            >
                              I have been through the useState, useEffect and
                              useContext hook through a few lines or code, (it
                              can be seen in 'portfolio' on github or 'trash
                              panda'). I try to keep up with studying the
                              ract-testing-library and the mechanism of test
                              suites and test cases with Jest. Lately I have
                              been studying Next.js with their tutorial. Once I
                              am done I really hope to start mixing TypeScript
                              inside a Next.js application, that is one of my{" "}
                              <strong> biggest dreams</strong> right now.{" "}
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              </span>
            </li>
            <li>
              <span>
                <motion.a whileHover={{ scale: 1.2 }}>
                  <i className="icon mx-3">{node}</i>{" "}
                  <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                      <button
                        class="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu4"
                      >
                        <span>Node.js</span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                      <div class="dropdown-content">
                        <div class="dropdown-item">
                          <p>
                            <div
                              className=""
                              style={{
                                width: "65ch",
                                height: "17vh",
                                whiteSpace: "pre-line",
                              }}
                            >
                              I know only the basics of Node because I mostly use
                              Express on this environment. I have a basic
                              understanding of its mechanism and 'raisons
                              d'être'.
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              </span>
            </li>
            <li>
              <span>
                <motion.a whileHover={{ scale: 1.2 }}>
                  <i className="icon mx-3">{js}</i>{" "}
                  <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                      <button
                        class="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu4"
                      >
                        <span>JavaScript</span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                      <div class="dropdown-content">
                        <div class="dropdown-item">
                          <p>
                            <div
                              className=""
                              style={{
                                width: "65ch",
                                height: "17vh",
                                whiteSpace: "pre-line",
                              }}
                            >
                              Currently studying TypeScript (codecademy/unions).
                              I have been practicing for a few months with the
                              help of CodeWars where I humbly achieved the 5th
                              Kyu. I try to keep studying "You don't know
                              JavaScript... Yet" to keep remembering to study.
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              </span>
            </li>
            <li>
              <span>
                <motion.a whileHover={{ scale: 1.2 }}>
                  <i className="icon mx-3">{css}</i>
                  <div class="dropdown is-hoverable is-right">
                    <div class="dropdown-trigger">
                      <button
                        class="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu4"
                      >
                        <span>CSS</span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                      <div class="dropdown-content">
                        <div class="dropdown-item">
                          <p>
                            <div
                              className=""
                              style={{
                                width: "65ch",
                                height: "17vh",
                                whiteSpace: "pre-line",
                              }}
                            >
                              CSS Some experience. I mostly try to use libraries
                              like Bulma.io and Bootstrap, but I have explored
                              Mantine and Material UI. I am curious to study
                              Tailwind soon. Example of implementation in the
                              "calculator" on github or the "Library" on github
                              as well.
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              </span>
            </li>
            <li>
              <span>
                <motion.a whileHover={{ scale: 1.2 }}>
                  <i className="icon mx-3">{prisma}</i>{" "}
                  <div class="dropdown is-hoverable is-right">
                    <div class="dropdown-trigger">
                      <button
                        class="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu4"
                      >
                        <span>Prisma</span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                      <div class="dropdown-content">
                        <div class="dropdown-item">
                          <p>
                            <div
                              className=""
                              style={{
                                width: "65ch",
                                height: "17vh",
                                whiteSpace: "pre-line",
                              }}
                            >
                              Some experience. Example of implementation in the
                              "Track" application.
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              </span>
            </li>
            <li>
              <span>
                <motion.a whileHover={{ scale: 1.2 }}>
                  <i className="icon mx-3">{api}</i>{" "}
                  <div class="dropdown is-hoverable is-right">
                    <div class="dropdown-trigger">
                      <button
                        class="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu4"
                      >
                        <span>API</span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                      <div class="dropdown-content">
                        <div class="dropdown-item">
                          <p>
                            <div
                              className=""
                              style={{
                                width: "65ch",
                                height: "17vh",
                                whiteSpace: "pre-line",
                              }}
                            >
                              Some experience. Examples of implementation in the
                              "trash Panda" application, or the "Api exercise"
                              on github.
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
