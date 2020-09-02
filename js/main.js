$(function(){

  $('.about__wrapper').slick({
    dots: true,
    nextArrow: '<button class="slider-arrow slider-right"><img src="images/arrow-right.svg" alt=""></button>',
    prevArrow: '<button class="slider-arrow slider-left"><img src="images/arrow-left.svg" alt=""></button>',
    fade: true,
    speed: 500,
    infinite: true
  });

  $('.slider__inner').slick({
    
    slidesToShow: 2,
    dots: true,
    nextArrow: '<button class="slider-arrow slider-right"><img src="images/arrow-right.svg" alt=""></button>',
    prevArrow: '<button class="slider-arrow slider-left"><img src="images/arrow-left.svg" alt=""></button>',
    infinite: true,
  });



  $('.wrapper .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
    $('.wrapper .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });


  $('.chart-wrapper .chart-tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.chart-wrapper').find('.chart__tab-item').removeClass('chart__active-tab').hide();
    $('.chart-wrapper .chart-tabs').find('.chart-tab').removeClass('chart__active');
    $(this).addClass('chart__active');
    $('#' + id).addClass('chart__active-tab').fadeIn();
    return false;
  });

  $('.popular__inner').slick({
    slidesToShow: 1,
    dots: true,
    nextArrow: '<button class="slider-arrow slider-right"><img src="images/arrow-right.svg" alt=""></button>',
    prevArrow: '<button class="slider-arrow slider-left"><img src="images/arrow-left.svg" alt=""></button>',
    infinite: true,
  });
  
  $('.tabs-links__list').on('click', function () {
    
  });

  $('.tabs-links__list-item').on('click', function () {

    $('.tabs-links__list').removeClass('tabs-links__list--active');
    $(this).parent().addClass('tabs-links__list--active');

  });


  $('.check-in,.log-in').magnificPopup({
    type: 'inline',
    midClick: true
  });


  $('.image-popap').magnificPopup({
    type: 'image',
    zoom: {
      enabled: true,
      duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
    }
  });


  $('.popup-youtube').magnificPopup({
    type: 'iframe',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0' // Урл, который берется из кода iframe
        }
      }
    }
  });

});

var links = document.querySelectorAll('.tabs-links li');
var content = document.querySelectorAll('.tabs-content li');
for (var i = 0; i < links.length; i++) {
  (function (i) {
    var link = links[i];
    link.onclick = function () {
      for (var j = 0; j < content.length; j++) {
        var opacity = window.getComputedStyle(content[j]).opacity;
        if (opacity == "1") {
          content[j].style.opacity = "0";
        }
      }
      content[i].style.opacity = "1";
    }
  })(i);
}