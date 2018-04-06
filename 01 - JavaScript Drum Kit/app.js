function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // if button with no audio, function is haulted
    audio.currentTime = 0; // allows the audio to restart when clicked while playing
    audio.play();
    key.classList.add('playing'); // adds 'playing' class from css upon keydown
    function removeTransition(){ // function that removes 'playing' class from css upon keyup
        key.classList.remove('playing');
    }
    window.addEventListener('keyup', removeTransition); // listens for keyup and calls removeTransition
}

window.addEventListener('keydown', playSound); // listens for keydown upon window open
