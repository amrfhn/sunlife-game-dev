import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  constructor() {
    super("game");

    //detect device
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }

    // this.score = 0;
    this.isMobile ? (this.speedVelocity = -1250) : (this.speedVelocity = -1000);
    this.isMobile ? (this.ballSize = 0.45) : (this.ballSize = 0.25);
    this.isMobile ? (this.circleSize = 0.6) : (this.circleSize = 0.35);
  }

  preload() {
    this.load.image("ball", "assets/img/sun.png");
    this.load.image("circle", "assets/img/circle.png");
    this.load.image("stopButton", "assets/img/stop.png");
    this.load.image("pauseButton", "assets/img/tap-to-pause.png");
  }

  create() {
    this.isOverlapped = false;
    this.createContainer();
    this.createBall();
    this.createCircle();

    // this.scoreText = this.add.text(16, 16, 'score: 0', {fontSize: '18px', fill: '#000000'})

    //create keyboard cursors
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spaceKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    //create stop button image
    this.stopButton = this.add.image(520, 400, "stopButton");
    this.stopButton.setScale(0.5);
    this.stopButton.setInteractive({ cursor: "pointer" });
    this.isMobile
      ? (this.stopButton.visible = false)
      : (this.stopButton.visible = true);

    //create pause button image
    this.pauseButton = this.add.image(520, 250, "pauseButton");
    this.pauseButton.setScale(0.4);
    this.pauseButton.setInteractive({ cursor: "pointer" });
    this.isMobile
      ? (this.pauseButton.visible = true)
      : (this.pauseButton.visible = false);

    //set event to the cursor and button
    this.spaceKey.on("down", this.togglePause, this); //set space bar events
    this.stopButton.on(
      Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,
      this.togglePause,
      this
    ); //set stop button event
    this.pauseButton.on(
      Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,
      this.togglePause,
      this
    ); //set pause button event

    $("#btnRestartGame").on("click", function () {
      $("#rewardModal").modal("hide");
      // this.scene.start()
      location.reload(); //the easiest way to restart the game. Not the best approach!
    });
  }

  createContainer() {
    this.graphics = this.add.graphics({
      lineStyle: { width: 2, color: 0xfd0000, alpha: 0 },
    });
    this.container = new Phaser.Geom.Rectangle(100, 100, 850, 450);
    this.graphics.strokeRectShape(this.container);
  }

  createBall() {
    this.movingBall = this.physics.add.image(110, 250, "ball");
    this.movingBall.setCircle(40, 210, 210);
    this.movingBall.setScale(this.ballSize); //resize the image

    this.movingBall.body.setVelocity(this.speedVelocity, 0); //make the ball bounced, adjust speed
    this.movingBall.body.setCollideWorldBounds(true, 1, 1); //bounce to the wall
    // this.movingBall.body.setAcceleration(this.speedVelocity, 0)
    this.movingBall.body.setBoundsRectangle(this.container); //create container so that the ball does not move outside of the bound (when innerbound is small & centered)
  }

  test() {
    console.log("out");
  }

  createCircle() {
    this.circle = this.physics.add.image(515, 250, "circle");
    this.circle.setCircle(20, 210, 210); //set innerbound of the image
    this.circle.setScale(this.circleSize); //resize the image
    this.physics.add.overlap(
      this.movingBall,
      this.circle,
      this.inZone,
      null,
      this
    ); //overlap between two images
  }

  togglePause() {
    // this.movingBall.body.moves = this.movingBall.body.moves ? false : true; //toggle pause and resume of the moving ball
    this.movingBall.body.moves = false; //toggle pause

    //toggle if moving ball is paused and is not overlapped, the game will restart.
    //set time out so that player can have a moment to see where they stopped at.
    setTimeout(() => {
      if (!this.movingBall.body.moves && !this.isOverlapped) {
        this.scene.start();
        return;
      }
    }, 300);
  }

  inZone(ball, circle) {
    if (!this.movingBall.body.moves) {
      this.isOverlapped = true; //set overlap is true
      console.log("Player in the circle");
      // this.score += 1;
      // this.scoreText.setText('Score: ' + this.score);

      this.resetPlayer();

      setTimeout(() => {
        $("#rewardModal").modal("show");
      }, 250);
    }
  }

  resetPlayer() {
    this.scene.destroy(); //kill the game config
  }

  submitScore() {
    $.ajax({
      url: process.env.API_BASEURL + "/user-score-submission",
      dataType: "json",
      data: {},
      cache: false,
      // crossDomain: true,
      headers: {
        "Authorization": "Bearer eyJraWQiOiJBbWZJSXU3UFhhdXlUbHM3UmNyZmNIQUd1MUdCWkRab2I0U05GaVJuWUFJPSIsImFsZyI6IlYYYjU2In0.eyJzdWIiOiJjNTYyEEE1ZS05Zjc3LTQ2NDAtYTFmOS1hJJJ5Njk1OGE0MzUiLCJhdWQiOiI3Z2ZsZnNmMm1vNnQ4dXJpOG0xcHY5N3BnayIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6ImE2YWFjOTQxLTYzYWUtNGU5ZS1iYTE1LTRlYTNlOGIyZjQ5MSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTY4OTY0NDI2LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9qanRiZFZkZEYiLCJjb2duaXRvOnVzZXJuYW1lIjoiYzU2MmFjNWUtOWY3Ny00NjQwLWExZjktYTgxOTY5NThhNDM1IiwiZXhwIjoxNTY4OTY4MDI2LCJpYXQiOjE1Njg5NjQ0MjcsImVtYWlsIjoiYnJ5YW5Ab3BlbndvbmsuY29tIn0.fV4bgaKwXx-HjrBmGtBnSzaDHdP0JEeJ0sbE6MzuOJYWafT5gWfh9pLtkpUv-mgsnX3cVIWDVKC0H8_XM4ziUhsulZIRBwTiSca0CfABvanuMdbdjk1iK70aUxsrjHX0gK4SDUi4Zl6JNGws_SRbVi9Yq_ntx7ttXfUpZHjimfZ2mLidOLUruYctG1V_gU-dLD6CARCUbGh5aRk5nwX_5-HBUTbBVPYK3sXcVg2YRk63d-p3TITA5hoOEj9lxtHs3ZM7ZqNPl0XPUGghxdbvWnpSIUKrFLugRHqCiWxC38ZYiBhP0NDYoEMaOI-UrnEH1W6j-kr3fnH2LD5wOMJ_8Q"
      },
      timeout: 30000,
      contentType: "application/json",
      type: "GET",
      statusCode: {
        401: function () {
          window.location.href = "/register.html";
        },
        200: function (res) {
          sessionStorage.setItem("game_token", JSON.stringify(res.data.token));
          sessionStorage.setItem("user_data", JSON.stringify(res.data.user));
          sessionStorage.setItem("week_data", JSON.stringify(res.data.week));
          sessionStorage.setItem("score_data", JSON.stringify(res.data.score));
          window.location.href = "game.html";
        },
        500: function (res) {
          console.log(`error {res}`);
        },
      },
    });
  }

  update() {
    if (this.movingBall.active) {
      // To make the score only add once per stop when it is in the zone.
      if (this.movingBall.body.moves) {
        this.movingBall.body.enable = true;
      } else {
        this.movingBall.body.enable = false;
      }
    }
  }
}
