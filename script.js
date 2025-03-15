document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('radioStream');
    const playButton = document.getElementById('playButton');
    const volumeSlider = document.getElementById('volumeSlider');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        } else {
            audio.pause();
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        }
    });

    const volumeControl = document.querySelector('input[type="range"]');
    volumeControl.min = 0;
    volumeControl.max = 1;
    volumeControl.step = 0.1;

    volumeControl.addEventListener('input', function() {
        audioElement.volume = this.value;
    });
    // Set initial volume
    audio.volume = volumeSlider.value / 50;
});
