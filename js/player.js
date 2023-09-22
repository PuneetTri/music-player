let audioPlayer = document.getElementById("audio-player");
let progress = document.getElementById("slider");
let playPauseBtn = document.getElementById("play-pause-btn");

audioPlayer.onloadeddata = () => {
  progress.max = audioPlayer.duration;
  progress.value = audioPlayer.currentTime;
};

audioPlayer.addEventListener("progress", () => {
  // Update the max duration based on the buffered end time
  if (audioPlayer.buffered.length > 0) {
    progress.max = audioPlayer.buffered.end(0);
  }
});

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

// Control music using keyboard
document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    playPauseMusic();
  } else if (e.keyCode == 39) {
    audioPlayer.currentTime = audioPlayer.currentTime + 5;
  } else if (e.keyCode == 37) {
    audioPlayer.currentTime = audioPlayer.currentTime - 5;
  }
};
