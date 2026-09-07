const Player = {
  current: null,

  play(channel) {
    const video = document.getElementById('player');
    if (!video) return;

    const url = `${Xtream.host}/live/${Xtream.user}/${Xtream.pass}/${channel.stream_id}.m3u8`;
    this.current = channel;

    video.hidden = false;
    video.autoplay = true;
    video.controls = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.preload = 'auto';

    video.onerror = () => {
      console.log('Player error', video.error);
    };

    video.onloadedmetadata = () => {
      video.play().catch(e => console.log('play error', e));
    };

    video.src = url;
    video.load();
  },

  stop() {
    const video = document.getElementById('player');
    if (!video) return;
    video.pause();
    video.removeAttribute('src');
    video.load();
    video.hidden = true;
  },

  fullscreen() {
    const video = document.getElementById('player');
    if (video && video.requestFullscreen) {
      video.requestFullscreen();
    }
  }
};
