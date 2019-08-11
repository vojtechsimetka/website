import React from "react";

import Publication from "models/Publication";

export default ({ data }: { data: Array<Publication> }) => (
  <div>
    {data.map(pd => (
      <div className="item">
        <div className="heading">
          <div>
            <span className="h4 title">
              {pd.title}
              {pd.links.map(l => (
                <a href={l.url} target="blank">
                  {" "}
                  [{l.language}]
                </a>
              ))}
            </span>
          </div>
          <div>
            <span className="time">{`${pd.date.getMonth() +
              1}/${pd.date.getFullYear()}`}</span>
            {pd.city && pd.country && (
              <span className="separator place">
                {pd.city}, {pd.country}
              </span>
            )}
          </div>
        </div>
        <p className="project-tagline">{pd.description}</p>
      </div>
    ))}
  </div>
);
