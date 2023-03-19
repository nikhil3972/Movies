import { Injectable } from '@angular/core';
import { AllMovieList } from './allMovieList';

@Injectable({
  providedIn: 'root'
})
export class AllMovieListService {

  tvshowArr : AllMovieList[] = [
    {
      id : 9,
      img : "../../assets/tv_show_9.jpg",
      name : "The Windsors",
      type : "Web series",
      description : "The members of the British royal family face several trials and tribulations as they attempt to deal with the issues in their lives.",
      release_date : "6 May 2016",
      link : "https://www.youtube.com/watch?v=bWp2BuRm2Zs"
    },
    {
      id : 10,
      img : "../../assets/tv_show_10.jpg",
      name : "Misfits",
      type : "TV Show",
      description : "The Misfits are an American punk rock band often recognized as the pioneers of the horror punk subgenre, blending punk and other musical influences with horror film themes and imagery. The group was founded in 1977 in Lodi, New Jersey, by vocalist, songwriter and keyboardist Glenn Danzig.",
      release_date : "13 May 2016",
      link : "https://www.youtube.com/watch?v=VsBYXLYNZlE"
    },
  ]

  movieArr : AllMovieList[] = [
    {
      id : 19,
      img : "../../assets/movie_9.jfif",
      name : "Oblivion",
      type : "Movie",
      description : "Jack Harper, a drone repairman stationed on Earth that has been ravaged by war with extraterrestrials, questions his identity after rescuing the woman who keeps appearing in his dreams.",
      release_date : "12 April 2013",
      link : "https://www.youtube.com/watch?v=ArCi4zGSYHU"
    },
    {

      id : 20,
      img : "../../assets/movie_6.jpg",
      name : "Bolee",
      type : "Movie",
      description : "A young man who strongly believes in justice invites trouble for himself and his loved ones when he clashes with a corrupt politician and his henchmen.",
      release_date : "30 November 2014",
      link : "https://www.youtube.com/watch?v=9tjJGVLk02c"
    },
  ]

  popularArr : AllMovieList[] = [
    {
      id : 29,
      img : "../../assets/popular_9.jfif",
      name : "ATP Cup",
      type : "World Cup",
      description : "The ATP Cup was an international outdoor hard court men's tennis team tournament, which ran from 2020 to 2022. The tournament was played across one or three Australian cities over ten days in the lead up to the Australian Open, and featured teams from 12, 16 or 24 countries.",
      release_date : "15 November 2018",
      link : "https://www.youtube.com/watch?v=YbpkvRBAc3Q"
    },
    {
      id : 30,
      img : "../../assets/popular_10.jfif",
      name : "Predator",
      type : "Movie",
      description : "Predator is a 1987 American science fiction action film directed by John McTiernan and written by brothers Jim and John Thomas. It is the first installment in the Predator franchise.",
      release_date : "20 June 1987",
      link : "https://www.youtube.com/watch?v=mvTVOHHSTFc"
    },
  ]

  newArr : AllMovieList[] = [
    {
      id : 39,
      img : "../../assets/new_9.jfif",
      name : "America's Got Talent",
      type : "TV Show",
      description : "Amateur performers present their singing, dancing, comedy and novelty acts to celebrity judges and a nationwide audience in order to advance in the competition and win a huge prize.",
      release_date : "4 June 2019",
      link : "https://www.youtube.com/watch?v=yHdIcqI7wG4"
    },
    {
      id : 40,
      img : "../../assets/new_10.jpg",
      name : "Beuty & Beast",
      type : "TV Show",
      description : "Belle, a village girl, embarks on a journey to save her father from a creature that has locked him in his dungeon. Eventually, she learns that the creature is an enchanted prince who has been cursed.",
      release_date : "17 March 2017",
      link : "https://www.youtube.com/watch?v=K6LO-bz1Wc4"
    },
    
  ]

  constructor() { }

  getAllTvShow(){
    return this.tvshowArr;
  }

  getAllMovie(){
    return this.movieArr;
  }

  getAllPopular(){
    return this.popularArr;
  }

  getAllNew(){
    return this.newArr;
  }






  allMovie = [
    {
      id : 51,
      img : "../../assets/new_1.jpg",
      name : "Sita Raman",
      type : "Movie",
      description : "Upon returning to Pakistan, Afreen sets off to fulfil her grandfather's wish of delivering a letter from Ram to Sita. Along the way, she finds Ram and learns about their love story.",
      release_date : "5 August 2022",
      link : "https://www.youtube.com/watch?v=1qSv-cYe-DM"
    },
    {
      id : 52,
      img : "../../assets/new_2.jpg",
      name : "Indian Premier League",
      type : "League",
      description : "The Indian Premier League is a men's T20 franchise cricket league in India. It is annually contested by ten teams based in seven cities and three states. The league was founded by the Board of Control for Cricket in India in 2007. Brijesh Patel is the incumbent chairman of IPL.",
      release_date : "2008",
      link : "https://www.youtube.com/watch?v=SmXiZHe2xoA"
    },
    {
      id : 53,
      img : "../../assets/new_3.jpg",
      name : "Bigg Boss",
      type : "TV Show",
      description : "Salman Khan returns to turn the tables on the housemates in their own game and add twists during their rollercoaster journey in the BB House.",
      release_date : "3 November 2006",
      link : "https://www.youtube.com/watch?v=3L1nz_reby4"
    },
    {
      id : 54,
      img : "../../assets/new_4.jpg",
      name : "Love Yourself",
      type : "Music",
      description : "Love Yourself is a kiss-off to a narcissistic ex-lover who did the protagonist wrong, with Bieber singing in a snappy tone while criticizing a girl for loving herself too much.",
      release_date : "2015",
      link : "https://www.youtube.com/watch?v=oyEuk8j8imI"
    },
    {
      id : 55,
      img : "../../assets/movie_9.jfif",
      name : "America's Got Talent",
      type : "TV Show",
      description : "Amateur performers present their singing, dancing, comedy and novelty acts to celebrity judges and a nationwide audience in order to advance in the competition and win a huge prize.",
      release_date : "4 June 2019",
      link : "https://www.youtube.com/watch?v=ArCi4zGSYHU"
    },
  ]

  getAll(){
    return this.allMovie;
  }
}
