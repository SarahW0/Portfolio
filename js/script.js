$(document).ready(function() {
  /**
   * Hide the navigation menu by removing nav_show class when navigation links are clicked
   */
  $(".navigation-link").click(function(e) {
    $(".navbar").removeClass("nav-show");
  });

  /**
   * Toggle to show or hide navigation bar by clicking hamburger nav menu
   */
  $("#mobile-menu").click(function(e) {
    $(".navbar").toggleClass("nav-show");
  });
});
