//
// A js do-over (& clean-up) of baby's first processing sketch.
//

var triforceSize;
var triforceMove;
var naviSize;
var navi = 5;
var circleX = 0;
var growth = 25;

function setup() {
  createCanvas(525, 650);
  smooth();
}

function draw() {
  background(0);
  if (mouseIsPressed == false) {
    fill(0);
  } else {
    fill(188,220,225);
    rect(0,0,525, 650);
    lightBeam();
  }
  shield();
  if (mouseIsPressed == true) {activate();} 
}

function lightBeam(){
  stroke(255, 234, 0, mouseX*0.4);
  strokeWeight(2);
  for (var i = 50; i < 400; i += 5) {
    line(i, 0, i + i/2, 800);
  }
}

function activate() {
  noFill();
  stroke(255, 80);
  strokeWeight(15);
  ellipse(250, 290, 450+circleX, 450+circleX);
  stroke(255, 120);
  strokeWeight(3);
  ellipse(250, 290, 550+circleX, 550+circleX);
  stroke(255, 90);
  strokeWeight(2);
  ellipse(250, 290, 558+circleX, 558+circleX);
  circleX = circleX + growth;
  if (circleX < 500 || circleX > 600) {
    growth = growth * -1;
  }
  // triforce
  fill(255,255);
  stroke(255,0);
  strokeWeight(0);
  triangle(250, 175-triforceMove, 230-triforceSize, 208-triforceMove, 270+triforceSize, 208-triforceMove);
  triangle(230, 208-triforceMove, 210-triforceSize, 240-triforceMove, 250+triforceSize, 240-triforceMove);
  triangle(270, 208-triforceMove, 250-triforceSize, 240-triforceMove, 290+triforceSize, 240-triforceMove);
  triforceSize = triforceSize +1;
  triforceMove = triforceMove +3;
  }

