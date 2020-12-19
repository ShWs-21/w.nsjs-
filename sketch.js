function setup() {
  createCanvas(800,400);
 movingSprite=createSprite(400, 200, 50, 50);
 movingSprite.shapeColor="blue";
 fixedSprite=createSprite(300,200,50,50);
 fixedSprite.shapeColor="Yellow";
 orbitSprite=createSprite(200,200,50,50);
 orbitSprite.shapeColor="green";
 terminusSprite=createSprite(100,200,50,50);
 terminusSprite.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  movingSprite.x=World.mouseX;
  movingSprite.y=World.mouseY;

  //console.log(movingSprite.x-fixedSprite.x);
  var z = isColllision(movingSprite,terminusSprite);
  if(z===true){
  movingSprite.shapeColor="pink";
  terminusSprite.shapeColor="pink";

  }

  else {
  fixedSprite.shapeColor="yellow";
  terminusSprite.shapeColor="red";


  }
  drawSprites();
}

