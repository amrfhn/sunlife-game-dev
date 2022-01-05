$(function () {
  $("#fbLoginBtn").on("click", function () {
    facebookLogin();
  });

  $("#logoutBtn").on("click", function () {
    $("#logoutBtn").hide();
    $("#fbLoginBtn").show();
    $("#status").empty();
    facebookLogout();
  });

  function facebookLogin() {
    //fb check status whether its login or not from SDK
    FB.getLoginStatus(function (response) {
      console.log(response);
      statusChangeCallback(response);
    });
  }

  function facebookLogout() {
    FB.logout(function (response) {
      statusChangeCallback(response);
    });
  }

  function statusChangeCallback(response) {
    if (response.status == "connected") {
      //user is logged in
      $("#fbLoginBtn").hide();
      //show the logout btn
      $("#logoutBtn").show();
      // fethc info
      fetchUserProfile();
    } else {
      facebookLoginByDialog();
    }
  }

  //fetch info from api
  function fetchUserProfile() {
    console.log("Welcome!  Fetching your information.... ");
    FB.api("/me?fields=id,name,email,gender,birthday", function (response) {
      console.log(response);
      console.log("Successful login for: " + response.name);
      var profile = `<h1>Welcome ${response.name}<h1>
      <h2>Your email is ${response.email}</h2>
      <h3>Your Birthday is ${response.birthday}</h3>`;
      $("#status").append(profile);
    });
  }

  // prompt user to login by showing the fb window
  function facebookLoginByDialog() {
    FB.login(
      function (response) {
        statusChangeCallback(response);
      },
      { scope: "public_profile,email" }
    );
  }
});
