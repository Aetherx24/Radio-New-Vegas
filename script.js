document.addEventListener('DOMContentLoaded', () => {
    const audioElement = document.getElementById('radioStream');
    const playButton = document.getElementById('playButton');
    const volumeSlider = document.getElementById('volumeSlider');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');

    // Add error handling for audio
    audioElement.addEventListener('error', (e) => {
        console.error('Error loading audio:', e);
    });

    playButton.addEventListener('click', () => {
        if (audioElement.paused) {
            audioElement.play();
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        } else {
            audioElement.pause();
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        }
    });

    volumeSlider.min = 0;
    volumeSlider.max = 100;
    volumeSlider.step = 1;
    volumeSlider.value = 50;

    volumeSlider.addEventListener('input', function() {
        audioElement.volume = this.value / 100;
    });
    // Set initial volume at 50%
    audioElement.volume = 0.5;
});
