import React from "react";
import WorkExperienceData from "data/WorkExperience";
import Experience from "components/Experience";

export default () => (
  <section className="experiences">
    <h1>Work Experience</h1>
    <Experience data={WorkExperienceData} />
  </section>
);
