const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Juan;
var engine, world;
var Platform1, Platform2, Platform3, Platform4, Platform5;
var coin1, coin2, coin3, coin4, coin5;
var shot
var coinImg;
var score;
var Ground = []
var Gems = []
var Lava = []

function preload(){
  sandy = loadImage("sand.png");
  Spain2 = loadAnimation("Spain_left.png");
  Spain_run = loadAnimation("Spain.png");
  coinImg = loadImage("coins.png");
  Dead = loadImage("Dead.png");
  Exit = loadImage("Exit.jpg");
  Magma = loadImage("Lava.png");
  
}

function setup() {
  createCanvas(700,500);
  engine = Engine.create();
  world = engine.world;

  S1 = new Sand(100, 200, 600,100);
  S2 = new Sand(250, 175, 300, 50);
  S3 = new Sand(400, 125, 300, 75);
  S4 = new Sand(600, 100, 300, 75);
  S5 = new Sand(250,  75, 300, 75);
  S6 = new Sand(900, 150, 600, 75);
  S7 = new Sand(1125,125, 150, 75); 

  Door = createSprite(2250, 200, 25, 100);
  Door.addImage("Exit.jpg", Exit);
  Door.scale = 0.75

  Juan = createSprite(65, 320, 10, 30);
  //Juan = createSprite(2200, 25, 10, 30);
  Juan.addAnimation("SpainRunLeft", Spain2);
  Juan.addAnimation("Spainrun", Spain_run);
 
  wall = createSprite(25, 350, 5, 800);
  Platform1 = createSprite(200, 400, 600, 5);
  Platform2 = createSprite(500, 350, 300, 5);
  Platform3 = createSprite(800, 250, 300, 5);
  Platform4 = createSprite(1200,200, 300, 5);
  Platform5 = createSprite(500, 150, 300, 5);
  Platform6 = createSprite(1800,300, 600, 5);
  Platform7 = createSprite(2250,250, 150, 5);
  
  lava1 = createSprite(-100,500);
  lava2 = createSprite(250, 500);
  lava3 = createSprite(600, 500);
  lava4 = createSprite(950, 500);
  lava5 = createSprite(1300,500);
  lava6 = createSprite(1650,500);
  lava7 = createSprite(2000,500);
  lava8 = createSprite(2350,500);

  coin1 = createSprite(150, 350);
  coin2 = createSprite(450, 300);
  coin3 = createSprite(775, 125);
  coin4 = createSprite(550, 100);
  coin5 = createSprite(2000,150);


  Ground = [wall, Platform1, Platform2, Platform3, Platform4, Platform5, Platform6, Platform7];
  Gems = [coin1, coin2, coin3, coin4, coin5];
  Lava = [lava1, lava2, lava3, lava4, lava5, lava6, lava7, lava8];
  score = 0;
  ArrowGroup = createGroup();
}

function draw() {
  background(175,100,70);  


  for(var i = 0; i<=7; i++){
    Juan.collide(Ground[i])
    //Ground[i].visible = false;
  }

  for(var j = 0; j<=4; j++){
    if(Juan.isTouching(Gems[j])){
      score = score + 1;
      Gems[j].lifetime = 1;}
      Gems[j].addImage("coins.png", coinImg);
  }

  for(var k = 0; k<=7; k++){
    if(Juan.isTouching(Lava[k])){
        Juan.velocityX = 0
        Juan.velocityY = -0.4
        
        background(Dead);
        textSize(30);
        fill("white")
        text("You will be forgotten!", Juan.x -150, Juan.y -75);
        Ground[i].visible = false;
        Gems[j].visible = false;
    }
        Lava[k].addImage("Lava.png", Magma)
        Lava[k].scale = 1.2
  }

  if(Juan.isTouching(Door)&&score >= 4){
    background(Exit)

    textSize(25);
    fill("white")
    text("You Escaped!", Juan.x, Juan.y -100)
    Juan.velocityX = 0;
    Juan.velocityY = -0.4;
    Ground[i].visible = false;
    Gems[j].visible = false;
  }else if(Juan.isTouching(Door)&&score <= 3){
    textSize(15);
    fill("black")
    text("Need more coins!", 2200, 100)
  }

  stroke(25,25,0)
  textSize(28);
  fill(225,225,0);
  text("Coins : "+ score, Juan.x -50, Juan.y -315);

  S1.display();
  S2.display();
  S3.display();
  S4.display();
  S5.display();
  S6.display();
  S7.display();

  camera.x = Juan.x;
  camera.y = Juan.y - 110;
  //Juan.debug = true;
  //lava1.debug = true


  if(keyWentDown("UP_ARROW")&&Juan.y >149){
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


/*function keyPressed(){
  if(keyCode=38){
      Juan.velocityY = -12
      }
}*/
