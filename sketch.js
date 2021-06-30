var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;
var allPlayers;
var distance = 0;
var xPosition = 0;
var database;

var form, player, game;

var ships, spaceship,spaceship2,alieni, aliens, laser, laser2;
var alien1, alien2, alien3, shipImage, laserImage, background;

function preload(){
  alien1=loadImage("images/alien1.png");
  alien2=loadImage("images/alien2.png");
  alien3=loadImage("images/alien3.png");
  shipImage=loadImage("images/spaceship.png");
  ship2Image=loadImage("images/spaceship2.png");
  laserImage=loadImage("images/laser.png");
  
  background=loadImage("images/background.png");
}



function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getGameState();  
  game.start();
  
}


function draw(){
  
  if(playerCount === 2){
    game.updateGameState(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    
    
  }

  
  
}

/*function spawnAliens(){
  if(frameRate%80 === 0){
    alieni = createSprite(500, -10, 50, 50);
    alieni.x = Math.round(random(200, 500));
    alieni.velocityY = 6;
    
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: alieni.addImage(alien1);
              break;
      case 2: alieni.addImage(alien2);
              break;
      case 3: alieni.addImage(alien3);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    
    //add each obstacle to the group
    aliens.add(alieni);
  }*/


  





