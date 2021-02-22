'use strict';

const formSubmit = document.querySelector('form'),
      inputResult = formSubmit.querySelector('input');


formSubmit.addEventListener('submit', (e) => {
    let deadLineValue = inputResult.value;
    e.preventDefault();
    e.target.reset();
    
    // Высчитывает время до конца deadLine
    function getTimeDifference(endtime) {
        const time = Date.parse(endtime) - Date.parse(new Date()), // возвращает время до конца в миллисекундах
            days = Math.floor(time / (1000 * 60 * 60 * 24)),
            hours = Math.floor((time / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((time / 1000 / 60) % 60),
            seconds = Math.floor((time / 1000) % 60);

        return {
            'total': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    // Добавляет 0 до 10, например 1 = 01, 2 = 02, 9 = 09

        function addZero(num) {
            if (num >= 0 && num < 10) {
              return  `0${num}`;
            } else {
                return num;
            }
        }

    // Функция начала отсчета

function setClock(selector, endtime) {
    const timerWrapper = document.querySelector(selector),
          days = timerWrapper.querySelector('.days'),
          hours = timerWrapper.querySelector('.hours'),
          minutes = timerWrapper.querySelector('.minutes'),
          seconds = timerWrapper.querySelector('.seconds'),
          timerInterval = setInterval(updateClock, 1000);

          updateClock();


    // Обновление таймера
function updateClock() {
    const t = getTimeDifference(endtime);

    days.innerHTML = addZero(t.days);
    hours.innerHTML = addZero(t.hours);
    minutes.innerHTML = addZero(t.minutes);
    seconds.innerHTML = addZero(t.seconds);

    if (t.total <= 0) {
        clearInterval(timerInterval);
    }

}

}
          

setClock('.timer-box-wrapper', deadLineValue);

    
});
