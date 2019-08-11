import React from "react";
import OtherExperienceData from "data/OtherExperience";
import Experience from "components/Experience";

export default () => (
  <section className="experiences">
    <h1>Other Experience</h1>
    <Experience data={OtherExperienceData} />
  </section>
);
