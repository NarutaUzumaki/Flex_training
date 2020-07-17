"use strict";


    let logo = document.getElementById('open_menu');
    let menu_first = document.getElementById('menu_first');
    let menu_second = document.getElementById('menu_second');

    logo.addEventListener('click', function () {
        if (menu_first.style.display = 'none') {
            menu_first.style.display = 'flex';
            menu_second.style.display = 'flex';
        }else {
            menu_first.style.display = 'none';
            menu_second.style.display = 'none';
        }
    });

