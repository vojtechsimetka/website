import React from "react";
import EducationData from "data/Education";

export default () => (
  <section className="education">
    <h1>Education</h1>
    {EducationData.map((ed, index) => (
      <div className="item" key={index}>
        <h2 className="university">
          <a href={ed.link} target="blank">
            {ed.schoolName}
          </a>
        </h2>
        <h3 className="degree">{ed.program}</h3>
        <span className="time">
          {`${ed.from.getMonth() + 1}/${ed.from.getFullYear()}`} -{" "}
          {`${ed.to.getMonth() + 1}/${ed.to.getFullYear()}`}
        </span>
        <span className="place separator">
          {ed.city}, {ed.country}
        </span>
      </div>
    ))}
  </section>
);
