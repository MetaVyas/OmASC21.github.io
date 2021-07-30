function setup() {
    createCanvas(500, 500);
    background(255, 255, 255);
 }
 let state = "cir";
 let swch = 0;
  
 function draw() {
    if(swch != 0){
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let opacity = random (120, 180);
    fill(r, g, b, opacity);
    noStroke();
  
    let size = random(5, 35);
    let offSetX = random(-25, 25);
    let offSetY = random(-25, 25);
    if(state == "cir"){
        ellipse(mouseX + offSetX, mouseY + offSetY, size, size);}
    if(state == "sqr"){
        rect(mouseX + offSetX, mouseY + offSetY, size, size);}
    if(state == "tri"){
        triangle(mouseX+offSetX, mouseY+offSetX, mouseX-offSetX, mouseY-offSetY, mouseX, mouseY);}
    fill(0);
    rect(0,0,50,50);
    fill(255);
    textSize(10);
    textAlign(LEFT);
    text("Clear",5,15);
    text("Canvas",5,30)
    }
    else{
        background(0);
        textAlign(CENTER);
        textSize(75);
        fill(random(0,255),random(0,255),random(0,255));
        text("Click to Start!",250,250);
    }
 }
  
 function mouseClicked() {
     if(swch == 0){
         swch = 1;
         background(255);
     }
     if(mouseX<=50&&mouseY<=50){
    background(255, 255, 255);}
    if(state=="cir")
    state = "sqr";
    else if(state=="sqr")
    state = "tri";
    else
    state = "cir";
 }
 