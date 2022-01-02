import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  constructor() {
    super('game')
    
    this.score = 0;
  }

  preload() {
    this.load.image("ball", "assets/img/game-ball.png");
    this.load.image("circle", "assets/img/circle.png");
  }

  create() {
    this.createContainer();
    this.createBall();
    this.createCircle();

    this.scoreText = this.add.text(16, 16, 'score: 0', {fontSize: '32px', fill: '#000000'})
   
    //create keyboard cursors
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spaceKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    
    this.spaceKey.on("down", this.togglePause, this);
  }

  createContainer () {
    this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xfd0000, alpha: 0 }});
    this.container = new Phaser.Geom.Rectangle(40, 100, 700, 300);
    this.graphics.strokeRectShape(this.container);
  }

  createBall () {
    this.movingBall = this.physics.add.image(400, 250, "ball");
    this.movingBall.setCircle(60, 300, 300)
    this.movingBall.setScale(0.3); //resize the image
    this.movingBall.body.setCollideWorldBounds(true, 1, 1); //bounce to the wall
    this.movingBall.body.setVelocity(-400, 0); //make the ball bounced, adjust speed
    this.movingBall.body.setBoundsRectangle(this.container)
  }

  createCircle () {
    this.circle = this.physics.add.image(400, 250, 'circle');
    this.circle.setCircle(20, 310, 320)
    this.circle.setScale(0.3); //resize the image
    this.test = this.physics.add.overlap(this.movingBall, this.circle, this.inZone, null, this)
  }

  togglePause() {
    this.movingBall.body.moves = this.movingBall.body.moves ? false : true; //toggle pause and resume of the moving ball
  } 

  inZone(ball, circle) {
    if(!this.movingBall.body.moves) {
      console.log("Player in the circle");
      this.score += 1;
      this.scoreText.setText('Score: ' + this.score);
      
      setTimeout(() => {
        this.resetPlayer();
      }, 500);
    } 
    
  }

  resetPlayer() {
    this.movingBall.destroy();
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
