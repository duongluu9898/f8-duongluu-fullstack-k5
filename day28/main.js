//get carousel
var carousel = document.querySelector(".carousel");
console.log(carousel);

//get carouselImage
var carouselImages = carousel.querySelector(".carousel-images");
console.log(carouselImages);

//get items contain img
var carouselItems = carouselImages.children;
console.log(carouselItems);

//get btn prev
var carouselPrevBtn = carousel.querySelector(".prev");
console.log(carouselPrevBtn);

//get btn next
var carouselNextBtn = carousel.querySelector(".next");
console.log(carouselNextBtn);

// calc width of item in screen
var itemWith = carouselImages.clientWidth;
console.log(itemWith);

//calc total of items
var totalWith = itemWith * carouselItems.length;
console.log(totalWith);

//set index item
var index = 0;

//set index active
var activeIndex;

//assign totalWidth for courouselImages:
//with item 500px; screen: 500px; totalWith: 2000px (in case 4 images)
carouselImages.style.width = `${totalWith}px`;
console.log(carouselImages);

// ADD EVENT WHILE CLICK BTN NEXT
var translateX = 0;
carouselNextBtn.addEventListener("click", function () {
  if (Math.abs(translateX) >= totalWith - itemWith) {
    //when abs of translateX >= totalWith(carouselImages) - itemWidth(1 screen)
    //then stop next slide
    return; //break
  }
  //itemWidth is width of screen
  translateX -= itemWith;
  index++;
  setActiveDot();

  console.log(translateX);
  //translate to left -500px, -1000px, -1500px with screen=500px while click

  carouselImages.style.translate = `${translateX}px`;
  // console.log(carouselImages);
});

//ADD EVENT WHILE CLICK BTN PREV
carouselPrevBtn.addEventListener("click", function () {
  if (Math.abs(translateX) < itemWith) {
    return;
  }
  translateX += itemWith;
  index--;
  setActiveDot();

  console.log(translateX);

  carouselImages.style.translate = `${translateX}px`;
});

//--------------------DOTS------------------------
//get carousel dots
var carouselDots = carousel.querySelector(".carousel-dots");
console.log(carouselDots);

//create dots
for (var i = 0; i < carouselItems.length; i++) {
  var span = document.createElement("span");
  carouselDots.appendChild(span);
  console.log(carouselDots);
}

//ADD EVENT WHILE CLICK DOT
//get list dots
var dots = carouselDots.querySelectorAll("span");
console.log(dots);

//filter list dots and add event
dots.forEach(function (dot, i) {
  dot.addEventListener("click", function () {
    translateX = -1 * i * itemWith;
    carouselImages.style.translate = `${translateX}px`;
    console.log(translateX);
    index = i;
    setActiveDot();
  });
});

//activeDot
function setActiveDot() {
  var activeDot = carouselDots.querySelector(".active");
  if (activeDot) {
    activeDot.classList.remove("active");
  }
  dots[index].classList.add("active");
  activeIndex = index;
  // console.log(index);
}
setActiveDot();

//-----------------DRAG AND DROP IMAGES----------------------
//set start and end position while drag and drop
var startPosition = 0,
  lastPosition = 0;

var handleMove = function (e) {
  if (e.clientX <= startPosition - 200) {
    // console.log(e.clientX);
    carouselImages.style.transition = "translate 0.3s linear";
    document.removeEventListener("mousemove", handleMove);
    translateX -= itemWith;
    lastPosition = translateX;
    index++;
    setActiveDot(); //set dot
    carouselImages.style.translate = `${translateX}px`;
  }

  if (e.clientX >= startPosition + 200) {
    carouselImages.style.transition = "translate 0.3s linear";
    document.removeEventListener("mousemove", handleMove);
    translateX += itemWith;
    lastPosition = translateX;
    index--;
    setActiveDot();
    carouselImages.style.translate = `${translateX}px`;
  }
};

//remove transition while mousedown
document.addEventListener("mousedown", function (e) {
  carouselImages.style.transition = "none";
  startPosition = e.clientX;
  document.addEventListener("mousemove", handleMove);
});

//add transition while mousedown
document.addEventListener("mouseup", function (e) {
  carouselImages.style.transition = "translate 0.3s linear";
  document.removeEventListener("mousemove", handleMove);
});
