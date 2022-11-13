import { Component, Input, OnInit } from '@angular/core';
import { Museum } from '../museum';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})

export class MuseumListComponent implements OnInit {

  museums: Array<Museum> = [];
  p = 1;
  selected: Boolean = false;
  selectedMuseum!: Museum;
  selectedNewMuseum = false;

  @Input() museum!: Museum;

  constructor(private museumService: MuseumService) { }

  getMuseums(): void {
    this.museumService.getMuseums().subscribe((museums) => {
      this.museums = museums;
    });
  }

  ngOnInit(): void {
    if(!this.museum){
      this.getMuseums();
    }
  }

  onSelected(museum: Museum): void {
    if (this.selected === true && this.selectedMuseum === this.museum) {
      this.selected = false;
    } else {
      this.selected = true;
      this.selectedMuseum = museum;
    }
  }

}
