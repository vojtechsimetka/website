export default class Education {
  readonly schoolName: string;
  readonly program: string;
  readonly from: Date;
  readonly to: Date;
  readonly city: string;
  readonly country: string;
  readonly link: string;

  constructor(
    schoolName: string,
    program: string,
    from: Date,
    to: Date,
    city: string,
    country: string,
    link: string
  ) {
    this.schoolName = schoolName;
    this.program = program;
    this.from = from;
    this.to = to;
    this.city = city;
    this.country = country;
    this.link = link;
  }
}
