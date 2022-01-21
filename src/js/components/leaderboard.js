import Swiper from "swiper";
import Vue from "vue";

$(function () {
  if ($("#leaderboardEl").length) {
    let token = sessionStorage.getItem("game_token");
    const leaderboard = new Vue({
      el: "#leaderboardEl",
      data: {
        item_1: [
          {
            id: 46,
            user_id: 22,
            item_id: 1,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T14:39:30.000000Z",
            updated_at: "2022-01-19T14:39:30.000000Z",
            user_as: {
              id: 22,
              name: "arash test",
              nric: "923920302032",
              email: "arash@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "019292392932",
              facebook_id: "456789223",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=114934577731551&height=50&width=50&ext=1645194254&hash=AeSu7Bz7RvhvXIsRCb4",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T14:39:30.000000Z",
              updated_at: "2022-01-19T14:39:30.000000Z",
            },
            item_as: {
              id: 1,
              name: "Ong-range ah!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-1.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-1.png",
              description:
                "Mandarin Oranges are considered auspicious during CNY because they are called “Kam” in Cantonese, which is also how “Gold” is pronounced in the dialect –  ironically, not in Mandarin!",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:12.000000Z",
              updated_at: "2022-01-18T03:18:12.000000Z",
            },
          },
          {
            id: 49,
            user_id: 23,
            item_id: 1,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T16:16:06.000000Z",
            updated_at: "2022-01-19T16:16:06.000000Z",
            user_as: {
              id: 23,
              name: "arash test",
              nric: "923920302032",
              email: "user@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "019292392932",
              facebook_id: "456789221",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=114934577731551&height=50&width=50&ext=1645194254&hash=AeSu7Bz7RvhvXIsRCb4",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T16:16:06.000000Z",
              updated_at: "2022-01-19T16:16:06.000000Z",
            },
            item_as: {
              id: 1,
              name: "Ong-range ah!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-1.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-1.png",
              description:
                "Mandarin Oranges are considered auspicious during CNY because they are called “Kam” in Cantonese, which is also how “Gold” is pronounced in the dialect –  ironically, not in Mandarin!",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:12.000000Z",
              updated_at: "2022-01-18T03:18:12.000000Z",
            },
          },
          {
            id: 52,
            user_id: 24,
            item_id: 1,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T17:21:46.000000Z",
            updated_at: "2022-01-19T17:21:46.000000Z",
            user_as: {
              id: 24,
              name: "Amir Farhan",
              nric: "291898193489",
              email: "a@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "9102931329",
              facebook_id: "5382555048440611",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=5382555048440611&height=50&width=50&ext=1645204613&hash=AeSlLn5OL-fYOS7Bc-8",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T17:21:46.000000Z",
              updated_at: "2022-01-19T17:21:46.000000Z",
            },
            item_as: {
              id: 1,
              name: "Ong-range ah!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-1.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-1.png",
              description:
                "Mandarin Oranges are considered auspicious during CNY because they are called “Kam” in Cantonese, which is also how “Gold” is pronounced in the dialect –  ironically, not in Mandarin!",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:12.000000Z",
              updated_at: "2022-01-18T03:18:12.000000Z",
            },
          },
          {
            id: 55,
            user_id: 25,
            item_id: 1,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T17:35:24.000000Z",
            updated_at: "2022-01-19T17:35:24.000000Z",
            user_as: {
              id: 25,
              name: "Arash Suhaimi",
              nric: "901020291822",
              email: "test_done@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "09876543234",
              facebook_id: "5467044053324272",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=5467044053324272&height=50&width=50&ext=1645205682&hash=AeSR0W5YsmyQSnNi7As",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T17:35:24.000000Z",
              updated_at: "2022-01-19T17:35:24.000000Z",
            },
            item_as: {
              id: 1,
              name: "Ong-range ah!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-1.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-1.png",
              description:
                "Mandarin Oranges are considered auspicious during CNY because they are called “Kam” in Cantonese, which is also how “Gold” is pronounced in the dialect –  ironically, not in Mandarin!",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:12.000000Z",
              updated_at: "2022-01-18T03:18:12.000000Z",
            },
          },
          {
            id: 58,
            user_id: 26,
            item_id: 1,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T17:47:34.000000Z",
            updated_at: "2022-01-19T17:47:34.000000Z",
            user_as: {
              id: 26,
              name: "Hafifi Suhaimi",
              nric: "012938476189",
              email: "mail@test.com",
              email_verified_at: null,
              password: null,
              mobile_no: "1234567890",
              facebook_id: "6861184680620158",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=6861184680620158&height=50&width=50&ext=1645206429&hash=AeRjC60lV0Ua7RAxsy0",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T17:47:34.000000Z",
              updated_at: "2022-01-19T17:47:34.000000Z",
            },
            item_as: {
              id: 1,
              name: "Ong-range ah!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-1.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-1.png",
              description:
                "Mandarin Oranges are considered auspicious during CNY because they are called “Kam” in Cantonese, which is also how “Gold” is pronounced in the dialect –  ironically, not in Mandarin!",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:12.000000Z",
              updated_at: "2022-01-18T03:18:12.000000Z",
            },
          },
          {
            id: 61,
            user_id: 27,
            item_id: 1,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T17:49:32.000000Z",
            updated_at: "2022-01-19T17:49:32.000000Z",
            user_as: {
              id: 27,
              name: "Dennis Morgan",
              nric: "888888112222",
              email: "dennis@email.com",
              email_verified_at: null,
              password: null,
              mobile_no: "0129876543",
              facebook_id: "4910380412379683",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=4910380412379683&height=50&width=50&ext=1645206545&hash=AeSoecjHpv9wsbDsuN8",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T17:49:32.000000Z",
              updated_at: "2022-01-19T17:49:32.000000Z",
            },
            item_as: {
              id: 1,
              name: "Ong-range ah!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-1.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-1.png",
              description:
                "Mandarin Oranges are considered auspicious during CNY because they are called “Kam” in Cantonese, which is also how “Gold” is pronounced in the dialect –  ironically, not in Mandarin!",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:12.000000Z",
              updated_at: "2022-01-18T03:18:12.000000Z",
            },
          },
          {
            id: 64,
            user_id: 28,
            item_id: 1,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T18:10:39.000000Z",
            updated_at: "2022-01-19T18:10:39.000000Z",
            user_as: {
              id: 28,
              name: "srinivasan",
              nric: "NJIH67777",
              email: "vasan@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "7878787878",
              facebook_id: "123456",
              profile_image: "image.png",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T18:10:39.000000Z",
              updated_at: "2022-01-19T18:10:39.000000Z",
            },
            item_as: {
              id: 1,
              name: "Ong-range ah!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-1.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-1.png",
              description:
                "Mandarin Oranges are considered auspicious during CNY because they are called “Kam” in Cantonese, which is also how “Gold” is pronounced in the dialect –  ironically, not in Mandarin!",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:12.000000Z",
              updated_at: "2022-01-18T03:18:12.000000Z",
            },
          },
          {
            id: 67,
            user_id: 29,
            item_id: 1,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T18:14:14.000000Z",
            updated_at: "2022-01-19T18:14:14.000000Z",
            user_as: {
              id: 29,
              name: "arash test",
              nric: "923920302032",
              email: "us@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "019292392932",
              facebook_id: "456789225",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=114934577731551&height=50&width=50&ext=1645194254&hash=AeSu7Bz7RvhvXIsRCb4",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T18:14:14.000000Z",
              updated_at: "2022-01-19T18:14:14.000000Z",
            },
            item_as: {
              id: 1,
              name: "Ong-range ah!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-1.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-1.png",
              description:
                "Mandarin Oranges are considered auspicious during CNY because they are called “Kam” in Cantonese, which is also how “Gold” is pronounced in the dialect –  ironically, not in Mandarin!",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:12.000000Z",
              updated_at: "2022-01-18T03:18:12.000000Z",
            },
          },
          {
            id: 70,
            user_id: 30,
            item_id: 1,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T18:19:21.000000Z",
            updated_at: "2022-01-19T18:19:21.000000Z",
            user_as: {
              id: 30,
              name: "srinivasan",
              nric: "NJIH67777",
              email: "vasan123@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "7878787878",
              facebook_id: "1234567890",
              profile_image: "image.png",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T18:19:21.000000Z",
              updated_at: "2022-01-19T18:19:21.000000Z",
            },
            item_as: {
              id: 1,
              name: "Ong-range ah!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-1.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-1.png",
              description:
                "Mandarin Oranges are considered auspicious during CNY because they are called “Kam” in Cantonese, which is also how “Gold” is pronounced in the dialect –  ironically, not in Mandarin!",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:12.000000Z",
              updated_at: "2022-01-18T03:18:12.000000Z",
            },
          },
        ],
        item_2: [
          {
            id: 47,
            user_id: 22,
            item_id: 2,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T14:39:30.000000Z",
            updated_at: "2022-01-19T14:39:30.000000Z",
            user_as: {
              id: 22,
              name: "arash test",
              nric: "923920302032",
              email: "arash@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "019292392932",
              facebook_id: "456789223",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=114934577731551&height=50&width=50&ext=1645194254&hash=AeSu7Bz7RvhvXIsRCb4",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T14:39:30.000000Z",
              updated_at: "2022-01-19T14:39:30.000000Z",
            },
            item_as: {
              id: 2,
              name: "Sweet gao gao!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-2.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-2.png",
              description:
                "Every CNY, the Kitchen God is believed to give the Jade Emperor a verbal report of everything that happens in the household. The Nian Gao, a sweet sticky rice cake, is offered to him to ensure that only sweet words would only come out of his mouth!\r\n",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:46.000000Z",
              updated_at: "2022-01-18T03:18:46.000000Z",
            },
          },
          {
            id: 50,
            user_id: 23,
            item_id: 2,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T16:16:06.000000Z",
            updated_at: "2022-01-19T16:16:06.000000Z",
            user_as: {
              id: 23,
              name: "arash test",
              nric: "923920302032",
              email: "user@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "019292392932",
              facebook_id: "456789221",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=114934577731551&height=50&width=50&ext=1645194254&hash=AeSu7Bz7RvhvXIsRCb4",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T16:16:06.000000Z",
              updated_at: "2022-01-19T16:16:06.000000Z",
            },
            item_as: {
              id: 2,
              name: "Sweet gao gao!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-2.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-2.png",
              description:
                "Every CNY, the Kitchen God is believed to give the Jade Emperor a verbal report of everything that happens in the household. The Nian Gao, a sweet sticky rice cake, is offered to him to ensure that only sweet words would only come out of his mouth!\r\n",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:46.000000Z",
              updated_at: "2022-01-18T03:18:46.000000Z",
            },
          },
          {
            id: 53,
            user_id: 24,
            item_id: 2,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T17:21:46.000000Z",
            updated_at: "2022-01-19T17:21:46.000000Z",
            user_as: {
              id: 24,
              name: "Amir Farhan",
              nric: "291898193489",
              email: "a@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "9102931329",
              facebook_id: "5382555048440611",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=5382555048440611&height=50&width=50&ext=1645204613&hash=AeSlLn5OL-fYOS7Bc-8",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T17:21:46.000000Z",
              updated_at: "2022-01-19T17:21:46.000000Z",
            },
            item_as: {
              id: 2,
              name: "Sweet gao gao!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-2.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-2.png",
              description:
                "Every CNY, the Kitchen God is believed to give the Jade Emperor a verbal report of everything that happens in the household. The Nian Gao, a sweet sticky rice cake, is offered to him to ensure that only sweet words would only come out of his mouth!\r\n",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:46.000000Z",
              updated_at: "2022-01-18T03:18:46.000000Z",
            },
          },
          {
            id: 56,
            user_id: 25,
            item_id: 2,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T17:35:24.000000Z",
            updated_at: "2022-01-19T17:35:24.000000Z",
            user_as: {
              id: 25,
              name: "Arash Suhaimi",
              nric: "901020291822",
              email: "test_done@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "09876543234",
              facebook_id: "5467044053324272",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=5467044053324272&height=50&width=50&ext=1645205682&hash=AeSR0W5YsmyQSnNi7As",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T17:35:24.000000Z",
              updated_at: "2022-01-19T17:35:24.000000Z",
            },
            item_as: {
              id: 2,
              name: "Sweet gao gao!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-2.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-2.png",
              description:
                "Every CNY, the Kitchen God is believed to give the Jade Emperor a verbal report of everything that happens in the household. The Nian Gao, a sweet sticky rice cake, is offered to him to ensure that only sweet words would only come out of his mouth!\r\n",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:46.000000Z",
              updated_at: "2022-01-18T03:18:46.000000Z",
            },
          },
          {
            id: 59,
            user_id: 26,
            item_id: 2,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T17:47:34.000000Z",
            updated_at: "2022-01-19T17:47:34.000000Z",
            user_as: {
              id: 26,
              name: "Hafifi Suhaimi",
              nric: "012938476189",
              email: "mail@test.com",
              email_verified_at: null,
              password: null,
              mobile_no: "1234567890",
              facebook_id: "6861184680620158",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=6861184680620158&height=50&width=50&ext=1645206429&hash=AeRjC60lV0Ua7RAxsy0",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T17:47:34.000000Z",
              updated_at: "2022-01-19T17:47:34.000000Z",
            },
            item_as: {
              id: 2,
              name: "Sweet gao gao!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-2.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-2.png",
              description:
                "Every CNY, the Kitchen God is believed to give the Jade Emperor a verbal report of everything that happens in the household. The Nian Gao, a sweet sticky rice cake, is offered to him to ensure that only sweet words would only come out of his mouth!\r\n",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:46.000000Z",
              updated_at: "2022-01-18T03:18:46.000000Z",
            },
          },
          {
            id: 62,
            user_id: 27,
            item_id: 2,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T17:49:32.000000Z",
            updated_at: "2022-01-19T17:49:32.000000Z",
            user_as: {
              id: 27,
              name: "Dennis Morgan",
              nric: "888888112222",
              email: "dennis@email.com",
              email_verified_at: null,
              password: null,
              mobile_no: "0129876543",
              facebook_id: "4910380412379683",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=4910380412379683&height=50&width=50&ext=1645206545&hash=AeSoecjHpv9wsbDsuN8",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T17:49:32.000000Z",
              updated_at: "2022-01-19T17:49:32.000000Z",
            },
            item_as: {
              id: 2,
              name: "Sweet gao gao!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-2.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-2.png",
              description:
                "Every CNY, the Kitchen God is believed to give the Jade Emperor a verbal report of everything that happens in the household. The Nian Gao, a sweet sticky rice cake, is offered to him to ensure that only sweet words would only come out of his mouth!\r\n",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:46.000000Z",
              updated_at: "2022-01-18T03:18:46.000000Z",
            },
          },
          {
            id: 65,
            user_id: 28,
            item_id: 2,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T18:10:39.000000Z",
            updated_at: "2022-01-19T18:10:39.000000Z",
            user_as: {
              id: 28,
              name: "srinivasan",
              nric: "NJIH67777",
              email: "vasan@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "7878787878",
              facebook_id: "123456",
              profile_image: "image.png",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T18:10:39.000000Z",
              updated_at: "2022-01-19T18:10:39.000000Z",
            },
            item_as: {
              id: 2,
              name: "Sweet gao gao!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-2.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-2.png",
              description:
                "Every CNY, the Kitchen God is believed to give the Jade Emperor a verbal report of everything that happens in the household. The Nian Gao, a sweet sticky rice cake, is offered to him to ensure that only sweet words would only come out of his mouth!\r\n",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:46.000000Z",
              updated_at: "2022-01-18T03:18:46.000000Z",
            },
          },
          {
            id: 68,
            user_id: 29,
            item_id: 2,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T18:14:14.000000Z",
            updated_at: "2022-01-19T18:14:14.000000Z",
            user_as: {
              id: 29,
              name: "arash test",
              nric: "923920302032",
              email: "us@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "019292392932",
              facebook_id: "456789225",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=114934577731551&height=50&width=50&ext=1645194254&hash=AeSu7Bz7RvhvXIsRCb4",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T18:14:14.000000Z",
              updated_at: "2022-01-19T18:14:14.000000Z",
            },
            item_as: {
              id: 2,
              name: "Sweet gao gao!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-2.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-2.png",
              description:
                "Every CNY, the Kitchen God is believed to give the Jade Emperor a verbal report of everything that happens in the household. The Nian Gao, a sweet sticky rice cake, is offered to him to ensure that only sweet words would only come out of his mouth!\r\n",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:46.000000Z",
              updated_at: "2022-01-18T03:18:46.000000Z",
            },
          },
          {
            id: 71,
            user_id: 30,
            item_id: 2,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T18:19:21.000000Z",
            updated_at: "2022-01-19T18:19:21.000000Z",
            user_as: {
              id: 30,
              name: "srinivasan",
              nric: "NJIH67777",
              email: "vasan123@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "7878787878",
              facebook_id: "1234567890",
              profile_image: "image.png",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T18:19:21.000000Z",
              updated_at: "2022-01-19T18:19:21.000000Z",
            },
            item_as: {
              id: 2,
              name: "Sweet gao gao!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-2.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-2.png",
              description:
                "Every CNY, the Kitchen God is believed to give the Jade Emperor a verbal report of everything that happens in the household. The Nian Gao, a sweet sticky rice cake, is offered to him to ensure that only sweet words would only come out of his mouth!\r\n",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:46.000000Z",
              updated_at: "2022-01-18T03:18:46.000000Z",
            },
          },
        ],
        item_3: [
          {
            id: 48,
            user_id: 22,
            item_id: 3,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T14:39:30.000000Z",
            updated_at: "2022-01-19T14:39:30.000000Z",
            user_as: {
              id: 22,
              name: "arash test",
              nric: "923920302032",
              email: "arash@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "019292392932",
              facebook_id: "456789223",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=114934577731551&height=50&width=50&ext=1645194254&hash=AeSu7Bz7RvhvXIsRCb4",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T14:39:30.000000Z",
              updated_at: "2022-01-19T14:39:30.000000Z",
            },
            item_as: {
              id: 3,
              name: "Hap-prawn-ning!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-3.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-3.png",
              description:
                "Prawn dishes are eaten during CNY because the pronunciation of prawns in Cantonese is “Ha”. And the more you eat, the more you’ll go ha ha ha, the more your year will be filled with laughter and happiness! \r\n",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:52.000000Z",
              updated_at: "2022-01-18T03:18:52.000000Z",
            },
          },
          {
            id: 54,
            user_id: 24,
            item_id: 3,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T17:21:46.000000Z",
            updated_at: "2022-01-19T17:21:46.000000Z",
            user_as: {
              id: 24,
              name: "Amir Farhan",
              nric: "291898193489",
              email: "a@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "9102931329",
              facebook_id: "5382555048440611",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=5382555048440611&height=50&width=50&ext=1645204613&hash=AeSlLn5OL-fYOS7Bc-8",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T17:21:46.000000Z",
              updated_at: "2022-01-19T17:21:46.000000Z",
            },
            item_as: {
              id: 3,
              name: "Hap-prawn-ning!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-3.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-3.png",
              description:
                "Prawn dishes are eaten during CNY because the pronunciation of prawns in Cantonese is “Ha”. And the more you eat, the more you’ll go ha ha ha, the more your year will be filled with laughter and happiness! \r\n",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:52.000000Z",
              updated_at: "2022-01-18T03:18:52.000000Z",
            },
          },
          {
            id: 57,
            user_id: 25,
            item_id: 3,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T17:35:24.000000Z",
            updated_at: "2022-01-19T17:35:24.000000Z",
            user_as: {
              id: 25,
              name: "Arash Suhaimi",
              nric: "901020291822",
              email: "test_done@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "09876543234",
              facebook_id: "5467044053324272",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=5467044053324272&height=50&width=50&ext=1645205682&hash=AeSR0W5YsmyQSnNi7As",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T17:35:24.000000Z",
              updated_at: "2022-01-19T17:35:24.000000Z",
            },
            item_as: {
              id: 3,
              name: "Hap-prawn-ning!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-3.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-3.png",
              description:
                "Prawn dishes are eaten during CNY because the pronunciation of prawns in Cantonese is “Ha”. And the more you eat, the more you’ll go ha ha ha, the more your year will be filled with laughter and happiness! \r\n",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:52.000000Z",
              updated_at: "2022-01-18T03:18:52.000000Z",
            },
          },
          {
            id: 60,
            user_id: 26,
            item_id: 3,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T17:47:34.000000Z",
            updated_at: "2022-01-19T17:47:34.000000Z",
            user_as: {
              id: 26,
              name: "Hafifi Suhaimi",
              nric: "012938476189",
              email: "mail@test.com",
              email_verified_at: null,
              password: null,
              mobile_no: "1234567890",
              facebook_id: "6861184680620158",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=6861184680620158&height=50&width=50&ext=1645206429&hash=AeRjC60lV0Ua7RAxsy0",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T17:47:34.000000Z",
              updated_at: "2022-01-19T17:47:34.000000Z",
            },
            item_as: {
              id: 3,
              name: "Hap-prawn-ning!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-3.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-3.png",
              description:
                "Prawn dishes are eaten during CNY because the pronunciation of prawns in Cantonese is “Ha”. And the more you eat, the more you’ll go ha ha ha, the more your year will be filled with laughter and happiness! \r\n",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:52.000000Z",
              updated_at: "2022-01-18T03:18:52.000000Z",
            },
          },
          {
            id: 63,
            user_id: 27,
            item_id: 3,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T17:49:32.000000Z",
            updated_at: "2022-01-19T17:49:32.000000Z",
            user_as: {
              id: 27,
              name: "Dennis Morgan",
              nric: "888888112222",
              email: "dennis@email.com",
              email_verified_at: null,
              password: null,
              mobile_no: "0129876543",
              facebook_id: "4910380412379683",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=4910380412379683&height=50&width=50&ext=1645206545&hash=AeSoecjHpv9wsbDsuN8",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T17:49:32.000000Z",
              updated_at: "2022-01-19T17:49:32.000000Z",
            },
            item_as: {
              id: 3,
              name: "Hap-prawn-ning!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-3.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-3.png",
              description:
                "Prawn dishes are eaten during CNY because the pronunciation of prawns in Cantonese is “Ha”. And the more you eat, the more you’ll go ha ha ha, the more your year will be filled with laughter and happiness! \r\n",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:52.000000Z",
              updated_at: "2022-01-18T03:18:52.000000Z",
            },
          },
          {
            id: 66,
            user_id: 28,
            item_id: 3,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T18:10:39.000000Z",
            updated_at: "2022-01-19T18:10:39.000000Z",
            user_as: {
              id: 28,
              name: "srinivasan",
              nric: "NJIH67777",
              email: "vasan@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "7878787878",
              facebook_id: "123456",
              profile_image: "image.png",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T18:10:39.000000Z",
              updated_at: "2022-01-19T18:10:39.000000Z",
            },
            item_as: {
              id: 3,
              name: "Hap-prawn-ning!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-3.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-3.png",
              description:
                "Prawn dishes are eaten during CNY because the pronunciation of prawns in Cantonese is “Ha”. And the more you eat, the more you’ll go ha ha ha, the more your year will be filled with laughter and happiness! \r\n",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:52.000000Z",
              updated_at: "2022-01-18T03:18:52.000000Z",
            },
          },
          {
            id: 69,
            user_id: 29,
            item_id: 3,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T18:14:14.000000Z",
            updated_at: "2022-01-19T18:14:14.000000Z",
            user_as: {
              id: 29,
              name: "arash test",
              nric: "923920302032",
              email: "us@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "019292392932",
              facebook_id: "456789225",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=114934577731551&height=50&width=50&ext=1645194254&hash=AeSu7Bz7RvhvXIsRCb4",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T18:14:14.000000Z",
              updated_at: "2022-01-19T18:14:14.000000Z",
            },
            item_as: {
              id: 3,
              name: "Hap-prawn-ning!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-3.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-3.png",
              description:
                "Prawn dishes are eaten during CNY because the pronunciation of prawns in Cantonese is “Ha”. And the more you eat, the more you’ll go ha ha ha, the more your year will be filled with laughter and happiness! \r\n",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:52.000000Z",
              updated_at: "2022-01-18T03:18:52.000000Z",
            },
          },
          {
            id: 72,
            user_id: 30,
            item_id: 3,
            score: 0,
            week_id: 1,
            created_at: "2022-01-19T18:19:22.000000Z",
            updated_at: "2022-01-19T18:19:22.000000Z",
            user_as: {
              id: 30,
              name: "srinivasan",
              nric: "NJIH67777",
              email: "vasan123@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "7878787878",
              facebook_id: "1234567890",
              profile_image: "image.png",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T18:19:21.000000Z",
              updated_at: "2022-01-19T18:19:21.000000Z",
            },
            item_as: {
              id: 3,
              name: "Hap-prawn-ning!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-3.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-3.png",
              description:
                "Prawn dishes are eaten during CNY because the pronunciation of prawns in Cantonese is “Ha”. And the more you eat, the more you’ll go ha ha ha, the more your year will be filled with laughter and happiness! \r\n",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:52.000000Z",
              updated_at: "2022-01-18T03:18:52.000000Z",
            },
          },
          {
            id: 51,
            user_id: 23,
            item_id: 3,
            score: 1,
            week_id: 1,
            created_at: "2022-01-19T16:16:06.000000Z",
            updated_at: "2022-01-19T18:21:39.000000Z",
            user_as: {
              id: 23,
              name: "arash test",
              nric: "923920302032",
              email: "user@gmail.com",
              email_verified_at: null,
              password: null,
              mobile_no: "019292392932",
              facebook_id: "456789221",
              profile_image:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=114934577731551&height=50&width=50&ext=1645194254&hash=AeSu7Bz7RvhvXIsRCb4",
              is_agree: 1,
              is_msia_citizen: 1,
              remember_token: null,
              created_at: "2022-01-19T16:16:06.000000Z",
              updated_at: "2022-01-19T16:16:06.000000Z",
            },
            item_as: {
              id: 3,
              name: "Hap-prawn-ning!",
              image:
                "https://sunlifecollectthehuat.com/assets/img/collections/final-scroll-3.png",
              image_thumbnail:
                "https://sunlifecollectthehuat.com/assets/img/scroll-3.png",
              description:
                "Prawn dishes are eaten during CNY because the pronunciation of prawns in Cantonese is “Ha”. And the more you eat, the more you’ll go ha ha ha, the more your year will be filled with laughter and happiness! \r\n",
              week_id: 1,
              status: 1,
              created_at: "2022-01-18T03:18:52.000000Z",
              updated_at: "2022-01-18T03:18:52.000000Z",
            },
          },
        ],
        id: -1,
        name: "",
        week_no: -1,
        week_start_date: "",
        week_end_date: "",
        item_ass: [],
        isMobile: false,
      },
      mounted: function () {
        console.log("leaderboard listing mounted");
        // this.fetchLeaderboard();
      },
      methods: {
        fetchLeaderboard() {
          $.ajax({
            type: "GET",
            url: process.env.API_BASEURL + "/user-leaderboard",
            headers: {
              Authorization: `Bearer ${token.replaceAll('"', "")}`,
            },
            contentType: "application/json",
          })
            .done((res) => {
              this.item_1 = res.data.leaderboard["item-1"];
              this.item_2 = res.data.leaderboard["item-2"];
              this.item_3 = res.data.leaderboard["item-3"];
            })
            .fail(function (res) {
              console.log("error", res);
            });
        },
      },
    });
  }
});

