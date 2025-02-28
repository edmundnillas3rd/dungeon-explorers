import { ImportScenes } from './lib/SceneManager.js';

const config = {
    type: Phaser.AUTO,
    title: 'Dungeon Exploreres',
    parent: 'game-container',
    width: 1280,
    height: 640,
    pixelArt: true,
    scene: ImportScenes(),
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}
new Phaser.Game(config);
            