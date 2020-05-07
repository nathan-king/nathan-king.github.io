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
     $(".navigation__item").delay(500).css('font-size', '2rem');
    //  $('.navigation__item').css('font-size', '2rem').toggle(100);
    //  $(".navigation__list").toggleClass('.navigation__list--active');
    //  $(".navigation__list").toggleClass('navigation__list--toggled')

    // $('.navigation__list').toggleClass("navigation__list--active");
    // $(this).siblings().toggleClass("navigation__list--active");
    });
});


// toggleClass('active-nav', 8000);
