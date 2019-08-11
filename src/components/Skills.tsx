import React from "react";
import {
  Programming,
  Prototyping,
  DesignCAD,
  Frameworks,
  SoftSkills
} from "data/Skills";

export default () => (
  <section className="skills">
    <h1>Skills</h1>

    <h2>Programming</h2>
    <p>{Programming.map(s => s.title).join(" | ")}</p>
    <p>{Frameworks.map(s => s.title).join(" | ")}</p>

    <h2>CAD & Design</h2>
    <p>{DesignCAD.map(s => s.title).join(" | ")}</p>

    <h2>Software Design & Prototyping</h2>
    <p>{Prototyping.map(s => s.title).join(" | ")}</p>

    <h2>Soft Skills</h2>
    <p>{SoftSkills.map(s => s.title).join(" | ")}</p>
  </section>
);
