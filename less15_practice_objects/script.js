'use strict'; // ES6


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count <= 10) {
            alert('Просмотрено довольно мало фильмов!');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман!');
        } else {
            alert('error!');
        }
    },
    showMyDB: function(hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let writeYourGenresResult = prompt(`Ваш любимый жанр под номером ${i}`, '').toLowerCase();
                if (writeYourGenresResult == null || writeYourGenresResult == '') {
                    i--;
                    console.log('error');
                } else {
                    personalMovieDB.genres[i - 1] = writeYourGenresResult;
                }
            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр #${i+1} - это ${item}`);
            }); 
        }
};


console.log(personalMovieDB);


