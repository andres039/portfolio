import React from "react";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <section id='top'className="section" style={{minHeight: '87vh', maxWidth: '90vw'}}>
    <div className="container is-flex is-align-items-center" style={{minHeight: '90vh', maxWidth: '70vw'}}>
      <section className="section mb-6">
      <motion.p className="content is-size-3 has-text-weight-semi-bold has-text-dark" whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1}} >
       👋 Welcome. Thank you for visiting my WebSite. I'm a beginner Front-End Web
        Developer currently studying and working with the <strong className="has-text-black is-size-2">PERN</strong> stack. 
        <strong className="has-text-black is-size-2"><br></br>I have built a new Portfolio with Next.js, </strong>you are welcome to visit it here:
      <a href="https://portfolio-next-six-iota.vercel.app/">🙋</a>
      </motion.p>
      </section>

    </div>
    <div id="skills"></div>

    </section>
  );
};

export default Welcome;
