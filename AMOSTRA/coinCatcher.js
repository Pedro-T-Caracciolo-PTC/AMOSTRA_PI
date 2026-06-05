function preload()
{coin=loadSound('coin.m4a')
 labirinto=loadSound('labirinto.m4a')
}

function setup() {
  createCanvas(900, 900);
  moedinha=loadImage('moedinnha.png');
 background(20);
  
  cor=0; s=0; t=1;
  
  c=width; x=200; y=200;
  
  image(moedinha,x,y,100,100)
  labirinto.play();}

function draw(){
  
  noStroke();
  background(20);
  c-=t;
  
    fill(cor,255-cor,255-cor);
    rect(0,height-20,c,height);
    text('PONTUAÇÃO: '+ s,20,30);
  
 image(moedinha,x,y,50,50)
  
   if(c<=0){fill(0);rect(0,0,width,height);fill(255);text('Morreu',width/2,height/2);labirinto.stop()}
}



function mouseClicked(){
   
  if(mouseX > (x - 50)&& 
     mouseX < (x + 50)&& 
     mouseY > (y - 50)&&
     mouseY < (y + 50)&& 
     c>0 ){
            background(20);
            fill(255,0,0);
 
             x= random(0,width-75);
             y= random(0,height-75);
             c=width;
    
             t+=0.2; cor+=5; s++;
            coin.play();}
  
}



