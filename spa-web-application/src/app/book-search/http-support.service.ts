import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD

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
=======
>>>>>>> fe8c142ceaa083a9300c14eb90fed0d4ccab4e34

// TODO: interface IBook, Books 따로 빼서 관리
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
// @Injectable decorator: 해당 클래스가 다른 클래스에 주입 (Injection) 가능
// 주입은 생성자를 이용하고 주입과정은 Angular가 담당
// 이 Service 객체를 search-box Component에 주입 (Injection)
@Injectable({
  providedIn: 'root'
})
export class HttpSupportService {

  books: Books[];
<<<<<<< HEAD

  // HttpClient 타입의 객체가 서비스 안으로 주입 (injection)
  constructor(private http: HttpClient) { }

  getJsonData(url: string, name: string) {
  // }, category: string, keyword: string) {
    this.http.get<IBook>(`${url}${name}`)
      .subscribe(res => {
        this.books = res.searchList;
        console.log('http-support.service >>> ' + JSON.stringify(this.books));
      });
=======
  constructor(private http: HttpClient) { }

  getJsonData(url: string, name: string, category: string, keyword: string) {
    this.http.get<IBook>(`${url}${name}`)
        .subscribe(res => {
          this.books = res.searchList;
          console.log(`category: ${category}, keyword: ${keyword}`);

          let tmp = null;
          // 도서종류와 검색어를 이용한 도서 데이터 Filtering 시작
          // if ( category === 'all' ) {
            tmp = this.books.filter(book => {
              // console.log('book >>>' + JSON.stringify(book));
              console.log('book.title.includes >>> ' + book.title.includes(keyword));
              if (book.title.includes(keyword)) {
                return true;
              }
            });
          // }
          console.log('tmp >>> ' + JSON.stringify(tmp));
          this.books = tmp;
          console.log(this.books);
        });
>>>>>>> fe8c142ceaa083a9300c14eb90fed0d4ccab4e34
  }

  getBooks(): Books[] {
    return this.books;
  }
}
