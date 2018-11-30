import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
@Injectable({
  providedIn: 'root'
})
export class HttpSupportService {

  books: Books[];

  // HttpClient 타입의 객체가 서비스 안으로 주입 (injection)
  constructor(private http: HttpClient) { }

  getJsonData(url: string, name: string) {
  // }, category: string, keyword: string) {
    this.http.get<IBook>(`${url}${name}`)
      .subscribe(res => {
        this.books = res.searchList;
        console.log('http-support.service >>> ' + JSON.stringify(this.books));
      });
  }

  getBooks(): Books[] {
    return this.books;
  }
}
