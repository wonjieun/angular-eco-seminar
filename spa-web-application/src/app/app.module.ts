// 웹 브라우저를 위한 모듈. 브라우저에서 작동하는 웹앱인 경우,
// Root 모듈은 반드시 BrowserModule을 import해야 함.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// BrowserAnimationsModule import 구문 추가
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Table Component 사용을 위한 MatTableModule import
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

// Feature Module import
import { BookSearchModule } from './book-search/book-search.module';
import { MovieSearchModule } from './movie-search/movie-search.module';

// Routing Module import
import { AppRoutingModule } from './app-routing/app-routing.module';

// @NgModule decorator를 이용하여 AppModule 클래스가 모듈임을 명시
// - declarations: Component, Directive, Pipe에 대한 리스트 선언
// - imports: 의존 관계에 있는 Angular Library 모듈과 하위 모듈,
//          라우팅 모듈, Ionic과 같은 Third Party Module이 포함
//     ※ Third Party (써드 파티) ? 제 3자라는 의미로, 이 곳에서는 직접 개발
//                                 하지 않는 플러그인 또는 라이브러리를 뜻함
// - bootstrap: 오직 Root 모듈만 가지고 있는 property (속성)
//            브라우저가 최초로 index.html을 읽어들여 application을
//            시작할 때 사용할 컴포넌트를 명시
// application이 bootstrapping될 때 (?)...
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    AppRoutingModule,
    BookSearchModule,
    MovieSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
