//get element
var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
console.log(progressBar);
console.log(progress);
console.log(progressSpan);

//add event while click progress bar
progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    console.log(offsetX);
    var progressBarWidth = this.clientWidth;
    var rate = (offsetX * 100) / progressBarWidth;
    // console.log(rate);
    progress.style.width = `${rate}%`;
    positionSpace = offsetX;
    offsetWidth = offsetX;
    initialClientX = e.clientX;
    document.removeEventListener("mousemove", handleDrag);
  }
});

//stop propagation while click span
progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    document.addEventListener("mousemove", handleDrag);
    initialClientX = e.clientX;
  }
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
  offsetWidth = positionSpace;
});

var initialClientX = 0;
var offsetWidth = 0;
var positionSpace = 0;
var handleDrag = function (e) {
  var clientX = e.clientX;
  positionSpace = offsetWidth + clientX - initialClientX;
  var progressBarWidth = progressBar.clientWidth;
  var rate = (positionSpace * 100) / progressBarWidth;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  progress.style.width = `${rate}%`;
};

//build audio
var audio = document.querySelector("audio");
console.log(audio.duration);
var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;

var playBtn = document.querySelector(".player .player-action i");
var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

//láng gnhe sư jkiện khi mp3 được tải xong và trìn hduyệt lâys dược thông tin

durationEl.innerText = getTime(audio.duration);
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

//khi ng dùng click vào nút play
playBtn.addEventListener("click", function () {
  console.log(audio);
  //   audio.play();
  //nếu nhạc đang dèung thì phát nhạc, nếu nhạkc đang chjay thì đừung
  if (audio.paused) {
    audio.play();
    this.classList.remove("fa-play");
    this.classList.add("fa-pause");
  } else {
    audio.pause();
    this.classList.remove("fa-pause");
    this.classList.add("fa-play");
  }
});

//khi nhạc đng phát update time
audio.addEventListener("timeupdate", function () {
  currentTimeEl.innerText = getTime(audio.currentTime);

  //tính tỷ lệ phần trăm
  var rate = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${rate}%`;
});
