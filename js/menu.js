var Menu = {
  preload: function () {
    game.stage.backgroundColor = '#fff';
    game.load.image('button', 'img/btn.png');
  },
  create: function () {
    var button = this.add.button(game.width / 2, game.height / 2, 'button', this.startGame, this);
    button.anchor.setTo(0.5);

    var txtTitle = game.add.text(game.width / 2, game.height / 2 - 125, "Flappy Bird", { font: "bold 26px sans-serif", fill: "black", align: "center" })
    txtTitle.anchor.setTo(0.5);

    var txtStart = game.add.text(game.width / 2, game.height / 2 - 85, "Start Game", { font: "bold 24px sans-serif", fill: "black", align: "center" })
    txtStart.anchor.setTo(0.5);


  },
  startGame: function () {
    this.state.start('Game');
  }
};
