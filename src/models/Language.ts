export enum ELanguageLevel {
  MOTHER_TONGUE = "	Mother-tongue",
  C2 = "C2 (Fluent)",
  C1 = "C1 (Expert)",
  B2 = "B2 (Advanced)",
  B1 = "B1 (Intermediate)",
  A2 = "A2 (Noob)",
  A1 = "A1 (Noob)"
}

export default class Languages {
  readonly name: string;
  readonly level: ELanguageLevel;

  constructor(name: string, level: ELanguageLevel) {
    this.name = name;
    this.level = level;
  }
}
