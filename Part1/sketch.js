// declaring global variables
var welcometogame;
var StartScreen=0;
function setup() {
	createCanvas(800, 600);
// 0:Starting Game Screen
// 1: Regular Game Screen
// 2: Game Over Screen

// creating startgame sprite object
welcometogame=createSprite(400,300,200,100);
  
}


function draw() {
  background('blue');
  if(StartScreen===0){
startgame()
  }
  else if(StartScreen===1){
playgame()
  }
  else if(StartScreen===2){
endgame()
  }
  else{
 console.log("Something went wrong")
  }
  drawSprites();
 
}
//function logic
function startgame(){
  //logic for startgame
}
function endgame(){
  //logic for endgame
}
function playgame(){
  //function for playgame
console.log('Welcome to game')
}
//mouse interaction with the sprite object
function mousePressed(welcometogame){
StartScreen=1;
}



