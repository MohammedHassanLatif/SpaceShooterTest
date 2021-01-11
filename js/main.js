var game;
window.onload=function()
{
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: 'game',
        scene: [GameTitle,GamePlay],
        physics: {
            default: 'arcade',
            arcade: {
                gravity: false
            }
        }
    };
    game = new Phaser.Game(config);
}