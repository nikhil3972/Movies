import { Component } from '@angular/core';
import { AllMovieListService } from '../all-movie-list.service';
import { AllMovieList } from '../allMovieList';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {

  header = "Popular";

  popularMovie = [
    {
      img : "../../assets/popular_1.jpg",
      name : "Poochta Hai Bharat",
      type : "News",
      description : "The anchor invites a panel of politicians, social activists and experts in different fields to discuss, debate and analyse the issues plaguing the country.",
      release_date : "5 August 2022", 
      link : "https://www.youtube.com/watch?v=N2leZF6hvT0"
    },
    {
      img : "../../assets/popular_2.jpg",
      name : "Superstar Singer",
      type : "TV Show",
      description : "Children from across India are mentored and judged by famous playback singers from the Hindi film industry. They compete against each other in various rounds to win the coveted title and prize.",
      release_date : "29 June 2019",
      link : "https://www.youtube.com/watch?v=M1kL3R10Bcs"
    },
    {
      img : "../../assets/popular_3.jfif",
      name : "Bigg Boss",
      type : "TV Show",
      description : "Salman Khan returns to turn the tables on the housemates in their own game and add twists during their rollercoaster journey in the BB House.",
      release_date : "3 November 2006",
      link : "https://www.youtube.com/watch?v=CyyhTyfjzAA"
    },
    {
      img : "../../assets/popular_4.jpg",
      name : "Love Yourself",
      type : "Music",
      description : "Love Yourself is a kiss-off to a narcissistic ex-lover who did the protagonist wrong, with Bieber singing in a snappy tone while criticizing a girl for loving herself too much.",
      release_date : "2015",
      link : "https://www.youtube.com/watch?v=K-oyo9xyeeE"
    },
    {
      img : "../../assets/popular_5.jfif",
      name : "Bhediya",
      type : "Movie",
      description : "Bhaskar finds himself changing after being bitten by a wolf in the forests of Arunachal. While Bhaskar begins to transform into a shape-shifting werewolf, he and his friends look for answers amid many twists, turns and laughs.",
      release_date : "24 November 2022",
      link : "https://www.youtube.com/watch?v=SgrrvswbWsA"
    },
    {
      img : "../../assets/popular_6.jpg",
      name : "Avatar: The Way of Water",
      type : "Movie",
      description : "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
      release_date : "16 December 2022",
      link : "https://www.youtube.com/watch?v=YtRVGdT6c3E"
    },
    {
      img : "../../assets/popular_7.jpg",
      name : "Kaun Banega Crorepati",
      type : "TV Show",
      description : "The host asks a series of questions to several contestants to test their general knowledge and give them a chance to win a cash prize.",
      release_date : "3 July 2000",
      link : "https://www.youtube.com/watch?v=gKizDojsdvs&t=2519s"
    },
    {
      img : "../../assets/popular_8.jfif",
      name : "Man vs. Wild",
      type : "TV Show",
      description : "Host Bear Grylls tackles extreme challenges and navigates through remote locations around the world, sharing invaluable survival strategies along the way.",
      release_date : "10 March 2006",
      link : "https://www.youtube.com/watch?v=63O7X1BrH7E"
    }
  ]

  check : boolean = true;

  constructor(private allMovieService : AllMovieListService){

  }

  popularData : AllMovieList[] = [];
  readPopularData(){
    this.popularData = this.allMovieService.getAllPopular();
    this.check = false;
  }
}
