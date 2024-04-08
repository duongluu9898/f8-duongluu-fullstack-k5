const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

const grammar = "#JSGF V1.0;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

recognition.continuous = false;
recognition.lang = "vi-vn";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const btn = document.querySelector(".btn");
const action = document.querySelector(".action");
console.log(btn);
console.log(action);

//add event click btn
btn.onclick = () => {
  recognition.start();
  action.style.display = "block";
  console.log("Sẵn sàng nhận lệnh bằng giọng nói");
};

//result
recognition.onresult = (event) => {
  const text = event.results[0][0].transcript;
  const textValue = text.toLowerCase();

  if (textValue.includes("google")) {
    window.open("https://www.google.com", "_blank");
  } else if (textValue.includes("facebook")) {
    window.open("https://www.facebook.com", "_blank");
  } else if (textValue.includes("youtube")) {
    window.open("https://www.youtube.com", "_blank");
  } else if (textValue.includes("google drive")) {
    window.open("https://www.drive.google.com", "_blank");
  }
};
//end speech

recognition.onspeechend = () => {
  recognition.stop();
  action.style.display = "none";
};
