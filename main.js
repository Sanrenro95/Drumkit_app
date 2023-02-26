const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;// Detener la ejecución de la función
    audio.currentTime = 0; // Empieza desde el comienzo
    audio.play();
    key.classList.add('playing');
}

const removeTransition = (e) => {
    if (e.propertyTime !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitioned', removeTransition));
window.addEventListener('keydown', playSound);
