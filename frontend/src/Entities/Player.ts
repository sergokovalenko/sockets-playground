import Entity from "./Entity"

export default class Player extends Entity {
    lives: number;
    speed: number;

    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height);
        this.lives = 1;
        this.speed = 1;
    }

    moveUp(): void {
        this.y - this.speed;
    }

    moveDown(): void {
        this.y + this.speed;
    }

    moveLeft(): void {
        this.x - this.speed;
    }

    moveRight(): void {
        this.x + this.speed;
    }
}