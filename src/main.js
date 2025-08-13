import Boot from "./states/Boot.js";
import Preload from "./states/Preload.js";
import Game from "./states/Game.js";

const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'gameContainer');

game.state.add("Boot", Boot);
game.state.add("Preload", Preload);
game.state.add("Game", Game);

game.state.start("Boot");

window.addEventListener('resize', () => {
  game.scale.setGameSize(window.innerWidth, window.innerHeight);
});
