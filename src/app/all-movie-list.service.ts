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
      name : "America's Got Talent",
      type : "TV Show",
      description : "Amateur performers present their singing, dancing, comedy and novelty acts to celebrity judges and a nationwide audience in order to advance in the competition and win a huge prize.",
      release_date : "4 June 2019",
      link : "https://www.youtube.com/watch?v=ArCi4zGSYHU"
    },
    {

      id : 20,
      img : "../../assets/movie_6.jpg",
      name : "Indian Premier League",
      type : "League",
      description : "The Indian Premier League is a men's T20 franchise cricket league in India. It is annually contested by ten teams based in seven cities and three states. The league was founded by the Board of Control for Cricket in India in 2007. Brijesh Patel is the incumbent chairman of IPL.",
      release_date : "2008",
      link : "https://www.youtube.com/watch?v=9tjJGVLk02c"
    },
  ]

  popularArr : AllMovieList[] = [
    {
      id : 29,
      img : "../../assets/popular_9.jfif",
      name : "America's Got Talent",
      type : "TV Show",
      description : "Amateur performers present their singing, dancing, comedy and novelty acts to celebrity judges and a nationwide audience in order to advance in the competition and win a huge prize.",
      release_date : "4 June 2019",
      link : "https://www.youtube.com/watch?v=YbpkvRBAc3Q"
    },
    {
      id : 30,
      img : "../../assets/popular_10.jfif",
      name : "Indian Premier League",
      type : "League",
      description : "The Indian Premier League is a men's T20 franchise cricket league in India. It is annually contested by ten teams based in seven cities and three states. The league was founded by the Board of Control for Cricket in India in 2007. Brijesh Patel is the incumbent chairman of IPL.",
      release_date : "2008",
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
      name : "Indian Premier League",
      type : "League",
      description : "The Indian Premier League is a men's T20 franchise cricket league in India. It is annually contested by ten teams based in seven cities and three states. The league was founded by the Board of Control for Cricket in India in 2007. Brijesh Patel is the incumbent chairman of IPL.",
      release_date : "2008",
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
  ]

  getAll(){
    return this.allMovie;
  }
}
