import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('.video');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', throttle(saveVideoTime, 1000));

function saveVideoTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
