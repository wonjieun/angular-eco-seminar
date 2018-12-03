import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material';
import { ViewChild } from '@angular/core';
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

  displayedColumns = ['bisbn', 'btitle', 'bauthor', 'bprice'];
  dataSource;
  books: Books[];

  // Paginator는 내부적으로 처리되기 때문에 사용하는 방법만 알면 충분
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // book.json에 대한 HTTP연결로 JSON데이터를 가져옴
  constructor(private httpSupportService: HttpSupportService) { }

  getData(): void {
    this.books = this.httpSupportService.getBooks();
    this.dataSource = new MatTableDataSource<Books>(this.books);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
  }

}
