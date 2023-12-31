/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ExhibitionCreateComponent } from './exhibition-create.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { Sponsor } from 'src/app/sponsor';

describe('ExhibitionCreateComponent', () => {
  let component: ExhibitionCreateComponent;
  let fixture: ComponentFixture<ExhibitionCreateComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule],
      declarations: [ ExhibitionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionCreateComponent);
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

  it('should have 3 <label> elements', () => {
    expect(debug.queryAll(By.css('label'))).toHaveSize(3);
  });

  it('should have 2 <button> elements', () => {
    expect(debug.queryAll(By.css('button'))).toHaveSize(2);
  });

  it('should have 2 <input> elements', () => {
    expect(debug.queryAll(By.css('input'))).toHaveSize(2);
  });

  it('should have 1 <select> element', () => {
    expect(debug.queryAll(By.css('select'))).toHaveSize(1);
  });

  it('get the sponsors from the back-end', () => {
    component.getAllSponsors();
  });

  it('should create a new exhibition', () => {
    component.exhibitionForm.controls['name'].setValue('Arte argentino');
    component.exhibitionForm.controls['description'].setValue('Esta es la descripción de la exhibición.');
    component.exhibitionForm.controls['sponsor'].setValue('01');
    component.createExhibition(component.exhibitionForm.value);
  });

  it('should cancel the creation of a new exhibition', () => {
    component.cancelCreation();
  });

});
