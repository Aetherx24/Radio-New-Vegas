document.addEventListener('DOMContentLoaded', () => {
    const audioElement = document.getElementById('radioStream');
    const playButton = document.getElementById('playButton');
    const volumeSlider = document.getElementById('volumeSlider');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');

    // Detailed error handling
    audioElement.addEventListener('error', (e) => {
        const error = e.target.error;
        switch (error.code) {
            case error.MEDIA_ERR_ABORTED:
                console.error("Audio loading aborted");
                break;
            case error.MEDIA_ERR_NETWORK:
                console.error("Network error while loading audio");
                break;
            case error.MEDIA_ERR_DECODE:
                console.error("Audio decoding error");
                break;
            case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                console.error("Audio format not supported");
                break;
            default:
                console.error("Unknown error while loading audio");
        }
    });

    playButton.addEventListener('click', () => {
        if (audioElement.paused) {
            audioElement.play()
                .catch(e => console.error('Play failed:', e));
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

    // Set initial volume
    audioElement.volume = 0.5;
});
