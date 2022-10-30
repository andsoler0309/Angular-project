import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MuseumListComponent } from './museum/museum-list/museum-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ArtworkListComponent } from './artwork/artwork-list/artwork-list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientModule, NgxPaginationModule
      ],
      declarations: [
        AppComponent, MuseumListComponent, ArtworkListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
