function preload()
{bitivi=loadImage('bitivi.png')
 betivi=loadSound('betivi.m4a')}

function setup() {
  createCanvas(800, 800);
  x=20;
  v=3;
  s=0;
}

function draw() {
  background(150,200,250);
  image(bitivi,x,20,100,100)
  text('BEM-TE-VIS:    '+ s,20,30);
  x+=v;
  
  if(x>=width-100||x<=0){v*=-1;betivi.play();s++}
}

function mouseClicked(mouse){v*=-1;betivi.play();s++}