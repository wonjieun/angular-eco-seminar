import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchMainComponent } from './movie-search-main.component';

describe('MovieSearchMainComponent', () => {
  let component: MovieSearchMainComponent;
  let fixture: ComponentFixture<MovieSearchMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSearchMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
