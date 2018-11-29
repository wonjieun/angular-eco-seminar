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

  // @ViewChild 부모 컴포넌트 템플릿 안에 위치한 모든 자식 요소들을 ViewChild라고 함
  // 이 ViewChild안에는 자식 컴포넌트 객체 뿐만 아니라 컴포넌트가 렌더링하는 View의 DOM,
  // 그리고 디렉티브 (Directive) 포함
  @ViewChild(SearchBoxComponent) searchComp: SearchBoxComponent;
  @ViewChild('resultStatus') resultToolbar: ElementRef;
  // @ViewChildren 조건에 부합되는 객체를 모두 찾게 되고
  // QueryList 형태로 객체들의 집합을 얻을 수 있음
  // QueryList는 실제 배열이 아니기 때문에 toArray() 메소드를 이용해 배열을 얻어내 이용
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

  // 자신 (부모 컴포넌트)의 검색 관련 사항을 초기화, 자식 컴포넌트의 속성 (property)를 초기화
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

  changeDOM(): void {
    this.resultToolbar.nativeElement.onclick = function() {
      alert('DOM을 직접 제어할 수 있어요!!');
    };
    this.resultToolbar.nativeElement.innerHTML = "클릭해보세요!!";
  }
}
