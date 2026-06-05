let  chuva  = [];

function preload(){
  neva=loadImage('BONECODEneva.png');
  mass=loadSound('ChrismasTema.m4a');}

function setup() {
  createCanvas(700, 700);
  
noStroke();
  for(let i = 0; i < 20; i++){
    chuva[i] = [];
    chuva[i][0] = random(width); 
    chuva[i][1] = random(-400,0);
    chuva[i][2] = random(5, 10); 
    
    mass.play();
  }
}

function draw() {
  background(0,10,100);
  
  fill(255);
  rect(0,height,width,-100);
  image(neva,width/2-100,height-200,100,100)
  
  for(i = 0; i < 20; i++){
    
    let tam = map(chuva[i][2], 1, 5, 2, 2); 
    let vel = map(chuva[i][2], 1, 5, 0.5, 1.2); 
   
    fill(200);
    circle(chuva[i][0], chuva[i][1],chuva[i][2]);
    
    chuva[i][1] += vel;
    
    if(chuva[i][1] > height){
      chuva[i][0] = random(width);
      chuva[i][1] = random( -30, -5);
    }
  }
}

function pagE() {window.location.href = "pingpong.html"}
function pagD() {window.location.href = "daspainter.html"}