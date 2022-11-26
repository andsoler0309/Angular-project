import { Component, OnInit, Input} from '@angular/core';
import { Exhibition } from '../exhibition';
import { ExhibitionService } from './exhibition.service';
import { Observable } from 'rxjs';
import { ExhibitionDetailComponent } from '../exhibition-detail/exhibition-detail.component';

@Component({
  selector: 'app-exhibition-list',
  templateUrl: './exhibition-list.component.html',
  styleUrls: ['./exhibition-list.component.css']
})
export class ExhibitionListComponent implements OnInit {

  exhibitions: Array<Exhibition> = [];
  currentName: string = '';
  currentDescription: string = '';
  currentSponsorName: string = '';
  currentSponsorDescription: string = '';
  currentSponsorWebsite: string = '';
  @Input() currentMuseumId: number = 102;
  selected:boolean = false;

  constructor(private exhibitionService: ExhibitionService) { }

  getExhibitions(): void {
    this.exhibitionService.getExhibitions(this.currentMuseumId).subscribe((exhibitions) => {
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
        this.currentSponsorName = ex.sponsor.name;
        this.currentSponsorDescription = ex.sponsor.description;
        this.currentSponsorWebsite = ex.sponsor.website;
        this.selected = true;
      }
    }
  }
}
