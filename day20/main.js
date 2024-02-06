var myString =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, eaque asperiores? Ipsum nam vero nobis suscipit. Doloribus omnis dolor unde minus, eos repellendus necessitatibus sed perferendis, officiis repudiandae dolorem. Quae?";

document.write(myString);

var index = 0;
function highlightText(index) {
  var startIndex, endIndex;

  if ((index = 0)) {
    startIndex = 0;
    endIndex = myString.indexOf("");
    console.log(startIndex);
    console.log(endIndex);
  }
}
highlightText(0);
