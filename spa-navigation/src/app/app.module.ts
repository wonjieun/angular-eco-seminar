import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// BrowserAnimationsModule import 구문 추가
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MatTableModule import 구문 추가
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

// Feature Module import
import { BookSearchModule } from './book-search/book-search.module';
import { MovieSearchModule } from './movie-search/movie-search.module';

// Routing Module import
import { AppRoutingModule } from './app-routing/app-routing.module';

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
