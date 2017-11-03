import Rx from 'rxjs';
import graficarPunto from './graficarPunto'

const Observable = Rx.Observable;
const socket$ = Observable.webSocket('ws://localhost:8081');

socket$
  .retryWhen(error$ =>
    error$.switchMap(
      err =>
        (navigator.onLine
          ? Observable.timer(1000)
          : Observable.fromEvent(document, 'online'))
    )
  )
  .map(({ punto, valor }) => ({
    cx: punto,
    cy: valor,
  }))
  .subscribe(
    ({ cx, cy }) => graficarPunto(cx, cy),
    err => console.log(err),
    () => console.log('complete')
  );
