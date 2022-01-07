import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  constructor() {
    super('game')
    
    //detect device
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }

    this.score = 0;
    this.isMobile ? this.speedVelocity = -200 : this.speedVelocity = -1000;
  }

  preload() {
    this.load.image("ball", "assets/img/sun.png");
    this.load.image("circle", "assets/img/circle.png");
    this.load.image("stopButton", "assets/img/stop.png");
  }

  create() {
   
    this.isOverlapped = false;
    this.createContainer();
    this.createBall();
    this.createCircle();

    this.scoreText = this.add.text(16, 16, 'score: 0', {fontSize: '18px', fill: '#000000'})
   
    //create keyboard cursors
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spaceKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    
    //create stop button image
    this.stopButton = this.add.image(520, 400, 'stopButton');
    this.stopButton.setScale(0.5);
    this.stopButton.setInteractive({cursor: 'pointer'});
    
    //set event to the cursor and button
    this.spaceKey.on("down", this.togglePause, this);
    this.stopButton.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, this.togglePause, this)
    
    $('#btnRestartGame').on("click", function () {
      $('#rewardModal').modal('hide');
      // this.scene.start()
      location.reload(); //the easiest way to restart the game. Not the best approach!
    })
  }

  createContainer () {
    this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xfd0000, alpha: 0 }});
    this.container = new Phaser.Geom.Rectangle(100, 100, 850, 450);
    this.graphics.strokeRectShape(this.container);
  }

  createBall () {
    this.movingBall = this.physics.add.image(110, 250, "ball");
    this.movingBall.setCircle(40, 210, 210)
    this.movingBall.setScale(0.4); //resize the image
    this.movingBall.body.setCollideWorldBounds(true, 1, 1); //bounce to the wall
    this.movingBall.body.setVelocity(this.speedVelocity, 0); //make the ball bounced, adjust speed
    this.movingBall.body.setBoundsRectangle(this.container) //create container so that the ball does not move outside of the bound (when innerbound is small & centered)
  }

  createCircle () {
    this.circle = this.physics.add.image(515, 250, 'circle');
    this.circle.setCircle(20, 310, 320) //set innerbound of the image
    this.circle.setScale(0.3); //resize the image
    this.physics.add.overlap(this.movingBall, this.circle, this.inZone, null, this) //overlap between two images
  }

  togglePause() {
    // this.movingBall.body.moves = this.movingBall.body.moves ? false : true; //toggle pause and resume of the moving ball
    this.movingBall.body.moves = false; //toggle pause

    //toggle if moving ball is paused and is not overlapped, the game will restart. 
    //set time out so that player can have a moment to see where they stopped at.
    setTimeout(() => {
      if(!this.movingBall.body.moves && !this.isOverlapped) {
        this.scene.start()
        return
      }
    }, 300);
  } 

  inZone(ball, circle) {
    if(!this.movingBall.body.moves) {
      this.isOverlapped = true; //set overlap is true
      console.log("Player in the circle");
      this.score += 1;
      this.scoreText.setText('Score: ' + this.score);
      
      this.resetPlayer();

      setTimeout(() => {
        $('#rewardModal').modal('show'); 
      }, 250);

    } 
  }

  resetPlayer() {
    this.scene.destroy() //kill the game config
  }

  update() {
    if(this.movingBall.active) {
      // To make the score only add once per stop when it is in the zone.
      if(this.movingBall.body.moves) {
        this.movingBall.body.enable = true;
      } else {
        this.movingBall.body.enable = false;
      }
    }
  }
}
