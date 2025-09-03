// let x = random(600);
// let y = random(600);
// let radius = random(300);

function setup() {
  createCanvas(600, 600);
  background(145, 89, 78);
}

function draw() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  circle(random(600), random(600), random(100));
}
