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


// Get the canvas element
var canvas = document.getElementById('myCanvas');

// Get the 2D rendering context
var ctx = canvas.getContext('2d');

// Draw a rectangle on the canvas
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 75);
