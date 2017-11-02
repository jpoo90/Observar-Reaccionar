const canvas = document.querySelector('#estadisticas');
const bounds = canvas.getBoundingClientRect();
const canvasWidth = bounds.width;
const canvasHeight = bounds.height;

const context = canvas.getContext('2d');
context.strokeRect(0, 0, canvasWidth, canvasHeight);
let prevX = 0;
let prevY = 0;

/**
 * Agrega un punto a la gráfica.
 * @param {int} cx - Coordenada en x del punto.
 * @param {int} cy - Coordenada en y del punto.
 */

const graficarPunto = (cx, cy) => {
  cx = cx * 10;
  cy = cy * (canvasHeight / 100)
  context.beginPath();
  context.fillStyle = '#F50057';
  context.fillRect(cx - 3, canvasHeight - cy - 3, 6, 6);
  if (cx > 0) {
    context.moveTo(prevX, canvasHeight - prevY);
    context.lineTo(cx, canvasHeight - cy);
    context.stroke();
  }
  prevX = cx;
  prevY = cy;
};

module.exports = graficarPunto;