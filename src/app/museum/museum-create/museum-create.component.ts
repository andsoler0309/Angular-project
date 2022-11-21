import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Image } from 'src/app/image/image';
import { ImageService } from 'src/app/image/image.service';
import { Museum } from '../museum';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-museum-create',
  templateUrl: './museum-create.component.html',
  styleUrls: ['./museum-create.component.css']
})
export class MuseumCreateComponent implements OnInit {

  museumForm!: FormGroup;
  image: any;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private museumService: MuseumService
  ) { }

  createMuseum(museum: any){
    this.image = new Image(0, museum.image, museum.altImage, museum.hImage, museum.wImage)
    delete this.image.id
    museum.image = this.image
    delete museum.altImage
    console.log(museum)
    this.museumService.createMuseum(museum).subscribe(museum=>{
      console.info("The museum was created: ", museum)
      this.toastr.success("Confirmation", "Museum created")
      this.museumForm.reset();
    })
  }

  // onFileChange(event:any) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     let that = this
  //     let img = document.createElement('img');
  //     var _URL = window.URL || window.webkitURL;
  //     var objectUrl = _URL.createObjectURL(file);
  //     img.onload = function () {
  //       that.image = new Image(0, file.name, '', img['width'], img['height'])
  //       _URL.revokeObjectURL(objectUrl);
  //     };
  //     img.src = objectUrl;
  //   }
  // }

  cancelCreation(){
    this.museumForm.reset();
  }

  ngOnInit() {
    this.museumForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      image: ['', Validators.required],
      altImage: ['', Validators.required],
      wImage: ['', Validators.required],
      hImage: ['', Validators.required],
      address: ["", Validators.required],
      city: ["", Validators.required],
      description: ["", [Validators.required, Validators.maxLength(100)]]
    })
  }

}
