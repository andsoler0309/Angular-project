import { Component, Input, OnInit } from '@angular/core';
import { Museum } from '../museum';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  @Input() museumDetail!: Museum;

  constructor() { }

  ngOnInit() {
    this.scrollBottom();
  }

  scrollBottom(): void {
    window.scroll(0, document.body.scrollHeight);
  }

  // pictNotLoadingDetail(event: ErrorEvent) : void {
  //   const eventTarget = event.target as HTMLImageElement;

  //   eventTarget.src = this.museumDetail.image[1].source;
  //   eventTarget.alt = this.museumDetail.image[1].altText;
  //   eventTarget.height = this.museumDetail.image[1].height;
  //   eventTarget.width = this.museumDetail.image[1].width;
  // }
}
