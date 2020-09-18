
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const  Constraint=Matter.Constraint;
var bob1;
var rope1;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1 = new Bob(200,500,50);
  bob2 = new Bob(300,500,50);
  bob3 = new Bob(400,500,50);
  bob4 = new Bob(500,500,50);
  bob5 = new Bob(600,500,50);
 // bob6 = new Bob(700,500,50);
  //bob7 = new Bob(800,500,50);
  
  
  
roof=new Roof(390,200,520,30);
rope1 = new rope(bob1.body, roof.body, -100*2, 0);
rope2 = new rope(bob2.body, roof.body, -50*2, 0);
rope3 = new rope(bob3.body, roof.body, 0, 0);
rope4 = new rope(bob4.body, roof.body, 100, 0);
rope5 = new rope(bob5.body, roof.body, 200, 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  
  bob3.display();
  
  bob4.display();
  bob5.display();
 // bob6.display();
 // bob7.display();
 
 
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
  roof.display();
 
  

  drawSprites();
 
}
function keyPressed() {
	if(keyCode 	=== UP_ARROW) {
       Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-60, y:-50});
	}
}




