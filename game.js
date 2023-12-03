class Circle {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
}

class Baloon extends Circle {
    constructor (x, y) {
        super(x, y);
    }
    move (x, y) {
        this.x = Math.random() * 100;
        this.y = Math.random() * 100;
    }
}
