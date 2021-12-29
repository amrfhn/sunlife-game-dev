$(function () {
  $(".hamburger-menu").on("click", function () {
    $(".bar").toggleClass("animate");
    var mobileNav = $(".mobile-nav");
  console.log('teskan')
  mobileNav.toggleClass("hide show");
  });
})();
