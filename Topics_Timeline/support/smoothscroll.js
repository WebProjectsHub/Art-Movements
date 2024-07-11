$(document).ready(function() {
  // Add smooth scrolling to anchor links with id="scroll"
  $("a#scroll").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function() {
        window.location.hash = hash;
      });
    }
  });
});
