$(function () {
  let token = sessionStorage.getItem("game_token");
  let isValidToken = false;
  let isLoginPage = false;

  if (token !== null) {
    isValidToken = true;
  }

  if (
    window.location.pathname == "/index.html" ||
    window.location.pathname == "/register.html"
  ) {
    isLoginPage = true;
  }

  if (!isValidToken && !isLoginPage) {
    window.location.href = "/index.html";
  }
});
