/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const ads = document.querySelectorAll('.promo__adv img');

const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    }); 
};


const poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      moviesList = document.querySelector('.promo__interactive-list');

const makeChanges = () => {
    genre.textContent = 'ДРАМА';

poster.style.cssText = `background:url("img/bg.jpg");`;
};

const sortArr = (arr) => {
    arr.sort();
};

const formSubmit = document.querySelector('form.add'),
      inputResult = formSubmit.querySelector('.adding__input'),
      checkboxResult = formSubmit.querySelector('[type="checkbox"]');

formSubmit.addEventListener('submit', (event => {
    event.preventDefault();
    let newMovie = inputResult.value;
    const  favorite = checkboxResult.checked;

          if (newMovie) {
              if (newMovie.length > 21) {
                  newMovie = `${newMovie.substring(0, 22)}...`;
              }

              if(favorite) {
                  console.log('Добавляем ваш любимый фильм!');
              }

            movieDB.movies.push(newMovie); // adding movies to array movieDB.movies
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, moviesList);
          }

          event.target.reset(); // form reset
}));



function createMovieList(films, parent) {
    parent.innerHTML = '';

    sortArr(films);


    films.forEach((movie, i) => {
        parent.innerHTML += `<li class="promo__interactive-item">${i+1}. ${movie}
        <div class="delete"></div>
    </li>`;
    
    });

    document.querySelectorAll('.delete').forEach((item, i) => {
        item.addEventListener('click', () => {
            item.parentElement.remove();
            movieDB.movies.splice(i, 1);


            createMovieList(films, parent);
        });
    });
}



deleteAdv(ads);
makeChanges();
createMovieList(movieDB.movies, moviesList);


// moviesList.forEach(item => {
//     item.textContent = movieDB.movies;
// });
