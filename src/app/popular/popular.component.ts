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
      name : "UEFA WOrld Cup",
      type : "World Cup",
      description : "As the number of final tournament slots for UEFA was increased from 13 to 16,[2] the qualification format was modified from the previous cycle.",
      release_date : "28 February 2022",
      link : "https://www.youtube.com/watch?v=CyyhTyfjzAA"
    },
    {
      img : "../../assets/popular_4.jpg",
      name : "Swarajyarakshak Sambhaji",
      type : "TV Show",
      description : "Sambhaji Maharaj, son of Chhatrapati Shivaji Maharaj, faces a lot of challenges during the wars between the Maratha kingdom and Mughal Empire.",
      release_date : "29 February 2020",
      link : "https://www.youtube.com/watch?v=K-oyo9xyeeE"
    },
    {
      img : "../../assets/popular_5.jfif",
      name : "English Vinglish",
      type : "Movie",
      description : "A housewife and caterer, Shashi, is usually mocked by her family for not knowing English. Her attempt to learn the language helps her rediscover herself and reassert her value as a mother and a wife.",
      release_date : "5 October 2012",
      link : "https://www.youtube.com/watch?v=SgrrvswbWsA"
    },
    {
      img : "../../assets/popular_6.jpg",
      name : "Veep",
      type : "TV Show",
      description : "Former Senator Selina Meyer gets an opportunity to serve as the Vice President of the United States. She tries to prevent various political uproars while juggling her public as well as private life.",
      release_date : "22 April 2012",
      link : "https://www.youtube.com/watch?v=YtRVGdT6c3E"
    },
    {
      img : "../../assets/popular_7.jpg",
      name : "K.G.F: Chapter 1",
      type : "Movie",
      description : "Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother. His quest takes him to Mumbai, where he gets involved with the notorious gold mafia.",
      release_date : "21 December 2018",
      link : "https://www.youtube.com/watch?v=gKizDojsdvs&t=2519s"
    },
    {
      img : "../../assets/popular_8.jfif",
      name : "Oggy and the Cockroaches",
      type : "TV Show",
      description : "A lazy cat, Oggy, loves to watch TV and eat food. However, his flatmates, who happen to be three tiny cockroaches, enjoy attacking Oggy's refrigerator and creating chaos, which ruins his peace.",
      release_date : "30 January 2019",
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
