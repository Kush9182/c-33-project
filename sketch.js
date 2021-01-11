const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions=[]

var divisionHeight=300;
var score = 0;
var turns = 0;
var gamestate="play"

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  Engine.update(engine);
  //console.log(turns)
  fill("white")
  textSize(20)
  text("Score : "+score,20,30);
  text("500        500         500        500        100         100        100         200        200         200",25,530);
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display(); 
   }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

  if(gamestate==="end"){
    fill("white");
    textSize(40);
    text("Game Over",240,320);
  } 


  if(particle != null){
    particle.display();
    //console.log(particle)
    
    if(particle.body.position.x<=300 && particle.body.position.y>700){
      score=score+500
      particle=null;
      if(turns>5){
        gamestate="end"
      }
    }

    else if (particle.body.position.x>301 && particle.body.position.x<=600 && particle.body.position.y>700 ){
      score=score+100
      particle=null
      if(turns>5){
        gamestate="end"
      }
    }

    else if (particle.body.position.x>601 && particle.body.position.x<=800 && particle.body.position.y>700 ){
      score=score+200
      particle=null
      if(turns>5){
        gamestate="end"
      }
    }

    
  } 
}  
 


function mousePressed(){
  if(gamestate ==="play"){
    turns=turns+1;
    particle= new Particle(mouseX,30,10);
  }
}