import { Component, Input, OnInit } from '@angular/core';
import { Artwork } from '../artwork';

@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.css']
})
export class ArtworkDetailComponent implements OnInit {

  @Input() artworkDetail!: Artwork;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit() {
    this.scrollBottom();
  }

  scrollBottom(): void {
    window.scroll(0, document.body.scrollHeight);
  }

  pictNotLoadingDetail(event: ErrorEvent) : void {
    const eventTarget = event.target as HTMLImageElement;

    eventTarget.src = this.artworkDetail.images[1].source;
    eventTarget.alt = this.artworkDetail.images[1].altText;
    eventTarget.height = this.artworkDetail.images[1].height;
    eventTarget.width = this.artworkDetail.images[1].width;
  }

}
