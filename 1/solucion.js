/**
 * Construir un modelo de observador básico.
 * Usando pseudocódigo conectemos todas las partes (observador, observable, datos)
 *
 * Clave: Un observable es una función que recibe un observador y retorna otra función.
 */

function observableColombiano(observador) {
  const generador = new GeneradorDeDatos();

  generador.hayDatos = (datos) => observador.next(datos);
  generador.hayErrores = (error) => observador.error(error);
  generador.acabamos = () => observador.completado();

  return () => {
    generador.eliminar();
  }
}
