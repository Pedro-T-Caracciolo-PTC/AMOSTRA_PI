let angle = 0;
let radius = 100;
let x = 10;
let xc = 3;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  background(220);
  noStroke();
}

function draw() {
  
   
  let y = height / 2 + sin(angle) * radius;
  
  fill(y/2,xc/2,x/2);
  circle(x, y, 50); 
  circle(y, x, 50);
  
  angle = angle + 2;
  x+=xc;
  if(x>=width||x<=0){xc*=-1;}
}

function mudarPagina() { window.location.href = "pirula.html"}