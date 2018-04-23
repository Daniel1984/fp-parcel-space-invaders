import Rx from 'rxjs/Rx';

const ENEMY_COUNT = 1500;

export default canvas => (
  Rx.Observable.interval(ENEMY_COUNT)
    .scan((enemyArray) => {
      const enemy = {
        x: parseInt(Math.random() * canvas.width),
        y: -30,
      };

      enemyArray.push(enemy);
      return enemyArray;
    }, [])
);
