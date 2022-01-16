$(function () {
  $("#fbLoginBtn").on("click", function () {
    facebookLogin();
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
      facebookLoginByDialog();
    }
  }

  //fetch info from api
  function fetchUserProfile() {
    console.log("Welcome!  Fetching your information.... ");
    FB.api("/me?fields=id,name,email,picture", function (response) {
      console.log(response);
      console.log("Successful login for: " + response.name);

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
      url: process.env.API_BASEURL + "/users/user-login",
      dataType: "json",
      data: JSON.stringify({ facebook_id: facebookID }),
      cache: false,
      timeout: 30000,
      contentType: "application/json",
      type: "POST",
    }).done(function (response) {
      if (response.status) {
        window.location.href = "/game.html";
      } else {
        window.location.href = "/register.html";
      }
    }).fail(function (jqXHR, errorThrown, textStatus) {
      console.log(jqXHR);
    });
  }
});
