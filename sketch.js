const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof,rope;
var bob1,bob2,bob3,bob4,bob5;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(400,150,500,70)
    bob1 = new Bob(600,550,90,90)
    bob2 = new Bob(500,550,90,90)
    bob3 = new Bob(400,550,90,90)
    bob4 = new Bob(300,550,90,90)
    bob5 = new Bob(200,550,90,90)
    rope = new Rope(this.roof,{x:50,y:50})

	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(rgb(230,230,230));

      

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}