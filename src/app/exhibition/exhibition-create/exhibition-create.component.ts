import { Component, OnInit } from '@angular/core';
import { ExhibitionService } from '../exhibition-list/exhibition.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Exhibition } from '../exhibition';
import { Sponsor } from 'src/app/sponsor';

@Component({
  selector: 'app-exhibition-create',
  templateUrl: './exhibition-create.component.html',
  styleUrls: ['./exhibition-create.component.css']
})
export class ExhibitionCreateComponent implements OnInit {
  exhibitionForm!: FormGroup;
  sponsors: Array<Sponsor> = [];

  constructor(private exhibitionService: ExhibitionService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getAllSponsors();
    this.exhibitionForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required, Validators.maxLength(100)]],
      sponsor: ["", Validators.required,],
    });
  }

  createExhibition(exhibition: Exhibition){
    this.exhibitionService.createExhibition(exhibition).subscribe(exhibition=>{
      console.info("The exhibition was created: ", exhibition)
      this.toastr.success("Confirmation", "Exhibition created")
      this.exhibitionForm.reset();
    })
  }

  cancelCreation(){
    this.exhibitionForm.reset();
    console.info("The creation was canceled")
    this.toastr.info("Confirmation", "Creation canceled")
  }

  getAllSponsors(){
    this.exhibitionService.getSponsors().subscribe(sponsors=>{
      this.sponsors = sponsors;
    });
  }

}
