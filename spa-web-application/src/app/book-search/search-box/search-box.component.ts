import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  // Input decorator
  // 부모 컴포넌트: book-search-main
  // 부모 컴포넌트 -> 자식 컴포넌트 데이터 전달할 때의 방식 call-by-reference
  // call-by-reference ? call-by-value ?
  // bookCategory라는 이름으로 부모 컴포넌트가 속성 바인딩으로 전달
  // 해준 데이터를 받을 수 있음
  // @Input() bookCategory: string;

  // bookCategory 이름의 속성 대신 mySelected 속성 사용 가능
  // html의 인터폴레이션 (interpolation) ({{}}) 역시 mySelected 사용
  // @Input('bookCategory') mySelected: string;

  // 부모 컴포넌트가 전달해준 데이터를 가공해서 자식 컴포넌트에서 사용하기
  _bookCategory: string;

  @Input()
  set bookCategory(value: string) {
    if (value != null) {
      // 추가적인 작업이 들어올 수 있습니다.
      this._bookCategory = 'category: ' + value;
    } else {
      this._bookCategory = value;
    }
  }

  // @Output decorator
  // 부모 컴포넌트에게 이벤트를 전달하기 위해 EventEmitter 객체를 생성
  // 부모 컴포넌트는 searchEvent 이름으로 이벤트 바인딩 필요
  @Output() searchEvent = new EventEmitter();

  keyword = 'Hello world!';

  constructor() { }

  ngOnInit() {
  }

  inputChange(): void {
    console.log('inputChange');
  }

  // keyword 값을 가져와 컴포넌트의 속성 값 (keyword)를 변화시킴
  // 변경된 속성 (keyword)는 인터폴레이션 (interpolation)( {{}} )을 통해 view출력
  setKeyword(keyword: string): void {
    this.keyword = keyword;
    // 자식 컴포넌트에서 Search 버튼을 눌렀을 때
    // searchEvent에 대한 이벤트 발생
    // 부모 컴포넌트에게 전달할 데이터를 인자로 넣어줌
    this.searchEvent.emit({
      keyword : `${this.keyword}`,
      category: `${this._bookCategory.replace('category: ', '')}`
    });
  }

}
