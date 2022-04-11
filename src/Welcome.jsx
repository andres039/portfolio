import React from "react";

const Welcome = () => {
  return (
    <div className="container is-flex is-align-items-center" style={{minHeight: '60vh', maxWidth: '70vw'}}>
      <section>
      <p className="content is-size-3 has-text-weight-semi-bold has-text-dark">
       👋 Welcome. Thank you for visiting my WebSite. I'm a beginner Front-End Web
        Developer located in Ottawa, dedicated to <strong className="has-text-black is-size-2">React.js </strong> and familiar with the <strong className="has-text-black is-size-2">PERN</strong> stack. 
      </p>
      </section>
      <section></section>
    </div>
  );
};

export default Welcome;
