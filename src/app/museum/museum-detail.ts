import { Museum } from "./museum";
import { Image }  from '../image/image';

export class MuseumDetail extends Museum {
  image: Image[];

  constructor(
    id: number,
    name: string,
    description: string,
    city: string,
    addres: string,
    image: Image[],
  ) {
    super(id, name, description, city, addres, image);
    this.image = image;
  }
}
