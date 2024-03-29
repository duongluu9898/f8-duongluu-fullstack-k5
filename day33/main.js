var contentEl = document.querySelector(".content");
var content = contentEl.innerText;
var dropdownMenu = document.querySelector(".dropdown-menu");
var nameFile = document.querySelector(".name-file");
var nameInner = nameFile.innerText;
console.log(nameFile);

console.log(contentEl);
console.log(content);
console.log(dropdownMenu);

// toggle
var toggle = document.querySelector(".toggle");
console.log(toggle);
toggle.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdownMenu.classList.toggle("open");
});

document.addEventListener("click", function () {
  dropdownMenu.classList.remove("open");
});

//update content
contentEl.focus();
contentEl.addEventListener("input", function (e) {
  e.stopPropagation();
  var content = this.innerText;
  console.log(this);
});

//new
var buttonNew = document.querySelector(".button-new");
console.log(buttonNew);
buttonNew.addEventListener("click", function () {
  contentEl.innerText = "";
});

// download txt
var blob = new Blob([content]);
var previewURL = URL.createObjectURL(blob);
var buttonTxt = document.querySelector(".button-txt");

buttonTxt.addEventListener("click", function () {
  var content = contentEl.innerHTML;
  var nameInner = nameFile.innerText;

  var a = document.createElement("a");
  a.href = previewURL;
  a.download = `${nameInner}.txt`;
  a.click();
});

//add bold, un, ita, color
var boldBtn = document.querySelector(".bold-btn");
var underlineBtn = document.querySelector(".underline-btn");
var italicBtn = document.querySelector(".italic-btn");
var colorBtn = document.querySelector(".color-btn");
console.log(boldBtn);
console.log(underlineBtn);
console.log(italicBtn);
console.log(colorBtn);

//bold
boldBtn.addEventListener("click", function () {
  boldBtn.classList.toggle("add");
  document.execCommand("bold");
});

//underline
underlineBtn.addEventListener("click", function () {
  underlineBtn.classList.toggle("add");
  document.execCommand("underline");
});

//italic
italicBtn.addEventListener("click", function () {
  italicBtn.classList.toggle("add");
  document.execCommand("italic");
});
