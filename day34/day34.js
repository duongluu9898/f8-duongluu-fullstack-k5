let btn = document.querySelector(".btn");
let count = document.querySelector(".count");
let lastSecond;
console.log(btn);
console.log(count.innerText);

btn.addEventListener("click", function () {
  window.location.href = "https://fullstack.edu.vn/";
});

function countNumber() {
  let date = new Date();
  let seconds = date.getSeconds();
  console.log(seconds);
  if (seconds !== lastSecond) {
    lastSecond = seconds;
    count.innerText = count.innerText - 1;

    if (count.innerText <= 0) {
      btn.disabled = "";
      return;
    }
  }
  requestAnimationFrame(countNumber);
}
countNumber();
