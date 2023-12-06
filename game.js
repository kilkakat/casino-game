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


// Получаем элемент canvas
var canvas = document.getElementById('myCanvas');

// Получаем контекст рисования (в данном случае, 2D)
var ctx = canvas.getContext('2d');

// Функция для получения координат курсора относительно canvas
function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

// Обработчик события mousemove
canvas.addEventListener('mousemove', function(event) {
  // Получаем координаты курсора
  var mousePos = getMousePos(canvas, event);

  // Очищаем canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Рисуем круг на canvas в соответствии с координатами курсора
  ctx.beginPath();
  ctx.arc(mousePos.x, mousePos.y, 10, 0, 2 * Math.PI);
  ctx.arc(mousePos.x, mousePos.y, 10, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.stroke();
});

