import { Component, Input, OnInit } from '@angular/core';
import { Artwork } from '../artwork';
import { ArtworkService } from '../artwork.service';
import { Museum } from 'src/app/museum/museum';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css']
})
export class ArtworkListComponent implements OnInit {
  artworks: Array<Artwork> = [];
  page = 1; // current page
  selected = false;
  selectedArtwork!: Artwork;

  @Input() museum!: Museum;

  constructor(private artworkService: ArtworkService) { }

  getArtworks(): void {
    this.artworkService.getArtworks().subscribe((artworks) => {
      this.artworks = artworks;
    });
  }

  getMuseumsArtworks(): void {
    this.artworkService.getMuseumsArtworks(this.museum.id).subscribe((artworks) => {
      this.artworks = artworks;
    });
  }

  ngOnInit(): void {
    if(this.museum){
      this.getMuseumsArtworks();
    } else {
      this.getArtworks();
    }
  }

  pictNotLoading(event: ErrorEvent): void {
    const eventTarget = event.target as HTMLImageElement; // cast to HTMLImageElement to access src property

    const actualSource = eventTarget.src;

    this.artworks.forEach((artwork) => {
      let flag = 0;
      artwork.images.forEach((image) => {
        if (image.source === actualSource) {
          flag = 1;
        }
      });

      if (flag === 1) {
        eventTarget.src = artwork.images[1].source;
        eventTarget.alt = artwork.images[1].altText;
        eventTarget.height = artwork.images[1].height;
        eventTarget.width = artwork.images[1].width;
      }
    });
  }

  onSelected(artwork: Artwork): void {
    if (this.selected === true && this.selectedArtwork === artwork) {
      this.selected = false;
    } else {
      this.selected = true;
      this.selectedArtwork = artwork;
    }
  }
}
