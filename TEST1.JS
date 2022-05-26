var blueBin, greenBin, yellowBin, redBin;
var blueBinImg, greenBinImg, yellowBinImg, redBinImg
var batteryImg, mobileImg, newspaperImg, crumpledpaperImg;
var breadImg, fishImg, polybagImg, boxImg, bottleImg, canImg;
var appleImg, bananaImg, eggImg;
var bgImg, bg, bg1Img;
var sprite;
var gameState = "start";
var bio,bioGroup;

var button
function preload() {
  blueBinImg = loadImage("./images/bluebin.png");
  greenBinImg = loadImage("./images/greenbin.png");
  yellowBinImg = loadImage("./images/yellowbin.png");
  redBinImg = loadImage("./images/redbin.png");
  bgImg = loadImage("./images/bg1.jpg");
  bg1Img = loadImage("./images/greenboard.jpg");
  appleImg = loadImage("./images/apple.png");
  bananaImg = loadImage("./images/banana.png");
  mobileImg = loadImage("./images/mobile.png");
  boxImg = loadImage("./images/box.png");
  newspaperImg = loadImage("./images/newspaper.png");
  fishImg = loadImage("./images/fish.png");
  polybagImg = loadImage("./images/polybag.png");
  bottleImg = loadImage("./images/bottle.png");
  canImg = loadImage("./images/can.png");
  crumpledpaperImg = loadImage("./images/crumpledpaper.png");
  eggImg = loadImage("./images/egg.png");
  breadImg = loadImage("./images/bread.png")
  
};

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg1 = createSprite(width/2, height/2, windowWidth, windowHeight);
  bg1.addImage(bg1Img);
  bg1.scale = 1.4;
  bg1.visible =false

  //bg2 = createSprite(width/2, height/2, windowWidth, windowHeight);
 // bg2.addImage(bgImg);
  //bg2.scale = 1.5;
  //bg2.visible =false

  greenBin = createSprite(width/2-400,height-200, 100, 100);
  greenBin.addImage(greenBinImg);
  greenBin.scale = 1;
  //greenBin.visible =false

  blueBin = createSprite(width/2-150,height-200, 100, 100);
  blueBin.addImage(blueBinImg);
  blueBin.scale = 1;
  //blueBin.visible =false

  yellowBin = createSprite(width/2+150,height-200, 100, 100);
  yellowBin.addImage(yellowBinImg);
  yellowBin.scale = 1;
 // yellowBin.visible =false

  redBin = createSprite(width/2+400,height-200, 100, 100);
  redBin.addImage(redBinImg);
  redBin.scale = 1;
  //redBin.visible =false
  /*apple = createSprite(width/2, height/2, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.2;

  banana = createSprite(width/2-350, height/2-80, 10, 10);
  banana.addImage(bananaImg);
  banana.scale = 0.2;

  egg = createSprite(width/2+400, height/2, 10, 10);
  egg.addImage(eggImg);
  egg.scale = 0.2;*/

 

 
 
};

function draw() {
  background(bgImg);  
  
  drawSprites();

  if(mousePressedOver(bio)){
    bio.x=World.mouseX;
    bio.y = World.mouseY
  }
    spawnbio();
    //spawnglass()
    drawSprites();

}

function spawnbio(){
  if (frameCount % 60 === 0){
    var bio = createSprite(width/2,height/2-100);
   
     var rand = Math.round(random(1,5));
     switch(rand) {
       case 1: bio.addImage(appleImg);
                bio.scale=0.2
               break;
       case 2: bio.addImage(bananaImg);
                bio.scale=0.2
               break;
       case 3: bio.addImage(fishImg);
                bio.scale=0.4
               break;
       case 4: bio.addImage(eggImg);
                bio.scale=0.2
               break;
       case 5: bio.addImage(breadImg);
                bio.scale=0.5
               break;
       default: break;
     };
      
  }
  
  
 }

 /*function spawnglass(){
  if (frameCount % 60 === 0){
    var bio = createSprite(width/2-300,height/2-100);
   
     var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: bio.addImage(bottleImg);
                bio.scale=0.2
               break;
       case 2: bio.addImage(polybagImg);
                bio.scale=0.2
               break;
       case 3: bio.addImage(crumpledpaperImg);
                bio.scale=0.4
               break;
       case 4: bio.addImage( newspaperImg);
                bio.scale=0.2
               break;
      
       default: break;
     };
       
  }*/
 
 