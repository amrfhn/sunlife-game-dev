$(function () {
  $("#fbLoginBtn").on("click", function () {
    facebookLogin();
    // checkRegisteredUser("45678922323");
  });

  $("#fbLoginRegister").on("click", function () {
    facebookLogin();
  });

  // $("#logoutBtn").on("click", function () {
  //   $("#logoutBtn").hide();
  //   $("#fbLoginBtn").show();
  //   $("#status").empty();
  //   facebookLogout();
  // });

  function facebookLogin() {
    //fb check status whether its login or not from SDK
    FB.getLoginStatus(function (response) {
      console.log(response);
      statusChangeCallback(response);
    });
  }

  // function facebookLogout() {
  //   FB.logout(function (response) {
  //     statusChangeCallback(response);
  //   });
  // }

  function statusChangeCallback(response) {
    if (response.status == "connected") {
      // fethc info
      fetchUserProfile();
    } else {
      // checkRegisteredUser("45678922323");
      facebookLoginByDialog();
    }
  }

  //fetch info from api
  function fetchUserProfile() {
    console.log("Welcome!  Fetching your information.... ");
    FB.api("/me?fields=id,name,email,picture", function (response) {
      // console.log(response);
      // console.log("Successful login for: " + response.name);

      var userData = new Array();
      var loginInfo = new Object();

      loginInfo = {
        id: response.id,
        name: response.name,
        email: response.email,
        profile_image: response.picture.data.url,
        status: "connected",
      };

      userData.push(loginInfo);

      sessionStorage.setItem("fbUserData", JSON.stringify(userData));

      checkRegisteredUser(response.id);
      // checkRegisteredUser("45678922323");
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

  function checkRegisteredUser(facebookID) {
    $.ajax({
      url: process.env.API_BASEURL + "/login",
      dataType: "json",
      data: JSON.stringify({ facebook_id: facebookID }),
      cache: false,
      // crossDomain: true,
      // headers: {
      //   accept: "application/json",
      //   "Access-Control-Allow-Headers": "*",
      // },
      timeout: 30000,
      contentType: "application/json",
      type: "POST",
      statusCode: {
        401: function () {
          window.location.href = "/register.html";
        },
        200: function (res) {
          sessionStorage.setItem("game_token", JSON.stringify(res.data.token));
          sessionStorage.setItem("user_data", JSON.stringify(res.data.user));
          sessionStorage.setItem("week_data", JSON.stringify(res.data.week));
          sessionStorage.setItem("score_data", JSON.stringify(res.data.score));
          window.location.href = "game.html";
        },
        500: function (res) {
          console.log(`error {res}`);
        },
      },
    });
    //   .done(function (response) {
    //     console.log("res", response);
    //     if (response.success) {
    //       window.location.href = "/game.html";
    //     } else {
    //       window.location.href = "/register.html";
    //     }
    //   })
    //   .fail(function (jqXHR, errorThrown, textStatus) {
    //     console.log(jqXHR);
    //   });
  }
});
