const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var box1;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  ground = new Ground(600,height,1200,20);
  box1 = new Box(700,320,70,70);  
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810,350);
   log1 = new Log(810,260,300,PI/4);


    console.log(log1);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    
   box1.display();
   box2.display();
   pig1.display();
   log1.display();
}
