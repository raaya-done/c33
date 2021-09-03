var bg , bgimg;
var snowfall , snowimg ,snowgroup
var human , humanimg

function preload() {
  
  bgimg=loadImage("snow1.jpg")
  humanimg = loadImage("boy-removebg-preview.png");
  snowimg = loadImage("snow4.webp")
}


function setup() {
  createCanvas(2000,2000);
 bg = createSprite(400,200,800,800);
 bg.addImage(bgimg);
 bg.scale= 2;

 human= createSprite(200,300,50,50);
 human.addImage(humanimg);
 human.scale= 0.3;

 snowgroup= new Group();
  

}

function draw() {
  background(255,255,255);  

if(keyDown(RIGHT_ARROW)){
  human.x=human.x+5;
}

if(keyDown(LEFT_ARROW)){
  human.x=human.x-5;
}




  drawSprites();

  if ( frameCount%50 === 0){
    var snow = createSprite(200,-50)
    snow.addImage(snowimg);
    snow.scale = 0.1;
    snow.velocityY = 2;
    snow.lifetime = 600
    snow.x = Math.round(random(100 , 500));
    snowgroup.add(snow);
}
}