import React from "react";
import EventsData from "data/Events";
import Event, { ITalk } from "models/Event";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faFile } from "@fortawesome/free-solid-svg-icons";

interface IEventsProps {}
interface IEventsState {
  pastEvents: boolean;
  talksOnly: boolean;
  events: Array<Event>;
}

const NOW = new Date().getTime();

export default class Events extends React.Component<
  IEventsProps,
  IEventsState
> {
  constructor(props: IEventsProps) {
    super(props);
    const pastEvents = false;
    const talksOnly = false;

    this.state = {
      pastEvents,
      talksOnly,
      events: this.filter(pastEvents, talksOnly)
    };

    this.filter = this.filter.bind(this);
    this.toggleTalksOnly = this.toggleTalksOnly.bind(this);
    this.togglePastEvents = this.togglePastEvents.bind(this);
  }

  filter(pastEvents: boolean, talksOnly: boolean) {
    if (pastEvents && !talksOnly) return EventsData;
    if (pastEvents && talksOnly) return EventsData.filter(e => e.talk !== null);
    if (!pastEvents && talksOnly)
      return EventsData.filter(e => e.talk !== null && e.to.getTime() > NOW);
    return EventsData.filter(e => e.to.getTime() > NOW);
  }

  togglePastEvents(e: React.ChangeEvent<HTMLInputElement>) {
    const pastEvents = e.target.checked;
    this.setState(prevState => ({
      pastEvents,
      events: this.filter(pastEvents, prevState.talksOnly)
    }));
  }

  toggleTalksOnly(e: React.ChangeEvent<HTMLInputElement>) {
    const talksOnly = e.target.checked;
    this.setState(prevState => ({
      talksOnly,
      events: this.filter(prevState.pastEvents, talksOnly)
    }));
  }

  render() {
    return (
      <section className="events">
        <h1>Events</h1>
        <p>Come and meet me in one of these events or invite me to yours.</p>
        <div style={{ paddingBottom: "1em" }}>
          <input
            className="toggle"
            type="checkbox"
            onChange={this.togglePastEvents}
            defaultChecked={this.state.pastEvents}
          />{" "}
          <label>Show past events</label>
          <br />
          <input
            className="toggle"
            type="checkbox"
            onChange={this.toggleTalksOnly}
            defaultChecked={this.state.talksOnly}
          />{" "}
          <label>Show only events where I am speaking</label>
        </div>
        {this.state.events.map((ed: Event, index: number) => (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: "7em auto",
              columnGap: ".5em ",
              width: "100%",
              paddingBottom: "0.5em"
            }}
          >
            <div
              style={{
                textAlign: "right",
                gridRow: `1 / ${ed.talk ? ed.talk.length + 2 : 1}`
              }}
            >
              {ed.to && <span className="time">{ed.datesToString()}</span>}
            </div>
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

              <span className="place">
                {ed.city}, {ed.country}
              </span>
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
  }
}
