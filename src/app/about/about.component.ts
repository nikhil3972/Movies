import { Component } from '@angular/core';
import { AllMovieListService } from '../all-movie-list.service';
import { AllMovieList } from '../allMovieList';

@Component({
  selector: 'app-register',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(private allMovieService : AllMovieListService){

  }

  allData : AllMovieList[] = [];

  readAllData(){
    this.allData = this.allMovieService.getAll();
  }

  // addCard(obj : AllMovieList){
  //   this.allData = this.allData.push(obj);
  // }

  deleteCard(idNo : number){
    this.allData = this.allData.filter((value) => value.id!=idNo)
  }
}