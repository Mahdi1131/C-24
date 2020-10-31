const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(800,380,50,50);
    box2 = new Box(920,380,50,50);
    pig1 = new Pig(860, 380);
    log1 = new Log(860, 330, 200, PI/2);
    box3 = new Box(800,310,50,50);
    box4 = new Box(920,310,50,50);
    pig2 = new Pig(860, 310);
    log2 = new Log(860, 260, 200, PI/2); 
    box5 = new Box(860,190,50,50);
    log3 = new Log(820,190,100, PI/5);
    log4 = new Log(890,190,100, PI/-5);
    bird = new Bird(200, 200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}