content = document.getElementById("content");
var thisString =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id culpa voluptatibus tempora iusto atque. Suscipit quidem libero exercitationem unde ducimus.";

var index = 0;
setInterval(function () {
  highlightRedColorWord(index);
  index++;
}, 100);

function highlightRedColorWord(index) {
  var startIndex, endIndex;
  if (index === 0) {
    startIndex = 0;
    endIndex = thisString.indexOf(" ");
  }

  if (thisString[index] === " ") {
    startIndex = index + 1;
    endIndex = thisString.indexOf(" ", startIndex);
  }

  if (typeof startIndex !== "undefined" && typeof endIndex !== "undefined") {
    highlightWord = thisString.slice(startIndex, endIndex);
    content.innerHTML = thisString.replace(
      highlightWord,
      `<span>${highlightWord}</span>`
    );
  }
}
