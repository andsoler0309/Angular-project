import { Component, OnInit } from '@angular/core';
import { Exhibition } from '../exhibition';
import { ExhibitionService } from './exhibition.service';

@Component({
  selector: 'app-exhibition-list',
  templateUrl: './exhibition-list.component.html',
  styleUrls: ['./exhibition-list.component.css']
})
export class ExhibitionListComponent implements OnInit {

  exhibitions: Array<Exhibition> = [];
  constructor(private exhibitionService: ExhibitionService) { }

  getExhibitions(): void {
    this.exhibitionService.getExhibitions().subscribe((exhibitions) => {
      this.exhibitions = exhibitions;
    });
  }

  ngOnInit(): void {
    this.getExhibitions();
    console.log(this.exhibitions);
  }
}
