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

  bHistory = true;
  bMostVisited = true;

  allData : AllMovieList[] = [];

  readAllData(){
    this.allData = this.allMovieService.getAll();
    this.bHistory = false;
  }

  id = 56;
  img = "../../assets/popular_2.jpg";
  name = "Superstar Singer";
  description = "Children from across India are mentored and judged by famous playback singers from the Hindi film industry. They compete against each other in various rounds to win the coveted title and prize.";
  type = "TV Show";
  release_date = "29 June 2019";
  link = "https://www.youtube.com/watch?v=M1kL3R10Bcs"


  addCard(){
    this.allData.push(new AllMovieList(this.id, this.img, this.name, this.description, this.type, this.release_date, this.link));
    this.bMostVisited = false;
  }

  deleteCard(idNo : number){
    this.allData = this.allData.filter((value) => value.id!=idNo) 
    if(this.allData.length>0){
      this.bHistory = false;
    }
    else{
      this.bHistory = true;
    }
    
    if(this.allData.find((value) => value.id==56)){
      this.bMostVisited = false;
    }
    else{
      this.bMostVisited = true;
    }
    
  }
}
