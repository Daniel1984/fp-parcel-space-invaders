import Rx from 'rxjs/Rx';
import StarsActor from './stars';
import HeroActor from './hero';
import EnemiesActor from './enemies';

export default canvas => (
  Rx.Observable
    .combineLatest(
      StarsActor(canvas),
      HeroActor(canvas),
      EnemiesActor(canvas),
      (stars, hero, enemies) => ({ stars, hero, enemies }),
    )
);