function shield() { //bezier drawings
  //outline
  beginShape();
  fill(180);
  stroke(0);
  strokeWeight(3);
  vertex(250, 90);
  vertex(45, 180);
  bezierVertex(75, 250, 150, 450, 250, 510);
  bezierVertex(350, 450, 425, 250, 455, 180);
  endShape(CLOSE);
  //shape
  beginShape();
  fill(225);
  strokeWeight(1);
  vertex(250, 100);
  vertex(50, 180);
  bezierVertex(75, 250, 150, 450, 250, 500);
  bezierVertex(350, 450, 425, 250, 450, 180);
  endShape(CLOSE);
  //vertical crease
  beginShape();
  noFill();
  stroke(0, 0, 0, 50);
  strokeWeight(1);
  vertex(250, 100);
  vertex(250, 500);
  endShape();
  //left crease
  beginShape();
  noFill();
  stroke(0, 0, 0, 50);
  strokeWeight(1);
  vertex(100, 205);
  vertex(50, 180);
  endShape();
  //right crease
  beginShape();
  noFill();
  stroke(0, 0, 0, 50);
  strokeWeight(1);
  vertex(400, 205);
  vertex(450, 180);
  endShape();
  //blue plate
  beginShape();
  fill(26, 87, 230);
  strokeWeight(0);
  vertex(225, 150);
  vertex(100, 205);
  vertex(125, 260); //left first indent
  vertex(140, 255); //left first indent
  vertex(153, 282); //left first indent
  vertex(138, 290); //left first indent
  vertex(175, 360); //left second indent
  vertex(200, 340); //left second indent
  vertex(220, 380); //left second indent
  vertex(200, 360); //left second indent
  vertex(200, 400); //left second indent
  vertex(235, 445);
  vertex(245, 435);
  vertex(255, 435);
  vertex(265, 445);
  vertex(300, 400); //right second indent
  vertex(300, 360); //right second indent
  vertex(280, 380); //right second indent
  vertex(300, 340); //right second indent
  vertex(325, 360); //right second indent
  vertex(362, 290); //right first indent
  vertex(347, 282); //right first indent
  vertex(360, 255); //right first indent
  vertex(375, 260); //right first indent
  vertex(400, 205);
  vertex(275, 150);
  vertex(260, 170);
  vertex(240, 170);
  endShape(CLOSE);
  //left swiggle decal
  noFill();
  stroke(180);
  strokeCap(SQUARE);
  strokeWeight(4);
  bezier(130, 220, 170, 260, 170, 200, 210, 200);
  endShape();
  //right swiggle decal
  noFill();
  stroke(180);
  strokeCap(SQUARE);
  strokeWeight(4);
  bezier(290, 200, 330, 200, 330, 260, 370, 220);
  endShape();
  //blue plate shadow
  beginShape();
  stroke(70);
  strokeWeight(3);
  vertex(255, 435);
  vertex(265, 445);
  vertex(300, 400); //right second indent
  vertex(300, 360); //right second indent
  vertex(280, 380); //right second indent
  vertex(300, 340); //right second indent
  vertex(325, 360); //right second indent
  vertex(362, 290); //right first indent
  vertex(347, 282); //right first indent
  vertex(360, 255); //right first indent
  vertex(375, 260); //right first indent
  vertex(400, 205);
  vertex(275, 150);
  vertex(260, 170);
  endShape();
  //bolts
  fill(125, 125, 125, 210);
  ellipse(240, 125, 5, 5);
  ellipse(240, 145, 5, 5);
  ellipse(260, 125, 5, 5);
  ellipse(260, 145, 5, 5);
  ellipse(200, 140, 5, 5);
  ellipse(300, 140, 5, 5);
  ellipse(100, 182, 5, 5);
  ellipse(400, 182, 5, 5);
  ellipse(85, 220, 5, 5);
  ellipse(415, 220, 5, 5);
  ellipse(112, 282, 5, 5);
  ellipse(388, 282, 5, 5);
  ellipse(172, 395, 5, 5);
  ellipse(328, 395, 5, 5);
  ellipse(240, 460, 5, 5);
  ellipse(240, 475, 5, 5);
  ellipse(260, 460, 5, 5);
  ellipse(260, 475, 5, 5);
  //shield shine
  beginShape();
  stroke(0, 0, 0, 0);
  strokeWeight(0);
  fill(255, 255, 255, 50);
  vertex(250, 100); // first povar
  vertex(50, 180); // second povar
  bezierVertex(75, 250, 150, 450, 250, 500);
  endShape(CLOSE);
  //triforce
  beginShape();
  fill(255, 234, 0);
  strokeWeight(0);
  vertex(250, 175);
  vertex(210, 240);
  vertex(290, 240);
  endShape(CLOSE);
  //triforce center triangle
  beginShape();
  fill(26, 87, 230);
  strokeWeight(0);
  vertex(230, 208);
  vertex(250, 240);
  vertex(270, 208);
  endShape(CLOSE);
  //bird crest diamond
  beginShape();
  fill(205, 36, 39);
  strokeWeight(0);
  vertex(250, 270);
  vertex(235, 280);
  vertex(250, 290);
  vertex(265, 280);
  endShape(CLOSE);
  //bird crest body
  beginShape();
  fill(205, 36, 39);
  strokeWeight(0);
  vertex(250, 310);
  vertex(235, 320);
  vertex(250, 370);
  vertex(265, 320);
  endShape(CLOSE);
  //left wing
  beginShape();
  noFill();
  stroke(205, 36, 39);
  strokeCap(SQUARE);
  strokeWeight(8);
  arc(240, 290, 70, 60, HALF_PI, PI);
  endShape();
  //right wing
  beginShape();
  noFill();
  stroke(205, 36, 39);
  strokeCap(SQUARE);
  strokeWeight(8);
  arc(260, 290, 70, 60, 0, HALF_PI);
  endShape();
  //left wings
  beginShape();
  fill(205, 36, 39);
  strokeWeight(0);
  vertex(208, 290);
  vertex(170, 270);
  vertex(170, 290);
  vertex(205, 305);
  vertex(165, 310);
  vertex(175, 330);
  vertex(215, 305);
  vertex(230, 320);
  vertex(210, 335);
  vertex(220, 345);
  vertex(210, 305);
  endShape(CLOSE);
  //right wings
  beginShape();
  fill(205, 36, 39);
  strokeWeight(0);
  vertex(290, 305);
  vertex(280, 345);
  vertex(290, 335);
  vertex(270, 320);
  vertex(285, 305);
  vertex(325, 330);
  vertex(335, 310);
  vertex(295, 305);
  vertex(330, 290);
  vertex(330, 270);
  vertex(292, 290);
  endShape(CLOSE);
  //bottom triangle
  beginShape();
  fill(255, 234, 0);
  stroke(0, 0, 0, 0);
  strokeWeight(0);
  vertex(230, 398);
  vertex(250, 430);
  vertex(270, 398);
  endShape(CLOSE);
  //navi
  fill(255, 90);
  for (var navi = 5; navi < 50; navi +=8) {
    ellipse(mouseX-5, mouseY-5, navi, navi+15);
  }
}

