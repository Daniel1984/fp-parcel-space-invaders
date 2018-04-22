import 'reset-css';
import './index.scss';
import stars from './actors/stars';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

stars(canvas).subscribe(paintStars);

function paintStars(stars) {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffffff';

  stars.forEach(({ x, y, size }) => {
    ctx.fillRect(x, y, size, size);
  });
}
