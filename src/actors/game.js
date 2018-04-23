import Rx from 'rxjs/Rx';
import StarsActor from './stars';
import HeroActor from './hero';
import EnemiesActor from './enemies';
import HeroShotsActor from './heroShots';

const SPEED = 40;

export default canvas => {
  const heroShip = HeroActor(canvas);

  return Rx.Observable
    .combineLatest(
      StarsActor(canvas),
      heroShip,
      EnemiesActor(canvas),
      HeroShotsActor(canvas, heroShip),
      (stars, hero, enemies, heroShots) => ({ stars, hero, enemies, heroShots }),
    )
    .sample(Rx.Observable.interval(SPEED))
};
