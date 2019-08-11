import React from "react";
import Contact from "data/Contact";
import { IBulletPoints } from "models/Contact";

export default () => (
  <section className="about">
    <h1>About Me</h1>
    <p>{Contact.description} I am:</p>
    {Contact.bulletPoints.map((bpd: IBulletPoints, index: number) => (
      <div key={index}>
        <h3 style={{ fontWeight: 500, paddingTop: 10 }}>{bpd.title}</h3>
        {bpd.description}
      </div>
    ))}
  </section>
);
