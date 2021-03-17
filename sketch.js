var tgroup, collidergroup;

var player, panimation, pidle, pjump;

var level;




function preload(){
  bg = loadImage("Images/Bg.png")
  panimation = loadAnimation("Images/Dyso/Move/r1.png", "Images/Dyso/Move/r2.png", "Images/Dyso/Move/r3.png", "Images/Dyso/Move/r4.png", "Images/Dyso/Move/r5.png", "Images/Dyso/Move/r6.png", "Images/Dyso/Move/r7.png", "Images/Dyso/Move/r8.png")
  pidle = loadAnimation("Images/Dyso/Move/Idle.png")
  pjump = loadAnimation("Images/Dyso/Move/j1.png", "Images/Dyso/Move/j2.png", "Images/Dyso/Move/j3.png", "Images/Dyso/Move/j4.png", "Images/Dyso/Move/j5.png", "Images/Dyso/Move/j6.png", "Images/Dyso/Move/j7.png", "Images/Dyso/Move/j8.png", "Images/Dyso/Move/j9.png", "Images/Dyso/Move/j10.png")
}
function setup() {
  

  tgroup = createGroup()
  collidergroup = createGroup()
  level = new lvl1()

  createCanvas(level.w, level.h);




  player = createSprite(50, 550, 20, 20)
  player.velocityY = 2
  player.addAnimation("idle", pidle)
  player.addAnimation("run", panimation)
  player.addAnimation("jump", pjump)
  player.setCollider("rectangle", 0, 0, 15, 35)


}

function draw() {
  background(200); 
  player.collide(tgroup)
  level.play()



  drawSprites();
}

function spare(){
  // if(collidergroup.isTouching(player)){
    //     touchGround = true
    //   }
    //   // player.velocityY += 1
      
    //  if(keyDown("LEFT_ARROW")){
    //    player.x -= 4
    //    player.changeAnimation("run", panimation)
    //    player.mirrorX(-1)
    //  }else if(keyDown("RIGHT_ARROW")){
    //    player.x += 4
    //     player.changeAnimation("run", panimation)
    //     player.mirrorX(1)
    //  }else if(keyDown("UP_ARROW") && touchGround){
    //    player.velocityY = -12
    //    touchGround = false
    //    player.changeAnimation("jump", pjump)
    //  }else{
    //    player.changeAnimation("idle", pidle)
    //  }
    
    //  if(touchGround != true){
    //    player.changeAnimation("jump", pjump)
    //  }
    
    //  player.velocityY = player.velocityY + 0.8
    
    //   image(bg, 0, 0, 2779, h)
}

function spare1(){
// w = displayWidth
  // h = displayHeight

  // tgroup = createGroup()
  // collidergroup = createGroup()



  // p1 = new Platform(500, 600, player)


  // ground = createSprite(w * 0.5, h - h / 20, w, h / 10)
  // ground.visible = false

  // groundCollider = createSprite(w * 0.5, h - h / 20 - 3, w, h / 10)
  // groundCollider.visible = false

  // collidergroup.add(groundCollider)

  // tgroup.add(ground)
}

