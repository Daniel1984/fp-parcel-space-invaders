import Rx from 'rxjs/Rx';
import StarsActor from './stars';
import HeroActor from './hero';

export default canvas => (
  Rx.Observable
    .combineLatest(
      StarsActor(canvas),
      HeroActor(canvas),
      (stars, hero) => ({ stars, hero }),
    )
);
