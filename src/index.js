import 'reset-css';
import './index.scss';
import Game from './actors/game';

const canvas = document.getElementById('space-invaders');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

function drawEnemies(enemies) {
  enemies.forEach((enemy) => {
    enemy.y += 5;
    enemy.x += getRandomInt(-15, 15);
    drawShip(enemy.x, enemy.y, 20, '#00ff00', 'down');
  });
}

function renderScene({ stars, hero, enemies }) {
  paintStars(stars);
  drawShip(hero.x, hero.y, 20, '#ff00ff', 'up');
  drawEnemies(enemies);
}

Game(canvas).subscribe(renderScene);
