$(document).ready(function(){
  // init mobile nav
  $('.button-collapse').sideNav();

  // init slider
  $('.slider').slider({full_width: true, height: 160});

  // Read more button events: "What is Neuromodulation?"
  $('.read-more-win-open').click(function() {
    $('.read-more-win-open').hide();
    $('.read-more-win-close').show();
    $('.read-more-win-body').slideToggle("fast", function() {
    });
  });
  $('.read-more-win-close').click(function() {
    $('.read-more-win-close').hide();
    $('.read-more-win-open').show();
    $('.read-more-win-body').slideToggle("fast", function() {
    });
  });

  // Read more button events: "What are Neuromodulation Treatments?"
  $('.read-more-treatments-open').click(function() {
    $('.read-more-treatments-open').hide();
    $('.read-more-treatments-close').show();
    $('.read-more-treatments-body').slideToggle("fast", function() {
    });
  });
  $('.read-more-treatments-close').click(function() {
    $('.read-more-treatments-close').hide();
    $('.read-more-treatments-open').show();
    $('.read-more-treatments-body').slideToggle("fast", function() {
    });
  });

  // Read more button events: "Why UCLA?"
  $('.read-more-why-open').click(function() {
    $('.read-more-why-open').hide();
    $('.read-more-why-close').show();
    $('.read-more-why-body').slideToggle("fast", function() {
    });
  });
  $('.read-more-why-close').click(function() {
    $('.read-more-why-close').hide();
    $('.read-more-why-open').show();
    $('.read-more-why-body').slideToggle("fast", function() {
    });
  });

  // Scroll Nav events
  $(".scroll-link").click(function (){
    var target = $(this).attr('href');
    $(document).scrollTo($(target), 800, {easing: "swing"});
  });
  $(".mobile-link").click(function (){
    $('.button-collapse').sideNav('hide');
  });
});
