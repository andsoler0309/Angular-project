import { Movement } from "../movement/movement";

export class Artist {
  id: number;
  birthplace: string;
  name: string;
  birthdate: string;
  movements: Movement[];

  constructor(
    id: number,
    birthplace: string,
    name: string,
    birthdate: string,
    movements: Movement[],
    ) {
    this.id = id;
    this.birthplace = birthplace;
    this.name = name;
    this.birthdate = birthdate;
    this.movements = movements;
  }
}
