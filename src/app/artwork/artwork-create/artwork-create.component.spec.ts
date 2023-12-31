/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ArtworkCreateComponent } from './artwork-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';


describe('ArtworkCreateComponent', () => {
  let component: ArtworkCreateComponent;
  let fixture: ComponentFixture<ArtworkCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule],
      declarations: [ ArtworkCreateComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new artwork', () => {
    component.artworkForm.controls['name'].setValue('Test artwork');
    component.artworkForm.controls['year'].setValue(2021);
    component.artworkForm.controls['description'].setValue('Test description');
    component.artworkForm.controls['type'].setValue('Test type');
    component.artworkForm.controls['artist'].setValue(1);
    component.createArtwork(component.artworkForm.value);
  });

  it('should cancel the creation of a new artwork', () => {
    component.cancelCreation();
  });
});
