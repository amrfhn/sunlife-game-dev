$(function () {
  let token = sessionStorage.getItem("game_token");
  let isValidToken = false;
  let isLoginPage = false;

  if (token !== null) {
    isValidToken = true;
  }
  if ($('.register-page-container').length || $('.start-page-container').length) {
    isLoginPage = true;
  }

  if (!isValidToken && !isLoginPage) {
    window.location.href = "/index.html";
  }
});
