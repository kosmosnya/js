'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // Tabs functional

    const tabs = document.querySelectorAll('.tabheader__item'), // items (Фитнес, Постное, Премиум, Сбалансированное)
        tabsContent = document.querySelectorAll('.tabcontent'), // image
        tabsParent = document.querySelector('.tabheader__items'); // parent for events


    function hideTabContent() {
        tabsContent.forEach(element => {
            element.classList.add('hide');
            element.classList.remove('show', 'fade');
        });
        tabs.forEach(element => {
            element.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }



    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });



        // Timer func

        const deadLine = '2021-05-11';

        function getTimeDifference(endtime) {
            const t = Date.parse(endtime) - Date.parse(new Date()), // amount of milisecs to 2021-05-11
                days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor((t / (1000 * 60 * 60) % 24)),
                minutes = Math.floor((t / 1000 / 60) % 60),
                seconds = Math.floor((t / 1000) % 60);

            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        function getZero(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }


        function setClock(selector, endtime) {
            const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timerInterval = setInterval(updateClock, 1000);

                updateClock();


            function updateClock() {
                const t = getTimeDifference(endtime);

                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);


                if (t.total <= 0) {
                    clearInterval(timerInterval);
                }
            }
        }

        setClock('.timer', deadLine);


    });































