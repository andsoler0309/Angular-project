import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ArtistService } from '../artist.service';
import { Artist } from '../artist';
import { Movement } from 'src/app/movement/movement';


@Component({
  selector: 'app-artist-create',
  templateUrl: './artist-create.component.html',
  styleUrls: ['./artist-create.component.css']
})
export class ArtistCreateComponent implements OnInit {
  artistForm!: FormGroup;
  movements: Array<Movement> = [];


  constructor(private artistService: ArtistService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getMovements();
    this.artistForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      birthplace: ["", Validators.required],
      birthdate: ["", [Validators.required,Validators.minLength(10), Validators.maxLength(10)]],
      movements: [""],
    });
  }

  createArtist(artist: Artist){
    this.artistService.createArtist(artist).subscribe(artists=>{
      console.info('The artist was created: ', artist);
      this.toastr.success('Confirmation', 'artist created');
      this.artistForm.reset();
    });
  }

  cancelCreation(){
    this.artistForm.reset();
    console.info("The creation was canceled")
    this.toastr.info("Confirmation", "Creation canceled")
  }

  getMovements(){
    this.artistService.getMovements().subscribe(movements=>{
      this.movements = movements;
    });
  }
}
