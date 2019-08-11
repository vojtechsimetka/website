import React from "react";
import Projects from "data/Projects";

export default () => (
  <section className="projects">
    <h1>Projects</h1>
    {Projects.map(pd => (
      <div className="item">
        <span className="h3 project">
          <a href={pd.url} target="blank">
            {pd.name}
          </a>
        </span>
        <span className="h4 separator">{pd.category}</span>
        <p className="project-tagline">{pd.shortDescription}</p>
      </div>
    ))}
  </section>
);
