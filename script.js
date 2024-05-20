// Mp3 player script
const progress = document.querySelector('#progress');
const song = document.querySelector('#song');
const ctrlIcon = document.querySelector('#control');

// Set the value for the slider
song.onloadedmetadata = function() {
  progress.max = song.duration;
  progress.value = song.currentTime;
}

// Function for play and pause
function playPause() {
  if (ctrlIcon.classList.contains("fa-play")) {
    console.log(this.event.target);
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  }
  else {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  }
}

// update the slider value at every half secound

if (song.play) {
  setInterval(() => {
    progress.value = song.currentTime;
  },500)
}

// slider value changed manually

function onchangeSlider() {
  console.log('changed slider');
  song.play();
  song.currentTime = progress.value;
  // Update the play button
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
}
