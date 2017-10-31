const Rx = require('rxjs');
const pongaleColor = require('./pongaleColor');

const coordenadasDeEvento = evento => {
  evento.preventDefault();

  return {
    x: evento.clientX,
    y: evento.clientY,
  };
};

const down$ = Rx.Observable
  .fromEvent(document, 'mousedown')
  .map(coordenadasDeEvento);

const move$ = Rx.Observable
  .fromEvent(document, 'mousemove')
  .map(coordenadasDeEvento);

const up$ = Rx.Observable
  .fromEvent(document, 'mouseup')
  .map(coordenadasDeEvento);

const pintar$ = move$.skipUntil(down$).takeUntil(up$).repeat();

pintar$.subscribe(d => pongaleColor(d));

down$.subscribe(pongaleColor);