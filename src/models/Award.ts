import ELocation from "models/Locations";

export default class Award {
  readonly title: string;
  readonly date: Date;
  readonly event: string;
  readonly country: ELocation;

  constructor(title: string, date: Date, event: string, country: ELocation) {
    this.title = title;
    this.date = date;
    this.event = event;
    this.country = country;
  }
}
