import Vue from "vue";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);

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
  // let token = sessionStorage.getItem("game_token");
  if ($("#gameNavbar").length) {
    const reward = new Vue({
      el: "#gameNavbar",
      data: {
        collection_items: [],
        week_end_date: "",
        week_start_date: "",
        week_name: "",
        day: "",
        hour: "",
        minute: "",
        second: "",
      },
      mounted: function () {
        this.getUserCollection();
        this.calculateTime();
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
          })
            .done(function (res) {
              self.collection_items = res.data.collection["1"];
              self.week_start_date = res.data.week.week_start_date;
              self.week_end_date = res.data.week.week_end_date;
              self.week_name = res.data.week.name;
            })
            .fail(function (e) {
              console.log(e);
            });
        },
        calculateTime() {
          var self = this;
          var startDate = moment(this.week_start_date); //todays date
          var endDate = moment(this.week_end_date); // another date
          var diffTime = endDate.diff(startDate);
          var duration = moment.duration(diffTime, "milliseconds", true);
          var interval = 1000;

          setInterval(function () {
            duration = moment.duration(duration - interval, "milliseconds");
            self.day = duration.days();
            self.hour = duration.hours();
            self.minute = duration.minutes();
            self.second = duration.seconds();
          }, interval);
        },
      },
    });
  }
});
