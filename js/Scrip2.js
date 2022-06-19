$(document).ready(function() {
    /*photo slider*/
    var sliderOptions = {
      loop: true,
      speed: 1000,
      loopedSlides: 3,
      parallax: true,
      grabCursor: true,
      spaceBetween: 2,
      mousewheel: {
        releaseOnEdges: true
      },
      on: {
        init: function() {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            $(swiper.slides[i])
              .find('.img-container')
              .attr({
                'data-swiper-parallax': 0.75 * swiper.width
              });
          }
        }
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.next-ctrl',
        prevEl: '.prev-ctrl'
      }
    };
  
    var textSliderOptions = {
      loop: true,
      speed: 1000,
      loopedSlides: 3,
      effect: 'fade',
      grabCursor: true,
      mousewheel: {
        releaseOnEdges: true
      }
    };
  
    var photoSlider = new Swiper('.photo-slider', sliderOptions);
    var textSlider = new Swiper('.text-slider', textSliderOptions);
    photoSlider.controller.control = textSlider;
    textSlider.controller.control = photoSlider;
  });