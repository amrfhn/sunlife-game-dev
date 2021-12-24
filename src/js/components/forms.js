import Vue from 'vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import _ from 'lodash';
import VueRecaptcha from 'vue-recaptcha';

$(function() {
    
    const contactForm = new Vue({
        el: '#contact-form',
        data: {
            formData: {
                Subject: '',
                FirstName: '',
                LastName: '',
                Email: '',
                PhoneNumber: '',
                Message: ''
            },
            recaptchaResponse: '',
            generalSubmitError: ''
        },
        components: {
            ValidationProvider,
            ValidationObserver,
            VueRecaptcha
        },
        methods: {
            setRecaptchaResponse(response) {
                this.recaptchaResponse = response;
            },
            resetFormData() {
                this.formData = {
                    Subject: '',
                    FirstName: '',
                    LastName: '',
                    Email: '',
                    PhoneNumber: '',
                    Message: ''
                }
            },
            async onSubmit() {
                this.generalSubmitError = '';

                try {
                    const response = await $.ajax({
                        method: 'POST',
                        url: '/api/leads',
                        headers: {
                            'g-recaptcha-response': this.recaptchaResponse
                        },
                        contentType: 'application/json',
                        data: JSON.stringify(this.formData),
                    }).promise()
                    this.resetFormData()
                    this.$refs.contactForm.reset()
                } catch (e) {
                    this.generalSubmitError = 'An error has occured while trying to submit the form. Please try again later.';
                } finally {
                    this.$refs.reCaptcha.reset()
                }
            }
        }
    })

    const salesEnquiryForm = new Vue({
        el: '#enquiryFormBody',
        data: {
            currStep: 'quote',
            formSwiper: null,
            formData: {
                Material: "",
                Specification: "",
                CoatingOrColour: "",
                Size: "",
                ThicknessTolerance: "",
                WidthTolerance: "",
                MonthlyQuantityRequirement: "",
                EndProduct: "",
                IsExistingCustomer: false,
                Salutation: "",
                FirstName: "",
                LastName: "",
                Company: "",
                Designation: "",
                Email: "",
                Country: "",
                CityAndState: "",
                Phone: "",
                Fax: "",
                Website: "",
                EnquiryMessage: ""
            },
            recaptchaResponse: '',
            generalSubmitError: ''
        },
        components: {
            ValidationProvider,
            ValidationObserver,
            VueRecaptcha
        },
        methods: {
            async setCurrStep(step) {
                const self = this;
                if (this.currStep === 'quote') {
                    const isFirstFormValid = await self.$refs.firstForm.validate()
                    this.updateHeight()
                    if (!isFirstFormValid) {
                        return this.scrollToError()
                    };
                }
                $(".modal.show").animate({
                    scrollTop: 0
                }, 400, null, function() {
                    self.currStep = step;
                    self.updateHeight()
                })
            },
            updateHeight() {
                let height = $(this.$el).find(`[data-step="${this.currStep}"]`).outerHeight();
                $(this.$el).find('.form.multipaged').height(height)
            },
            async submitForm() {
                this.generalSubmitError = '';
                const isSecondFormValid = await this.$refs.secondForm.validate()
                if (!isSecondFormValid) {
                    return this.updateHeight()
                }

                try {
                    const response = await $.ajax({
                        method: 'POST',
                        url: '/api/sales-enquiries',
                        headers: {
                            'g-recaptcha-response': this.recaptchaResponse
                        },
                        contentType: 'application/json',
                        data: JSON.stringify(this.formData),
                    }).promise()
                    $('#salesEnquiryModal').modal('hide')
                } catch (e) {
                    this.generalSubmitError = 'An error has occured while trying to submit the form. Please try again later.';
                } finally {
                    this.$refs.reCaptcha.reset()
                }
            },
            scrollToError() {
                var firstError = $(this.$el).find(`[data-step="${this.currStep}"] .is-invalid`).first();
                if (firstError.length) {
                    $(".modal.show").animate({
                        scrollTop: firstError.offset().top
                    })
                }
            },
            setRecaptchaResponse(response) {
                this.recaptchaResponse = response;
            }
        },
        mounted: function () {
            $('#salesEnquiryModal').on('shown.bs.modal', () => {
                this.updateHeight()
            })
            $(this.$el).find('input, textarea').on('click change', _.debounce(this.updateHeight, 400, { trailing: true }))
        }
    })

})