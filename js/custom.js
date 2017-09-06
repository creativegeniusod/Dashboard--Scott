document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

$(document).ready(function(){
  $('.show-sidebar').click(function(){
      $(this).addClass('sidebar-active').next('.fa').removeClass('fa-chevron-right').addClass('fa-chevron-left');
      $(".right-nav").animate({width: 'toggle'});
      $('body').addClass('add-overlay');
      $('body').animate({right: "400px"}, 400).css({"overflow":"hidden"});
      $('body').css({'overflow':'hidden'});
  });
  $('.hide-sidebar').click(function(){
     $(".right-nav").animate({width: 'toggle'});
     $("body").animate({right: "0"}, 400);
     $('.show-sidebar').css({'opacity':'1'});
     $('body').removeClass('add-overlay');
     $('body').css({'overflow':'visible'});
     $('.show-sidebar').removeClass('sidebar-active').next('.fa').removeClass('fa-chevron-left').addClass('fa-chevron-right');
  });

});