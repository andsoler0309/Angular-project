import { Component, OnInit } from '@angular/core';
import { Museum } from '../museum';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit {

  p: number = 1;

  museums: Array<Museum> = [];

  constructor(private museumService: MuseumService) { }

  getMuseums(): void {
    this.museumService.getMuseums().subscribe((museums) => {
      this.museums = museums;
    });
  }

  ngOnInit(): void {
    this.getMuseums();
  }

}
