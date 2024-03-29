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
toggle.addEventListener("click", function () {
  dropdownMenu.classList.toggle("open");
});

//update content
contentEl.focus();
contentEl.addEventListener("input", function (e) {
  e.stopPropagation();
  var content = this.innerText;
  console.log(this);
});

//new
// var buttonNew = document.querySelector(".button-new");
// console.log(buttonNew);
// buttonNew.addEventListener("click", function () {
//   content.innerText = "";
// });

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
