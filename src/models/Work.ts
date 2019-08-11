export default class Work {
  readonly company: string;
  readonly position: string;
  readonly shortDescription: string | null;
  readonly bulletPoints: Array<string> | null;
  readonly from: Date;
  readonly to: Date | null;
  readonly city: string;
  readonly country: string;
  readonly url: string;

  constructor(
    company: string,
    position: string,
    shortDescription: string | null,
    bulletPoints: Array<string> | null,
    from: Date,
    to: Date | null,
    city: string,
    country: string,
    url: string
  ) {
    this.company = company;
    this.position = position;
    this.shortDescription = shortDescription;
    this.bulletPoints = bulletPoints;
    this.from = from;
    this.to = to;
    this.city = city;
    this.country = country;
    this.url = url;
  }
}
