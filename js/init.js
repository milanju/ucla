(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $(document).ready(function(){
          $('.slider').slider({full_width: true, height: 150});
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

// Banner sentence illness ticker
(function(){
  var words = [
    "depression",
    "epilepsy",
    "PTSD",
    "Parkinson's Disease",
    "OCD",
    "anxiety disorder",
    "Alzheimers"
    ], i = 0;
  setInterval(function(){
    $('#illness-ticker').fadeOut(function(){
      $(this).html(words[i=(i+1)%words.length]).fadeIn();
    });
  }, 4000);

})();

// Read more button, "What is Neuromodulation?"
(function(){
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
})();
