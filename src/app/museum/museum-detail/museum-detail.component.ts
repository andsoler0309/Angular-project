import { Component, Input, OnInit } from '@angular/core';
import { Museum } from '../museum';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  @Input() museumDetail!: Museum;
  selectedArtworksButton = false;
  selectedMuseum!: Museum;
  @Input() selectedExhibitionsButton = false;

  @Input() museum!: Museum;


  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  ngOnInit() {
    this.scrollBottom();
  }

  scrollBottom(): void {
    window.scroll(0, document.body.scrollHeight);
  }

  getArworksList(museum: Museum): void {
    this.selectedMuseum = museum;
    this.selectedArtworksButton = true;
  }

  getExhibitionsList(museum: Museum): void {
    this.selectedMuseum = museum;
    this.selectedExhibitionsButton = true;
  }

}
