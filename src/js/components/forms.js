import Vue from "vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
// import _ from 'lodash';
// import VueRecaptcha from 'vue-recaptcha';

$(function () {
  if ($("#register-form").length) {
    const registerForm = new Vue({
      el: "#register-form",
      data: {
        formData: {
          name: "",
          nric: "",
          email: "",
          facebook_id: "",
          mobile_no: "",
          profile_image: "",
          is_agree: 0, //checked
          is_msia_citizen: 0, //checked
          score: 0,
        },
        generalSubmitError: "",
      },
      components: {
        ValidationProvider,
        ValidationObserver,
      },
      mounted: function () {
        var userData = JSON.parse(sessionStorage.getItem("fbUserData"));
        if (userData !== null) {
          this.formData.name = userData[0].name;
          this.formData.email = userData[0].email;
          this.formData.facebook_id = userData[0].id;
          this.formData.profile_image = userData[0].profile_image;
          this.prefillInput();
        }
      },
      methods: {
        prefillInput() {
          if (this.formData.name !== "") {
            $("#nameInputControl").val(this.formData.name);
          }

          if (this.formData.email !== "") {
            $("#emailInputControl").val(this.formData.email);
          }
        },
        onSubmit() {
          this.generalSubmitError = "";
          $.ajax({
            method: "POST",
            url: process.env.API_BASEURL + "/register",
            // headers: {
            //   "g-recaptcha-response": this.recaptchaResponse,
            // },
            contentType: "application/json",
            data: JSON.stringify(this.formData),
            statusCode: {
              422: function (response) {
                if (
                  !response.success &&
                  response.data.email[0] == "The email has already been taken."
                ) {
                  var el = document.createElement("small");
                  el.classList.add("error-message");
                  el.appendChild(
                    document.createTextNode(
                      `The email {response.data.email[0]} has already been taken.`
                    )
                  );
                  document
                    .getElementById("emailregistered-error")
                    .appendChild(el);
                }
              },
              200: function (res) {
                sessionStorage.setItem(
                  "game_token",
                  res.data.token
                );
                sessionStorage.setItem("user_data", JSON.stringify(res.data.user));
                sessionStorage.setItem("week_data", JSON.stringify(res.data.week));
                sessionStorage.setItem("score_data", JSON.stringify(res.data.score));
                // this.$store.commit("updateUserData", {
                //   name: res.data.user.name,
                //   nric: res.data.user.nric,
                //   email: res.data.user.email,
                //   mobile_no: res.data.user.mobile_no,
                //   facebook_id: res.data.user.facebook_id,
                //   profile_image: res.data.user.profile_image,
                //   is_agree: res.data.user.is_agree,
                //   is_msia_citizen: res.data.user.is_msia_citizen,
                //   id: res.data.user.id,
                // });
                window.location.href = "/game.html";
              },
              500: function (res) {
                this.generalSubmitError =
                  "An error has occured while trying to submit the form. Please try again later.";
                console.log(`error {res}`);
              },
            },
            complete: function (res) {
              console.log('completed');
            },
          });
        },
      },
    });
  }
});
