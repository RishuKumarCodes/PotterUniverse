const audio = new Audio('../Assets/music/potter.mp3');
const musicBox = document.querySelector(".musicbox");
const boxclick = new Audio('../Assets/music/boxclick.mp3');
boxclick.volume = 0.3;
const boximg = document.querySelector(".box");

function toggleMusic() {
  if (audio.paused) {
    audio.play();
    boximg.innerHTML = `<img src="../Assets/image/musicboxopen.png" alt="">`
    musicBox.classList.remove('animate_box');
    document.getElementById('playButton').innerText = 'Pause Music';
  } else {
    boximg.innerHTML = `<img src="../Assets/image/musicboxclosed.png" alt="">`
    audio.pause();
    musicBox.classList.add('animate_box');
  }
}
document.querySelector('.musicbox').addEventListener('click', () => {
  boxclick.play();
  toggleMusic();
});
