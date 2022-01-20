import Vue from "vue";

$(function () {
  if ($("#rewardModal").length) {
    let token = sessionStorage.getItem("game_token");
    const reward = new Vue({
      el: "#rewardModal",
      data: {
        week: {},
        score: [],
      },
      mounted: function () {
        this.getScoreSubmission();
        // $(this.$refs.vuemodal).on("show.bs.modal", this.getScoreSubmission);
      },
      methods: {
        getScoreSubmission() {
          let self = this;
          $.ajax({
            type: "GET",
            url: process.env.API_BASEURL + "/user-score-submission",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            contentType: "application/json",
            data: JSON.stringify({}),
            statusCode: {
              422: function (res) {},
              200: function (res) {
                console.log('res data',res.data)
                self.score = res.data.score[0];
                // this.week = res.data.week;
              },
              500: function (res) {},
            },
          });
        },
      },
    });
  }
});
