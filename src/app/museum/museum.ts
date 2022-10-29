
export class Museum {
  id: number;
  name: string;
  description: string;
  address: string;
  city: string;
  image: any;

  constructor(id: number, name: string, description: string, address: string, city: string, image: any) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.address = address;
    this.city = city;
    this.image = image;
  }
}
