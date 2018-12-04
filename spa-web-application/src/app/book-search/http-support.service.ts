import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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
  providedIn: "root"
})
export class HttpSupportService {
  books: Books[];

  constructor(private http: HttpClient) {}

  getJsonData(url: string, name: string, category: string, keyword: string) {
    this.http.get<IBook>(`${url}${name}`).subscribe(res => {
      this.books = res.searchList;
      console.log(`category: ${category}, keyword: ${keyword}`);

      let tmp = null;
      // 도서종류와 검색어를 이용한 도서 데이터 Filtering 시작
      // if ( category === 'all' ) {
      tmp = this.books.filter(book => {
        // console.log('book >>>' + JSON.stringify(book));
        console.log("book.title.includes >>> " + book.title.includes(keyword));
        if (book.title.includes(keyword)) {
          return true;
        }
      });
      // }
      console.log("tmp >>> " + JSON.stringify(tmp));
      this.books = tmp;
      console.log(this.books);
    });
  }

  getBooks(): Books[] {
    return this.books;
  }
}
