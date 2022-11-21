import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-create',
  templateUrl: './image-create.component.html',
  styleUrls: ['./image-create.component.css']
})
export class ImageCreateComponent implements OnInit {

  imageForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private imageService: ImageService
  ) { }

  createImage(image: any){
    delete image.id
    console.log(image)
    this.imageService.createImage(image).subscribe(image=>{
      console.info("The image was created: ", image)
      this.toastr.success("Confirmation", "Image created")
      this.imageForm.reset();
    })
  }

  cancelCreation(){
    this.imageForm.reset();
  }

  ngOnInit() {
    this.imageForm = this.formBuilder.group({
      source: ['', Validators.required],
      altText: ['', Validators.required],
      width: ['', Validators.required],
      height: ['', Validators.required]
    })
  }

}
