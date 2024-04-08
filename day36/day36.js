//Prefixed properties
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

//grammer
// const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(
//     " | ",
//   )};`;
const grammar = `#JSGF V1.0;`;

//speech recognition
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();

//add grammer
speechRecognitionList.addFromString(grammar, 1);

//plugging grammer into speechRecognition
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "vi-VN";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

//get btn, action
const btn = document.querySelector(".btn");
const action = document.querySelector(".action");
// console.log(btn);
// console.log(action);

//add event click btn
btn.onclick = () => {
  recognition.start();
  console.log("Sẵn sàng nhận lệnh bằng giọng nói");

  //add action
  action.style.display = "block";
};

//Receiving and handling results
recognition.onresult = (event) => {
  const textSpeech = event.results[0][0].transcript.toLowerCase();
  //   diagnostic.textContent = `Result received: ${text}.`;
  //   console.log(`Confidence: ${event.results[0][0].confidence}`);
  console.log(textSpeech);

  //open URL
  if (textSpeech.includes("google")) {
    window.open("https://www.google.com", "_blank");
  } else if (textSpeech.includes("facebook")) {
    window.open("https://www.facebook.com", "_blank");
  } else if (textSpeech.includes("youtube")) {
    window.open("https://www.youtube.com", "_blank");
  } else if (textSpeech.includes("google drive")) {
    window.open("https://www.drive.google.com", "_blank");
  }
};
//end speech

recognition.onspeechend = () => {
  recognition.stop();
  action.style.display = "none";
};

//Handling errors and unrecognized speech
recognition.onnomatch = (event) => {
  diagnostic.textContent = "I didn't recognize that color.";
};

recognition.onerror = (event) => {
  diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
};
