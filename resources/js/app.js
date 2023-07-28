import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

$(function(){
    $('#fadeOut').click(function(){
        $('#text').fadeOut();
    });

    $('#fadeIn').click(function(){
        $('#text').fadeIn();
    });
});