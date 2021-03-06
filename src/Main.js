'use strict';

let cursors;

let config = {
    type: Phaser.WEBGL,
    width: 1280,
    height: 960,
    physics:{
        default: 'arcade',
        arcade: {
            debug: false,
            gravity:{
                x:0,
                y:0
            }
        }
    },
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);
