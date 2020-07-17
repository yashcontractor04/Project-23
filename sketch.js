var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	box1Sprite=createSprite(width/2, 650, 200, 20);
	box1Sprite.shapeColor=color(255,0,0);
	box2Sprite=createSprite((width/2)-100, 610, 20, 100);
	box2Sprite.shapeColor=color(255,0,0);
	box3Sprite=createSprite(100+width/2, 610, 20, 100);
	box3Sprite.shapeColor=color(255,0,0);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	
	//Create box bodies
	box1 = Bodies.rectangle(width/2, 650, 200, 45, {isStatic:true} );
	World.add(world,box1);
	box2 = Bodies.rectangle((width/2)-100, 610, 20, 100, {isStatic:true} );
	World.add(world,box2);
	box3 = Bodies.rectangle(100+width/2, 610, 20, 100, {isStatic:true} );
	World.add(world,box3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  box1Sprite.x = box1.position.x;
  box1Sprite.y = box1.position.y;
  box2Sprite.x = box2.position.x;
  box2Sprite.y = box2.position.y;
  box3Sprite.x = box3.position.x;
  box3Sprite.y = box3.position.y;
  
  drawSprites(); 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



