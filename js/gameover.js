var Game_over = {

    preload: function () {
        game.stage.backgroundColor = '#fff';
        game.load.image('button', '../img/btn.png');
    },
    create: function () {
        var button = this.add.button(game.width / 2, game.height / 2, 'button', this.startGame, this);
        button.anchor.setTo(0.5);

        var txtPointsTag = game.add.text(game.width / 2 - 20, game.height / 2 - 85, "Points: ", { font: "bold 20px sans-serif", fill: "black", align: "center" })
        txtPointsTag.anchor.setTo(0.5);
        if (points == -1) {
            points = 0;
        }

        var txtPointsNumber = game.add.text(game.width / 2 + 50, game.height / 2 - 85, points.toString(), { font: "bold 24px sans-serif", fill: "black", align: "center" })
        txtPointsNumber.anchor.setTo(0.5);

        var txtTitle = game.add.text(game.width / 2, game.height / 2 - 125, "Game Over", { font: "bold 30px sans-serif", fill: "black", align: "center" })
        txtTitle.anchor.setTo(0.5);

    },
    startGame: function () {
        this.state.start('Game');
    }
};