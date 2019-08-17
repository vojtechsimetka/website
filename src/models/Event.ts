import ELocations from "models/Locations";

export enum EEventType {
  CONFERENCE = "Conference",
  MEETUP = "Meetup",
  HACKATHON = "Hackathon"
}

export enum ETalkType {
  PANEL = "Panel",
  PRESENTATION = "Presentation",
  DEMO = "Demo",
  JUDGE = "Judge",
  MENTOR = "Mentor",
  WORKSHOP = "Workshop"
}

export const compare = (e1: Event, e2: Event) =>
  e2.from.getTime() - e1.from.getTime();

export interface ITalk {
  readonly type: ETalkType;
  readonly title?: string;
  readonly video?: string;
  readonly presentation?: string;
}

export default class Event {
  readonly title: string;
  readonly type: EEventType;
  readonly from: Date;
  readonly to: Date;
  readonly city: string;
  readonly country: ELocations;
  readonly url: string | null;
  readonly talk: Array<ITalk> | null;

  constructor(
    title: string,
    type: EEventType,
    from: Date,
    to: Date,
    city: string,
    country: ELocations,
    url: string | null,
    talk: Array<ITalk> | null
  ) {
    this.title = title;
    this.type = type;
    this.from = from;
    this.to = to;
    this.city = city;
    this.country = country;
    this.url = url;
    this.talk = talk;
  }

  public datesToString() {
    const { from, to } = this;
    if (from.getFullYear() !== to.getFullYear())
      return `${from.getDate()}.${from.getMonth() +
        1}.${from.getFullYear()} - ${to.getDate()}.${to.getMonth() +
        1}.${to.getFullYear()}`;
    if (from.getMonth() !== to.getMonth()) {
      return `${from.getDate()}.${from.getMonth() +
        1} - ${to.getDate()}.${to.getMonth() + 1}.${to.getFullYear()}`;
    }
    if (from.getDate() !== to.getDate()) {
      return `${from.getDate()} - ${to.getDate()}.${to.getMonth() +
        1}.${to.getFullYear()}`;
    }
    return `${to.getDate()}.${to.getMonth() + 1}.${to.getFullYear()}`;
  }
}
