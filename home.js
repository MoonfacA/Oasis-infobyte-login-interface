let logOutBtn = document.getElementById("logOutBtn");
let welcomeUser = document.getElementById("userName");
/*This uses the local storage to retrieve the signup username */
let userName = localStorage.getItem("userName");
/*signup username is then displayed together with the welcome string */
welcomeUser.innerHTML = "Welcome " + userName;
/*Event listener is used to trigger logout>>this loads the index.html/login document*/
logOutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
