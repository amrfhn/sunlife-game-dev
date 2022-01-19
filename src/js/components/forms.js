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
        },
        generalSubmitError: "",
      },
      components: {
        ValidationProvider,
        ValidationObserver,
      },
      mounted: function () {
        //for local test
        // var userData = new Array();
        // var loginInfo = new Object();

        // loginInfo = {
        //   id: "123456787654",
        //   name: "Amir Farhan",
        //   email: "amir@gmail.com",
        //   status: "authorized from facebook",
        // };

        // userData.push(loginInfo);
        // sessionStorage.setItem("fbUserData", JSON.stringify(userData));
        /*************/

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
        async onSubmit() {
          this.generalSubmitError = "";
          try {
            const response = await $.ajax({
              method: "POST",
              url: process.env.API_BASEURL + "/register",
              // headers: {
              //   "g-recaptcha-response": this.recaptchaResponse,
              // },
              contentType: "application/json",
              data: JSON.stringify(this.formData),
            }).promise();
            console.log(response);
            if (!response.success && response.data.email[0] == "The email has already been taken.") {
              var el = document.createElement("small");
              el.classList.add('error-message')
              el.appendChild(document.createTextNode("The email has already been taken."));
              document.getElementById('emailregistered-error').appendChild(el);
              return;
            }
          } catch (e) {
            this.generalSubmitError =
              "An error has occured while trying to submit the form. Please try again later.";
          } finally {
            if(response.success) {
              window.location.href = "/game.html";
            }
            // console.log(response);
          }
        },
      },
    });
  }
});
