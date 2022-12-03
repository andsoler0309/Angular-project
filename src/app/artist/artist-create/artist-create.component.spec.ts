/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArtistCreateComponent } from './artist-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

describe('ArtistCreateComponent', () => {
  let component: ArtistCreateComponent;
  let fixture: ComponentFixture<ArtistCreateComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule],
      declarations: [ ArtistCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 <h1> element', () => {
    expect(debug.queryAll(By.css('h1'))).toHaveSize(1);
  });

  it('should have 1 <form> element', () => {
    expect(debug.queryAll(By.css('form'))).toHaveSize(1);
  });

  it('should have 4 <label> elements', () => {
    expect(debug.queryAll(By.css('label'))).toHaveSize(4);
  });

  it('should have 2 <button> elements', () => {
    expect(debug.queryAll(By.css('button'))).toHaveSize(2);
  });

  it('should have 3 <input> elements', () => {
    expect(debug.queryAll(By.css('input'))).toHaveSize(3);
  });

  it('should have 1 <select> element', () => {
    expect(debug.queryAll(By.css('select'))).toHaveSize(1);
  });

  it('should cancel the creation of a new artist', () => {
    component.cancelCreation();
  });

  it('should create a new artwork', () => {
    component.artistForm.controls['name'].setValue('Emilia Bertolé');
    component.artistForm.controls['birthplace'].setValue('Rosario, Argentina');
    component.artistForm.controls['birthdate'].setValue('21-06-1896');
    component.artistForm.controls['image'].setValue('01');
    component.createArtist(component.artistForm.value);
  });

  it('should get the images from the back-end', () => {
    component.getImages();
  });

});
