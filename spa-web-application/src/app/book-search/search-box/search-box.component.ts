import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Optional
} from "@angular/core";
import { HttpSupportService } from "../http-support.service";
import { JSON_DATA_CONFIG, JsonConfig } from "./json-config";

@Component({
  selector: "app-search-box",
  templateUrl: "./search-box.component.html",
  styleUrls: ["./search-box.component.css"],
  // Angular에게 어떤 클래스가 주입 되는지 알림
  /**
   * Providers
   * 모듈안에 providers로 등록한 의존객체는 모듈안에서 사용 가능
   * 컴포넌트안에 providers로 등록한 의존객체는 자신과 자식 컴포넌트에서 사용 가능
   * 모듈에 등록하는 경우, 의존객체는 하나의 객체가 생성되어 사용. 즉, 싱글톤 형태로 사용
   * 반면 컴포넌트에 등록된 의존객체는 해당 컴포넌트가 생성될 때마다 따로 생성
   * 따라서, 정보공유를 목적으로 하는 Service Mediator Pattern을 이용할 경우
   * 일반적으로 모듈에 의존객체를 등록하여 사용
   * providers: [
   *    {
   *        provide: HttpSupportService,    // 데이터 타입
   *        useClass: HttpSupportService    // 실제 객체를 생성하기 위해 필요한 클래스명
   *    }
   * ]
   */
  providers: [
    HttpSupportService,
    {
      provide: JsonConfig,
      useValue: JSON_DATA_CONFIG
    }
  ]
})
export class SearchBoxComponent implements OnInit {
  // @Input decorator
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
    this._bookCategory = value != null ? "category: " + value : value;
  }

  @Input("selectedValue") selectedValue: string;

  // @Output decorator
  // 부모 컴포넌트에게 이벤트를 전달하기 위해 EventEmitter 객체를 생성
  // 부모 컴포넌트는 searchEvent 이름으로 이벤트 바인딩 필요
  @Output() searchEvent = new EventEmitter();

  keyword = "Hello world!";

  // 생성자 (constructor)를 이용한 Service 주입 (Injection)
  constructor(
    private httpSupportService: HttpSupportService,
    @Optional() private jsonConfig: JsonConfig
  ) {}

  ngOnInit() {
    console.log("ngOnInit");
  }

  inputChange(): void {
    console.log("inputChange");
  }

  // keyword 값을 가져와 컴포넌트의 속성 값 (keyword)를 변화시킴
  // 변경된 속성 (keyword)는 인터폴레이션 (interpolation)( {{}} )을 통해 view출력
  setKeyword(keyword: string): void {
    this.keyword = keyword;
    // 자식 컴포넌트에서 Search 버튼을 눌렀을 때
    // searchEvent에 대한 이벤트 발생
    // 부모 컴포넌트에게 전달할 데이터를 인자로 넣어줌
    this.searchEvent.emit({
      keyword: `${this.keyword}`
      // FIXME: Error
      // category: `${this._bookCategory.replace('category: ', '')}`
    });

    // 부모 컴포넌트로부터 받은 도서종류 (selectedValue)와 사용자로부터 입력받은
    // 검색 키워드 (keyword)를 가지고 주입된 Service의 메소드를 호출
    this.httpSupportService.getJsonData(
      this.jsonConfig.url,
      this.jsonConfig.name,
      this.selectedValue,
      this.keyword
    );
  }
}
