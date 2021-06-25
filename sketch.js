const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Juan;
var engine, world;
var Platform1, Platform2, Platform3;
var coin1, coin2, coin3;
var coinImg;
var score;
var Ground = []

function preload(){
  sandy = loadImage("sand.png");
  Spain = loadImage("Spain.png");
  Spain2 = loadAnimation("Spain_left.png");
  Spain_run = loadAnimation("Spain.png");
  coinImg = loadImage("coin.png");
}

function setup() {
  createCanvas(700,500);
  engine = Engine.create();
  world = engine.world;

  S1 = new Sand(100, 200, 600, 100);
  S2 = new Sand(250, 175, 300, 50);
  S3 = new Sand(400, 125, 300, 75);
  S4 = new Sand(600, 100, 300, 75);
  S5 = new Sand(250, 75, 300, 75);
  S6 = new Sand(850, 150, 600, 75);

  
  Juan = createSprite(65, 320, 10, 30);
  Juan.addImage("Spain.png", Spain);
  Juan.addAnimation("SpainRunLeft", Spain2);
  Juan.addAnimation("Spainrun", Spain_run);
 
  wall = createSprite(25, 350, 10, 800);
  Platform1 = createSprite(200, 400, 600, 5);
  Platform2 = createSprite(500, 350, 300, 5);
  Platform3 = createSprite(800, 250, 300, 5);
  Platform4 = createSprite(1200, 200, 300, 5);
  Platform5 = createSprite(500, 150, 300, 5);

  coin1 = createSprite(150, 350, 60, 5);
  coin1.addImage("coin.png", coinImg);
  coin2 = createSprite(450, 300, 30, 5);
  coin2.addImage("coin.png", coinImg);
  coin3 = createSprite(750, 100, 30, 5);
  coin3.addImage("coin.png", coinImg);
  coin4 = createSprite(550, 125, 30, 5);
  coin4.addImage("coin.png", coinImg);

  Ground = [wall, Platform1, Platform2, Platform3, Platform4, Platform5];
  score = 0;

}

function draw() {
  background(175,100,70);  

  wall.visible = false;

  for(var i = 0; i<=5; i++){
    Juan.collide(Ground[i])
    Ground[i].visible = false;
  }

  stroke(25,25,0)
  textSize(28);
  fill(225,225,0);
  text("Coins : "+ score, Juan.x -50, Juan.y -315);



  if(Juan.isTouching(coin1)){
  score = score + 1;
  coin1.lifetime = 1
}

if(Juan.isTouching(coin2)){
  score = score + 1;
  coin2.lifetime = 1
}

if(Juan.isTouching(coin3)){
  score = score + 1;
  coin3.lifetime = 1
}

if(Juan.isTouching(coin4)){
  score = score + 1;
  coin4.lifetime = 1
}

  S1.display();
  S2.display();
  S3.display();
  S4.display();
  S5.display();
  S6.display();

  Juan.collide(wall)
 
  camera.x = Juan.x;
  camera.y = Juan.y - 100;
  Juan.debug = true;


  if(keyWentDown("UP_ARROW")){
    Juan.velocityY = -12;
  }else{
    Juan.velocityY = Juan.velocityY + 0.4
    
  }

  if(keyDown("RIGHT_ARROW")){
    Juan.velocityX = 4;
    Juan.changeAnimation("Spainrun", Spain_run);
  }else{
    Juan.velocityX = 0;
  }

  if(keyDown("LEFT_ARROW")){
    Juan.velocityX = -4;
    Juan.changeAnimation("SpainRunLeft", Spain2);
  }


  drawSprites();
  Engine.update(engine)
}

/*
function keyPressed(){
  if(keyCode==40){
      this.body.velocity.x =4
      }
}*/
