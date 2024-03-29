var contentEl = document.querySelector(".content");
var content = contentEl.innerText;
console.log(contentEl);
console.log(content);

var blob = new Blob([content]);
var previewURL = URL.createObjectURL(blob);
console.log(blob);
console.log(previewURL);
