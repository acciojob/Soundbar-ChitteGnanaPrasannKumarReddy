//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');


buttons.forEach(button => {
  button.addEventListener('click', () => {
    stopSounds();
    
    
    const sound = document.createElement('audio');
    sound.src = `sounds/${button.dataset.sound}.mp3`;
    sound.classList.add('playing-audio'); 
    document.body.appendChild(sound); 
    sound.play();
    
    
    sound.addEventListener('ended', () => {
      sound.remove();
    });
  });
});


stopButton.addEventListener('click', stopSounds);

function stopSounds() {
  const sounds = document.querySelectorAll('.playing-audio');
  sounds.forEach(sound => {
    sound.pause();
    sound.currentTime = 0;
    sound.remove(); 
  });
}
