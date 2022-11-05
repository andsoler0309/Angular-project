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

}
