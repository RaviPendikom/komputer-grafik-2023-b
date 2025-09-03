let x = 300;
let y = 300;
let radius = 100;
let speedX = 2;
let speedY = 5;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  noStroke();
  background(145, 89, 78);
  fill(156, 200, 78);
  circle(x, y, radius);
  if (x + 50 >= 600 || x - 50 <= 0) {
    speedX *= -1;
  }

  if (y + 50 >= 600 || y - 50 <= 0) {
    speedY *= -1;
  }

  x += speedX;
  y += speedY;
}
