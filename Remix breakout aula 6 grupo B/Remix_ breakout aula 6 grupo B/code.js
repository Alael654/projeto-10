var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//sprites de caixas 
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="purple";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="pink";
var box3 = createSprite(125,75,50,50);
box3.shapeColor="purple";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="pink";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="purple";
var box6 = createSprite(275,75,50,50);
box6.shapeColor="pink";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="purple";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="pink";

var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="pink";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="purple";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="pink";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="purple";
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="pink";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="purple";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="pink";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="purple";

//paddle and color ---  raquete e cor 
paddle=createSprite(200,390,100,10);
paddle.shapeColor = "white";

//ball and color ---  bola e cor
ball=createSprite(200,200,20,20);
ball.shapeColor = "white";

//declarar score
var score = 0;



/*função que executa o tempo todo 
o que está dentro dela */
function draw() {
  //cor de fundo
  background("black");
  
  //exibir pontuação
  textSize(20);
  //cor da borda do texto
  stroke("yellow");
  fill("white");
  text("PONTUAÇÃO: " +score , 130, 30);
  
  
  /*if para a bola se mexer 
  somente quando apertar espaço*/ 
  //Dica: velocidade x = 4, velocidade y = 3
  if(keyDown("space")){
    ball.velocityX =4;
    ball.velocityY =3;
  }
  
  
  //mover a raquete(paddle) com o mouse
  paddle.x = World.mouseX;
  
  //criar bordas
 createEdgeSprites();
 
  /*fazer a bola rebater
  nas bordas: cima, esquerda, direita
  e na raquete  (bounceOff) */
  ball.bounceOff(topEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(paddle);
  
  
  //se a bola estiver tocando nas caixas, ela deverá ser destruída
  if(ball.isTouching(box1)){
    //score
    score = score +5;
    box1.destroy();
  }
  
  if(ball.isTouching(box2)){
    //score
    score = score +5;
    box2.destroy();
  }
  
  if(ball.isTouching(box3)){
    //score
    score = score +5;
    box3.destroy();
  }
  
  if(ball.isTouching(box3)){
    //score
    score = score +5;
    box3.destroy();
  }
  
  if(ball.isTouching(box4)){
    //score
    score = score +5;
    box4.destroy();
  }
  
  if(ball.isTouching(box5)){
    //score
    score = score +5;
    box5.destroy();
  }
  
   if(ball.isTouching(box6)){
     //score
     score = score +5;
    box6.destroy();
  }
  
  if(ball.isTouching(box7)){
    //score
    score = score +5;
    box7.destroy();
  }
  
  if(ball.isTouching(box8)){
    //score
    score = score +5;
    box8.destroy();
  }
  
  if(ball.isTouching(box9)){
    //score
    score = score +5;
    box9.destroy();
  }
  
  if(ball.isTouching(box10)){
    //score
    score = score +5;
    box10.destroy();
  }
  
  if(ball.isTouching(box11)){
    //score
    score = score +5;
    box11.destroy();
  }
  
  if(ball.isTouching(box12)){
    //score
    score = score +5;
    box12.destroy();
  }
  
  if(ball.isTouching(box13)){
    //score
    score = score +5;
    box13.destroy();
  }
  
  if(ball.isTouching(box14)){
    //score
    score = score +5;
    box14.destroy();
  }
  
  if(ball.isTouching(box15)){
    //score
    score = score +5;
    box15.destroy();
  }
  
  if(ball.isTouching(box16)){
    //score
    score = score +5;
    box16.destroy();
  }
  
  
  //desenha os sprites
   drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
