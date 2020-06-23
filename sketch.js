var ball, ground;
//var dustbin1, dustbin2; 
var dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;

    ground = Bodies.rectangle(width / 2, height - 25, width, 15, { isStatic: true });
    World.add(world, ground);

    ball = new Paper(200, height - 60, 60, 60);

    //dustbin1 = new Dustbin(725, height - 120, 30, 150);
    //dustbin2 = new Dustbin(975, height - 120, 30, 150);
    //dustbin3 = new Dustbin(850, height - 80, 250, 40);
    dustbin3 = new Dustbin(850, height - 200, 250, 300);

	Engine.run(engine);
}


function draw() {
    background("lightblue");
    ball.display();
    //dustbin1.display();
    //dustbin2.display();
    dustbin3.display();

    drawSprites();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Body.applyForce(ball.body, ball.body.position, { x: 204, y: -204 });
        "console.log(keyPressed)";
    }
}