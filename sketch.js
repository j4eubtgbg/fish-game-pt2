var  player,p1,player2,player3,player4,player5,players;
var edges;
var gs = 0;
var line;
var speed ;
var gen = 1;
var n = 6;
//0 = speed giver, 1 = PLAY, 2 = next gen


function preload() {

p1 = loadImage('R.png');

}

function setup() {
createCanvas(1600,600);

player = new Player(20,100,50,50,0);
player2 = new Player(20,200,50,50,0);
player3 = new Player(20,300,50,50,0);
player4 = new Player(20,400,50,50,0);
player5 = new Player(20,500,50,50,0);


edges = createEdgeSprites();
line = createSprite(1400,300,10,600);


}

function draw() {
background('black');

if (gs===1) {
  speedGiver();
}
console.log(n);
if (gs === 2) {
  player.speed(0);
  player2.speed(0);
  player3.speed(0);
  player4.speed(0);
  player5.speed(0);
  
}


player.touches(line);
player2.touches(line);
player3.touches(line);
player4.touches(line);
player5.touches(line);


if (gs===0) {
  if (keyDown('Q')) {
    console.log("fish1 selected");
    gs = 1;
  }
  if (keyDown('w')) {
    console.log("fish2 selected");
    gs = 1;
  }
  if (keyDown('e')) {
    console.log("fish3 selected");
    gs = 1;
  }
  if (keyDown('r')) {
    console.log("fish4 selected");
    gs = 1;
  }
  if (keyDown('t')) {
    console.log("fish5 selected");
    gs = 1;
  }
}

drawSprites();
  }   
function mouseClicked(){
  if (gs === 0) {
    gs = 1;
   
   
  }

  if (gs===2) {
    player.setPos(20,100);
    player2.setPos(20,200);
    player3.setPos(20,300);
    player4.setPos(20,400);
    player5.setPos(20,500);
    gs = 1;
  }
}


function speedGiver(){
  
    
  
 var ran = Math.round(random(-10,10))
 player.speed(Math.round(random(n-1,n+1)));
 var ran = Math.round(random(-10,10))
 player2.speed(Math.round(random(n-1,n+1)));
 var ran = Math.round(random(-10,10))
 player3.speed(Math.round(random(n-1,n+1)));
 var ran = Math.round(random(-10,10))
 player4.speed(Math.round(random(n-1,n+1)));
 var ran = Math.round(random(-10,10))

 player5.speed(Math.round(random(n-1,n+1)));

 gs = 3;
}

 