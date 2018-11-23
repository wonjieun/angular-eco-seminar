import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// (주의사항) HttpClientModule 항상 Module을 import하도록 하자 ({ HttpClient } 에러)
// JSON 데이터를 불러오기 위해 HttpClientModule 이용
import { HttpClientModule } from '@angular/common/http';
// 양방향 바인등을 위한 FormsModule import
import { FormsModule } from '@angular/forms';
// COMPOSITION_BUFFER_MODE import
// 한글일 경우 양방향 바인딩에 대한 inputChange 이벤트가 바로바로 발생하지 않음
// 양방향 바인딩은 기본적으로 문자 입력이 완료된 시점에 compositioned라는 브라우저 이벤트 발생
//                이에 따라 바인딩을 처리
// 한글은 조합형 문자이기 때문에 글자가 다 만들어지기 전까지 이벤트가 발생하지 않아 화면 출력 X
// 예) ㅎ (화면 출력X), 하 (입력 후 화살표 버튼(->) 누르거나 두 번째 글자 입력시 화면 출력O)
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';

import { BookSearchMainComponent } from './book-search-main/book-search-main.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { DetailBoxComponent } from './detail-box/detail-box.component';
import { ListBoxComponent } from './list-box/list-box.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

/** <mat-card> 사용하기 위해서 선언.
 * : 검색한 도서 상세 화면의 이미지, 텍스트 부분 (detail-box component)
 *   angular가 제공하는 material component를 사용  */
import { MatCardModule } from '@angular/material/card';
// MatSelectModule 사용을 위한 모듈
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
// Paging처리를 위한 모듈
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [BookSearchMainComponent, SearchBoxComponent, DetailBoxComponent, ListBoxComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
  ],
  providers: [
    {
      provide: COMPOSITION_BUFFER_MODE,
      useValue: false
    }
  ]
})
export class BookSearchModule { }
