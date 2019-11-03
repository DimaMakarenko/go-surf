$(function() {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="header__slider-arrows slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt="arrow-left"/>',
    nextArrow:
      '<img class="header__slider-arrows slider-arrows slider-arrows-right" src="img/arrows-right.svg" alt="arrow-right"/>',
    asNavFor: ".slider-dotshead"
  });

  $(".slider-dotshead").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider"
  });

  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="header__slider-arrows slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt="arrow-left"/>',
    nextArrow:
      '<img class="header__slider-arrows slider-arrows slider-arrows-right" src="img/arrows-right.svg" alt="arrow-right"/>',
    asNavFor: ".slider-map"
  });

  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".surf-slider",
    focusOnSelect: true,
  });

  $('.travel__slider').slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="header__slider-arrows slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt="arrow-left"/>',
    nextArrow:
      '<img class="header__slider-arrows slider-arrows slider-arrows-right" src="img/arrows-right.svg" alt="arrow-right"/>',
    
  });
  
});
