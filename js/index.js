import {Juego} from "./Escenas/juego";

const config = {
    //Decide si el navgador usa canvas o webGL
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    //Distintas escenas que pueda tener el juego
    scene:[Juego],
    //Características físicas del juego
    physics:{
        default: "arcade",
        arcade:{
            gravity:{y : 400},
            debug : false
        }
    }
}

let juego = new Phaser.Game(config)

