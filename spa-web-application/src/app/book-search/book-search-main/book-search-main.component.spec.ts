import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchMainComponent } from './book-search-main.component';

describe('BookSearchMainComponent', () => {
  let component: BookSearchMainComponent;
  let fixture: ComponentFixture<BookSearchMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSearchMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
