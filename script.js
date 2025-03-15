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

    volumeSlider.addEventListener('input', (e) => {
        audio.volume = e.target.value / 100;
    });

    // Set initial volume
    audio.volume = volumeSlider.value / 50;
});
