export default abstract class Entity {
    readonly width: number;
    readonly height: number;

    constructor(public x: number, public y: number, width: number, height: number) {
        this.width = width > 0 ? width : 0;
        this.height = height > 0 ? height : 0;
    }
}
