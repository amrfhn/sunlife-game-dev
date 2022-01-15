$(function() {
  console.log("$(document).offset().top", $('document').scrollTop())

  $(window).on('scroll', function() {
    $(this).scrollTop()
  })
})