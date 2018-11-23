import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  keyword = 'Hello world!';

  constructor() { }

  ngOnInit() {
  }

  inputChange() {
    console.log('inputChange');
  }

  // keyword 값을 가져와 컴포넌트의 속성 값 (keyword)를 변화시킴
  // 변경된 속성 (keyword)는 인터폴레이션 (interpolation)( {{}} )을 통해 view출력
  setKeyword(keyword: string): void {
    this.keyword = keyword;
  }

}
