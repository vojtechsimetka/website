export const compare = (s1: Skill, s2: Skill) => s2.years - s1.years;

export default class Skill {
  readonly title: string;
  readonly years: number;

  constructor(title: string, years: number = 0) {
    this.title = title;
    this.years = years;
  }
}
