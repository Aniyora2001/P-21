var canvas,rect1,rect2,rect3,rect4,square,edges;
var music;

function preload()
{
    music = loadSound("music.mp3");
}


function setup()
{
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
    rect1= createSprite(70,590,170,30);
    rect1.shapeColor= "orange";

    rect2=createSprite(280,590,170,30);
    rect2.shapeColor="purple";

    rect3 = createSprite(480,590,170,30);
    rect3.shapeColor= "cyan";

    rect4 = createSprite(700,590,200,30);
    rect4.shapeColor= "pink"

    //create box sprite and give velocity
    square= createSprite(Math.random(50,750),50,20,20);
    //square.shapeColor= "green";
    square.velocityX=3;
    square.velocityY=3;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
      edges = createEdgeSprites();
      square.bounceOff(edges);

 
    //add condition to check if box touching surface and make it box
    if (square.isTouching(rect1)||square.isTouching(rect2)|| square.isTouching(rect3)||square.isTouching(rect4))
    {
         if(square.isTouching(rect1))
         {
             square.shapeColor= "orange";
             square.bounceOff(rect1);
         }

         if(square.isTouching(rect2))
         {
             square.shapeColor= "purple";
             square.bounceOff(rect2);
             square.velocityX=0;
             square.velocityY=0;
             music.play();
         }

         if(square.isTouching(rect3))
         {
             square.shapeColor="cyan";
             square.bounceOff(rect3);
         }

         if (square.isTouching(rect4))
         {
             square.shapeColor="pink"
             square.bounceOff(rect4);
         }
    }



    drawSprites();
}
