
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup 
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
   monkey = createSprite(80,300,20,20);
   monkey.addAnimation("moving",monkey_running);
   monkey.scale = 0.1;

   ground = createSprite(200,370,400,20);
   ground.velocityX = -5;

  obstacleGroup = createGroup();
  FoodGroup = createGroup();
  
}


function draw() {
  createCanvas(400,400);
  background("lightblue");
  
 if(keyDown("space")&& monkey.y >= 150){
    monkey.velocityY = -10;
    } 
 
  monkey.velocityY = monkey.velocityY+0.5; 
  
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach();
    score = score+1;
     }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score = "+score,300,50);
  
  
  
  
  ground.x = ground.width/2;
  
  monkey.collide(ground);
  
  createObstacles();
  createBanana();
  drawSprites();
  
  
}

function createBanana (){
 if (frameCount % 80 === 0){
  banana = createSprite(370,random(150,290),20,20);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -5;
  FoodGroup.add(banana);
 }
    
}

function createObstacles(){
  if (frameCount % 300 === 0) {
    obstacle = createSprite(350,350,40,10);
    obstacle.x = Math.round(random(370,320));
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.scale = 0.1;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
  
  
}
