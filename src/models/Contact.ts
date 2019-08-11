export interface IBulletPoints {
  title: string;
  description: string;
}

export interface IEmails {
  name: string;
  domain: string;
}

export default class {
  readonly name: string;
  readonly tagline: string;
  readonly twitter: string | null;
  readonly linkedin: string | null;
  readonly facebook: string | null;
  readonly github: string | null;
  readonly instagram: string | null;
  readonly telegram: string | null;
  readonly emails: Array<string> | null;
  readonly description: string;
  readonly bulletPoints: Array<IBulletPoints>;

  constructor(
    name: string,
    tagline: string,
    description: string,
    bulletPoints: Array<IBulletPoints>,
    twitter: string | null,
    linkedin: string | null,
    facebook: string | null,
    github: string | null,
    instagram: string | null,
    telegram: string | null,
    emails: Array<IEmails> | null
  ) {
    this.name = name;
    this.tagline = tagline;
    this.description = description;
    this.bulletPoints = bulletPoints;
    this.twitter = twitter;
    this.linkedin = linkedin;
    this.facebook = facebook;
    this.github = github;
    this.instagram = instagram;
    this.telegram = telegram;
    this.emails =
      emails === null ? null : emails.map(e => `${e.name}@${e.domain}`);
  }
}
