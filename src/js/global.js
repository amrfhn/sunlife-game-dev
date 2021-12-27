import $ from "jquery";
import ScrollOut from "scroll-out";

// var passport = require('passport');
// const FacebookStrategy = require('passport-facebook').Strategy;

$(function () {
  // $('#milestone-modal').modal('show')

  $(".animated.text-slide-in").each(function () {
    // const currClientRect = this.getBoundingClientRect();
    // const currLineHeight = parseInt($(this).css('line-height'));
    // const numLines = currClientRect.height / currLineHeight;

    $(this).html($(this).text().replace(/\S+/g, "<n>$&</n>"));
    $(this).find("n").attr("data-scroll", true);
  });

  ScrollOut();

  //   console.log(process.env.CLIENT_ID_FB);

  // $("#direction-modal").modal('show')
});


// passport.use(new FacebookStrategy({
//     clientID: process.env.FACEBOOK_APP_ID,
//     clientSecret: process.env.FACEBOOK_APP_SECRET,
//     callbackURL: "http://localhost:8080/auth/facebook/secrets"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

// app.get('/auth/facebook',
//   passport.authenticate('facebook'));

// app.get('/auth/facebook/secrets',
//   passport.authenticate('facebook', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/game');
//   });

// function statusChangeCallback(response) {
//   // Called with the results from FB.getLoginStatus().
//   console.log("statusChangeCallback");
//   console.log(response); // The current login status of the person.
//   if (response.status === "connected") {
//     // Logged into your webpage and Facebook.
//     testAPI();
//   } else {
//     // Not logged into your webpage or we are unable to tell.
//     document.getElementById("status").innerHTML =
//       "Please log " + "into this webpage.";
//   }
// }

// function checkLoginState() {
//   // Called when a person is finished with the Login Button.
//   FB.getLoginStatus(function (response) {
//     // See the onlogin handler
//     statusChangeCallback(response);
//   });
// }

// window.fbAsyncInit = function () {
//   FB.init({
//     appId: process.env.FACEBOOK_APP_ID,
//     cookie: true, // Enable cookies to allow the server to access the session.
//     xfbml: true, // Parse social plugins on this webpage.
//     version: 'v12.0', // Use this Graph API version for this call.
//   });

//   FB.getLoginStatus(function (response) {
//     // Called after the JS SDK has been initialized.
//     statusChangeCallback(response); // Returns the login status.
//   });
// };

// function testAPI() {
//   // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
//   console.log("Welcome!  Fetching your information.... ");
//   FB.api("/me", function (response) {
//     console.log("Successful login for: " + response.name);
//     document.getElementById("status").innerHTML =
//       "Thanks for logging in, " + response.name + "!";
//   });
// }
