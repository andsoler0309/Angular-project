import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Artist } from 'src/app/artist/artist';
import { ArtistService } from 'src/app/artist/artist.service';
import { Artwork } from '../artwork';
import { ArtworkService } from '../artwork.service';

@Component({
  selector: 'app-artwork-create',
  templateUrl: './artwork-create.component.html',
  styleUrls: ['./artwork-create.component.css']
})
export class ArtworkCreateComponent implements OnInit {

  artists: Array<Artist> = [];
  artworkForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public toastr: ToastrService,
    private artworkService: ArtworkService,
    private artistService: ArtistService,
  ) { }

  ngOnInit() {
    this.artworkForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      year: [0, Validators.required],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      type: ['', Validators.required],
      artist: ['', Validators.required],
    });
    this.getAllArtist();
  }

  createArtwork(artwork: Artwork){
    artwork.artist = { id: artwork.artist.id } as unknown as Artist;
    this.artworkService.createArtwork(artwork).subscribe(()=>{
      this.toastr.success('Confirmation', 'artwork created');
      this.artworkForm.reset();
    });
  }

  cancelCreation(){
    this.artworkForm.reset();
  }

  getAllArtist(){
    this.artistService.getArtists().subscribe(artists=>{
      this.artists = artists;
    });
  }
}
