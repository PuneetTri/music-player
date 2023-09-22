let progress = document.getElementById("slider");
let audioPlayer = document.getElementById("audio-player");
let playPauseBtn = document.getElementById("play-pause-btn");

audioPlayer.onloadeddata = () => {
  progress.max = audioPlayer.duration;
  progress.value = audioPlayer.currentTime;
};

let playPauseMusic = () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.innerHTML = `<i class="ri-pause-fill"></i>`;
  } else {
    audioPlayer.pause();
    playPauseBtn.innerHTML = `<i class="ri-play-fill"></i>`;
  }
};

playPauseBtn.addEventListener("click", playPauseMusic);

audioPlayer.addEventListener("timeupdate", () => {
  progress.value = audioPlayer.currentTime;
});

progress.addEventListener("change", () => {
  playPauseMusic();
  audioPlayer.currentTime = progress.value;
  playPauseMusic();
});

audioPlayer.addEventListener("ended", () => {
  playPauseBtn.innerHTML = `<i class="ri-play-fill"></i>`;
});
