import { Component, OnInit, Input } from '@angular/core';
import { ExhibitionService } from '../exhibition-list/exhibition.service';

@Component({
  selector: 'app-exhibition-detail',
  templateUrl: './exhibition-detail.component.html',
  styleUrls: ['./exhibition-detail.component.css']
})
export class ExhibitionDetailComponent implements OnInit {
  @Input() name = '';
  @Input() description = '';
  @Input() sponsorName = '';
  @Input() sponsorDescription = '';
  @Input() sponsorWebsite = '';

  constructor(private exhibitionService: ExhibitionService) { }


  ngOnInit() {
  }
}
