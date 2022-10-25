export class Movement {
  id: number;
  name: string;
  description: string;
  countryOfOrigin: string;

  constructor(
    id: number,
    name: string,
    description: string,
    countryOfOrigin: string,

    ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.countryOfOrigin = countryOfOrigin;
  }
}
