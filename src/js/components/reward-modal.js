import Vue from "vue";

$(function () {
  if ($("#rewardModal").length) {
    const reward = new Vue({
      el: "#rewardModal",
      data: {
        week: {},
        score: {
          name: "",
          image: "",
          description: "",
        },
      },
      mounted: function () {
        console.log("jalan");
        $(this.$refs.vuemodal).on("show.bs.modal", this.getScoreSubmission);
      },
      methods: {
        getScoreSubmission() {
          $.ajax({
            type: "GET",
            url: process.env.API_BASEURL + "/user-score-submission",
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("game_token")}`,
            },
            contentType: "application/json",
            data: JSON.stringify({}),
            statusCode: {
              422: function (res) {},
              200: function (res) {
                this.score.name = res.data.score[0].name;
                this.score.image = res.data.score[0].image;
                this.score.description = res.data.score[0].description;

                this.week = res.data.week;
              },
              500: function (res) {},
            },
          });
        },
      },
    });
  }
});
