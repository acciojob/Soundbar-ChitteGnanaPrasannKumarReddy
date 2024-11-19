//your JS code here. If required.

const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');


buttons.forEach(button => {
  button.addEventListener('click', () => {
    stopSounds();
    const sound = new Audio(`sounds/${button.dataset.sound}.mp3`);
    sound.play();
    button.dataset.audio = sound; 
  });
});


stopButton.addEventListener('click', stopSounds);

function stopSounds() {
  buttons.forEach(button => {
    if (button.dataset.audio) {
      button.dataset.audio.pause();
      button.dataset.audio.currentTime = 0;
    }
  });
}
