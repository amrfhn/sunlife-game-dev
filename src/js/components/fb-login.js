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
    FB.api("/me?fields=id,firstname,lastname,name,email,profile_pic", function (response) {
      console.log(response);
      console.log("Successful login for: " + response.name);
      
      var userData = new Array();
      var loginInfo = new Object();

      loginInfo = {
        id: response.id,
        name:  response.name,
        email: response.email,
        status: 'authorized from facebook'
      }

      userData.push(loginInfo);

      sessionStorage.setItem('fbUserData', JSON.stringify(userData));

      // setTimeout(() => {
      //   window.location.href = '/register.html';
      // }, 250);



      // var profile = `<h1>Welcome ${response.name}<h1>
      // <h2>Your email is ${response.email}</h2>`;
      // $("#status").append(profile);
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
