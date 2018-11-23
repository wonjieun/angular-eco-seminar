import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material';
import { ViewChild } from '@angular/core';

// interface를 이용하여 data type을 명확히 지정
interface IBook {
  bauthor: string;
  bdate: string;
  btranslator: string;
  bpublisher: string;
  btitle: string;
  bprice: number;
  bisbn: string;
  bimgurl: string;
}

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit {

  displayedColumns = ['bisbn', 'btitle', 'bauthor', 'bprice'];
  dataSource;
  books: IBook[];

  // Paginator는 내부적으로 처리되기 때문에 사용하는 방법만 알면 충분
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // book.json에 대한 HTTP연결로 JSON데이터를 가져옴
  constructor(private http: HttpClient) {
    // 실제 데이터를 호출해보자 (11/23 세미나)
    this.http.get<IBook[]>('assets/data/book.json')
      .subscribe(res => {
        this.books = res;
        // HttpClient의 get() method로 가져온 후 이를 객체화
        // dataSource: 도서정보에 대한 객체배열을 이용하여 만든 MatTableDataSource class객체
        //             = JSON 데이터를 가져와 만든 객체
        // dataSource와 연결시키기 위해 위에 있는 코드처럼 객체를 생성해서 연결
        this.dataSource = new MatTableDataSource<IBook>(this.books);
        this.dataSource.paginator = this.paginator;
      });
  }

  ngOnInit() {
  }

}
