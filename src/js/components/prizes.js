// import Vue from "vue";

// $(function () {
//   let token = sessionStorage.getItem("game_token");
//   if ($("#swiper-prizes").length) {
//     const leaderboard = new Vue({
//       el: "#swiper-prizes",
//       data: {
//         itemArray: [],
//         item_1: "",
//         item_2: "",
//         item_3: "",
//         id: -1,
//         name: "",
//         item_as: [],
//       },
//       mounted: function () {
//         console.log("prizes listing mounted");
//         this.fetchLeaderboard();
//       },
//       methods: {
//         fetchLeaderboard: () => {
//           let self = this;
//           $.ajax({
//             method: "GET",
//             url: process.env.API_BASEURL + "/user-prizes",
//             headers: {
//               Authorization: `Bearer ${token.replaceAll('"', "")}`,
//             },
//           })
//             .done(function (res) {
//               if (res.success) {
//                 let data = res.data;
//                 let arr = []
//                 console.log("Prizes Data", data.prize);

//                 self.item_1 = data.prize["item-1"];
//                 self.item_2 = data.prize["item-2"];
//                 self.item_3 = data.prize["item-3"];
//                 arr.push(data.prize["item-1"])
//                 arr.push(data.prize["item-2"])
//                 arr.push(data.prize["item-3"])
//                 this.itemArray = arr;
                
//                 console.log(arr)
//                 console.log('a',this.itemArray)
//               }
//             })
//             .fail(function (res) {
//               console.log(`error {res}`);
//             });
//         },
//       },
//     });
//   }
// });
