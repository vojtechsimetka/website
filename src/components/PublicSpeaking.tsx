import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faFile } from "@fortawesome/free-solid-svg-icons";
import EventsData from "data/Events";
import Event, { ITalk, ETalkType } from "models/Event";

const NOW = new Date().getTime();
const event = EventsData.filter(
  (e: Event) =>
    e.talk &&
    e.talk.reduce(
      (acc: boolean, t: ITalk) =>
        acc ||
        [ETalkType.DEMO, ETalkType.PRESENTATION, ETalkType.PANEL].includes(
          t.type
        ),
      false
    ) &&
    e.from.getTime() < NOW
);

export default () => (
  <section className="experiences">
    <h1>Public Speaking</h1>
    {event.map((ed, index) => (
      <div
        className="item"
        style={{ padding: 0, paddingBottom: ".5em", margin: 0 }}
        key={index}
      >
        <div className="heading">
          <span className="h4 title">
            {ed.url ? (
              <a href={ed.url} target="blank">
                {ed.title}
              </a>
            ) : (
              ed.title
            )}
          </span>

          <div>
            <span className="time">{ed.datesToString()}</span>
            <span className="separator place">
              {ed.city}, {ed.country}
            </span>
          </div>
        </div>
        {ed.talk &&
          ed.talk.map((talk: ITalk, index: number) => (
            <div key={index}>
              <i>{talk.type}</i>
              {talk.title && (
                <span>
                  : <strong>{talk.title}</strong>
                </span>
              )}
              {talk.video && (
                <a
                  href={talk.video}
                  target="blank"
                  title="Play Video"
                  style={{ marginLeft: ".3em" }}
                >
                  <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              )}
              {talk.presentation && (
                <a
                  href={talk.presentation}
                  target="blank"
                  title="See Slides"
                  style={{ marginLeft: ".3em" }}
                >
                  <FontAwesomeIcon icon={faFile} />
                </a>
              )}
            </div>
          ))}
      </div>
    ))}
  </section>
);
