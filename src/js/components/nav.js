import Vue from 'vue';

(function () {
  $(".hamburger-menu").on("click", function () {
    $(".bar").toggleClass("animate");
    var mobileNav = $(".mobile-nav");
    mobileNav.toggleClass("hide show");
    $("#overlay-mobileNav").toggleClass("hide show");
  });
})();

$(function () {
  $(".nav-menu ").find("a.active").removeClass("active");
  $(".nav-menu a").each(function () {
    if ($(this).attr("href") == location.pathname) {
      $(this).addClass("active");
    }
  });
});

$(function () {
  let token = sessionStorage.getItem("game_token");
  if ($("#gameNavbar").length) {
    const reward = new Vue({
      el: "#gameNavbar",
      data: {
        collection_items: [],
      },
      mounted: function () {
        console.log('think')
        this.getUserCollection();
        // $(this.$refs.vuemodal).on("show.bs.modal", this.getScoreSubmission);
      },
      methods: {
        getUserCollection() {
          let self = this;
          $.ajax({
            type: "GET",
            url: process.env.API_BASEURL + "/user-collection",
            headers: {
              Authorization: `Bearer ${token.replaceAll('"', "")}`,
            },
            contentType: "application/json",
          }).done(function (res) {
            self.collection_items = res.data.collection["1"];
          }).fail(function (e){
            console.log(e)
          });
        },
      },
    });
  }
});
