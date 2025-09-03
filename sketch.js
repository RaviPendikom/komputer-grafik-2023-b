let x = 300;
let y = 300;
let radius = 100;
let speedX = 8;
let speedY = 5;

function setup() {
  createCanvas(600, 600);
  background(145, 89, 78);
}

function draw() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  circle(x, y, random(100));
  if (x + 50 >= 600 || x - 50 <= 0) {
    speedX *= -1;
  }

  if (y + 50 >= 600 || y - 50 <= 0) {
    speedY *= -1;
  }

  x += speedX;
  y += speedY;
}
