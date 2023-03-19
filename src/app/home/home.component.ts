import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  trendingMovie = [
    {
      id : 41,
      img : "../../assets/home_card_1.jpg",
      name : "Brahmāstra",
      type : "Movie",
      description : "A young man on the brink of falling in love gets his world turned upside down when he discovers he has the power to control fire and a connection to a secret society of guardians.",
      release_date : "9 September 2022",
      link : "https://www.youtube.com/watch?v=HT2M9qFXCgY"
    },
    {
      id : 42,
      img : "../../assets/home_card_2.jfif",
      name : "Ved",
      type : "Movie",
      description : "Ved is a 2022 Indian Marathi-language romantic drama film directed by Riteish Deshmukh, in his directorial debut, and produced by Genelia D'Souza. Ashok Saraf and Jiya Shankar play supporting roles. It is a remake of the 2019 Telugu-language romantic drama, Majili.",
      release_date : "30 December 2022",
      link : "https://www.youtube.com/watch?v=j-qguClAi00"
    },
    {
      id : 43,
      img : "../../assets/home_card_3.jpg",
      name : "Varisu",
      type : "Movie",
      description : "Vijay Rajendran is a happy-go-lucky man, but everything changes after the unexpected death of his foster father.",
      release_date : "11 January 2023",
      link : "https://www.youtube.com/watch?v=bUTcu16t9UM"
    },
    {
      id : 44,
      img : "../../assets/home_card_4.jpg",
      name : "Frankenstein",
      type : "Movie",
      description : "An obsessed scientist creates a living being from body parts, not realizing it has a madman's brain.",
      release_date : "21 November 1931",
      link : "https://www.youtube.com/watch?v=OaJftrcR8IM",
    },
  ]

  topRatedMovie = [
    {
      id : 45,
      img : "../../assets/home_card_5.jfif",
      name : "Dilwale",
      type : "Movie",
      description : "It is an 2015 Indian Hindi-language action comedy film directed by Rohit Shetty. The film stars Kajol, Shah Rukh Khan, Kriti Sanon, and Varun Dhawan.",
      release_date : "11 July 2015",
      link : "https://www.youtube.com/watch?v=8O6lWaQuNuY"
    },
    {
      id : 46,
      img : "../../assets/home_card_6.jfif",
      name : "Annabelle",
      type : "Movie",
      description : "John and Mia Form are attacked by members of a satanic cult that uses their old doll as a conduit to make their life miserable. This unleashes a string of paranormal events in the Forms' residence.",
      release_date : "3 October 2014",
      link : "https://www.youtube.com/watch?v=Of466a8ymIk"
    },
    {
      id : 47,
      img : "../../assets/home_card_7.jfif",
      name : "Ala Vaikunthapurramuloo",
      type : "Movie",
      description : "Bantu grows up being constantly subjected to his father's scorn. However, when he learns of his real parentage, he decides to carve a place for himself within the family he truly belongs to.",
      release_date : "12 January 2020",
      link : "https://www.youtube.com/watch?v=oCaYu3lk7ss"
    },
    {
      id : 48,
      img : "../../assets/home_card_8.jfif",
      name : "Punha Gondhal Punha Mujra",
      type : "Movie",
      description : "Politician Narayan Wagh and his opponent Vishwasrao Tope hail from the same village. When Narayan wins the election by a narrow margin, Vishwasrao plays dirty to seek revenge.",
      release_date : "10 October 2014",
      link : "https://www.youtube.com/watch?v=gVA3v9tRYco",
    },
  ]
}
