const lienzo = document.querySelector('.lienzo');
const ctx = lienzo.getContext('2d');

const amarilloHue = 62;
const azulHue = 240;
const rojoHue = 360;

let ultimaX =Infinity;
let ultimaY = Infinity;
let colorHue = amarilloHue - 9;

lienzo.width = window.innerWidth;
lienzo.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

function pongaleColor({ x, y }) {
  switch (colorHue) {
    case amarilloHue:
      colorHue = azulHue - 9;
      break;
    case azulHue:
      colorHue = rojoHue - 9;
      break;
    case rojoHue:
      colorHue = amarilloHue - 9;
      break;
  }

  ctx.strokeStyle = `hsl(${colorHue}, 100%, 60%)`;
  ctx.beginPath();

  if (Math.abs(ultimaX - x) < 100 && Math.abs(ultimaY - y) < 100) {
    ctx.moveTo(ultimaX, ultimaY);
  }

  ctx.lineTo(x, y);
  ctx.stroke();

  ultimaX = x;
  ultimaY = y;

  colorHue++;
}

module.exports = pongaleColor;
