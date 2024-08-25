
window.addEventListener("load", () => {
    const audio = document.getElementById("background_music");
    audio.play().catch((error) => {
      console.log("There was a error playing the music");
    });
  });
