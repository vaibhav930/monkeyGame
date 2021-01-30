
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {  
banana = createSprite(200,200,50,50);
monkey = createSprite(250,300,40,50); 
  obstacle = createSprite(270,300,50,50);
}


function draw() {
drawSprites();
monkey.velocityX=-5;
  backround=("yellow");
}






