var bgImg,bg;

var cat,catimg1;
var catimg2;

var mouse,mouseimg1,mouseimg2;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    
    catimg1=loadAnimation("images/cat1.png");
    mouseimg1=loadAnimation("images/mouse1.png");
    catimg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catimg3=loadAnimation("images/cat4.png");
    mouseimg3=loadAnimation("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse=createSprite(300,600,50,50);
    mouse.addImage("mouse",mouseimg1);

    cat=createSprite(800,600,60,60);
    cat.addImage("cat",catimg1);

}

function draw() {

    background("bg",bgImg);
    //Write condition here to evalute if tom and jerry collide

 if(cat.x -mouse.x <(cat.width-mouse.width)/2){
   cat.addAnimation("cat3",catimg3);
   cat.changeAnimation("cat3");
   mouse.addAnimation("mouse3",mouseimg3);
   mouse.changeAnimation("mouse3");

 }

    drawSprites();
}


function keyPressed(){

if(keyCode === LEFT_ARROW){
 mouse.addAnimation("mouseTeasing",mouseimg2);
 mouse.changeAnimation("mouseTeasing");
 mouse.frameDelay=25;

 cat.velocityX=-3;
 cat.addAnimation("catrunning",catimg2);
 cat.changeAnimation("catrunning");
}

}
