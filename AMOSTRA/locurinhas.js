let angle = 0;
let angle1 = 0;
let angle2 = 0;
let angle3 = 0;
let angle4 = 0;

let radius = 10;
let radius1 = 40;
let radius2 = 70;
let radius3 = 100;
let radius4 = 130;


function setup() {
  createCanvas(400, 400);
  c=0;
}

function draw() {
  background(0);
  
  let x = width / 2 + radius * cos(angle);
  let y = height/ 2 + radius * sin(angle);
  
  let x1 = width / 2 + radius1 * cos(angle1);
  let y1 = height/ 2 + radius1 * sin(angle1);
  
  let x2 = width / 2 + radius2 * cos(angle2);
  let y2 = height/ 2 + radius2 * sin(angle2);
  
  let x3 = width / 2 + radius3 * cos(angle3);
  let y3 = height/ 2 + radius3 * sin(angle3);
  
  let x4 = width / 2 + radius4 * cos(angle4);
  let y4 = height/ 2 + radius4 * sin(angle4);
  
 
  fill(x,y2,x3);
  stroke(x,y2,x3);
  circle(x, y, 20);
  line(x,y,x1,y1);
  
  fill(x2,y,x1);
  stroke(x2,y,x1);
  circle(x1, y1, 20);
  line(x1,y1,x2,y2);
  
  fill(x3,y1,x2);
  stroke(x3,y1,x2);
  circle(x2, y2, 20);
  line(x2,y2,x3,y3);
  
  fill(x1,y3,x);
  stroke(x1,y3,x);
  circle(x3, y3, 20);
  line(x3,y3,x4,y4);
  
  fill(x2,y2,x4);
  stroke(x2,y2,x4);
  circle(x4, y4, 20);
  
  angle += 0.01;
  angle1 += 0.02; 
  angle2 += 0.03; 
  angle3 += 0.04;
  angle4 += 0.05; 

  c++;

  if(c>=700) { window.location.href = "natal.html"}
}


