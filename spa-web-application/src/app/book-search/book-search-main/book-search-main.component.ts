import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-search-main',
  templateUrl: './book-search-main.component.html',
  styleUrls: ['./book-search-main.component.css']
})
export class BookSearchMainComponent implements OnInit {

  displayCategoryName = null;
  selectedValue = null;
  bookCategory = [
    { value: 'all', viewValue: '국내외도서' },
    { value: 'country', viewValue: '국내도서' },
    { value: 'foreign', viewValue: '국외도서' }
  ];

  constructor() { }

  ngOnInit() {
  }

  changeValue(category: string): void {
    // 선택한 도서 종류를 가지고 displayCategoryName이라는 속성 값 변경
    for (const element of this.bookCategory) {
      if (element.value === category) {
        this.displayCategoryName = element.viewValue;
      }
    }
  }
}
