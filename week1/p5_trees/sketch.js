var theta; 

function setup() {
  createCanvas(1440,900);
  smooth();
}

function draw() {
  background(0);
  noStroke();
  text("Theta = "+theta,50,650);
  theta = map(mouseX,0,width,0,PI/2);
  drawBranches();
}

function drawBranches() {
  stroke(255,50,50, map(mouseX,0,720,20,90));
  translate(width/2, 0);
  rotate(90);
  for (var i = 0; i <2 ; i++){
  	branch(250*i);
  }
  pushMatrix();
	  rotate(90);
	  for (var i = 0; i <2 ; i++){
	  	branch(250*i);
	  }
  popMatrix();
	  branch(50);
	  rotate(360);
	  branch(50);
	  fill(255);
  pushMatrix();
	  rotate(180);
	  translate(600,500);
	  for (var i = 0; i <2 ; i++){
	  	branch(250*i);
	  }
  popMatrix();
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
