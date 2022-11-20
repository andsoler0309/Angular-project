import { Component, OnInit } from '@angular/core';
import { ExhibitionService } from '../exhibition-list/exhibition.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Exhibition } from '../exhibition';

@Component({
  selector: 'app-exhibition-create',
  templateUrl: './exhibition-create.component.html',
  styleUrls: ['./exhibition-create.component.css']
})
export class ExhibitionCreateComponent implements OnInit {
  exhibitionForm!: FormGroup;

  constructor(private exhibitionService: ExhibitionService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.exhibitionForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required, Validators.maxLength(100)]],
      sponsorName: ["", [Validators.required, Validators.minLength(2)]],
      sponsorDescription: ["", [Validators.required, Validators.maxLength(100)]],
      sponsorWebsite: ["", Validators.required],
    });
  }

  createExhibition(exhibition: Exhibition){
    console.log("creado");
  }

  cancelCreation(){
    console.log("cancelado");
  }

}
