/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Yajushi Srivastava.", "FOSS APOSTLE.", "Designer.", "Photographer."],
      typeSpeed: 100,
      loop: true,
    });
  });


  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $('.services-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 }, 1020: { items: 5} }
    });

  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  var magnifPopup = function() {
    $('.popup-img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };


  // Call the functions
  magnifPopup();

});

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function(){

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

})

// ========================================================================= //
//  Card Js
// ========================================================================= //

var targetUrls = '{"targets": [' +
'{"title":"Neuroscience News Science Magazine","image":"https://demos.codetipi.com/zeen/wp-content/uploads/sites/2/2020/06/da-box-mobile.jpg","url":"https://neurosciencenews.com/","filter":"read"},' + 
'{"title":"Human Behavioral Biology - Robert Sapolsky","image":"https://i.ytimg.com/vi/NNnIGh9g6fA/hqdefault.jpg","url":"https://youtu.be/NNnIGh9g6fA","filter":"play"},' +
'{"title":"Nancy MIT Course 9.11: The Human Brain","image":"https://i.ytimg.com/vi/i1pdQjdAndc/maxresdefault.jpg","url":"https://youtu.be/i1pdQjdAndc","filter":"play"},' + 
'{"title":"Papers with Code - The latest in Machine Learning","image":"https://paperswithcode.com/static/index.jpeg","url":"https://paperswithcode.com/","filter":"research"},' + 
'{"title":"LeetCode","image":"https://leetcode.com/static/images/LeetCode_Sharing.png","url":"https://leetcode.com/","filter":"code"},' + 
'{"title":"PHIL304: Existentialism","image":"https://resources.saylor.org/og/PHIL304-1200x1200.png","url":"https://learn.saylor.org/course/PHIL304","filter":"read"},' +
'{"title":"Machine Learning - Andrew Ng","image":"https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~COURSE!~machine-learning/XDP~COURSE!~machine-learning.jpeg","url":"https://www.coursera.org/learn/machine-learning","filter":"learn"},' +
'{"title":"Podcast - Huberman Lab","image":"https://is4-ssl.mzstatic.com/image/thumb/Podcasts114/v4/6d/46/e1/6d46e17a-a186-5ba4-c63a-129c570a2734/mza_7741805145491103965.jpg/1200x630wp.png","url":"https://www.youtube.com/channel/UC2D2CMWXMOVWx7giW1n3LIg","filter":"play"},' +
'{"title":"Neuroscience Lectures - Dr. Chris Thompson","image":"https://yt3.ggpht.com/ytc/AAUvwng47hPFvA5epTcoR1OX7sme-2XSwhxP8MzGOcyn=s88-c-k-c0x00ffffff-no-rj","url":"https://www.youtube.com/channel/UCoDpMmSogY8KcDnc0MvFBBQ","filter":"play"},' +
'{"title":"AI Engineering - Srivatsan Srinivasan","image":"https://i.ytimg.com/vi/ekHvVeNRFBI/maxresdefault.jpg","url":"https://www.youtube.com/channel/UCwBs8TLOogwyGd0GxHCp-Dw","filter":"learn"},' +
'{"title":"Google Cloud Ready Facilitator Program","image":"https://google.qwiklabs.com/favicon-144.png","url":"https://google.qwiklabs.com/public_profiles/6bb5729e-5399-4215-948f-fa801d0711c0","filter":"code"},' +
'{"title":"Papers in Neuroscience","image":"https://www.ncbi.nlm.nih.gov/corehtml/pmc/pmcgifs/pmc-logo-share.png","url":"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4640495/","filter":"research"},' +
'{"title":"Data Structures & Algorithms, Level-up Course","image":"https://img-b.udemycdn.com/course/480x270/3642112_bd0f_10.jpg?secure=gpZ4b6jKhOgcswBG0Ra5jg%3D%3D%2C1622382460","url":"https://www.udemy.com/course/cpp-data-structures-algorithms-levelup-prateek-narang/","filter":"learn"},' + 
'{"title":"Machine Learning A-Z (Python & R in Data Science Course)","image":"https://img-c.udemycdn.com/course/480x270/950390_270f_3.jpg?…oBvB~LRiocBywARNDPINvEvgg__&Key-Pair-Id=APKAITJV77WS5ZT7262A","url":"https://www.udemy.com/course/machinelearning/","filter":"learn"},' + 
'{"title":"Deep Learning and Computer Vision A-Z: OpenCV, SSD & GANs","image":"https://img-b.udemycdn.com/course/480x270/1357844_25b2.jpg?secure=9V4_Wev18AoXCM4kv7mIJQ%3D%3D%2C1622382460","url":"https://www.udemy.com/course/computer-vision-a-z/","filter":"learn"}]}';

// {"title":"","image":"","url":"","filter":""}


var response = JSON.parse(targetUrls);

for(let i = 0; i < response.targets.length; i++){

  var cardImg = document.createElement('img');
    cardImg.setAttribute('class', 'img card-img-top');
    cardImg.setAttribute('src', response.targets[i].image)
    
    var cardTitle = document.createElement('h4');
    cardTitle.textContent = response.targets[i].title;
    cardTitle.setAttribute('class', 's-title card-title'); 
    
    var cardUrl = document.createElement('a');
    cardUrl.setAttribute('class', 'card-ref');
    cardUrl.setAttribute('href', response.targets[i].url);
    cardUrl.appendChild(cardImg);
    cardUrl.appendChild(cardTitle);
    
    var cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'card-body');
    cardDiv.appendChild(cardUrl);
    
    var mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'shadow-lg rounded card card-block border-light portfolio-thumbnail col-lg-4 col-md-6 all ' + response.targets[i].filter);
    mainDiv.setAttribute('style', 'width: 18rem; height: 16rem;');
    mainDiv.appendChild(cardDiv);
    mainDiv.id = "cardResearch" + i;
    
    var currentDiv = document.getElementById("cards"); 
    currentDiv.appendChild(mainDiv);

};