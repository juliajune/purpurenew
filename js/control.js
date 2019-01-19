/*
$(function(){
    'use strict';

    //Scrolling//
    $('a[href^="#"]').click(function(){
       let target = $(this).attr('href');
       $('html, body').animate(
           {
             scrollTop:$(target).offset().top
           },
           3000, "easeInOutExpo"
        ); 
    });

});
*/



  $(document).ready(function () {
    $("a[href*=#]").on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault();
      return false;
    });
  });
