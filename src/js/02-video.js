import { throttle } from 'lodash';

function timeKeeper() {
  player.on(
    'timeupdate',
    throttle(time => {
      localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
    }, 1000)
  );
}
const localStorageTimeSet = player.on('play', timeKeeper);

var localStorageTimeGet = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);
player
  .setCurrentTime(localStorageTimeGet.seconds)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
    }
  });
