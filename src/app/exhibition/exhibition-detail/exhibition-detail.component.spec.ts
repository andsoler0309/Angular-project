/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExhibitionDetailComponent } from './exhibition-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ExhibitionListComponent } from '../exhibition-list/exhibition-list.component';
import { faker } from '@faker-js/faker';

describe('ExhibitionDetailComponent', () => {
  let component: ExhibitionDetailComponent;
  let fixture: ComponentFixture<ExhibitionDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ExhibitionDetailComponent, ExhibitionListComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.name = faker.name.fullName();
    component.description = faker.lorem.sentence();
    component.sponsorName = faker.name.fullName();
    component.sponsorDescription = faker.lorem.sentence();
    component.sponsorWebsite = faker.internet.domainName();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 <card> element', () => {
    expect(debug.queryAll(By.css('card'))).toHaveSize(1);
  });

  it('should have 1 <h5> element', () => {
    expect(debug.queryAll(By.css('h5'))).toHaveSize(3);
  });

  it('should have 1 <p> element', () => {
    expect(debug.queryAll(By.css('p'))).toHaveSize(1);
  });

  it('should have 3 <li> elements', () => {
    expect(debug.queryAll(By.css('li'))).toHaveSize(3);
  });

  it('should have 1 <a> element', () => {
    expect(debug.queryAll(By.css('a'))).toHaveSize(1);
  });

});
