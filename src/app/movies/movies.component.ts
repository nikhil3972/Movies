import { Component } from '@angular/core';
import { AllMovieListService } from '../all-movie-list.service';
import { AllMovieList } from '../allMovieList';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  header = "Movie";    //One way data binding

  movieMovie = [
    {
      img : "../../assets/movie_1.jpg",
      name : "Kick",
      type : "Movie",
      description : "Kick is a 2014 Indian Hindi-language action comedy film produced and directed by Sajid Nadiadwala in his directorial debut under the Nadiadwala Grandson.",
      release_date : "25 July 2014",
      link : "https://www.youtube.com/watch?v=G0JWw7OKbGA"
    },
    {
      img : "../../assets/movie_4.jpg",
      name : "Surya the Fighter",
      type : "Movie",
      description : "Surya (Allu Arjun) is a short tempered army soldier who almost loses his job due to an impulsive decision he takes.",
      release_date : "25 May 2018",
      link : "https://www.youtube.com/watch?v=XjTqJ8Gn434"
    },
    {
      img : "../../assets/movie_7.jfif",
      name : "Jaani Dushman",
      type : "Movie",
      description : "On his wedding day, Jwala Prasad's bride mixes poison in his milk. After being cheated, he turns into a monster and seeks revenge by abducting and killing brides.",
      release_date : "2 May 1979",
      link : "https://www.youtube.com/watch?v=fzfGdsNBVNg"
    },
    {
      img : "../../assets/movie_10.jpg",
      name : "Joker",
      type : "Movie",
      description : "In this Arthur's character study story, we see him getting bullied by the hooligans for no reason and how he's lost in finding humanity.",
      release_date : "23 March 2019",
      link : "https://www.youtube.com/watch?v=jhJxg7hsLJI"
    },
    {
      img : "../../assets/movie_3.jfif",
      name : "Tezz",
      type : "Movie",
      description : "Aakash plots a terrorist attack on a train in London. Arjun, a counter-terrorism officer on the brink of retirement, tries to negotiate with Aakash, while secretly trying to find his location.",
      release_date : "26 April 2012",
      link : "https://www.youtube.com/watch?v=XZ9fJa_uMfA"
    },
    {
      img : "../../assets/movie_5.jpg",
      name : "Sarileru Neekevvaru",
      type : "Movie",
      description : "Ajay, an army official, sets out for Kurnool after being assigned a covert mission. Soon, he finds himself in the middle of uncovering a major scam.",
      release_date : "10 January 2020",
      link : "https://www.youtube.com/watch?v=NJhN_bRWuS4"
    },
    {
      img : "../../assets/movie_8.jpg",
      name : "Robin Hood",
      type : "Movie",
      description : "Robin Hood is a legendary heroic outlaw originally depicted in English folklore and subsequently featured in literature and film. According to legend, he was a highly skilled archer and swordsman",
      release_date : "21 November 2018", 
      link : "https://www.youtube.com/watch?v=b8n4WlM6sIs"
    },
    {
      img : "../../assets/movie_2.jfif",
      name : "Shaandaar",
      type : "Movie",
      description : "Jagjinder Joginder, a wedding planner, brings together the dysfunctional family of businessman Bipin Arora while making arrangements for his daughter's destination wedding in London.",
      release_date : "22 October 2015",
      link : "https://www.youtube.com/watch?v=SeA_6pi_2SM"
    }
  ]

  check : boolean = true;

  constructor(private allMovieService : AllMovieListService){

  }

  movieData : AllMovieList[] = [];
  readMovieData(){
    this.movieData = this.allMovieService.getAllMovie();
    this.check = false;
  }
}
