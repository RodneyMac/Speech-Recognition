const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnPlayText = document.getElementById("play-text");
const texto = document.getElementById("texto");

let recongnition = new webkitSpeechRecognition();
recongnition.lang = "es-AR";
recongnition.continuous = true;
recongnition.interimResults = false;

recongnition.onresult = (e) => {
  const results = e.results;
  const frase = results[results.length - 1][0].transcript;
  texto.value += frase;
};

recongnition.onend = (e) => {
  console.log("El micrófono deja de escuchar");
};

recongnition.onerror = (e) => {
  console.log(e.error);
};

btnStart.addEventListener("click", () => {
  recongnition.start();
});

btnStop.addEventListener("click", () => {
  recongnition.abort();
});

btnPlayText.addEventListener("click", () => {
  leerTexto(texto.value);
});

function leerTexto(texto) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = texto;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
