import React from "react";
import Volunteering from "data/Volunteering";
import Experience from "components/Experience";

export default () => (
  <section className="experiences">
    <h1>Volunteering</h1>
    <Experience data={Volunteering} />
  </section>
);
