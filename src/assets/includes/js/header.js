import * as $ from 'jquery';
//import popper from 'popper.js'; ПОППЕР
import bootstrap from 'bootstrap';
import 'bootstrap-select';
import 'bootstrap-select/dist/css/bootstrap-select.css'
// СВАЙПЕР
import Swiper, { Navigation, Pagination } from 'swiper';
import '/node_modules/swiper/swiper-bundle.min.css';
Swiper.use([Navigation, Pagination]);



const jQuery = $;
window.$ = $;
window.jQuery = $;

require('jquery-ui-bundle');
require('jquery-ui-touch-punch');
import 'jquery-ui-bundle/jquery-ui.css';

let needReactivateHeader = true;
$(window).on('scroll', function () {
  if ($(window).width() > 767) {
    if ($(window).scrollTop() > 1) {
      if (needReactivateHeader) {
        //$('#header-nav').addClass("sticky_header");
        //$('#header-nav .header-navigation').slideUp(100);
        //$('#burger-header-menu').show();
        //$('#burger-header-menu__close').hide();
        $('#masthead').addClass('header-shadow');
        needReactivateHeader = false;
      }
    }
    else {
      needReactivateHeader = true;
      $('#masthead').removeClass('header-shadow');
      //$('#header-nav').removeClass("sticky_header");
      //$('#header-nav .header-navigation').slideDown(100);

      //$('#burger-header-menu').hide();
      //$('#burger-header-menu__close').show();
      //$('#header-nav').removeClass('is-showing-navigation');
    }
  }
});

//$('#modal-promo-sm').modal('show');
$('#burger-header-menu').on('click', (e) => {
  $('#burger-header-menu').hide();
  $('#burger-header-menu__close').show();
  $('#header-nav').addClass('is-showing-navigation');

  $('#header-nav .header-navigation').slideDown(100, (e) => {
    $('#header-nav .header-navigation .header-btn-3').show();


  });
});

$('#burger-header-menu__close').on('click', (e) => {
  $('#burger-header-menu').show();
  $('#burger-header-menu__close').hide();

  $('#header-nav .header-navigation').slideUp(200, (e) => {
    $('#header-nav').removeClass('is-showing-navigation');
  })
});

$('.bootstrap-select').selectpicker();

$('.qustion-checkbox input').checkboxradio();
$('#v-pills-tab button').on('click', function (event) {
  event.preventDefault()
  $(this).tab('show')
})

$(".slider-range").each(function () {
  $(this).slider({
    range: true,
    min: 0,
    max: 10000,
    step: 2000,
    values: [0, 4000],
    slide: function (event, ui) {
      //$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  })

  // Add labels to slider whose values 
  // are specified by min, max

  // Get the options for this slider (specified above)
  var opt = $(this).data().uiSlider.options;

  // Get the number of possible values
  var vals = (opt.max - opt.min) / opt.step;

  // Position the labels
  for (var i = 0; i <= vals; i++) {

    // Create a new element and position it with percentages
    var el = $('<label>' + (i * opt.step) + '</label>').css('left', (i / vals * 100) + '%');

    // Add the element inside #slider
    $(this).find(".underline").append(el);

  }

});;

$(".mob-slider-range").each(function () {
  $(this).slider({
    range: true,
    min: 0,
    max: 10000,
    step: 2000,
    values: [0, 4000],
    slide: function (event, ui) {
    }
  })

  // Add labels to slider whose values 
  // are specified by min, max

  // Get the options for this slider (specified above)
  var opt = $(this).data().uiSlider.options;

  // Get the number of possible values
  var vals = (opt.max - opt.min) / opt.step;

  // Position the labels
  for (var i = 0; i <= vals; i++) {

    // Create a new element and position it with percentages
    var el = $('<label>' + (i * opt.step) + '</label>').css('left', (i / vals * 100) + '%');

    // Add the element inside #slider
    $(this).find(".underline").append(el);

  }

});;

/*$("#amount").val("$" + $("#slider-range").slider("values", 0) +
  " - $" + $("#slider-range").slider("values", 1));*/

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 60,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: false,
  speed: 400,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 991px
    0: {
      slidesPerView: 1,
      spaceBetweenSlides: 40,
      pagination: ' ',
    },
    // when window width is >= 991px
    768: {
      slidesPerView: 2,
      spaceBetweenSlides: 40,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetweenSlides: 60
    }
  }
});
const swiperCertificate = new Swiper('.swiper-certificates', {
  slidesPerView: 3,
  spaceBetween: 70,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: false,
  speed: 400,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 991px
    0: {
      slidesPerView: 1,
      spaceBetweenSlides: 40,
      pagination: ' ',
    },
    // when window width is >= 991px
    768: {
      slidesPerView: 2,
      spaceBetweenSlides: 40,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetweenSlides: 70
    }
  }
});

const swiperItog = new Swiper('.swiper-itog', {
  slidesPerView: 2,
  spaceBetween: 57,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: false,
  speed: 400,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 991px
    0: {
      slidesPerView: 1,
      spaceBetweenSlides: 40,
      pagination: ' ',
    },
    // when window width is >= 991px
    768: {
      slidesPerView: 1,
      spaceBetweenSlides: 40,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 2,
      spaceBetweenSlides: 57
    }
  }
});

const swiperPartners = new Swiper('.swiper-partners', {
  slidesPerView: 4,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: false,
  speed: 400,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetweenSlides: 0
    },
    // when window width is >= 991px
    576: {
      slidesPerView: 2,
      spaceBetweenSlides: 0
    },
    // when window width is >= 991px
    768: {
      slidesPerView: 3,
      spaceBetweenSlides: 0
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 4,
      spaceBetweenSlides: 0
    }
  }
});

const swiperUslugiMobile = new Swiper('.uslugi-mobile-veiw', {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: false,
  speed: 400,
  autoplay: false,
  centeredSlides: true,
  navigation: {
    nextEl: '.uslugi__next',
    prevEl: '.uslugi__prev',
  },
  on: {
    slideChange: function () {
      console.log('slide changed');
      console.log(this.activeIndex);
      const index_currentSlide = this.realIndex;
      const currentSlide = $(this.slides[index_currentSlide]);
      let currentLink = currentSlide.find('a').attr('href');
      $('.uslugi a.nav-link[href="' + currentLink + '"]').tab('show');
    }
  }
});


var scrollFlex = (function ($) {
  var counter = 0;
  $("#v-pills-tab__prev").on('click', (e) => {
    console.log('counter' + counter);
    if (counter > 0) {
      counter--;
      $('#v-pills-tab a').removeClass('active');
      let moving = $('#v-pills-tab a:nth-child(' + (counter + 1) + ')').outerWidth(true);
      console.log(moving);
      $('#v-pills-tab a:nth-child(' + (counter + 1) + ')').addClass('active');
      $('#v-pills-tab').animate({
        left: '+=' + moving + 'px'
      }, () => {

      })
    }
  });
  $("#v-pills-tab__next").on('click', (e) => {
    let tabsCount = $('#v-pills-tab a').length - 1;
    console.log('counter' + counter);
    console.log('cnt ' + tabsCount);
    if (counter < tabsCount) {
      counter++;
      $('#v-pills-tab a').removeClass('active');
      let moving = $('#v-pills-tab a:nth-child(' + (counter + 1) + ')').outerWidth(true);
      console.log(moving);
      $('#v-pills-tab a:nth-child(' + (counter + 1) + ')').addClass('active');
      $('#v-pills-tab').animate({
        left: '-=' + moving + 'px'
      }, () => {

      })
    }
  });
  var getCounter = function () {
    return counter;
  }
})(jQuery);