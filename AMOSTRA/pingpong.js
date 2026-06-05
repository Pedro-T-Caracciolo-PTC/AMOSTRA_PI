function preload()
{ puc = loadSound('Pic.mp3')}

function setup() {
  createCanvas(800, 600);
  y=200;
  x=200;
  cx=7;
  cy=10;
}

function draw() {
  background(0);
  rect(10,mouseY,10,100);
  circle(x,y,30);
  
  if(x>=width){cx*=-1;puc.play()}
  if(y>=height||y<=0){cy*=-1;puc.play()}
  
  x+=cx;
  y+=cy;
  
  if(x<=20&&y>=mouseY&&y<=mouseY+100){cx*=-1;cx+=0.5;cy+=0.5;puc.play()}
  if(x<-100){x=200;y=200;cx*=-1;cx=7;cy=10}
}