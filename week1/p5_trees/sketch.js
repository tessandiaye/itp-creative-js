var theta;
var xstart;
var xNoise;
var yNoise; 

function setup() {
  createCanvas(1280,720);
  smooth();
}

function draw() {
  background(0);
  theta = map(mouseX,0,width,0,PI/2);
  translate(width/2, height);
  stroke(150);
  for (var i = 0; i <3 ; i++){
  	branch(225*i);
  }
}

function branch(len) {
  var sw = map(len,2,400,1,5);
  strokeWeight(sw);
  line(0, 0, 0, -len);
  translate(0, -len);
  len *= 0.66;
  if (len > 2) {
    pushMatrix();
    rotate(theta);
    branch(len);
    popMatrix();

    pushMatrix();
    rotate(-theta);
    branch(len);
    popMatrix();
  }
}

function drawPoint(x,y,noiseFactor) {
  pushMatrix();
  translate(x,y);
  rotate(noiseFactor*(radians(90)));
  stroke(255,50);
  strokeWeight(2);
  line(0,0,20,0);
  popMatrix();
}
