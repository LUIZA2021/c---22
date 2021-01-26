const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var object1;
var ball;
var ground;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,400,10,ground_options);
  World.add(world,ground);
 // createSprite(400, 200, 50, 50);
 object1=Bodies.rectangle(200,10,50,50);
 World.add(world,object1);
 var ball_options={
   restitution:2.0
 }
  ball=Bodies.circle(300,10,50,ball_options);
 World.add(world,ball);3

 
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  //drawSprites();
  rectMode(CENTER);
  rect(object1.position.x,object1.position.y,50,50);
  ellipseMode(CENTER);
  circle(ball.position.x,ball.position.y,50);
  rect(ground.position.x,ground.position.y,400,10);
}