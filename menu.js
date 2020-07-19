"use strict";


    let logo = document.getElementById('open_menu');
    let menu_first = document.getElementById('menu_first');
    let menu_second = document.getElementById('menu_second');

    logo.addEventListener('click', function () {
        menu_first.classList.toggle('menu-visible');
        menu_second.classList.toggle('menu-second-visible');
    });

