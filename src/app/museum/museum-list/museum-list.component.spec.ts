import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ArtworkListComponent } from 'src/app/artwork/artwork-list/artwork-list.component';
import { ArtworkService } from 'src/app/artwork/artwork.service';
import { Artwork } from 'src/app/artwork/artwork';
import { faker } from '@faker-js/faker';
import { Artist } from 'src/app/artist/artist';
import { Image } from 'src/app/image/image';
import { Movement } from 'src/app/movement/movement';
import { NgxPaginationModule } from 'ngx-pagination';
import { Museum } from 'src/app/museum/museum';

describe('ArtworkListComponent', () => {
  let component: ArtworkListComponent;
  let fixture: ComponentFixture<ArtworkListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, NgxPaginationModule],
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
      ),
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
      );
      component.artworks.push(artwork);
    }

    const badImageSource = 'https://media.tate.org.uk/aztate-prd-ew-dg-wgtail-st1-ctr-data/images/.width-1200_LwsaUXy.jpg';
    component.artworks[0].images[0].source = badImageSource;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component.artworks).toBeTruthy();
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

  it('should have 4 <div.card-body> elements', () => {
    expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(4);
  });

  it('should have 4 <img> elements', () => {
    expect(debug.queryAll(By.css('img'))).toHaveSize(4);
  });

  it('should have the corresponding src to the artwork image and alt to the artwork name', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.artworks[i].images[0].source);

      expect(img.attributes['alt']).toEqual(
        component.artworks[i].images[0].altText);
    });
  });

  it('should have 4 <h2.card-title> elements', () => {
    expect(debug.queryAll(By.css('h2.card-title'))).toHaveSize(4);
  });


  it('should get artowkrs from the service', () => {
    const service = TestBed.inject(ArtworkService);
    spyOn(service, 'getArtworks').and.callThrough();
    component.ngOnInit();
    expect(service.getArtworks).toHaveBeenCalled();
  });


  it('if pic doesnt load, should display the second image', () => {
    const image = debug.query(By.css('img')).nativeElement;
    image.dispatchEvent(new Event('error'));
    expect(image.src).toContain(component.artworks[0].images[1].source);
  });

  it('should call service to get artworks', () => {
    const service = TestBed.inject(ArtworkService);
    spyOn(service, 'getArtworks').and.callThrough();
    component.ngOnInit();
    expect(service.getArtworks).toHaveBeenCalled();
  });

  it('should get museum artworks if input is museum', () => {
    const image = new Image(
      faker.datatype.number(),
      faker.image.imageUrl(),
      faker.lorem.word(),
      faker.datatype.number(),
      faker.datatype.number()
    );

    const museum = new Museum(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.random.words(),
      faker.address.streetAddress(),
      faker.address.city(),
      image,
    );
    const service = TestBed.inject(ArtworkService);
    spyOn(service, 'getMuseumsArtworks').and.callThrough();
    component.museum = museum;
    component.ngOnInit();
    expect(service.getMuseumsArtworks).toHaveBeenCalled();
  });

  it('should selected change when clicked', () => {
    const div = debug.query(By.css('div.card.p-2'));
    div.triggerEventHandler('click', null);
    expect(component.selected).toBeTruthy();
  });

  it('should selected change when clicked twice', () => {
    const div = debug.query(By.css('div.card.p-2'));
    div.triggerEventHandler('click', null);
    div.triggerEventHandler('click', null);
    expect(component.selected).toBeFalsy();
  });
});



/* import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Image } from 'src/app/image/image';
import { MuseumListComponent } from './museum-list.component';
import { MuseumService } from '../museum.service';
import { Museum } from 'src/app/museum/museum';
import { faker } from '@faker-js/faker';
import { NgxPaginationModule } from 'ngx-pagination';

import { ArtworkListComponent } from './artwork-list.component';
import { ArtWorkService } from '../artwork.service';
import { Artwork } from 'src/app/artwork/artwork';
import { Artist } from 'src/app/artist/artist';
import { Movement } from 'src/app/movement/movement';

describe('MuseumListComponent', () => {
  let component: MuseumListComponent;
  let fixture: ComponentFixture<MuseumListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, NgxPaginationModule],
      declarations: [ MuseumListComponent, ArtworkListComponent,
      Artwork ],
      providers: [ MuseumService, ArtWorkService, Artwork ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumListComponent);
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

      ),
      new Image(
        faker.datatype.number(),
        faker.image.imageUrl(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.datatype.number()
      )
    ];

    for(let i = 0; i < 10; i++) {
      const museum = new Museum(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.date.past().toString(),
        faker.lorem.paragraph(),
        faker.lorem.word(),
        images[0]
      );
      component.museums.push(museum);
    }

    beforeEach(() => {
      component = fixture.componentInstance;

    for(let i = 0; i < 10; i++) {
      const artwork = new Artwork(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.date.past().toString(),
        faker.lorem.paragraph(),
        faker.lorem.word(),
        artist,
        images
      );
      component..push(artwork);
    }

    const badImageSource = 'https://media.tate.org.uk/aztate-prd-ew-dg-wgtail-st1-ctr-data/images/.width-1200_LwsaUXy.jpg';
    component.museums[0].image.source = badImageSource;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component.museums).toBeTruthy();
  });

  it('should have a list of museums', () => {
    expect(component.museums.length).toBeGreaterThan(0);
  });

  it('should call service to get museums', () => {
    const service = TestBed.inject(MuseumService);
    spyOn(service, 'getMuseums').and.callThrough();
    component.ngOnInit();
    expect(service.getMuseums).toHaveBeenCalled();
  });

  it('should get museum', () => {
    const image = new Image(
      faker.datatype.number(),
      faker.image.imageUrl(),
      faker.lorem.word(),
      faker.datatype.number(),
      faker.datatype.number()
    );

    const museum = new Museum(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.random.words(),
      faker.address.streetAddress(),
      faker.address.city(),
      image,
    );
    const service = TestBed.inject(MuseumService);
    spyOn(service, 'getMuseum').and.callThrough();
    component.museum = museum;
    component.ngOnInit();
  });

});
 */
