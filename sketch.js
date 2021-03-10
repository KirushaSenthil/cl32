const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var slingshot;
var block8, block9, block10, block11, block12, block13, block14, block15;
var ground1;
var polygon;
var ball;
var score=0;


function preload(){
    polygon_img=loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    block8 = new Box(630,200,40,40)
    block9 = new Box(630,200,40,40)
    block10 = new Box(670,200,40,40)
    block11 = new Box(670,200,40,40)
    block12 = new Box(630,200,40,40)
    block13 = new Box(670,200,40,40)
    block14 = new Box(630,200,40,40)
    block15 = new Box(670,200,40,40)
  
 
    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(700,290,400,20)
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    ball = Bodies.circle(50,200,20);
  World.add(world,ball);
    slingshot= new Slingshot(this.polygon,{x:100,y:200});
   
    
    
    
}
function draw(){
    Engine.update(engine);
    background("white")
    

    ground.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
   
   
    ground1.display();
    slingshot.display();
    imageMode(CENTER)
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingshot.fly();
  }
  function keyPressed(){
    if(keyCode===32){
      slingshot.attach(this.polygon)
    }
  }
