let btnOpen = document.querySelector(".btn-open");
let modal = document.querySelector(".modal");
let modalDialog = modal.querySelector(".modal-dialog");
let overlay = modal.querySelector(".overlay");
// console.log(btnOpen);
// console.log(modal);
// console.log(modalDialog);
// console.log(overlay);

var openModal = function () {
  modal.classList.add("open");
};

var closeModal = function () {
  modal.classList.remove("open");
};

btnOpen.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);

let signIn = document.querySelector(".sign-in");
let signUp = document.querySelector(".sign-up");
// console.log(signIn);
// console.log(signUp);
signIn.addEventListener("click", function () {
  this.classList.add("open");
  signUp.classList.remove("open");
});

signUp.addEventListener("click", function () {
  this.classList.add("open");
  signIn.classList.remove("open");
});

let formSignIn = document.querySelector(".form-sign-in");
let formSignUp = document.querySelector(".form-sign-up");
// console.log(formSignIn);
// console.log(formSignUp);
var toggle = function () {
  formSignIn.classList.toggle("open");
  formSignUp.classList.toggle("open");
};

signIn.addEventListener("click", toggle);
signUp.addEventListener("click", toggle);
