const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Mario;
var engine, world;
var Platform1, Platform2, Platform3;
var Ground = []


function preload(){
  sandy = loadImage("sand.png");
  Spain = loadImage("Spain.png");
  Spain2 = loadAnimation("Spain_left.png");
  Spain_run = loadAnimation("Spain.png");
}

function setup() {
  createCanvas(700,500);
  engine = Engine.create();
  world = engine.world;

  Ground = [Platform1, Platform2, Platform3];

  S1 = new Sand(100, 200, 600, 100);
  S2 = new Sand(250, 175, 300, 50);
  S3 = new Sand(400, 75, 300, 75);
  S4 = new Sand(650, -50, 300, 75);
  S5 = new Sand(800, -75, 300, 75);
  S6 = new Sand(950, -100, 300, 75);

  
  Mario = createSprite(65, 320, 10, 30);
  Mario.addImage("Spain.png", Spain);
  Mario.addAnimation("SpainRunLeft", Spain2);
  Mario.addAnimation("Spainrun", Spain_run);
 
  wall = createSprite(25, 350, 10, 800);

  Platform1 = createSprite(200, 400, 600, 5);
  Platform2 = createSprite(500, 350, 300, 5);
  Platform3 = createSprite(800, 150, 300, 5);
  
}

function draw() {
  background(175,100,70);  

  wall.visible = false;
  //Platform1.visible = false;

  S1.display();
  S2.display();
  S3.display();
  S4.display();
  S5.display();
  S6.display();

  Mario.collide(wall)
  Mario.collide(Ground);
  //Mario.collide(Platform2);
  //Mario.collide(Platform3);
  
  camera.x = Mario.x;
  camera.y = Mario.y - 100;
  Mario.debug = true;


  if(keyWentDown("UP_ARROW")){
    Mario.velocityY = -12;
  }else{
    Mario.velocityY = Mario.velocityY + 0.4
    
  }

  if(keyDown("RIGHT_ARROW")){
    Mario.velocityX = 4;
    Mario.changeAnimation("Spainrun", Spain_run);
  }else{
    Mario.velocityX = 0;
  }

  if(keyDown("LEFT_ARROW")){
    Mario.velocityX = -4;
    Mario.changeAnimation("SpainRunLeft", Spain2);
  }


  drawSprites();
  fill("white")
  text(mouseX + " , " +mouseY, mouseX, mouseY);
  Engine.update(engine)
}

/*function keyPressed(){
  if(keyCode()==)
}*/