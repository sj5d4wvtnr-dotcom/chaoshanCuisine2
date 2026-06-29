window.bgmAudio = null;

window.initBgm = (vol) => {
    window.bgmAudio = document.getElementById('bgmAudio');
    if (!window.bgmAudio) return;
    window.bgmAudio.volume = vol;
    window.bgmAudio.muted = true;
    window.bgmAudio.play().then(() => console.log("BGM 静音自动播放成功")).catch(e => console.log("自动播放被阻止:", e));
};

window.autoPlayBgm = () => {
    if (!window.bgmAudio) return;
    window.bgmAudio.muted = false;
    window.bgmAudio.play().catch(e => console.log(e));
};

window.toggleBgm = () => {
    if (!window.bgmAudio) return;
    if (window.bgmAudio.paused) {
        window.bgmAudio.muted = false;
        window.bgmAudio.play();
    } else {
        window.bgmAudio.pause();
    }
};

window.setVolume = (vol) => {
    if (window.bgmAudio) window.bgmAudio.volume = vol;
};

document.addEventListener('click', function unmuteOnce() {
    if (window.bgmAudio && window.bgmAudio.muted) {
        window.bgmAudio.muted = false;
        window.bgmAudio.play();
    }
    document.removeEventListener('click', unmuteOnce);
});