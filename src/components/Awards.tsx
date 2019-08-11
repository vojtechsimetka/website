import React from "react";
import AwardsData from "data/Awards";

export default () => (
  <section className="awards">
    <h1>Awards</h1>

    {AwardsData.map((a, index) => (
      <div className="item" key={index}>
        <h3 className="award">{a.title}</h3>
        <span className="time">{a.date.getFullYear()}</span>
        <span className="place separator">
          {a.event}, {a.country}
        </span>
      </div>
    ))}
  </section>
);
