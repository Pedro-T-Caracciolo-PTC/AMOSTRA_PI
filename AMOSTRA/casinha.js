function setup() {
  
  createCanvas(1000,1000);
  bomba=loadImage('biribinha.png');
  som=loadSound('QUADABOMBA.mp3');
  y=-250;
  c=0;
}

function draw() {
  background(0,100,175);
  noStroke();
  fill(0,100,0)
  circle(width/2,height+100,1000);
  fill(240,220,100);
  rect(width/2-60,height/2,120,120,);
  fill(255,0,0)
  rect(width/2-70,height/2-20,140,20,);
 
   image(bomba,width/2-100,y,200,200);
  if(c==1){y+=4;}
  
  fill(255,255,255);
  if (y>=height/2-100){y=1000;rect(0,0,width,height);}
}

function mouseClicked()
{som.play(); c=1}