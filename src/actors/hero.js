import Rx from 'rxjs/Rx';

export default canvas => {
  const HERO_Y = canvas.height - 30;
  const mouseObserver = Rx.Observable.fromEvent(canvas, 'mousemove');

  return mouseObserver
    .map(e => ({ x: e.clientX, y: HERO_Y })
    .startWith({ x: canvas.width / 2, y: HERO_Y });
};
