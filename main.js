let loginEmailInput = document.getElementById("loginEmail");
let loginPasswordInput = document.getElementById("loginPassword");
let loginBtn = document.getElementById("loginBtn");
let signupAnchor = document.getElementById("signupAnchor");

let users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}
/*This is the signin function*/
function signIn() {
  let loginEmail = loginEmailInput.value;
  let loginPassword = loginPasswordInput.value;
/*here the loin credentials are defined as the user input values*/
  if (loginEmailInput.value === "" || loginPasswordInput.value === "") {
    swal({
      text: "Please fill in all fields",
    });/*This alerts the user when theres blanks on the input*/
    return;
  }

  if (isCorrectEmailAndPassword(loginEmail, loginPassword)) {
    window.location.href = "home.html";/*correct email and password opens home document: logi in sucess*/
  } else {
    swal({
      text: "Incorrect email or password",
    });
  }
}
/*This is the signin function together with password verification to check for correct password matching email*/
function isCorrectEmailAndPassword(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      localStorage.setItem("userName", users[i].name);
      return true;
    }
  }
  return false;
}

loginBtn.addEventListener("click", function () {
  signIn();
});
/*Event listener is used on signup button to open the signup.html document*/
signupAnchor.addEventListener("click", function () {
  window.location.href = "signup.html";
});
