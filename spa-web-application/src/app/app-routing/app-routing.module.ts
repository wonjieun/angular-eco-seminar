import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Router Module import
import { Routes, RouterModule } from '@angular/router';

// Routing 처리를 할 각각의 Component import
import { HomeComponent } from '../pages/home/home.component';
import { BookSearchMainComponent } from '../book-search/book-search-main/book-search-main.component';
import { MovieSearchMainComponent } from '../movie-search/movie-search-main/movie-search-main.component';

const routers: Routes = [
  { path : '', component : HomeComponent },
  { path : 'book', component : BookSearchMainComponent },
  { path : 'movie', component : MovieSearchMainComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
