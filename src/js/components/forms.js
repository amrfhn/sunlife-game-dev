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
        var userData = new Array();
        var loginInfo = new Object();

        loginInfo = {
          id: "123456787654",
          name: "Amir Farhan",
          email: "amir@gmail.com",
          status: "authorized from facebook",
        };

        userData.push(loginInfo);
        sessionStorage.setItem("fbUserData", JSON.stringify(userData));
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
            // this.resetFormData();
            // this.$refs.registerForm.reset();
            console.log('done')
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

// $(function() {

//     const contactForm = new Vue({
//         el: '#contact-form',
//         data: {
//             formData: {
//                 Subject: '',
//                 FirstName: '',
//                 LastName: '',
//                 Email: '',
//                 PhoneNumber: '',
//                 Message: ''
//             },
//             recaptchaResponse: '',
//             generalSubmitError: ''
//         },
//         components: {
//             ValidationProvider,
//             ValidationObserver,
//             VueRecaptcha
//         },
//         methods: {
//             setRecaptchaResponse(response) {
//                 this.recaptchaResponse = response;
//             },
//             resetFormData() {
//                 this.formData = {
//                     Subject: '',
//                     FirstName: '',
//                     LastName: '',
//                     Email: '',
//                     PhoneNumber: '',
//                     Message: ''
//                 }
//             },
//             async onSubmit() {
//                 this.generalSubmitError = '';

//                 try {
//                     const response = await $.ajax({
//                         method: 'POST',
//                         url: '/api/leads',
//                         headers: {
//                             'g-recaptcha-response': this.recaptchaResponse
//                         },
//                         contentType: 'application/json',
//                         data: JSON.stringify(this.formData),
//                     }).promise()
//                     this.resetFormData()
//                     this.$refs.contactForm.reset()
//                 } catch (e) {
//                     this.generalSubmitError = 'An error has occured while trying to submit the form. Please try again later.';
//                 } finally {
//                     this.$refs.reCaptcha.reset()
//                 }
//             }
//         }
//     })

//     const salesEnquiryForm = new Vue({
//         el: '#enquiryFormBody',
//         data: {
//             currStep: 'quote',
//             formSwiper: null,
//             formData: {
//                 Material: "",
//                 Specification: "",
//                 CoatingOrColour: "",
//                 Size: "",
//                 ThicknessTolerance: "",
//                 WidthTolerance: "",
//                 MonthlyQuantityRequirement: "",
//                 EndProduct: "",
//                 IsExistingCustomer: false,
//                 Salutation: "",
//                 FirstName: "",
//                 LastName: "",
//                 Company: "",
//                 Designation: "",
//                 Email: "",
//                 Country: "",
//                 CityAndState: "",
//                 Phone: "",
//                 Fax: "",
//                 Website: "",
//                 EnquiryMessage: ""
//             },
//             recaptchaResponse: '',
//             generalSubmitError: ''
//         },
//         components: {
//             ValidationProvider,
//             ValidationObserver,
//             VueRecaptcha
//         },
//         methods: {
//             async setCurrStep(step) {
//                 const self = this;
//                 if (this.currStep === 'quote') {
//                     const isFirstFormValid = await self.$refs.firstForm.validate()
//                     this.updateHeight()
//                     if (!isFirstFormValid) {
//                         return this.scrollToError()
//                     };
//                 }
//                 $(".modal.show").animate({
//                     scrollTop: 0
//                 }, 400, null, function() {
//                     self.currStep = step;
//                     self.updateHeight()
//                 })
//             },
//             updateHeight() {
//                 let height = $(this.$el).find(`[data-step="${this.currStep}"]`).outerHeight();
//                 $(this.$el).find('.form.multipaged').height(height)
//             },
//             async submitForm() {
//                 this.generalSubmitError = '';
//                 const isSecondFormValid = await this.$refs.secondForm.validate()
//                 if (!isSecondFormValid) {
//                     return this.updateHeight()
//                 }

//                 try {
//                     const response = await $.ajax({
//                         method: 'POST',
//                         url: '/api/sales-enquiries',
//                         headers: {
//                             'g-recaptcha-response': this.recaptchaResponse
//                         },
//                         contentType: 'application/json',
//                         data: JSON.stringify(this.formData),
//                     }).promise()
//                     $('#salesEnquiryModal').modal('hide')
//                 } catch (e) {
//                     this.generalSubmitError = 'An error has occured while trying to submit the form. Please try again later.';
//                 } finally {
//                     this.$refs.reCaptcha.reset()
//                 }
//             },
//             scrollToError() {
//                 var firstError = $(this.$el).find(`[data-step="${this.currStep}"] .is-invalid`).first();
//                 if (firstError.length) {
//                     $(".modal.show").animate({
//                         scrollTop: firstError.offset().top
//                     })
//                 }
//             },
//             setRecaptchaResponse(response) {
//                 this.recaptchaResponse = response;
//             }
//         },
//         mounted: function () {
//             $('#salesEnquiryModal').on('shown.bs.modal', () => {
//                 this.updateHeight()
//             })
//             $(this.$el).find('input, textarea').on('click change', _.debounce(this.updateHeight, 400, { trailing: true }))
//         }
//     })

// })
