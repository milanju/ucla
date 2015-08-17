(function($){
  // Slider
  $(function(){
    $('.button-collapse').sideNav();
    $(document).ready(function(){
          $('.slider').slider({full_width: true, height: 160});
    });
  });

  // Banner sentence illness ticker
  /*$(function(){
    var words = [
      "depression",
      "epilepsy",
      "PTSD",
      "depression",
      "Parkinson's Disease",
      "OCD",
      "depression",
      "anxiety disorder",
      "Alzheimers"
      ], i = 0;
    setInterval(function(){
      $('#illness-ticker').fadeOut("slow", function(){
        $(this).html(words[i=(i+1)%words.length]).fadeIn("slow");
      });
    }, 4000);

  });*/

  // Read more button, "What is Neuromodulation?"
  $(function() {
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
  });
    // Read more button, "What are Neuromodulation Treatments?"
    $(function() {
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
    });

    // Read more button, "Why UCLA?"
    $(function() {
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
    });
})(jQuery);

// Scroll Nav
$(document).ready(function (){
  $(".scroll-link").click(function (){
    var target = $(this).attr('href');
    $(document).scrollTo($(target), 800, {easing: "swing"});
  });
  $(".mobile-link").click(function (){
    $('.button-collapse').sideNav('hide');
  });
});
