import Rx from 'rxjs/Rx';

const SPEED = 40;
const STAR_NUMBER = 250;

export default canvas => (
  Rx.Observable.range(1, STAR_NUMBER)
    .map(() => ({
      x: parseInt(Math.random() * canvas.width),
      y: parseInt(Math.random() * canvas.height),
      size: Math.random() * 3 + 1,
    }))
    .toArray()
    .flatMap((starArray) => (
      Rx.Observable.interval(SPEED)
        .map(() => {
          starArray.forEach((star) => {
            if (star.y >= canvas.height) {
              star.y = 0;
            }

            star.y += star.size;
          });
          return starArray;
        })
    ))
);
