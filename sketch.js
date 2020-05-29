var anguloSol = 0;
var anguloMercurio = 0;
var anguloVenus = 0;
var anguloMarte = 0;
var anguloTierra = 0;
var anguloLuna = 0;

var Sol;
var Mercurio;
var Venus;
var Marte;
var Tierra;
var Luna;
var Coin;


function preload(){
  coin = loadSound("Coin.mp3");
}


function setup() {
  createCanvas(580, 530);
  angleMode(DEGREES);
   
  Sol = loadImage("Sol.png");
  Mercurio = loadImage("Mercurio.png");
  Venus = loadImage("Venus.png");
  Marte = loadImage("Marte.png");
  Tierra = loadImage("Tierra.png");
  Luna = loadImage("Luna.png");

}

function draw() {
  background(0);
  
  push();
  translate(290,265);
  rotate(anguloSol);
  scale(0.5,0.5);
  imageMode(CENTER);
  image(Sol, 0, 0);
  anguloSol = anguloSol + 2;
  pop();
  
  
  push();
  translate(290,265);
  rotate(anguloMercurio);
  scale(0.04,0.04);
  imageMode(CENTER);
  image(Mercurio, 1000, 1000);
  anguloMercurio = anguloMercurio + 0.8;
  pop();
    
  if(anguloMercurio > 360){
    anguloMercurio = 0;
    coin.play();
  }
  
  
  push();
  translate(290,265);
  rotate(anguloVenus);
  scale(0.05,0.05);
  imageMode(CENTER);
  image(Venus, 1450, 1450);
  anguloVenus = anguloVenus + 0.9;
  pop();
   
  if(anguloVenus > 360){
    anguloVenus = 0;
    coin.play();
  }
  
  
  push();
  translate(290,265);
  rotate(anguloMarte);
  scale(0.11,0.11);
  imageMode(CENTER);
  image(Marte, 1050, 1050);
  anguloMarte = anguloMarte + 1;
  pop();
  
  if(anguloMarte > 360){
    anguloMarte = 0;
    coin.play();
  }
  
  
  push();
  translate(290,265);
  rotate(anguloTierra);
  scale(0.06,0.06);
  imageMode(CENTER);
  image(Tierra, 2700, 2700);
  anguloTierra = anguloTierra + 1.1;
  pop();
  
  if(anguloTierra > 360){
    anguloTierra = 0;
    coin.play();
  }
  
  
  push();
  translate(290,265);
  rotate(anguloLuna && anguloTierra);
  scale(0.03,0.03);
  imageMode(CENTER);
  image(Luna, 4600, 4600);
  anguloLuna = anguloLuna + 2.2;
  pop();
  
}

