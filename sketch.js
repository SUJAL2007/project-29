const Engine = Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;

var holder,ball,ground;

var stand1,stand2;

var ball;

var slingShot;

var polygon_ing




function setup() {
  engine=Engine.create();
  world=engine.world;

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  ground=new Ground();
  stand1=new Stand(380,300,270,10);
  stand2=new Stand(700,200,200,10);

  //level=1

  block1=new Block(290,235,30,40);
  block2=new Block(300,235,30,40);
  block3=new Block(340,235,30,40);
  block4=new Block(370,235,30,40);
  block5=new Block(400,235,30,40);
  block6=new Block(430,235,30,40);
  block7=new Block(460,235,30,40);
  

  //level=2

  block8=new Block(330,235,30,40);
  block9=new Block(360,235,30,40);
  block10=new Block(390,235,30,40);
  block11=new Block(420,235,30,40);
  block12=new Block(450,235,30,40);

  //level=3

  block13=new Block(360,235,30,40);
  block14=new Block(390,235,30,40);
  block15=new Block(420,235,30,40);

  //top

  block16=new Block(390,155,30,40);

  ball=Bodies.circle(50,200,10);

  slingShot=new SlingShots(this.ball,{x:200,y:200})

  
}


function draw() {
  background("white"); 
  
  Engine.update(engine)

  strokeWeight(2)
  stroke(15);

  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingShot.display();

  

  


  drawSprites();
}