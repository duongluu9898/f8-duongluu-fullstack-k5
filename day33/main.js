var contentEl = document.querySelector(".content");
var content = contentEl.innerText;
var dropdownMenu = document.querySelector(".dropdown-menu");

console.log(contentEl);
console.log(content);
console.log(dropdownMenu);

// toggle
var toggle = document.querySelector(".toggle");
console.log(toggle);
toggle.addEventListener("click", function () {
  dropdownMenu.classList.toggle("open");
});

// download txt
var blob = new Blob([content]);
var previewURL = URL.createObjectURL(blob);
console.log(blob);
console.log(previewURL);

var a = document.createElement("a");
a.href = previewURL;
a.download = "content.txt";

var buttonTxt = document.querySelector(".button-txt");
console.log(buttonTxt);

buttonTxt.addEventListener("click", function () {
  a.click();
});
