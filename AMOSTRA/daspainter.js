
function setup() {
  
  createCanvas(1400, 900);
  sR = createSlider(10, 255, 0, 0);
  sR.position(width/3-200,height-30);
  sR.size(width/3);
 
  sG = createSlider(10, 255, 0, 0);
  sG.position(20+width/2,height-30);
  sG.size(width/3);
  
  sB = createSlider(10, 255, 0, 0);
  sB.position(width-220,height-30);
  sB.size(width/3);
  
  S = createSlider(10, 255, 0, 0);
  S.position(width/2,20);
  S.size(width/3);
  
  background(220);
}


function draw() {
  fill(255,0,0)
  circle(10,10,20)
  R=sR.value();
  G=sG.value();
  B=sB.value();
  
  Size=S.value();
  
  noStroke();
  fill(R,G,B)
  
  if(mouseIsPressed&&mouseY<height-50&&mouseY>40)
    {circle(mouseX,mouseY,Size)}
  
}

function mouseClicked(){if(mouseX<=20&&mouseY<=20){background(220)}}


  