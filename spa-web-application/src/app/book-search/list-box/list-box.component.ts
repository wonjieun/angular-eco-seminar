import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpSupportService } from '../http-support.service';

// interface를 이용하여 data type을 명확히 지정
interface IBook {
  searchList: [];
  totalPage: number;
  resultCode: boolean;
  resultMessage: string;
  totalCount: number;
}
interface Books {
  isbn: string;
  title: string;
  author: string;
  publisher: string;
  coverImgUrl: string;
}
@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit {
  displayedColumns: string[] = ['cover', 'title', 'author', 'publisher'];
  dataSource;
  books: Books[];

  // Paginator는 내부적으로 처리되기 때문에 사용하는 방법만 알면 충분
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input('matColumnDef') name: string;
  /**
   * 초기 데이터 10개 불러오기
   *   // Javascript에 의해서 초기화
   *   // js가 constructor를 호출 = 쓸 수 있음 (순서2)
   *   constructor(private http: HttpClient) {
   *     console.log("1생성자");
   *     // book.json에 대한 HTTP연결로 JSON데이터를 가져옴
   *     this.http
   *       .get<IBook>("http://14.63.223.63:8082/common/test/book/list.do")
   *       // this.http.get<IBook[]>('assets/data/book.json')
   *       .subscribe(res => {
   *         this.books = res.searchList;
   *         console.log("6생성자 http get books>> " + this.books);
   *         // HttpClient의 get() method로 가져온 후 이를 객체화
   *         // dataSource: 도서정보에 대한 객체배열을 이용하여 만든 MatTableDataSource class객체
   *         //             = JSON 데이터를 가져와 만든 객체
   *         // dataSource와 연결시키기 위해 아래 코드처럼 객체를 생성해서 연결
   *         this.dataSource = new MatTableDataSource<Books>(this.books);
   *         this.dataSource.paginator = this.paginator;
   *         console.log("2http get>> " + this.books);
   *       });
   *   }
   */
  // book.json에 대한 HTTP연결로 JSON데이터를 가져옴
  constructor(private httpSupportService: HttpSupportService) {}

  // Angular에 의해서 초기화
  // 컴포넌트가 생성된 후 (순서1)
  ngOnInit() {
    console.log('3언제?');
    console.log('4books>> ' + this.books);
    console.log('5displayedColumns>> ' + this.displayedColumns);
  }

  getData(): void {
    this.books = this.httpSupportService.getBooks();
    this.dataSource = new MatTableDataSource<Books>(this.books);
    this.dataSource.paginator = this.paginator;
  }
}
