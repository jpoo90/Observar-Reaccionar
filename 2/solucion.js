const Rx = require('rxjs/Rx');

/**
 * Crear un observableque emita en la consola
 * los numeros 1,2 y 3 y luego un mensaje cuando termine.
 *
 * Clave: usar `Observable.create`
 */

const digitos = Rx.Observable.create(observador => {
  for (let i = 0; i < 3; i++) {
    observador.next(i);
  }
  observador.complete('Listo, terminamos');

  return () => {
    console.log('Destruir lo que no se usa.');
  };
});

digitos.subscribe(
  datos => console.log(`Siguiente: ${datos}`),
  error => console.log(error),
  listo => console.log(`listo`)
);

/**
 * Crear un observable desde un arreglo(array).
 * El observable emitira en la consola los items del arreglo.
 * En el observador definir solamente la función `next`
 * Clave: usar `Observable.from`
 */

const laSeleccion = Rx.Observable.from([
  'Ospina',
  'James',
  'Falcao',
  'Davinson',
]);
laSeleccion.subscribe(jugador => console.log(jugador));

/**
 * Crear un observable que emite un valor cada segundo
 * Cancelar la subscripción después de 5 segundos.
 * Clave: usar `Observable.interval`
 */

const intervalo = Rx.Observable.interval(1000);
const subscripcion = intervalo.subscribe(t => console.log(t));

setTimeout(() => {
  subscripcion.unsubscribe();
}, 5000);
