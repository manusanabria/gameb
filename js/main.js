var game = new Phaser.Game(370, 550, Phaser.CANVAS, "block_game");

game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add("Game_over", Game_over);

game.state.start("Menu");
