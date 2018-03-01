// SMOOTH SCROLLING

$(document).ready(function(){

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // STICKY NAVIGATION

  var $nav = $(".navigation");
  var navScrolled = "navigation__scrolled";
  var $win = $(window);

  $win.on("scroll", function () {
    if ($(this).scrollTop() > $win.height()) {
      
      // Add sticky nav
      $nav.addClass(navScrolled);
    } else {
      // remove sticky nav
      $nav.removeClass(navScrolled);
    }
  });
  
  // ANIMATE SKILL BAR

  $win.on("scroll", function (){

    if ($(this).scrollTop() > $win.height() * 0.2) {
      $('.skillbar').each(function(){
        $(this).find('.skillbar__bar').animate({
          width: $(this).attr('data-percent')
        },3000);
      });
    }
  }); 

  // TOGGLE NAV BAR
  $('.navigation__toggle').click(function(e) {
    //  $('.navigation__list').toggleClass('active__list');
     $(".navigation__list").css('height', '100%').slideToggle(500);
     $('.navigation__item').toggle(500);
    //  $('.navigation__item').css('font-size', '2rem').toggle(100);
    //  $(".navigation__list").toggleClass('.navigation__list--active');
    //  $(".navigation__list").toggleClass('navigation__list--toggled')

    // $('.navigation__list').toggleClass("navigation__list--active");
    // $(this).siblings().toggleClass("navigation__list--active");
    });


    // PARTICLES

    particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 700
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "blue"
        },
        "polygon": {
          "nb_sides": 8
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 50,
          "size_min": 0.5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#fff",
        "opacity": 0.2,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": true,
        "attract": {
          "enable": true,
          "rotateX": 1200,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 80,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 300,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 6
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
});


// toggleClass('active-nav', 8000);
