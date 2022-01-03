import Phaser from 'phaser'

export default class gameScenes extends Phaser.Scene {
    preload (){

    }
    create (){
        const text = this.add.text(400, 250, 'my phaser game');  
        text.setOrigin(.5, .5)
    }
}