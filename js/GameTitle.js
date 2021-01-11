class GameTitle extends Phaser.Scene{
    constructor() {
        super('GameTitle');
    }

    preload()
    {
        this.load.image('Tbackground', '../assets/images/title1.png');
    }

    create() {
        this.Tbackground = this.add.image(400,200,"Tbackground");

        this.add.text(20,20, "Click to start!", {font: "25px Arial", fill: "yellow"});

        this.input.on('pointerup', function (pointer) {

            this.scene.start('gamePlay');

        }, this);
    }

    update()
    {

    }
}