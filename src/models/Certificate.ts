export default class Certificate {
  readonly title: string;
  readonly date: Date;

  constructor(title: string, date: Date) {
    this.title = title;
    this.date = date;
  }
}
