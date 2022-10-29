import { Component, OnInit } from '@angular/core';
import { Exhibition } from '../exhibition';
import { ExhibitionService } from '../exhibition-list/exhibition.service';

@Component({
  selector: 'app-exhibition-detail',
  templateUrl: './exhibition-detail.component.html',
  styleUrls: ['./exhibition-detail.component.css']
})
export class ExhibitionDetailComponent implements OnInit {
  public currentTitle: string = 'Título de la exhibición';
  public currentDescription: string = 'Descripción';
  constructor(private exhibitionService: ExhibitionService) { }

  public changeDetail(): void {
    this.currentTitle = this.exhibitionService.getName();
    this.currentDescription = this.exhibitionService.getDescription();
  }

  ngOnInit() {
  }

}
