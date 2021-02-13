"use strict" // ES6



let numberOfFilms;

function start() {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}


start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        // let writeYourGenresResult = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();


function rememberMyFilms() {
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

}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        alert('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман!');
    } else {
        alert('error!');
    }
}

detectPersonalLevel();


console.log(personalMovieDB);