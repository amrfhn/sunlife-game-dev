import Vue from "vue";

$(function () {
  let token = sessionStorage.getItem("game_token");
  if ($("#swiper-prizes").length) {
    const leaderboard = new Vue({
      el: "#swiper-prizes",
      data: {
        item_1: "",
        item_2: "",
        item_3: "",
        id: -1,
        name: "",
        item_as: [],
      },
      mounted: function () {
        console.log("prizes listing mounted");
        this.fetchLeaderboard();
        console.log(self.item_1);
        console.log(this.item_1);
      },
      methods: {
        fetchLeaderboard: () => {
          let self = this;
          $.ajax({
            method: "GET",
            url: process.env.API_BASEURL + "/user-prizes",
            headers: {
              Authorization: `Bearer ${token}`,

            },
          })
            .done(function (res) {
              if (res.success) {
                let data = res.data;

                console.log(`Prizes Data -> ${data.price}`);

                self.item_1 = JSON.parse(data.price["item-1"]);
                self.item_2 = data.price["item-2"];
                self.item_3 = data.price["item-3"];
              }
            })
            .fail(function (res) {
              console.log(`error ${res}`);
            });
        },
      },
    });
  }
});
