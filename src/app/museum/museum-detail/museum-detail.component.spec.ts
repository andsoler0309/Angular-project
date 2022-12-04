/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Museum } from '../museum';
import { faker } from '@faker-js/faker';
import { Image } from 'src/app/image/image';
import { DebugElement } from '@angular/core';
import { MuseumDetailComponent } from './museum-detail.component';

describe('MuseumDetailComponent', () => {
  let component: MuseumDetailComponent;
  let fixture: ComponentFixture<MuseumDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumDetailComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumDetailComponent);
    component = fixture.componentInstance;

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


    const museum =  [
      new Museum(
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.words(),
        faker.lorem.words(),
        faker.lorem.word(),
        images[0]
      )
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


/*   it('should display the museum address', () => {
    const address = debug.query(By.css('p')).nativeElement;
    expect(address.textContent).toContain(component.museumDetail.address);
  });

  it('should display the museum city', () => {
    const city = debug.query(By.css('p')).nativeElement;
    expect(city.textContent).toContain(component.museumDetail.city);
  });
  
  it('should display the museum description', () => {
    const description = debug.query(By.css('p')).nativeElement;
    expect(description.textContent).toContain(component.museumDetail.description);
  });

  it('if pic doesnt load, should display the second image', () => {
    const image = debug.query(By.css('img')).nativeElement;
    image.dispatchEvent(new Event('error'));
    expect(image.src).toContain(component.museumDetail.image.source);
  });

  it('should display the museum title', () => {
    const title = debug.query(By.css('h1')).nativeElement;
    expect(title.textContent).toContain(component.museumDetail.name);
  });

  it('should display the museum image', () => {
    const image = debug.query(By.css('img')).nativeElement;
    expect(image.src).toContain(component.museumDetail.image.source);
  });

  it('should use scrollBottom() when the component is initialized', () => {
    spyOn(component, 'scrollBottom');
    component.ngOnInit();
    expect(component.scrollBottom).toHaveBeenCalled();
  });


  it('should display the museum name', () => {
    const name = debug.query(By.css('p')).nativeElement;
    expect(name.textContent).toContain(component.museumDetail.name );
  });
 */
});

