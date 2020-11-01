var fixedrect
var movingrect

function setup() {
  createCanvas(800,400);
  fixedrect =createSprite(400, 200, 50, 50);
  movingrect=createSprite(400, 20, 50, 50);
}

function draw() {
  background(255,255,255); 
  
  //making the moving rect move
  movingrect.y = mouseY;
  movingrect.x = mouseX;

  //making it touch
  if(Math.abs((movingrect.x - fixedrect.x))<(fixedrect.width/2 +movingrect.width/2)&&
  (Math.abs(movingrect.y - fixedrect.y))<(fixedrect.height/2 +movingrect.height/2)){
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";
    //fixedrect.x = 0;
  }
  else{
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";
  }

  console.log(movingrect.x - fixedrect.x)
  
  drawSprites();

}