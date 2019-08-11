import ELocation from "models/Locations";

export default class Publication {
  readonly title: string;
  readonly date: Date;
  readonly description: string;
  readonly links: Array<{ language: string; url: string }>;
  readonly city?: string;
  readonly country?: ELocation;

  constructor(
    title: string,
    description: string,
    date: Date,
    links: Array<{ language: string; url: string }>,
    city?: string,
    country?: ELocation
  ) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.links = links;
    this.city = city;
    this.country = country;
  }
}
