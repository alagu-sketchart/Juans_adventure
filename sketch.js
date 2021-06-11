var ground, ground2, ground3;
var Mario;

function setup() {
  createCanvas(700,500);
  ground = createSprite(40, 450, 1000, 10);
  ground2 = createSprite(640, 350, 1000, 10);
  ground3 = createSprite(40, 150, 1000, 10);
  Mario = createSprite(75, 420, 10, 30);
}

function draw() {
  background(175,100,70);  

  Mario.velocityX = 0;
  Mario.collide(ground);

  if(keyDown("UP_ARROW") && Mario.y >= 390){
    Mario.velocityY = -12;
  }

  Mario.velocityY = Mario.velocityY + 0.8

  if(keyDown("RIGHT_ARROW")){
    Mario.velocityX = 4;
  }

  if(keyDown("LEFT_ARROW")){
    Mario.velocityX = -4;
  }


  drawSprites();
}