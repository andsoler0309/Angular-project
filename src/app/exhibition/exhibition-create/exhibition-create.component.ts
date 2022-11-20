import { Component, OnInit } from '@angular/core';
import { ExhibitionService } from '../exhibition-list/exhibition.service';

@Component({
  selector: 'app-exhibition-create',
  templateUrl: './exhibition-create.component.html',
  styleUrls: ['./exhibition-create.component.css']
})
export class ExhibitionCreateComponent implements OnInit {

  constructor(private exhibitionService: ExhibitionService) { }

  ngOnInit() {
  }

}
