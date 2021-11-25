var balll,ballloonImage1,ballloonImage2, balllpos;
var ball;
// create database and position variable here
var database, position;

function preload(){
   bg =loadImage("cityImage.png");
   ballloonImage1=loadAnimation("hotairballoon1.png");
   ballloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balll=createSprite(250,450,150,150);
  balll.addAnimation("hotAirballloon",ballloonImage1);
  balll.scale=0.5;
  var  balllpos = database.ref('balll/position');
  balllpos.on("value",readPosition,showError);
  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balll.addAnimation("hotAirballloon",ballloonImage2);
     writePosition(-1,0);
  
  }
  else if(keyDown(RIGHT_ARROW)){
    balll.addAnimation("hotAirballloon",ballloonImage2);
    writePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
    balll.addAnimation("hotAirballloon",ballloonImage2);
    writePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
    balll.addAnimation("hotAirballloon",ballloonImage2);
     writePosition(0,+1);
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air ballloon!",40,40);
}
function writePosition(x,y){
  database.ref('balll/position').set({
      'x': position.x+x,
      'y': position.y+y
  });
}
function readPosition(data){
  position = data.val();
  ball.x = position.x;
  ball.y = position.y;
}
function showError(){
  console.log("pudim e bom");
}