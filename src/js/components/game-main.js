import Phaser from "phaser";
import gameScenes from "./game-scenes";
import Game from "./game";

const config = {
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "game-container",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1024,
    height: 450,
    min: {
      width: 740,
      height: 360
    },
    // max: {
    //   width: 1280,
    //   height: 800
    // }
  },
  
  transparent: true,
  type: Phaser.AUTO,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
};

const game = new Phaser.Game(config);
game.scene.add("gameScenes", gameScenes);
game.scene.add("game", Game);
game.scene.start("game");
