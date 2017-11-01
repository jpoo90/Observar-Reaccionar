const Rx = require('rxjs');
const pongaleColor = require('./pongaleColor');

/**
 * pongaleColor es una función que recibe un objecto {x: 1, y: 2}.
 * x & y son las coordenadas usadas para pintar en la pantalla.
 *
 * Crear una funcion que:
 *  - Empieze a pintar cuando hacemos click.
 *  - Si el mouse esta presionado, pinte a medida que lo movemos por la pantalla.
 *  - Deje de pintar cuando soltemos el mouse.
 *  - Extra: pintar un punto cuando hacemos click.
 *
 *  Claves:
 *  - Usar `Observable.from` para modificar eventos del mouse.
 *  - Operadores de RxJS: map,
 */