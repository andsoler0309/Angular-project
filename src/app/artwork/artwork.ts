import { Artist } from '../artist/artist';
import { Image } from '../image/image';


export class Artwork {
  id: number;
  name: string;
  year: string;
  description: string;
  type: string;
  artist: Artist;
  images: Image[];

  constructor(
    id: number,
    name: string,
    year: string,
    description: string,
    type: string,
    artist: Artist,
    images: Image[],
  ) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.description = description;
    this.type = type;
    this.artist = artist;
    this.images = images;
  }
}