$(function () {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
  const $leaderboardSlidesEl = $("#swiper-leaderboard").find(".swiper-slide");
  const $leaderboardSlidesItemEl = $("#swiper-leaderboard").find(
    ".swiper-leaderboard-item"
  );
  const $leaderboardSlidesWrapper = $("#swiper-leaderboard").find(
    ".swiper-wrapper"
  );

  function initLeaderboardSwiper() {
    if (isMobile) {
      $leaderboardSlidesItemEl.addClass("swiper-slide");
      $leaderboardSlidesWrapper.removeClass("row");
    } else {
      $leaderboardSlidesEl.removeClass("swiper-slide");
      $leaderboardSlidesWrapper.addClass("row");
    }
  }
  // $(window).on("resize", initLeaderboardSwiper);
  initLeaderboardSwiper();

  $("#leader-collapsible").on("show.bs.collapse", function () {
    console.log("Show");
    setTimeout(function () {
      leaderSwiper = new Swiper("#swiper-leaderboard", {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: false,
        navigation: {
          nextEl:
            ".collections-carousel-controls.carousel-controls .swiper-button-next",
          prevEl:
            ".collections-carousel-controls.carousel-controls .swiper-button-prev",
        },
      });
    }, 500);
  });
});

// $('#leader-collapsible').on('hidden.bs.collapse', function() {
//   console.log("leaderboard hidden")
//   swiper.destroy()
// })
