import React from "react";
import Work from "models/Work";

export default ({ data }: { data: Array<Work> }) => (
  <div>
    {data.map(wed => (
      <div className="item">
        <div className="heading">
          <div>
            <span className="h2 company">
              <a href={wed.url} target="blank">
                {wed.company}
              </a>
            </span>
            <span className="h3 separator job-title">{wed.position}</span>
          </div>
          <div>
            <span className="time">
              {`${wed.from.getMonth() + 1}/${wed.from.getFullYear()}`} -{" "}
              {wed.to === null
                ? "present "
                : `${wed.to.getMonth() + 1}/${wed.to.getFullYear()}`}
            </span>
            <span className="separator place">
              {wed.city}, {wed.country}
            </span>
          </div>
        </div>

        <div className="description">
          {wed.shortDescription && <p>{wed.shortDescription}</p>}
          {wed.bulletPoints && (
            <ul>
              {wed.bulletPoints.map(bpd => (
                <li>{bpd}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ))}
  </div>
);
