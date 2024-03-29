var contentEl = document.querySelector(".content");
var content = contentEl.innerText;
var dropdownMenu = document.querySelector(".dropdown-menu");
var nameFile = document.querySelector(".name-file");
var nameInner = nameFile.innerText;

// toggle
var toggle = document.querySelector(".toggle");
// console.log(toggle);
toggle.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdownMenu.classList.toggle("open");
});

document.addEventListener("click", function () {
  dropdownMenu.classList.remove("open");
});

//update content
contentEl.addEventListener("input", function (e) {
  e.stopPropagation();
  var content = this.innerText;
  //   console.log(this);
});

//new
var buttonNew = document.querySelector(".button-new");
console.log(buttonNew);
buttonNew.addEventListener("click", function () {
  contentEl.innerText = "";
  countLetter.children[0].innerText = "0";
  countWord.children[0].innerText = "0";
});

// download txt
var buttonTxt = document.querySelector(".button-txt");
buttonTxt.addEventListener("click", function () {
  var content = contentEl.innerText;
  var nameInner = nameFile.innerText;

  var blob = new Blob([content]);
  var previewURL = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = previewURL;
  a.download = `${nameInner}.txt`;
  a.click();
});

//download pdf
var buttonPdf = document.querySelector(".button-pdf");
console.log(buttonPdf);

buttonPdf.addEventListener("click", function () {
  nameInner = nameFile.innerText;
  html2pdf().from(contentEl).save(`${nameInner}.pdf`);
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

//change color
colorBtn.addEventListener("click", function () {
  document.execCommand("foreColor", true, this.value);
});

//count
var count = document.querySelector(".count");
var countLetter = count.querySelector(".count-letter");
var countWord = count.querySelector(".count-word");
console.log(count);
console.log(countLetter);
console.log(countWord);
contentEl.addEventListener("input", function (e) {
  e.stopPropagation();
  var content = this.innerText;

  //count letter
  var letterLength = content.trim().length;
  countLetter.children[0].innerText = letterLength;

  //count word
  var words = content.trim().split(" ").length;
  console.log(words);

  if (content === "") {
    countWord.children[0].innerText = "0";
  } else {
    countWord.children[0].innerText = words;
  }
});
