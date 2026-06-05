function setup() {
  createCanvas(800, 800);
  x=width/2;
  y=50;
  c=0;
}

function draw() {
  background(220);
 
  textSize(15);
  fill(0);
  text("QUAL PIRULA VOCÊ ESCOLHE?",width/2-115,50)
  
  fill(255,0,0);
  rect(0,0,50,height);
  
  fill(0,0,255);
  rect(width-50,0,50,height);
  
  fill(200,100,20)
  rect(x,y,60,30);
  
  textSize(12);
  fill(0);
  text("Caixa",x+15,y+20)
  
 if (mouseIsPressed&&
     mouseX>=x&&
     mouseY>=y&&
     mouseX<=x+60&&
     mouseY<=y+30)
   
{x=mouseX-30;y=mouseY-15;c=1}
  
   else{c=0}
  
  if(y+35<=height&&c==0)
    {y+=10}
  
  if(x>=width)
    {window.location.href = "locurinhas.html";
}

if(x<=0)
    {window.location.href = "following.html";
}

if(y>=height+2){x=100;y=100}
}