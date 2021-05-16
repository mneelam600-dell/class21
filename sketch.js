var fixedRect,movingRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  object1 = createSprite(250,200,30,20);
  object2 = createSprite(250,230,30,20);
  object3 = createSprite(250,260,30,20);
  object1 = createSprite(250,290,30,20);

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

 if( isTouching(movingRect,object1)){
movingRect.shapeColor="red";
object1.shapeColor="red";
 }
 else{
  movingRect.shapeColor="green";
  object1.shapeColor="green";

 }

  drawSprites();
}
function isTouching(movingRect,fixedRect){

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
  
  return true;
    
  
  }
  else{
  
  return false;
  }


}
