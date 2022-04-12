import React from "react";

const Welcome = () => {
  return (
    <section className="section" style={{minHeight: '87vh'}}>
    <div className="container is-flex is-align-items-center" style={{minHeight: '90vh', maxWidth: '70vw'}}>
      <section>
      <p className="content is-size-3 has-text-weight-semi-bold has-text-dark">
       👋 Welcome. Thank you for visiting my WebSite. I'm a beginner Front-End Web
        Developer currently spending most of my time working with the <strong className="has-text-black is-size-2">PERN</strong> stack. 
      </p>
      </section>
      
    </div>
    </section>
  );
};

export default Welcome;
