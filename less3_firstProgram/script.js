"use strict" // ES6

// Ex 1 

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// Ex 2

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

// Ex 3

let 
firstMovie = prompt('Один из последних просмотренных фильмов?', ''), 
firstScore = +prompt('На сколько оцените его?', ''),
secondMovie = prompt('Один из последних просмотренных фильмов?', ''),
secondScore = +prompt('На сколько оцените его?', '');


personalMovieDB.movies[firstMovie] = firstScore;
personalMovieDB.movies[secondMovie] = secondScore;

console.log(personalMovieDB);