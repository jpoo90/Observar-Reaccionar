const Rx = require('rxjs/Rx');
const emojiMap = require('./emojiMap');
const css = require('./index.css');

const qs = elm => document.querySelector(elm);

const burbujasTxt = qs('.burbujas');
const mensajeTxt = qs('.mensaje');

const nombreInput = qs('.nombre');
const nombre$ = Rx.Observable
  .fromEvent(nombreInput, 'keyup')
  .map(evt => estado => {
    return Object.assign({}, estado, {
      nombre: evt.target.value || 'conozcámonos',
    });
  });

const masBurbujasBtn = qs('.mas-burbujas');
const masBurbujas$ = Rx.Observable
  .fromEvent(masBurbujasBtn, 'click')
  .map(() => estado => {
    return Object.assign({}, estado, { burbujas: estado.burbujas + 1 });
  });

const menosBurbujasBtn = qs('.menos-burbujas');
const menosBurbujas$ = Rx.Observable
  .fromEvent(menosBurbujasBtn, 'click')
  .map(() => estado => {
    if (estado.burbujas > 0) {
      return Object.assign({}, estado, { burbujas: estado.burbujas - 1 });
    }
    return estado;
  });

const estado$ = Rx.Observable
  .merge(masBurbujas$, menosBurbujas$, nombre$)
  .scan((estado, actualizarEstado) => actualizarEstado(estado), {
    burbujas: 0,
    nombre: 'conozcámonos',
  })
  .filter(s => s.burbujas >= 0);

estado$
  .startWith({ burbujas: 0, nombre: 'conozcámonos' })
  .subscribe(actualizarPagina);

/**
 * Actualiza el navegador con el nuevo estado.
 * @param {Object} estado - El estado de la app.
 * @param {string} estado.nombre [nombre=conozcámonos]- Nombre ingresado por usuario.
 * @param {int} estado.burbujas [burbujas=0] - Número de burbujas.
 */
function actualizarPagina(estado) {
  const nombreEmojijiado = estado.nombre
    .split('')
    .map(c => {
      return emojiMap[c] ? emojiMap[c] : c;
    })
    .join('');

  burbujasTxt.innerHTML = Array(estado.burbujas).fill('🛁').join('');
  mensajeTxt.innerHTML = `Llegaste al agua, ${nombreEmojijiado}`;
}
