import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NewComponent } from './new/new.component';
import { PopularComponent } from './popular/popular.component';
import { TvshowComponent } from './tvshow/tvshow.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path : '', component: LoginComponent},
  {path : 'login', component: LoginComponent},
  {path : 'tv-show', component: TvshowComponent},
  {path : 'movies', component: MoviesComponent},
  {path: 'popular', component: PopularComponent},
  {path: 'new', component: NewComponent},
  {path: 'history', component: HistoryComponent},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
