const keys = Array.from(document.querySelectorAll('.key'));
const audios = Array.from(document.querySelectorAll('audio'));

window.addEventListener('keydown', function(e) {
    const audio = audios.find(audio => audio.dataset.key === e.keyCode.toString());
    const key = keys.find(key => key.dataset.key === e.keyCode.toString());
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        if (key) {
            key.classList.add('playing');
        }
    }
});

keys.forEach(key => {
    key.addEventListener('click', function() {
        const audio = audios.find(audio => audio.dataset.key === this.dataset.key);
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
        this.classList.add('playing');
    });

    key.addEventListener('transitionend', function(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    });
});
