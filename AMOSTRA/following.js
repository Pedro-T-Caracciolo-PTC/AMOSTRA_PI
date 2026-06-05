function setup() {
  createCanvas(400, 800);
  background(220);
  
  Rm=1;Gm=2;Bm=1;
  R=239;G=101;B=102;
}

function draw() {
  
  
  noStroke();
  fill(R,G,B)
  circle(random(mouseX-20,mouseX+20),random(mouseY-20,mouseY+20),100)
  
  if(R<=50||R>=255){Rm*=-1;}
  if(G<=50||G>=255){Gm*=-1;}
  if(B<=50||B>=255){Bm*=-1;}
  
  R+=Rm;
  G+=Gm;
  B+=Bm;
}

function pagE() {window.location.href = "casinha.html"}
function pagD() {window.location.href = "coinCatcher.html"}