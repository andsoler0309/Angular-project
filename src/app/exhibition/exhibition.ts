import { Sponsor } from "../sponsor";

export class Exhibition {
  name: string;
  description: string;
  sponsor: Sponsor;

  constructor(name: string, description: string, sponsor: Sponsor){
    this.name = name;
    this.description = description;
    this.sponsor = sponsor;
  }
}
