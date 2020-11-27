const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var slingShot;
var gameState = "onSling";


//string
var string= "my name is adarsh";
console.log(string);

//number
var num = 100;
console.log(num);

//boolean
var bool = true;
console.log(bool);

//undefined
var object;
console.log(object);

// reassining the same undefined object to null;
//null
object = null;
console.log(object);
//examples of array 
// an array holding the same data type
var array1 = [1,2,3,4,5,6,7,8,9];
console.log(array1);
//an array holding differnt data type;
var arrray2 = ["adarsh",12,true];
console.log(arrray2);
//an arrray is storing list of arrays;
var array3 = [[1,2,3],[3,4],[10,15]]
console.log(array3);
console.log(array3[0]);
console.log(array3[0][1]);

function preload() {
getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
   // log6 = new Log(230,180,80,PI/2);
    
    bird = new Bird(200,50);
    slingShot = new SlingShot(bird.body,{x:200,y:50});
}



function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    //console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    //getTime();
    bird.display();
   // log6.display();
    slingShot.display();
    platform.display();
}
     function mouseDragged() {
         if(gameState === "onSling");
        {
             Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
        }
     }
     function mouseReleased(){
          slingShot.fly();
          gameState = "launched";
         
     }
     
     function keyPressed(){
         if(keyCode===32){
            // slingShot.attach(bird.body);
         }
     }
     async function getBackgroundImg(){
     var response =  await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
     var responseJSON = await response.json();
     console.log(responseJSON.datetime);
     var datetime = responseJSON.datetime
     var hour = datetime.slice(11,13);
    if(hour>= 06 && hour<=7){
        bg = "sprites/bg.png";
    }
    else{
        bg = "sprites/bg2.png";
    }
     backgroundImg = loadImage (bg);

     }