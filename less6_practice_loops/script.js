"use strict" // ES6


let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

if (personalMovieDB.count <= 10) {
    alert('Просмотрено довольно мало фильмов!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман!');
} else {
    alert('error!');
}



for (let i = 0; i < 2; i++) {
  let movieName = prompt('Один из последних просмотренных фильмов?', ''),
   movieScore = +prompt('На сколько оцените его?', '');
   if (movieName != null && movieScore != null && movieName != '' && movieScore != '' && movieName.length < 50) {
    personalMovieDB.movies[movieName] = movieScore;
    console.log('done');
   } else {
       console.log('error');
       i--;
   }
}








console.log(personalMovieDB);