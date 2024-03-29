//get element
var list = document.querySelector(".list");
var items = list.querySelectorAll(".item");
console.log(list);
console.log(items);
var dragItem;

items.forEach(function (item) {
  //add ghost
  var dragStart = item.addEventListener("dragstart", function (e) {
    dragItem = e.currentTarget;
    // console.log(dragItem);
    e.currentTarget.classList.add("ghost");
  });

  //drag
  var dragOver = item.addEventListener("dragenter", function (e) {
    e.preventDefault();
    targetEl = e.currentTarget;
    var targetSpace = targetEl.getBoundingClientRect();

    var y = e.clientY;
    var targetTop = targetSpace.top;
    var spaceY = y - targetTop;

    if (spaceY < targetSpace.height) {
      list.insertBefore(dragItem, targetEl);
    } else {
      list.insertBefore(dragItem, targetEl.nextSibling);
    }
  });
});

var addDragend = function (item) {
  item.addEventListener("dragend", dragend);
};

var dragend = function (item) {
  dragItem.classList.remove("ghost");
  var items = document.querySelectorAll(".item");
  //   console.log(items);

  var indexCourse = 1;
  var indexModule = 1;
  items.forEach(function (item) {
    if (item.children[0].innerText.includes("Module")) {
      item.children[0].innerText = `Module ${indexModule} :`;
      indexModule++;
      //   console.log(indexModule);
    } else {
      item.children[0].innerText = `Bài ${indexCourse} :`;
      indexCourse++;
      //   console.log(indexCourse);
    }
  });
};

items.forEach(function (item) {
  addDragend(item);
});

list.addEventListener("mousedown", function (e) {
  if (e.target.className === "list") {
    e.preventDefault();
  }
});
