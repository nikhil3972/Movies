import { Component } from '@angular/core';
import { AllMovieListService } from '../all-movie-list.service';
import { AllMovieList } from '../allMovieList';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  header = "New";
    
    newMovie = [
      {
        img : "../../assets/new_1.jpg",
        name : "Sita Raman",
        type : "Movie",
        description : "Upon returning to Pakistan, Afreen sets off to fulfil her grandfather's wish of delivering a letter from Ram to Sita. Along the way, she finds Ram and learns about their love story.",
        release_date : "5 August 2022",
        link : "https://www.youtube.com/watch?v=1qSv-cYe-DM"
      },
      {
        img : "../../assets/new_2.jpg",
        name : "Indian Premier League",
        type : "League",
        description : "The Indian Premier League is a men's T20 franchise cricket league in India. It is annually contested by ten teams based in seven cities and three states. The league was founded by the Board of Control for Cricket in India in 2007. Brijesh Patel is the incumbent chairman of IPL.",
        release_date : "2008",
        link : "https://www.youtube.com/watch?v=SmXiZHe2xoA"
      },
      {
        img : "../../assets/new_3.jpg",
        name : "Bigg Boss",
        type : "TV Show",
        description : "Salman Khan returns to turn the tables on the housemates in their own game and add twists during their rollercoaster journey in the BB House.",
        release_date : "3 November 2006",
        link : "https://www.youtube.com/watch?v=3L1nz_reby4"
      },
      {
        img : "../../assets/new_4.jpg",
        name : "Love Yourself",
        type : "Music",
        description : "Love Yourself is a kiss-off to a narcissistic ex-lover who did the protagonist wrong, with Bieber singing in a snappy tone while criticizing a girl for loving herself too much.",
        release_date : "2015",
        link : "https://www.youtube.com/watch?v=oyEuk8j8imI"
      },
      {
        img : "../../assets/new_5.jpg",
        name : "Bhediya",
        type : "Movie",
        description : "Bhaskar finds himself changing after being bitten by a wolf in the forests of Arunachal. While Bhaskar begins to transform into a shape-shifting werewolf, he and his friends look for answers amid many twists, turns and laughs.",
        release_date : "24 November 2022",
        link : "https://www.youtube.com/watch?v=U8vHUgDrcWM"
      },
      {
        img : "../../assets/new_6.jpg",
        name : "Avatar: The Way of Water",
        type : "Movie",
        description : "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
        release_date : "16 December 2022",
        link : "https://www.youtube.com/watch?v=mLkONFNF2ks"
      },
      {
        img : "../../assets/new_7.jpg",
        name : "Kaun Banega Crorepati",
        type : "TV Show",
        description : "The host asks a series of questions to several contestants to test their general knowledge and give them a chance to win a cash prize.",
        release_date : "3 July 2000",
        link : "https://www.youtube.com/watch?v=XmrEkJCaDfk"
      },
      {
        img : "../../assets/new_8.jfif",
        name : "Man vs. Wild",
        type : "TV Show",
        description : "Host Bear Grylls tackles extreme challenges and navigates through remote locations around the world, sharing invaluable survival strategies along the way.",
        release_date : "10 March 2006",
        link : "https://www.youtube.com/watch?v=8YSIHU0AGmU"
      }
    ]

    check : boolean = true;

    constructor(private allMovieService : AllMovieListService){

    }

    newData : AllMovieList[] = [];
    readNewData(){
      this.newData = this.allMovieService.getAllNew();
      this.check = false;
    }
}
