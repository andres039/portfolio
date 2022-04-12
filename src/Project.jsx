import React from "react";

const Project = ({ title, image, description, stack, type }) => {
  return (
    <div className="column is-half">
      <div className="card p-6 m-4" style={{ maxWidth: "40vw", height: "80vh" }}>
        <div className="card-image">
          <figure
            className="image "
            style={{
              width: "30vw",
              minHeight: "25rem",
              maxHeight: "25rem",
            }}
          >
            <img src={image} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-header">
          <h1 className="card-header-title">{title}</h1>
        </div>
        <div className="card-content is-flex is-align-items-center" style={{height: "20vh"}}>
          <div className="content">{description}</div>
        </div>
        <footer className="card-footer">
          {stack.map((tech, index) => (
            <p className="has-text-info">
              {" "}
              {index === stack.length - 1 ? tech + "." : tech + ',' }
            </p>
          ))}
        </footer>
      </div>
    </div>
  );
};

export default Project;
