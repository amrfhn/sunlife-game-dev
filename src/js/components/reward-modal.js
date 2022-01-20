import Vue from "vue";

$(function () {
  if ($("#rewardModal").length) {
    let token = sessionStorage.getItem("game_token");
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
              Authorization: `Bearer ${token.replaceAll('"', "")}`,
            },
            contentType: "application/json",
            data: JSON.stringify({}),
          }).done(function (res) {
            self.score.name = res.data.score[0].name;
            self.score.image = res.data.score[0].image;
            self.score.description = res.data.score[0].description;
          }).fail(function (e){
            console.log(e)
          });;
        },
      },
    });
  }
});
