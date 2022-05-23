// a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
//    a String representing the studio, and a String representing the rating as its arguments, and sets the respective 
//    class properties to these values.
class movie {

// b) The constructor for the class Movie will set the class property rating to "PG" 
//    as default when no rating is provided.
  constructor(title, studio, rating) {
    this.title = String(title),
    this.studio = String(studio),
    this.rating =  String(rating) || 'PG'
  }  

  getPG(Movie) {
    let res = [];

    for(let i=0; i<Movie.length; i++) {
      if(Movie[i].rating === 'PG') {
        res.push(Movie[i]);
      }
    } return res;
  }
}

const film = new movie('Action','marvel productions','PG 13')
const film2 = new movie('Drama','koi hai Films','')
const film3 = new movie('Horror','Andheri raat Studios','R')
const film4 = new movie('Entertainment','Golmaal Production','PG')
const film5 = new movie('Sci-fi','fantastic Four Films','')
const film6 = new movie('Animated','Kung-Fu panda Studios','PG 13')

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array 
//    of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie 
//    instances. The returned array need not be full.
let filmArray = [film, film2, film3, film4, film5, film6]
console.log(film.getPG(filmArray))

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
//    the studio “Eon Productions”, and the rating “PG­13”
const lastFilm = new movie('Casino Royale','Eon Productions','PG­13')
console.log(lastFilm);