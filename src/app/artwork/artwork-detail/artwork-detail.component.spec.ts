/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArtworkDetailComponent } from './artwork-detail.component';
import { Movement } from 'src/app/movement/movement';
import { faker } from '@faker-js/faker';
import { Artist } from 'src/app/artist/artist';
import { Image } from 'src/app/image/image';
import { Artwork } from '../artwork';

describe('ArtworkDetailComponent', () => {
  let component: ArtworkDetailComponent;
  let fixture: ComponentFixture<ArtworkDetailComponent>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtworkDetailComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkDetailComponent);
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


    component.artworkDetail = new Artwork(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.date.past().toString(),
      faker.lorem.paragraph(),
      faker.lorem.word(),
      artist,
      images
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the artwork title', () => {
    const title = debug.query(By.css('h1')).nativeElement;
    expect(title.textContent).toContain(component.artworkDetail.name);
  });

  it('should display the artwork description', () => {
    const description = debug.query(By.css('p')).nativeElement;
    expect(description.textContent).toContain(component.artworkDetail.description);
  });

  it('should display the artwork image', () => {
    const image = debug.query(By.css('img')).nativeElement;
    expect(image.src).toContain(component.artworkDetail.images[0].source);
  });

  it('should display the artwork artist', () => {
    const artist = debug.query(By.css('[class=\'card-text-light\']:last-of-type')).nativeElement;
    expect(artist.textContent).toContain(component.artworkDetail.artist.name);
  });
});
