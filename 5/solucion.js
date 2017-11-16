import Rx from 'rxjs';
import css from './index.css';

import renderGrupos from './renderGrupos';
import renderBombos from './renderBombos';
import generarGrupos from './generarGrupos';

const qs = elm => document.querySelector(elm);

const cargarBombo1Btn = qs('.cargar-bombo-1');
const bombo1Elm = qs('.equipos-bombo1');
const cargarBombo2Btn = qs('.cargar-bombo-2');
const bombo2Elm = qs('.equipos-bombo2');
const cargarBombo3Btn = qs('.cargar-bombo-3');
const bombo3Elm = qs('.equipos-bombo3');
const cargarBombo4Btn = qs('.cargar-bombo-4');
const bombo4Elm = qs('.equipos-bombo4');
const gruposBtn = qs('.grupos-btn');

const bombos = [
  {
    btn: cargarBombo1Btn,
    elm: bombo1Elm,
  },
  {
    btn: cargarBombo2Btn,
    elm: bombo2Elm,
  },
  {
    btn: cargarBombo3Btn,
    elm: bombo3Elm,
  },
  {
    btn: cargarBombo4Btn,
    elm: bombo4Elm,
  },
];

const makeRequestUrl = bombo => {
  return fetch(`http://localhost:2018/bombos/${bombo}`)
    .then(res => res.json())
    .catch(err => console.log(err));
};

function generarObservableBombo(bombo, index) {
  return (
    Rx.Observable
      .fromEvent(bombo.btn, 'click')
      // .startWith('mockclick') // Carga los bombos automáticamente.
      .map(() => {
        return index + 1;
      })
      .map(bomboId => makeRequestUrl(bomboId))
      .flatMap(requestPromise => Rx.Observable.fromPromise(requestPromise))
      /**
       * Cada observable tiene dos subscripciones. Para renderizar el bombo, y
       * para generar el arreglo de bombos. Esto genera 2 llamadas al API.
       * El operador `share` previene este bug.
       */
      .share()
  );
}

const bombo1$ = generarObservableBombo(bombos[0], 0);
bombo1$.subscribe(equipos =>
  renderBombos({ equipos, btn: bombos[0].btn, elm: bombos[0].elm })
);
const bombo2$ = generarObservableBombo(bombos[1], 1);
bombo2$.subscribe(equipos =>
  renderBombos({ equipos, btn: bombos[1].btn, elm: bombos[1].elm })
);
const bombo3$ = generarObservableBombo(bombos[2], 2);
bombo3$.subscribe(equipos =>
  renderBombos({ equipos, btn: bombos[2].btn, elm: bombos[2].elm })
);
const bombo4$ = generarObservableBombo(bombos[3], 3);
bombo4$.subscribe(equipos =>
  renderBombos({ equipos, btn: bombos[3].btn, elm: bombos[3].elm })
);

const bombosListos$ = Rx.Observable.zip(
  bombo1$,
  bombo2$,
  bombo3$,
  bombo4$,
  (b1, b2, b3, b4) => {
    return [b1, b2, b3, b4];
  }
);

const agruparBombos$ = Rx.Observable
  .fromEvent(gruposBtn, 'click')
  .skipUntil(bombosListos$);

const bombosCombinados$ = agruparBombos$.combineLatest(
  bombosListos$,
  (click, equipos) => equipos
);

bombosCombinados$.subscribe(bombos => {
  const grupos = generarGrupos(bombos);
  renderGrupos(grupos);
});
