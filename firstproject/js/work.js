$(document).ready(function (){
    console.log("js loaded");


    $('.hide-title img').mouseenter(function (){
        $(this).siblings().animate({
            opacity: "1"
        });
    });

    $('.hide-title img').mouseleave(function (){
        $(this).siblings().animate({
            opacity: "0"
        });
    });

});
