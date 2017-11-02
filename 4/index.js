const Rx = require('rxjs/Rx');
const emojiMap = require('./emojiMap');
const css = require('./index.css');

const qs = elm => document.querySelector(elm);
const burbujasTxt = qs('.burbujas');
const mensajeTxt = qs('.mensaje');

const nombreInput = qs('.nombre');

/**
 * Crear un observable para el input que recibe el nombre.
 */

const masBurbujasBtn = qs('.mas-burbujas');

/**
 * Crear un observable para el botón que aumenta las burbujas.
 */


const menosBurbujasBtn = qs('.menos-burbujas');

/**
 * Crear un observable para el botón que aumenta las burbujas.
 */


/**
 * Crear un observable para manejar el estado.
 * Este observable debe recibir datos de los tres anteriores.
 *
 * Claves:
 * - Necesitamos combinar (merge) observables.
 * - Debemos emitir el nuevo estado.
 */


/**
 * Subscribirnos al estado$ y usar la función `actualizarPagina`
 * para mostar el nuevo estado en pantalla.
 */



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

  burbujasTxt.innerHTML = Array(nuevoEstado.burbujas).fill('🛁').join('');
  mensajeTxt.innerHTML = `Llegaste al agua, ${nombreEmojijiado}`;
}
