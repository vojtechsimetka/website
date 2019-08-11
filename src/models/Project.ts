export default class Projects {
  readonly name: string;
  readonly category: string;
  readonly shortDescription: string;
  readonly url: string;

  constructor(
    name: string,
    category: string,
    shortDescription: string,
    url: string
  ) {
    this.name = name;
    this.category = category;
    this.shortDescription = shortDescription;
    this.url = url;
  }
}
