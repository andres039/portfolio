import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const linkCode = <FontAwesomeIcon icon={faCode} size="1x" color="red" />;

const Project = ({ title, image, description, stack, type, code, timeDelay, live }) => {
  return (
    <motion.div
      whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.5, delay: timeDelay}}
      
      className="column is-half is-flex is-justify-content-center"
      style={{ maxWidth: "90%" }}
    >
      <div
        className="card p-4 m-5 is-flex-direction-column is-justify-content-center"
        style={{ minWidth: "100%", minHeight: "100%" }}
      >
        <div className="card-image m-2" style={{ maxHeight: "60%" }}>
          <figure className="image is-4by3" style={{}}>
            <img src={image} alt="Projects example" />
          </figure>
        </div>
        <div className="card-header">
          <h1 className="card-header-title">{title}</h1>
          <div 
            className="column is-flex is-justify-content-end"
            style={{ minWidth: "60%" }}
          >
            <motion.a className='tag is-warning' href={code} target="_blank" whileInView={{x: 0 }} initial={{x: -40}} transition={{duration: 0.5}}>
              <p class="subtitle is-7 p-2">{linkCode} Source Code</p>
            </motion.a>
            {live !== '' && <motion.a className='tag is-success ml-2' href={live} target="_blank" whileInView={{x: 0 }} initial={{x: -40}} transition={{duration: 0.5}}>
              <p class="subtitle is-7 p-2">{linkCode} Live</p>
            </motion.a>}
          </div>
        </div>

        <div
          className="card-content is-flex mt-5"
         
        >
          <div className="content" style={{minHeight: '40%'}}>
            <p>{description}</p>{" "}
            <p>
              <strong>Type of project: {type}</strong>
            </p>
          </div>
        </div>
        <footer className="card-footer is-flex-wrap-wrap p-4" style={{maxHeight: '5%'}} >
          {stack.map((tech, index) => (
            <p className="has-text-info">
              {" "}
              {index === stack.length - 1 ? tech + "." : tech + ","}
            </p>
          ))}
        </footer>
      </div>
    </motion.div>
  );
};

export default Project;
