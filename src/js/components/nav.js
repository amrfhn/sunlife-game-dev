(function () {
  $(".hamburger-menu").on("click", function () {
    $(".bar").toggleClass("animate");
    var mobileNav = $(".mobile-nav");
    mobileNav.toggleClass("hide show");
    $('#overlay-mobileNav').toggleClass("hide show");
  });
})();

$(function () {
  $(".nav-menu ").find("a.active").removeClass("active");
  $(".nav-menu a").each(function () {
    if($(this).attr('href') == location.pathname) {
      $(this).addClass('active');
    }
  });
});
