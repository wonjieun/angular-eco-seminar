import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { SearchBoxComponent } from '../search-box/search-box.component';

@Component({
  selector: 'app-book-search-main',
  templateUrl: './book-search-main.component.html',
  styleUrls: ['./book-search-main.component.css']
})
export class BookSearchMainComponent implements OnInit {
  // 부모 컴포넌트가 직접 자식 컴포넌트 객체를 제어하는 방식
  // 자식 컴포넌트의 객체 뿐만 아니라 자식으로 포함된 디렉티브 (directive)에 직접 접근 가능
  // 또한, 컴포넌트가 렌더링하는 View 자체에 직접 접근 가능
  // (부모 컴포넌트와 자식 컴포넌트가 데이터를 공유하는 것은 아님.)
  // 이러한 접근 방법이 항상 좋은 것만은 아님
  // 컴포넌트의 재사용성과 유지보수성에 문제가 생길 가능성이 있음
  // 따라서, 이러한 직접적인 접근방식은 꼭 필요한 경우가 아니면 지양하도록
  @ViewChild(SearchBoxComponent) searchComp: SearchBoxComponent;
  @ViewChildren(SearchBoxComponent) searchCompArr: QueryList<SearchBoxComponent>;

  displayCategoryName = null;
  selectedValue = null;
  bookCategory = [
    { value: 'all', viewValue: '국내외도서' },
    { value: 'country', viewValue: '국내도서' },
    { value: 'foreign', viewValue: '국외도서' }
  ];

  searchTitle = null;

  constructor() {}

  ngOnInit() {}

  changeValue(category: string): void {
    // 선택한 도서 종류를 가지고 displayCategoryName이라는 속성 값 변경
    for (const element of this.bookCategory) {
      if (element.value === category) {
        this.displayCategoryName = element.viewValue;
      }
    }
  }

  changeTitleBar(searchInfo): void {
    this.searchTitle = `${searchInfo.keyword} ( ${searchInfo.category} )`;
  }

  clearCondition(): void {
    this.selectedValue = null;
    this.searchTitle = null;
/*
    @ViewChild를 사용할 경우
    this.searchComp._bookCategory = null;
    this.searchComp.keyword = null;
*/
    // @ViewChildren을 사용할 경우
    this.searchCompArr.toArray()[0]._bookCategory = null;
    this.searchCompArr.toArray()[0].keyword = null;
  }
}
