import { Component } from '@angular/core';
import { AllMovieListService } from '../all-movie-list.service';
import { AllMovieList } from '../allMovieList';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent {

  header = "TV Show";      //One way data binding

  tvshowMovie = [
    {
      id : 1,
      img : "../../assets/tv_show_1.jfif",
      name : "Khatron Ke Khiladi",
      type : "TV Show",
      description : "Twelve celebrity contestants face their worst fears and perform a series of death-defying stunts under the supervision of a host to win the coveted title.",
      release_date : "9 August 2017",
      link : "https://www.youtube.com/watch?v=uI1tM1GTHuw"
    },
    {
      id : 2,
      img : "../../assets/tv_show_2.jpg",
      name : "SMaharashtrachi Hasyajatra",
      type : "TV Show",
      description : "Professional comedians from different regions of Maharashtra perform in a series of hilarious acts and compete with one another in order to entertain the audiences and win the title.",
      release_date : "21 September 2018",
      link : "https://www.youtube.com/watch?v=FFMWHhXXPo8"
    },
    {
      id : 3,
      img : "../../assets/tv_show_3.jpg",
      name : "Queen of the South",
      type : "TV Show",
      description : "Teresa flees to the United States after her drug-peddling boyfriend is murdered by a cartel boss. There, she sets out to become a drug lord and vows to avenge her lover's death.",
      release_date : "3 November 2016",
      link : "https://www.youtube.com/watch?v=XADcQPCh82I"
    },
    {
      id : 4,
      img : "../../assets/tv_show_4.jpg",
      name : "Haadu Karnataka",
      type : "Music",
      description : "Haadu Karnataka is a singing reality show that celebrates Karnataka's rich cultural diversity and a tribute to the state's magnificent heritage.",
      release_date : "10 February 2020",
      link : "https://www.youtube.com/watch?v=54uV2hwfUwQ",
    },
    {
      id : 5,
      img : "../../assets/tv_show_5.jpg",
      name : "CID",
      type : "TV Show",
      description : "ACP Pradyuman, Daya and Abhijeet are an elite trio of officers who work for the CID. They seek the help of professional forensic expert Dr Salunkhe and solve various criminal cases.",
      release_date : "10 June 2010",
      link : "https://www.youtube.com/watch?v=x1uWaM6rM84"
    },
    {
      id : 6,
      img : "../../assets/tv_show_6.jpg",
      name : "Sherlock",
      type : "Web Series",
      description : "Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases.",
      release_date : "23 December 2010",
      link : "https://www.youtube.com/watch?v=ZTf7DDb6KL0"
    },
    {
      id : 7,
      img : "../../assets/tv_show_7.jpg",
      name : "Splitsvilla",
      type : "TV Show",
      description : "Young men and women try to find the perfect partner for themselves while going through various rounds and performing challenging tasks.",
      release_date : "20 June 2008",
      link : "https://www.youtube.com/watch?v=IkM8toDivrk"
    },
    {
      id : 8,
      img : "../../assets/tv_show_8.jpg",
      name : "India's Best Dancer",
      type : "TV Show",
      description : "Professional and amateur dancers from across India showcase their talent in a series of rounds to impress the judges and win the title.",
      release_date : "29 February 2020",
      link : "https://www.youtube.com/watch?v=swBhfNx4Ul0"
    }
  ]

  check : boolean = true;

  constructor(private allMovieService : AllMovieListService){

  }

  tvshowData : AllMovieList[] = [];
  readTvShowData(){
    this.tvshowData = this.allMovieService.getAllTvShow();
    this.check = false;
  }
}
