var boy,background,coingroup,margin1,margin2;
var score,edges;
function preload(){

}
function setup(){
    createCanvas(500,700);
boy=createSprite(250,650,10,20);
boy.shapeColor="green";
margin1=createSprite(10,350,15,700);
margin2=createSprite(490,350,15,700);
margin1.visible=false;
margin2.visible=false;
coingroup=createGroup();
score=0;
edges=createEdgeSprites();
}


function draw(){
    background("black");
    fill ("white");
    textSize(20);
    text( "SCORE "+ score,30,50 );
 if (keyDown("left")){
     boy.velocityX=-5;

 }
 if (keyDown("right")){
     boy.velocityX=+5;
 }
 spawnCoins();
 boy.collide(margin1);
 boy.collide(margin2);
 boy.bounceOff(coingroup,vanish);
 boy.collide(edges[3]);
     drawSprites();
}

function spawnCoins(){
    if (frameCount%50==0){
        coin=createSprite( random( 50,650) , 20,10,10);
        coin.velocityY=4;
        coin.lifetime=200;
        coin.shapeColor=rgb( Math.round(random(0,255)), Math.round(random(0,255)), Math.round(random(0,255))); 
        coingroup.add(coin);
    }
}
function vanish(boy,coin){
    score=score+3;
    coin.destroy();
}