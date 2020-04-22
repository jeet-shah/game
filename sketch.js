const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,engine,world;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;
  ground = new Ground(400,790,20,800);
  ground1 = new Ground(600,500,20,100);
  cannon = new Cannon(100,700,20,20);
  slingshot = new SlingShot(cannon.body,{x:100, y:70});
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display(); 
  ground1.display();
  cannon.display();
  slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(cannon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}