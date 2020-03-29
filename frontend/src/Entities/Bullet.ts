import Player from "./Player";

export default class Bullet extends Player {
    constructor(x: number, y: number, speed: number) {
        super(x, y, 10, 10);
        this.speed = speed;
    }
}