import { Component, OnInit } from '@angular/core';
import { Exhibition } from '../exhibition';
import { ExhibitionService } from './exhibition.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-exhibition-list',
  templateUrl: './exhibition-list.component.html',
  styleUrls: ['./exhibition-list.component.css']
})
export class ExhibitionListComponent implements OnInit {

  exhibitions: Array<Exhibition> = [];
  currentName: string = '';
  currentDescription: string = '';

  constructor(private exhibitionService: ExhibitionService) { }

  getExhibitions(): void {
    this.exhibitionService.getExhibitions().subscribe((exhibitions) => {
      this.exhibitions = exhibitions;
    });
  }

  ngOnInit(): void {
    this.getExhibitions();
  }

  displayDetail(name:string){
    for (var ex of this.exhibitions){
      if(ex.name == name){
        this.currentDescription = ex.description;
        this.currentName = name;
      }
    }
  }
}
