import Phaser from "phaser";
import gameScenes from "./game-scenes";
import Game from "./game-phaser";

const config = {
  width: 800,
  height: 500,
  parent: "game-container",
  "transparent": true,
  type: Phaser.AUTO,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: {y:0},
          debug: false
      }
  }
};

const game = new Phaser.Game(config);
game.scene.add("gameScenes", gameScenes);
game.scene.add("game", Game);
game.scene.start("game");
