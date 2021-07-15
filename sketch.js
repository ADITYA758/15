
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, miniG, miniG2
var block1, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15,
  block16

var block17, block18, block19, block20, block21, block22, block23, block24, block25
var hexa_image, hexa

var chain

function preload() {

  hexa_image = loadImage("polygon.png")

}



function setup() {
  createCanvas(1366, 620);


  engine = Engine.create();
  world = engine.world;


  ground = new Ground(400, 580, 13666, 20)
  miniG = new Ground(640, 250, 205, 20)
  miniG2 = new Ground(330, 450, 250, 20)

  block1 = new Block(240, 425, 20, 20)
  block2 = new Block2(270, 425, 20, 20)
  block3 = new Block(300, 425, 20, 20)
  block4 = new Block2(330, 425, 20, 20)
  block5 = new Block(360, 425, 20, 20)
  block6 = new Block2(390, 425, 20, 20)
  block7 = new Block(410, 425, 20, 20)
  block8 = new Block(270, 395, 20, 20)
  block9 = new Block2(300, 395, 20, 20)
  block10 = new Block(330, 395, 20, 20)
  block11 = new Block2(360, 395, 20, 20)
  block12 = new Block(390, 395, 20, 20)
  block13 = new Block(300, 365, 20, 20)
  block14 = new Block2(330, 365, 20, 20)
  block15 = new Block(360, 365, 20, 20)
  block16 = new Block(330, 335, 20, 20)
  block17 = new Block2(580, 225, 20, 20)
  block18 = new Block(610, 225, 20, 20)
  block19 = new Block2(640, 225, 20, 20)
  block20 = new Block(670, 225, 20, 20)
  block21 = new Block2(700, 225, 20, 20)
  block22 = new Block2(610, 195, 20, 20)
  block23 = new Block(640, 195, 20, 20)
  block24 = new Block2(670, 195, 20, 20)
  block25 = new Block2(640, 165, 20, 20)



  hexa = Bodies.circle(50, 200, 20)
  World.add(world, hexa)

  chain = new Chain(hexa, { x: 85, y: 110 })




  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(rgb(146, 227, 102));

  ground.display()
  miniG.display()
  miniG2.display()

  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()

  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()

  block13.display()
  block14.display()
  block15.display()

  block16.display()



  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()

  block22.display()
  block23.display()
  block24.display()

  block25.display()

  chain.display()

  text(mouseX + "," + mouseY, 50, 50);
  textSize(30)


  fill("gold")
  imageMode(CENTER)
  image(hexa_image, hexa.position.x, hexa.position.y, 40, 40)



  drawSprites();

}
function mouseDragged() {
  Matter.Body.setPosition(hexa, { x: mouseX, y: mouseY });
}


function mouseReleased() {
  chain.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    chain.attach(this.hexa)
  }
}




