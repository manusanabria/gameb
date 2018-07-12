var bg;
var tubes;
var flappy;
var jump;
var timer;
var points;
var txtpoints;

var Game = {
    preload: function () {
        game.load.image('bg', 'img/bg.jpeg');
        game.load.spritesheet('birds', 'img/pajaro.png', 43, 30);
        game.load.image('tube', 'img/tubo.png', );

        game.forceSingleUpdate = true;
    },

    create: function () {
        bg = game.add.tileSprite(0, 0, 370, 550, 'bg');
        game.physics.startSystem(Phaser.Physics.ARCADE);
        tubes = game.add.group();
        tubes.enableBody = true;
        tubes.createMultiple(20, 'tube');

        flappy = game.add.sprite(100, 245, 'birds');
        flappy.frame = 1;
        flappy.anchor.setTo(0, 0.5);
        flappy.animations.add('fly', [0, 1, 2], 10, true);

        game.physics.arcade.enable(flappy);
        flappy.body.gravity.y = 1200;

        jump = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        jump.onDown.add(this.jump, this);

        timer = game.time.events.loop(1500, this.createColumn, this);

        points = -1;
        txtpoints = game.add.text(20, 20, "0", { font: "30px Arial", fill: "#fff" })

    },

    update: function () {
        if (flappy.inWorld == false) {
            //Restart Game = Send to Game_Over
            this.state.start('Game_over');
        } else if (flappy.position.y > 460) {
            //Restart Game = Send to Game_Over
            flappy.alive = false;
            tubes.forEachAlive(function (t) {
                t.body.velocity.x = 0;
            }, this);

        } else {
            bg.tilePosition.x -= 1;
        }

        game.physics.arcade.overlap(flappy, tubes, this.touchTube, null, this);
        flappy.animations.play('fly');
        if (flappy.angle < 20) {
            flappy.angle += 1;
        }
    },

    jump: function () {
        flappy.body.velocity.y = -350;
        game.add.tween(flappy).to({ angle: -20 }, 100).start();
    },

    createColumn: function () {
        var hole = Math.floor(Math.random() * 5) + 1;
        for (var i = 0; i < 8; i++) {
            if (i != hole && i != hole + 1) {
                this.createOneTube(370, i * 55 + 20);
            }
        }

        points += 1;
        txtpoints.text = points;
    },

    createOneTube: function (x, y) {
        var tube = tubes.getFirstDead();
        tube.reset(x, y);
        tube.body.velocity.x = -180;
        tube.checkWorldBounds = true;
        tube.outOfBoundsKill = true;
    },

    touchTube: function () {
        if (flappy.alive == false)
            return;
        flappy.alive == false;
        game.time.events.remove(timer);

        tubes.forEachAlive(function (t) {
            t.body.velocity.x = 0;
        }, this);
    }
};
