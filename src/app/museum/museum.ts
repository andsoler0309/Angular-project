import { Image } from "../image/image";

export class Museum {
  id: number;
  name: string;
  description: string;
  address: string;
  city: string;
  image: Image;

  constructor(id: number, name: string, description: string, address: string, city: string, image: Image) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.address = address;
    this.city = city;
    this.image = image;
  }
}
