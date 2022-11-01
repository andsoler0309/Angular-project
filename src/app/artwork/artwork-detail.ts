import { Artist } from '../artist/artist';
import { Image } from '../image/image';
import { Artwork } from './artwork';


export class ArtworkDetail extends Artwork {
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
    super(id, name, year, description, type, artist, images);
    this.artist = artist;
    this.images = images;
  }
}
