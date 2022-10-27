/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ArtworkListComponent } from './artwork-list.component';
import { ArtworkService } from '../artwork.service';
import { Artwork } from '../artwork';
import { faker } from '@faker-js/faker';
import { Artist } from 'src/app/artist/artist';
import { Image } from 'src/app/image/image';
import { Movement } from 'src/app/movement/movement';

describe('ArtworkListComponent', () => {
  let component: ArtworkListComponent;
  let fixture: ComponentFixture<ArtworkListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ArtworkListComponent ],
      providers: [ ArtworkService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkListComponent);
    component = fixture.componentInstance;

    const movements =  [
      new Movement(
        faker.datatype.number(),
        faker.random.words(),
        faker.random.words(),
        faker.random.words()
        )
    ];

    const artist = new Artist(
      faker.datatype.number(),
      faker.address.country(),
      faker.name.firstName(),
      faker.date.past().toString(),
      movements
    );

    const images = [
      new Image(
        faker.datatype.number(),
        faker.image.imageUrl(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.datatype.number()
      )
    ];

    for(let i = 0; i < 10; i++) {
      const artwork = new Artwork(
          faker.datatype.number(),
          faker.name.firstName(),
          faker.date.past().toString(),
          faker.lorem.paragraph(),
          faker.lorem.word(),
          artist,
          images
        )
      component.artworks.push(artwork);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of artworks', () => {
    expect(component.artworks.length).toBeGreaterThan(0);
  });


  it('should have a list of artworks with title', () => {
    expect(component.artworks[0].name).toBeTruthy();
  });

  it('should have a list of artworks with image', () => {
    expect(component.artworks[0].images).toBeTruthy();
  });

  it('should have a list of artworks with image url', () => {
    expect(component.artworks[0].images[0].source).toBeTruthy();
  });

  it('should have a list of artworks with artist', () => {
    expect(component.artworks[0].artist).toBeTruthy();
  });

  it('should have a list of artworks with artist name', () => {
    expect(component.artworks[0].artist.name).toBeTruthy();
  });

  it('should have a list of artworks with artist birthdate', () => {
    expect(component.artworks[0].artist.birthdate).toBeTruthy();
  });

  it('should have a list of artworks with artist country', () => {
    expect(component.artworks[0].artist.birthplace).toBeTruthy();
  });

  it('should have a list of artworks with artist movements', () => {
    expect(component.artworks[0].artist.movements).toBeTruthy();
  });

  it('should have a list of artworks with artist movements name', () => {
    expect(component.artworks[0].artist.movements[0].name).toBeTruthy();
  }
  );

  it('should have a list of artworks with artist movements description', () => {
    expect(component.artworks[0].artist.movements[0].description).toBeTruthy();
  });

  it('should have 10 <div.card-body> elements', () => {
    expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
  });

  it('should have 10 <img> elements', () => {
    expect(debug.queryAll(By.css('img'))).toHaveSize(10)
  });

  it('should have the corresponding src to the artwork image and alt to the artwork name', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.artworks[i].images[0].source)

      expect(img.attributes['alt']).toEqual(
        component.artworks[i].images[0].altText)
    })
  });

  it('should have 10 <h5.card-title> elements', () => {
    expect(debug.queryAll(By.css('h5.card-title'))).toHaveSize(10)
  });

  it('should have the corresponding title to the artwork title', () => {
    debug.queryAll(By.css('h5.card-title')).forEach((title, i)=>{
      expect(title.nativeElement.textContent).toEqual(
        component.artworks[i].name)
    })
  });

  it('should have 30 <p.card-text> elements', () => {
    expect(debug.queryAll(By.css('p.card-text'))).toHaveSize(30)
  });

  it('should have the corresponding description to the artwork description', () => {
    debug.queryAll(By.css('p.card-description')).forEach((description, i)=>{
      expect(description.nativeElement.textContent).toEqual(
        component.artworks[i].description)
    })
  });
});
