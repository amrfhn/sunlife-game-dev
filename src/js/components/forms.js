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
          Fullname: "",
          Email: "",
          IcNumber: "",
          ContactNumber: "",
          IsCheckedTNC: "", //checked
        },
        generalSubmitError: "",
      },
      components: {
        ValidationProvider,
        ValidationObserver,
      },
      mounted: function () {
        console.log("register form page");

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
        console.log(userData);

        this.formData.Fullname = userData[0].name;
        this.formData.Email = userData[0].email;

        console.log(this.formData.Fullname);

        this.prefillInput();
      },
      methods: {
        prefillInput() {
          if (this.formData.Fullname !== "") {
            $("#nameInputControl").val(this.formData.Fullname);
          }

          if (this.formData.Email !== "") {
            $("#emailInputControl").val(this.formData.Email);
          }
        },
        async onSubmit() {
          this.generalSubmitError = "";
          console.log('submit')
          try {
            const response = await $.ajax({
              method: "POST",
              url: "/api/leads",
              // headers: {
              //   "g-recaptcha-response": this.recaptchaResponse,
              // },
              contentType: "application/json",
              data: JSON.stringify(this.formData),
            }).promise();
            console.log('done')
            window.location.href = "/game.html";
          } catch (e) {
            this.generalSubmitError =
              "An error has occured while trying to submit the form. Please try again later.";
          } 
          // finally {
          //   this.$refs.reCaptcha.reset();
          // }
        },
      },
    });
  }
});
