import Rx from 'rxjs/Rx';

export default (canvas, SpaceShip) => {
  const playerFiring = Rx.Observable
    .merge(
      Rx.Observable.fromEvent(canvas, 'click'),
      Rx.Observable.fromEvent(document, 'keydown')
        .filter(e => e.keycode === 32)
    )
    .startWith({})
    .sample(Rx.Observable.interval(200))
    .timestamp();

  return Rx.Observable
    .combineLatest(
      playerFiring,
      SpaceShip,
      (shotEvents, spaceShip) => ({ x: spaceShip.x })
    )
    .scan((shotArray, shot) => {
      shotArray.push({
        x: shot.x,
        y: window.innerHeight - 50,
      });
      return shotArray;
    }, []);
};
