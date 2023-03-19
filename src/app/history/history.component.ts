import { Component } from '@angular/core';
import { AllMovieListService } from '../all-movie-list.service';
import { AllMovieList } from '../allMovieList';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
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
