/**
 * Generar observables con RxJS
 */
const Rx = require('rxjs/Rx');

/**
 * Crear un observableque emita en la consola
 * los numeros 1,2 y 3 y luego un mensaje cuando termine.
 *
 * Clave: usar `Observable.create`
 */

/**
 * Crear un observable desde un arreglo(array).
 * El observable emitira en la consola los items del arreglo.
 * En el observador definir solamente la función `next`
 * Clave: usar `Observable.from`
 */

/**
 * Crear un observable que emite un valor cada segundo
 * Cancelar la subscripción después de 5 segundos.
 * Clave: usar `Observable.interval`
 */
