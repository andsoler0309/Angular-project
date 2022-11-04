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

  // pictNotLoading(event: ErrorEvent): void {
  //   const eventTarget = event.target as HTMLImageElement; // cast to HTMLImageElement to access src property

  //   const actualSource = eventTarget.src;

  //   this.museums.forEach((museum) => {
  //     let flag = 0;
  //     museum.image.forEach((image) => {
  //       if (image.source === actualSource) {
  //         flag = 1;
  //       }
  //     });

  //     if (flag === 1) {
  //       eventTarget.src = museum.image[1].source;
  //       eventTarget.alt = museum.image[1].altText;
  //       eventTarget.height = museum.image[1].height;
  //       eventTarget.width = museum.image[1].width;
  //     }
  //   });
  // }

  onSelected(museum: Museum): void {
    if (this.selected === true && this.selectedMuseum === this.museum) {
      this.selected = false;
    } else {
      this.selected = true;
      this.selectedMuseum = museum;
    }
  }

}
