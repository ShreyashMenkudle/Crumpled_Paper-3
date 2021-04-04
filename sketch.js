var paper1;
var ground;
var Dustbin;
var launcher;

var boxLeftSprite,boxBase,boxRightSprite;
var boxLeftBody,boxBottomBody,boxRightBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	DustbinImage = loadImage("Images/Dustbin.png");
	

}

function setup() {
	createCanvas(1200, 500);
	
  engine = Engine.create();
	world = engine.world;

    boxPosition=width/2+150;
	  boxY=height-90;
    
    Dustbin = createSprite(boxPosition+100,boxY-10,2,2);
    Dustbin.addImage(DustbinImage);
	Dustbin.scale=0.7

    boxLeftSprite = createSprite(boxPosition+50,boxY-8,10,120);
	boxLeftSprite.shapeColor=color(255,0,0);

	boxLeftBody = Bodies.rectangle(boxPosition+50,boxY-8,10,100,{isStatic:true});
    World.add(world , boxLeftBody);

	boxBase = createSprite(boxPosition+100,boxY+47,100,10);
	boxBase.shapeColor=color(255,0,0);

	boxBottomBody = Bodies.rectangle(boxPosition+100,boxY+47-20,100,10);
	World.add(world , boxBottomBody);

	boxRightSprite = createSprite(boxPosition+150,boxY-8,10,120);
	boxRightSprite.shapeColor=color(255,0,0);

	boxRightBody = Bodies.rectangle(boxPosition+150,boxY-8,10,120,{isStatic:true});
	World.add(world , boxRightBody);
   
    ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color("brown");

    ground = Bodies.rectangle(width/2,height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//Create the Bodies Here.
    paper1 = new Paper(200,450,20);
	
    launcher = new Launcher(paper1.body,{x:200, y:150});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  drawSprites();
  paper1.display();
  Dustbin.display();

  
}

function mouseDragged() {
    Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    launcher.fly();

}