/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';


import { ExhibitionListComponent } from './exhibition-list.component';
import { Exhibition } from '../exhibition';
import { Sponsor } from 'src/app/sponsor';

describe('ExhibitionListComponent', () => {
  let component: ExhibitionListComponent;
  let fixture: ComponentFixture<ExhibitionListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ExhibitionListComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionListComponent);
    component = fixture.componentInstance;

    const sponsor = new Sponsor(
      faker.company.name(),
      faker.lorem.sentence(),
      faker.internet.domainName()
    );

    for(let i = 0; i < 10; i++) {
      const exhibition = new Exhibition(
        faker.animal.cat(),
        faker.lorem.sentence(),
        sponsor
      );
      component.exhibitions.push(exhibition);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 10 <button> elements', () => {
    expect(debug.queryAll(By.css('button'))).toHaveSize(10)
  });

});