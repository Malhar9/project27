
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint 
var roof
var bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var options ={
	bodyA:bob1.body,
	bodyB:roof.body
	bodyA:bob2.body,
	bodyB:roof.body
	bodyA:bob3.body,
	bodyB:roof.body
	bodyA:bob4.body,
	bodyB:roof.body
	bodyA:bob5.body,
	bodyB:roof.body
  
}
var rope = Constraint.create(options)
world.add(world,rope)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display()
  bob.display()
  rope.display();
  drawSprites();
 
}



