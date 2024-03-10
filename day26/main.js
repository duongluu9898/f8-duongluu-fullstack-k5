var btn = document.querySelector(".btn");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".modal-overlay");
console.log(btn);
console.log(modal);

//add class open
btn.addEventListener("click", function () {
  modal.classList.add("open");
});

//remove modal when click overlay
overlay.addEventListener("click", function () {
  modal.classList.remove("open");
});

//toggle sign-in and sign-up
var toggleSignUp = document.querySelector(".toggle-sign-up"); //sign-up
var toggleSignIn = document.querySelector("form-sign-in"); // sign-in
console.log(toggleSignUp);
console.log(toggleSignIn);
toggleSignUp.addEventListener("click", function () {
  toggleSignUp.classList.remove("toggle");
});
