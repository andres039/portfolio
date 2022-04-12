import React from "react";

const Project = ({title, image, description, stack, type}) => {
  return (
   
    <div className="card p-6 m-4" style={{ maxWidth: "40vw" }}>
      <div class="card-image">
        <figure
          class="image "
          style={{ maxWidth: "40rem", minHeight: '25rem',maxHeight: "25rem" }}
        >
          <img
            src={image}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-header">
        <h1 className="card-header-title">{title}</h1>
      </div>
      <div class="card-content">
        <div className="content">
         {description}
        </div>
      </div>
      <footer class="card-footer">
        {stack.map(tech => <p> {tech + ', '} </p>)}
      </footer>
    </div>
    
  );
};

export default Project;
