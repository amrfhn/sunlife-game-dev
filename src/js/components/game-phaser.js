import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  preload() {
    this.load.image("ball", "assets/img/game-ball.png");
    this.load.image("mast", "assets/img/masthead.png");
  }

  create() {
    var graphics = this.add.graphics({
      lineStyle: { width: 2, color: 0xda696a },
    });
    var circle = new Phaser.Geom.Circle(400, 250, 90);
    graphics.strokeCircleShape(circle);
    this.physics.add.existing(graphics);

    this.movingBall = this.add.image(400, 250, "ball");
    this.movingBall.setScale(0.3); //resize the image
    this.physics.add.existing(this.movingBall);
    this.movingBall.body.setCollideWorldBounds(true, 1, 1); //bounce to the wall
    this.movingBall.body.setVelocity(-400, 0); //make the ball bounced, adjust speed

    //create keyboard cursors
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spaceKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this.spaceKey.on("down", this.togglePause, this);
  }

  togglePause() {
    this.movingBall.body.moves = this.movingBall.body.moves ? false : true; //toggle pause and resume of the moving ball
  }

  update() {}
}
