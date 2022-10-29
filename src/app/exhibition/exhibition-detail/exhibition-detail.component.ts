import { Component, OnInit } from '@angular/core';
import { Exhibition } from '../exhibition';
import { ExhibitionService } from '../exhibition-list/exhibition.service';

@Component({
  selector: 'app-exhibition-detail',
  templateUrl: './exhibition-detail.component.html',
  styleUrls: ['./exhibition-detail.component.css']
})
export class ExhibitionDetailComponent implements OnInit {
  exhibitions: Array<Exhibition> = [];
  constructor(private exhibitionService: ExhibitionService) { }

  getExhibitions(): void {
    this.exhibitionService.getExhibitions().subscribe((exhibitions) => {
      this.exhibitions = exhibitions;
    });}

  ngOnInit() {
    this.getExhibitions();
  }

}
