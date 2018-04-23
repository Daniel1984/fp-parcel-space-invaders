import 'reset-css';
import './index.scss';
import Game from './actors/game';

const canvas = document.getElementById('space-invaders');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function paintStars(stars) {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffffff';
  ctx.save();

  stars.forEach(({ x, y, size }) => {
    ctx.fillRect(x, y, size, size);
  });

  ctx.restore();
}

function drawShip(x, y, width, color, direction) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x - width, y);
  ctx.lineTo(x, direction === 'up' ? y - width : y + width);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x - width, y);
  ctx.fill();
}

function renderScene({ stars, hero }) {
  paintStars(stars);
  drawShip(hero.x, hero.y, 20, '#ff00ff', 'up');
}

Game(canvas).subscribe(renderScene);
