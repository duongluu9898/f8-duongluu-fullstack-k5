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
    e.currentTarget.classList.add("ghost");
  });

  //drag
  var dragOver = item.addEventListener("dragover", function (e) {
    e.preventDefault();
    targetEl = e.currentTarget;
    var targetSpace = targetEl.getBoundingClientRect();

    var y = e.clientY;
    var targetTop = targetSpace.top;
    var relativey = y - targetTop;

    if (relativey < targetSpace.height / 2) {
      list.insertBefore(dragItem, targetEl);
    } else {
      list.insertBefore(dragItem, targetEl.nextSibling);
    }
  });

  //drop
  var drop = function (e) {
    item.addEventListener("drop", function (e) {
      dragItem.classList.remove("ghost");
      items = document.querySelectorAll(".item");

      var indexCourse = 1;
      var indexModule = 1;
      items.forEach(function (item) {
        if (item.children[0].innerText.includes("Module")) {
          item.children[0].innerText = `Module + ${indexModule} + :`;
          indexModule++;
          console.log(indexModule);
        } else {
          item.children[0].innerText = "Bài" + indexCourse + ":";
          indexCourse++;
          console.log(indexCourse);
        }
      });
    });
  };
});

list.addEventListener("mousedown", function (e) {
  if (e.target.className === "list") {
    e.preventDefault();
  }
});

list.addEventListener("dragend", function (e) {
  dragItem.classList.remove("ghost");
});
