const bars = document.querySelectorAll(".x");

// Analyser Node Setup
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
analyser.connect(audioContext.destination);

const source = audioContext.createMediaElementSource(audioPlayer);
source.connect(analyser);

// Connect the analyser to the audio source

analyser.connect(audioContext.destination);

audioPlayer.addEventListener("canplay", () => {
  audioPlayer.pause();
  visualize();
});

function visualize() {
  analyser.getByteFrequencyData(dataArray);

  for (let i = 0; i < bars.length; i++) {
    const bar = bars[i];
    const blocks = bar.querySelectorAll(".y");
    const startIndex = i * (bufferLength / bars.length);
    let sum = 0;

    for (let j = startIndex; j < startIndex + bufferLength / bars.length; j++) {
      sum += dataArray[j];
    }

    const average = sum / (bufferLength / bars.length);
    const opacity = (average / 255) * 100;

    blocks.forEach((block, index) => {
      block.style.opacity = index * 25 <= opacity ? "100%" : "0%";
    });
  }

  requestAnimationFrame(visualize);
}
